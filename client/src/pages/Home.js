import React, { useEffect, useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CardActionArea, Container, Typography, Grid, CssBaseline, Box, Card, CardActions, CardContent, CardMedia, Button, AppBar } from '@material-ui/core';
import { Link } from "react-router-dom";
import API from '../utils/API';
import CopyrightFooter from '../components/Layout/CopyrightFooter'
import BackBtn from "../components/Layout/BackBtn";
// import grey from '@material-ui/core/colors/grey';

import Header from "../components/Layout/Header";
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(5, 0, 0, 0),
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
    // background: theme.palette.error.main,
    padding: theme.spacing(2, 0, 2),
    borderRadius: 10,
  },
  headText: {
    color: theme.palette.primary.dark,
  },
  cardGrid: {
    padding: theme.spacing(8),

  },
  buttonOption4: {
    background: theme.palette.secondary.light,
    margin: theme.spacing(0),
    padding: theme.spacing(0),
    borderRadius: 10,
  },
  button7: {
    background: theme.palette.secondary.main,
    padding: theme.spacing(0),
    // margin: theme.spacing(10),
    // color: theme.palette.secondary.light,
    borderRadius: 10,
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
  const [babysitterChilds, setBabysitterChildren] = useState([]);
  const [chosenBabysitterChild, setBabysitterChosenChild] = useState([]);
  const { user, logoutUser } = props;


  useEffect(() => {
    loadChildren();
    loadBabysitterChildren();
  }, [])


  function loadChildren() {

    API.ParentChild.getById(props.user.id)
      .then(res => {

        const results = [];
        res.data.forEach(id => {
          API.Child.getById(id.ChildId)
            .then(result => {
              results.push(result.data);
              if (results.length == res.data.length) {
                setChildren([...results])
              }
            })
            .catch(err => err.status(422).json(err))
        })
      })
      .catch(err => console.log(err))
  }

  function loadBabysitterChildren() {

    API.BabysitterRelation.getById(props.user.id)
      .then(res => {

        const results = [];
        res.data.forEach(id => {
          API.Child.getById(id.ChildId)
            .then(result => {

              results.push(result.data);
              if (results.length == res.data.length) {
                setBabysitterChildren([...results])
              }
            })
            .catch(err => err.status(422).json(err))
        })
      })
      .catch(err => console.log(err))
  }

  function selectChosenChild(event) {
    setChosenChild(childs[event.target.getAttribute("data-index")]);
  }

  function selectBabysitterChosenChild(event) {
    setBabysitterChosenChild(babysitterChilds[event.target.getAttribute("data-index")]);
  }

  return (
    <Container
      maxWidth='false'
    >
      <Header />
      <main>
        <Grid container
          justify="center"
          fullwidth
        >
          <Grid item
            className={classes.headBody}
            xs={12} sm={10} md={9} lg={8} xl={7}
          >
            <div >
              <AppBar
                className={classes.radius}
                color="transparent"
                position="static">
                <Grid container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                >
                  <Grid item
                  >
                    <IconButton
                      edge="start"
                    >
                      <BackBtn
                      // style={{ color: grey[50] }}
                      />
                    </IconButton>
                  </Grid>
                  <Grid item
                    align="center">
                    <Typography variant="h6"
                      className={classes.title}
                    >
                      Let's<br></br>Swaddle
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Button
                      size="small"
                      className={classes.buttonOption4}
                      component={Link} to="/" onClick={logoutUser} color="inherit"
                    >
                      Log<br></br>Out
                    </Button>
                  </Grid>
                </Grid>
              </AppBar>
            </div>
          </Grid>
        </Grid>


        <Container className={classes.cardGrid}
          maxWidth="md"
          justify="center"
          align="center"

        >
          <Grid container
            justify="center"
            align="center"
            spacing={2}
            xs={12} md={11}
          >
            {childs.length > 0 && props.user.id ?
              childs.map((card, index) => (
                <Grid item key={card}
                  xs={12} sm={6}
                  boxShadow={10}
                >
                  <Card className={classes.card}
                  >
                    <CardMedia
                      className={classes.cardMedia}
                      image={card.childImg}
                      title="Your Child's Image"
                      data-index={index}
                      onMouseOver={selectChosenChild}
                      component={Link}
                      data-index={index}
                      to={{ pathname: "/child-overview", state: chosenChild }}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {card.childName}
                      </Typography>
                    </CardContent>
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

          //////////////////////////////////Under Construction/////////////////////////////////////////

          <Grid container
            justify="center"
            align="center"
          // spacing={4}
          >
            {
              babysitterChilds.map((card, index) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card className={classes.card}
                  >
                    <CardMedia
                      className={classes.cardMedia}
                      image={card.childImg}
                      title="Your Child's Image"
                      data-index={index}
                      onClick={selectBabysitterChosenChild}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {card.childName}
                      </Typography>
                    </CardContent>
                    <CardActions
                    >
                      <Button component={Link} data-index={index} to={{ pathname: "/child-overview", state: chosenBabysitterChild }} size="small" color="primary">
                        View
                    </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))
            }

          </Grid>
        </Container>
      </main>
      <Box mt={8}>
        <CopyrightFooter />
      </Box>

    </Container>
  );

}

export default Home;