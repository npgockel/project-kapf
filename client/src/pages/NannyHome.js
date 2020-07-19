import React, { Fragment } from 'react';
import { AppBar, Button, Box, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Typography } from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
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
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar
        position="static"
        spacing="0"
        color="transparent"
      // className={classes.heroContent}
      >
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
      </AppBar>


      <CssBaseline />
      <main>
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
