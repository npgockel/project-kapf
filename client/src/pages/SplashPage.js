import React, { Component } from 'react';
import { Box, Container, Typography, AppBar, Button, Grid, Card, CardContent, CardMedia, CardActionArea } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import { CopyrightFooter } from '../components';
import Header from "../components/Layout/Header";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(5, 0, 0, 0),
  },
  radius: {
    borderRadius: 10,
  },
  // noHover: {
  //   hover: {
  //     background: none,
  //   }
  // },
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
      <Header />
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
              
                <CardMedia
                  component="img"
                  className={classes.noHover}
                  alt="Baby Reading"
                  image="Development.png"
                  title="Baby Reading"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    align="center"
                  >
                     Track <br/>Habits
                  </Typography>
                  <Typography
                    variant="body2"
                    // color="textSecondary"
                    gutterBottom
                    align="center"
                  >
                    Use our logging feature to track your child’s habits with our eating and sleep logs, with more log types to come.
                  </Typography>
                </CardContent>
              
            </Card>
          </Grid>
          <Grid item
            xs={12} sm={6} md={4} lg={3}
          >
            <Card
              className={classes.radius}
            >
              
                <CardMedia
                  component="img"
                  alt="Caregivers Comparing Notes"
                  image="Communicate.png"
                  title="Caregivers Comparing Notes"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    align="center"
                  >
                    Connect With <br/> Caregivers
                  </Typography>
                  <Typography
                    variant="body2"
                    align="center">
                    Help grandma, the babysitter, and your pediatrician gain a better understanding of how to take care of your child.
                  </Typography>
                </CardContent>
              
            </Card>
          </Grid>
          <Grid item
            xs={12} sm={6} md={4} lg={3}
          >
            <Card
              className={classes.radius}
            >
              
                <CardMedia
                  component="img"
                  alt="Baby Laughing"
                  image="featured_art_istock_baby.jpg"
                  title="Baby Laughing"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    align="center"
                  >
                    Ducks or <br/> Dinos?
                  </Typography>
                  <Typography
                    variant="body2"
                    align="center"
                  >
                    Does your child like ducks one day, then dinosaurs the next? Don’t let caregivers fall behind the curve by tracking your child’s interests.
                  </Typography>
                </CardContent>
              
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