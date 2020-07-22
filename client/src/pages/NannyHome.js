import React, { useEffect, useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CardActionArea, Container, Typography, Grid, CssBaseline, Box, Card, CardActions, CardContent, CardMedia, Button, AppBar } from '@material-ui/core';
import { Link } from "react-router-dom";
import API from '../utils/API';
import CopyrightFooter from '../components/Layout/CopyrightFooter'


const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(5, 0, 0, 0),
  },
  radius: {
    borderRadius: 10,
  },
  topicspacing: {
    padding: theme.spacing(5),
  },
  buttonOption1: {
    background: theme.palette.warning.main,
    margin: theme.spacing(6, 0, 0, 0),
    borderRadius: 10,
  },
  buttonOption2: {
    background: theme.palette.success.main,
    margin: theme.spacing(6, 0),
    borderRadius: 10,
  },
  headBody: {
    background: theme.palette.error.main,
    padding: theme.spacing(2, 0, 2),
    borderRadius: 10,
  },
  headText: {
    color: theme.palette.primary.dark,
  },
  cardGrid: {
    padding: theme.spacing(8),

  },
  buttonOption3: {
    background: theme.palette.secondary.main,
    padding: theme.spacing(10),
    // margin: theme.spacing(10),
    color: theme.palette.primary.dark,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  defaultCards: {
    opacity: '0.5',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));


function NannyHome(props) {
  const classes = useStyles();
  const [childs, setChildren] = useState([])
  const [chosenChild, setChosenChild] = useState([]);



  useEffect(() => {
    loadChildren();
  }, [])


  function loadChildren() {
    const childsArray = [];

    API.ParentChild.getById(props.user.id)
      .then(res => {
        console.log(props.user.id);
        console.log(res.data)

        res.data.forEach(id => {
          API.Child.getById(id.ChildId)
          .then(result => {
            setChildren(childs => [...childs, result.data])
          })
          .catch(err => err.status(422).json(err))})
      })
      .catch(err => console.log(err))
  }

  function selectChosenChild(event) {
    setChosenChild(childs[event.target.getAttribute("data-index")]);
  }

  
  console.log(childs);
  return (
    <Container
      maxWidth='false'
    >
      <AppBar
        position="static"
        spacing="0"
        color="transparent"
        fullwidth
        className={classes.heroContent}
      >
        <Grid container
          fullwidth
          justify="center"
        >
          <Grid item
            xs={12} sm={11} md={10} lg={9} xl={8}
          >
            <Card
              className={classes.radius}
            >
              <CardMedia
                component="img"
                alt="Swaddle Swan Logo"
                image="Banner.png"
                title="Swaddle Swan Logo"
              />
            </Card>
          </Grid>
        </Grid>
      </AppBar>

      <main>
        <Grid container
          className={classes.topicspacing}
          justify="center"
        >
          <Grid item
            className={classes.headBody}
            xs={10} sm={9} md={8} lg={7} xl={6}
          >
            <Typography
              className={classes.headText}
              component="h1"
              variant="h4"
              align="center"
            >
              Let's Swaddle!
            </Typography>
          </Grid>
        </Grid>

        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container
            justify="center"
            align="center"
            spacing={4}>
            {childs.length > 0 && props.user.id ?
              childs.map((card, index) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card className={classes.card}
                  >
                    <CardMedia
                      className={classes.cardMedia}
                      image={card.childImg}
                      title="Your Child's Image"
                      data-index={index}
                      onClick={selectChosenChild}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {card.childName}
                      </Typography>
                    </CardContent>
                    <CardActions
                    >
                      <Button component={Link} data-index={index} to={{ pathname: "/child-overview", state: chosenChild }} size="small" color="primary">
                        View
                    </Button>
                    </CardActions>
                  </Card>
                </Grid>
              )) :
              // <h3>hello</h3>
              <div>
                <Container className={classes.cardGrid}>
                  <Grid container
                    spacing={10}
                    direction="row"
                    justify="center"
                  >
                    <Grid item
                      xs={11} sm={6} md={4}
                    >
                      <Card
                        className={classes.defaultCards}
                      >
                        <CardActionArea
                          component={Link}
                          to="/addchild"
                        >
                          <CardMedia
                            component="img"
                            alt="Aww! Little Swaddled Baby 1"
                            image="Nugget.png"
                            title="Aww! Little Swaddled Baby 1"
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="h2"
                              align="center"
                            >
                              Tater
                        </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                    <Grid item
                      xs={11} sm={6} md={4}
                    >
                      <Card
                        className={classes.defaultCards}
                      >
                        <CardActionArea
                          component={Link}
                          to="/addchild"
                        >
                          <CardMedia
                            component="img"
                            alt="Aww! Little Swaddled Baby 2"
                            image="Nugget.png"
                            title="Aww! Little Swaddled Baby 2"
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="h2"
                              align="center"
                            >
                              Tot
                          </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  </Grid>
                </Container>
              </div>

            }
            <Grid item
              justify="center"
              align="center"
              xs={11} sm={6} md={4}
            >
              <Card
                className={classes.defaultCards}
              >
                <CardActionArea
                  component={Link}
                  to="/addchild"
                >
                  <CardMedia
                    component="img"
                    alt="add your child"
                    image="Plus.png"
                    title="add your child"
                    opacity="0.3"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      align="center"
                    >
                      Add Your Nugget!
                        </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

          </Grid>
        </Container>
      </main>
      <Box mt={8}>
        <CopyrightFooter />
      </Box>

    </Container>
  );

}

export default NannyHome;