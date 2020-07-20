import React, { useEffect, useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CardActionArea, Container, Typography, Grid, CssBaseline, Box, Card, CardActions, CardContent, CardMedia, Button, AppBar } from '@material-ui/core';
import { Link } from "react-router-dom";
import API from '../utils/API';
import CopyrightFooter from '../components/Layout/CopyrightFooter'


const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(10, 0, 1, 0),
  },
  radius: {
    borderRadius: 10,
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


function Home(props) {
  const classes = useStyles();
  const [childs, setChildren] = useState([])
  const [chosenChild, setChosenChild] = useState([]);



  useEffect(() => {
    loadChildren()
  }, [])

  function loadChildren() {
    API.Child.getAll()
      .then(res => {
        setChildren(res.data)
      })
      .catch(err => console.log(err))
  }

  function selectChosenChild(event) {
    setChosenChild(childs[event.target.getAttribute("data-index")]);
  }

  return (
    <Fragment>
      <CssBaseline />
      <AppBar
        position="static"
        spacing="0"
        fullwidth
        color="transparent"
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
          justify="center"
        // component={Link}
        // to="/addchild"
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
          <Grid container spacing={4}>
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
                      <Button component={Link} data-index={index} onClick={selectChosenChild} to={{ pathname: "/child-overview", state: chosenChild }} size="small" color="primary">
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
                            alt="Contemplative Reptile"
                            image="Nugget.png"
                            title="Contemplative Reptile"
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="h2"
                              align="center"
                            >
                              Add
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
                            alt="Contemplative Reptile"
                            image="Nugget.png"
                            title="Contemplative Reptile"
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="h2"
                              align="center"
                            >
                              Your
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
                            alt="plus sign"
                            image="Plus.png"
                            title="plus sign"
                            opacity="0.3"
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="h2"
                              align="center"
                            >
                              Tot!
                        </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  </Grid>
                </Container>
              </div>

            }
          </Grid>
        </Container>
      </main>
      <Box mt={8}>
        <CopyrightFooter />
      </Box>

    </Fragment>
  );
}

export default Home;