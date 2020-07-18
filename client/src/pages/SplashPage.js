import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, CardActionArea } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from "react-router-dom";
import Image from 'material-ui-image';
import { red, grey, blue, purple, yellow, green } from '@material-ui/core/colors'


// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const useStyles = makeStyles((theme) => ({
  HeroMedia: {
    height: 100,
    width: '100%',
    objectFit: 'cover'
  },

  // root: {
  //   width: 300,
  //   height: 400,
  // },
  heroContent: {
    opacity: .4,
    padding: theme.spacing(0),
    height: 400,
  },
  button:{
    background: theme.palette.secondary.main,
  },
  // heroButtons: {
  //   marginTop: theme.spacing(10),
  // },
  cardGrid: {
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(0),
    margin: theme.spacing(0),
  },
  card: {
    display: 'flex',
    height: 300,
    width: 300,
    flexDirection: 'column',
  },
  // cardMedia: {
  //   height: 300,
  //   width: 300,
  // },
  // cardContent: {
  //   height: 300,
  //   width: 300,

  // },
  // footer: {
  //   backgroundColor: theme.palette.background.paper,
  //   padding: theme.spacing(6),
  // },
}));


export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.heroContent}>
          <Image
          src="header-lp-3-b80ddc64.jpg"
          disableSpinner
          />
      </div>
      <Grid container
      >
        <Grid item
          className={classes.HeroMedia}
          xs={12}
        >
        </Grid>
        <Grid item
          align="center"
          xs={12}
        >
          <Typography
            align="center"
            variant="h5"
          >
            Swaddle Swan
            </Typography>


          <Button
            component={Link}
            to="/login"
            variant="contained"
            fullWidth
            color="blue"
            className={classes.button}

          >
            Login
          </Button>
        </Grid>
        <Grid item
          align="center"

          xs={12}
        >
          <Button component={Link} to="/signup" color="inherit">Signup</Button>

        </Grid>

      </Grid>

      <Container className={classes.cardGrid}>
        <Grid container
          spacing={10}
          direction="row"
          align="center"
          alignItems="center"
          justify="center"

        >
          <Grid item
            xs={12} md={6} lg={4}
          >
            <Card >
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  image="featured_art_istock_baby.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    align="center"
                  >
                    Kepping track of your Tots
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Baby Force Connect ++ Baby Force Connect ++ Baby Force Connect ++ Baby Force Connect ++ Baby Force Connect ++ Baby Force Connect ++ Baby Force Connect ++
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item
            xs={12} md={6} lg={4}
          >
            <Card >
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  image="featured_art_istock_baby.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    align="center"
                  >
                    Kepping track of your Tots
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Baby Force Connect ++ Baby Force Connect ++ Baby Force Connect ++ Baby Force Connect ++ Baby Force Connect ++ Baby Force Connect ++ Baby Force Connect ++
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item
            xs={12} md={6} lg={4}
          >
            <Card
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  image="featured_art_istock_baby.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    align="center"
                  >
                    Kepping track of your Tots
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Baby Force Connect ++ Baby Force Connect ++ Baby Force Connect ++ Baby Force Connect ++ Baby Force Connect ++ Baby Force Connect ++ Baby Force Connect ++
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
      {/* Footer */}
      {/* <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer> */}
      {/* End footer */}
    </React.Fragment>
  );
}