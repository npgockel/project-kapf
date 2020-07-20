import React, { Fragment } from 'react';
import { AppBar, Button, Box, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Typography } from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CopyrightFooter from '../components/Layout/CopyrightFooter'

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  heroContent: {
    padding: theme.spacing(10, 0, 0, 0),
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

export default function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
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
            <Card>
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
