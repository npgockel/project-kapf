import React, { Component } from 'react';
import { Box, Container, Typography, AppBar, Button, Grid, Card, CardContent, CardMedia, CardActionArea } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import { CopyrightFooter } from '../components';

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
  cardGrid: {
    padding: theme.spacing(8),
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
          spacing={8}
          direction="row"
          // align="center"
          // alignItems="center"
          justify="center"

        >
          <Grid item
            xs={12} sm={6} md={4} lg={3}
          >
            <Card
              className={classes.radius}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Baby Laughing"
                  image="Development.png"
                  title="Baby Laughing"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    align="center"
                  >
                    Track Development
                  </Typography>
                  <Typography
                    variant="body2"
                    // color="textSecondary"
                    gutterBottom
                    align="center"
                  >
                    Use our logging feature to track your child’s development with our eating and sleep logs, with more log types in future development.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item
            xs={12} sm={6} md={4} lg={3}
          >
            <Card
              className={classes.radius}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Hands Touching"
                  image="Communicate.png"
                  title="Hands Touching"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    align="center"
                  >
                    Connect
                  </Typography>
                  <Typography
                    variant="body2"
                    align="center">
                    Help grandma, the babysitter, or even your pediatrician gain a better understanding of how to take care of your child.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item
            xs={12} sm={6} md={4} lg={3}
          >
            <Card
              className={classes.radius}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Baby Reading"
                  image="featured_art_istock_baby.jpg"
                  title="Baby Reading"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    align="center"
                  >
                    Bond With Your Child!
                  </Typography>
                  <Typography
                    variant="body2"
                    align="center"
                  >
                    Does your child like trucks one day, then dinosaurs the next? Don’t let caretakers fall behind the curve.  Track your child’s preferences with our info log.
                  </Typography>
                </CardContent>
              </CardActionArea>
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