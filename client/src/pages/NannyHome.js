import React, { Fragment } from 'react';
import { AppBar, Button, Box, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Typography } from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CopyrightFooter from '../components/Layout/CopyrightFooter'
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
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
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Home(props) {
  const classes = useStyles();
  const { user, logoutUser } = props;

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
          justify="center"
          fullwidth
        >
          <Grid item
            className={classes.headBody}
            xs={11} sm={10} md={9} lg={8} xl={7}

          >
            <div className={classes.root}>
              <AppBar
                className={classes.radius}
                color="transparent"

                position="static">
                <Grid container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                >
                  <Grid item>
                    <IconButton
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                    >
                      <BackBtn />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6"
                      align="center"
                      className={classes.title}
                    >
                      Let's Make Your<br></br>Child's Profile
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


        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Bartholamew
                    </Typography>
                  <Typography>
                    ---Your child's one liner---
                    </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View
                    </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </main>
      <Box mt={8}>
        <CopyrightFooter />
      </Box>

    </React.Fragment >
  );
}
