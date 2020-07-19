import React, { useEffect, useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid, CssBaseline, Box, Card, CardActions, CardContent, CardMedia, Button } from '@material-ui/core';
import { Link } from "react-router-dom";
import API from '../utils/API';
import CopyrightFooter from '../components/Layout/CopyrightFooter'




const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(1),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  buttonOption3: {
    background: theme.palette.secondary.main,
    margin: theme.spacing(1),
    color: theme.palette.primary.dark,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
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
      <main>
        <div className={classes.heroContent}>
          {/* <Image
          height='auto'
            src="Banner.png"
            disableSpinner
          /> */}
          <Card >
            <CardMedia
              component="img"
              alt="Swaddle Swan Logo"
              image="Banner.png"
              title="Swaddle Swan Logo"
            />
          </Card>
        </div>
        <Grid container
          justify="center"
          fullwidth
        >
          <Grid item
          >
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Hi "Parent"
            </Typography>
            <div >
              <Grid container spacing={1} justify="center">
                <Grid item>
                  <Button
                    className={classes.buttonOption3}
                    variant="contained"
                    component={Link}
                    to="/addchild"
                  >
                    Add Your Child
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>

        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {childs.length > 0 && props.user.id ?
              childs.map((card, index) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card className={classes.card}
                  >
                    <CardMedia
                      className={classes.cardMedia}
                      image={card.childImg}
                      title=""
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
              )) : <h2>you've got to add children</h2>}
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