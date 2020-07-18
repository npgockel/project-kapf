import React, { useEffect, useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Link } from "react-router-dom";
import API from '../utils/API';
import CopyrightFooter from '../components/Layout/CopyrightFooter'




const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
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
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
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
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Hi "Parent"
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={1} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary" component={Link} to="/addchild">
                    Add Your Child
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
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
                      image="https://source.unsplash.com/random"
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
              )) : <h2>loading...</h2>}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Nanny Feed My Bebe
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Many thanks to David, Anthony, and Brock!
        </Typography>
        <CopyrightFooter />
      </footer>
      {/* End footer */}
    </Fragment>
  );
}

export default Home;