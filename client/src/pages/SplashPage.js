import React, { Component } from 'react';
import { Box, Container, Typography, Button, Grid, Card, CardActions, CardContent, CardMedia, CardActionArea } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import Image from 'material-ui-image';
import { red, grey, blue, purple, yellow, green } from '@material-ui/core/colors'
import { CopyrightFooter } from '../components';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(1),
  },
  buttonOption1: {
    background: theme.palette.warning.main,
    margin: theme.spacing(1),
  },
  buttonOption2: {
    background: theme.palette.success.main,
    margin: theme.spacing(1),
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
    // paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },  // },
}));


export default function Album() {
  const classes = useStyles();

  return (
    <Container
      maxWidth='false'
    >
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
        spacing={1}
        justify="center"
        align="center"
        xs={12}
      >
        <Grid item
          xs={3}
        >
          <Button
            component={Link}
            to="/login"
            variant="contained"
            fullWidth
            size="small"
            className={classes.buttonOption1}
          >
            Login
          </Button>
        </Grid>

        <Grid item
          xs={3}
        >
          <Button
            component={Link}
            to="/signup"
            variant="contained"
            fullWidth
            size="small"
            className={classes.buttonOption2}
          >
            Signup
          </Button>
        </Grid>
      </Grid>


      <Container className={classes.cardGrid}>
        <Grid container
          spacing={10}
          direction="row"
          // align="center"
          // alignItems="center"
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
                    Log Food and Sleep
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    gutterBottom
                  >
                    Track your baby’s digestive development by recording feeding times and food types with our Food Log.
                    Help your child develop a sleep cycle for your nugget and get an edge on your own free time with our Sleep Log
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
                    Log Sleep                  </Typography>
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

      <Grid container
        spacing={1}
        justify="center"
        align="center"
        xs={12}
      >
        <Grid item
          xs={3}
        >
          <Button
            component={Link}
            to="/login"
            variant="contained"
            fullWidth
            size="small"
            className={classes.buttonOption1}
          >
            Login
          </Button>
        </Grid>

        <Grid item
          xs={3}
        >
          <Button
            component={Link}
            to="/signup"
            variant="contained"
            fullWidth
            size="small"
            className={classes.buttonOption2}
          >
            Signup
          </Button>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item>

        </Grid>

      </Grid>

      <Box mt={8}>
        <CopyrightFooter />
      </Box>
    </Container>
  );
}