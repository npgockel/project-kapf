import React from 'react';
import { SwipeableTemporaryDrawer } from "../components";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SettingsIcon from '@material-ui/icons/Settings';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const useStyles = makeStyles({
    root: {
        // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',

    },
    paper: {
        margin: 0,
        padding: 10,
        backgroundColor: "beige",
    }
});

export default function NannyHome() {
    const classes = useStyles();

    return (
        <>
            {/* <Grid container spacing={1}>
                <Grid item xs={4}>
                    <Container className={classes.paper}>xs=4</Container>
                </Grid>
                <Grid item xs={4}>
                    <Container className={classes.paper}>xs=4</Container>
                </Grid>
                <Grid item xs={4}>
                    <Container className={classes.paper}>xs=4</Container>
                </Grid>
                <Grid item xs={8}>
                    <Container className={classes.paper}>xs=8</Container>
                </Grid>
                <Grid item xs={4}>
                    <Container className={classes.paper}>xs=4</Container>
                </Grid>
            </Grid>
 */}

            <Grid container spacing={2}>
            <Grid container item 
                    className={classes.paper}
                    xs={1}
                    justify="flex-start"
                    alignItems="center"
                >
                </Grid>

                <Grid container item
                    className={classes.paper}
                    xs={5}
                    justify="flex-start"
                    alignItems="center"

                >
                    <h2>Hi Nanny</h2>
                </Grid>

                <Grid container item
                    className={classes.paper}
                    xs={5}
                    justify="flex-end"
                    alignItems="center"

                >
                    <SettingsIcon></SettingsIcon>

                </Grid>

                <Grid container item
                    className={classes.paper}
                    xs={1}
                    justify="flex-end"
                    alignItems="center"
                >
                </Grid>
            </Grid>

            <Grid container
                spacing={2}
                direction="column"
            >
                <Grid container item
                    className={classes.paper}
                    xs={12}
                    justify="center"
                    alignItems="center"

                >
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="200"
                                image="toddler.png"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Grid
                                    container spacing={1}

                                    justify="center"
                                    alignItems="center"
                                >
                                    <Typography gutterBottom variant="h5" component="h2" >
                                        Nuggs
                                </Typography>
                                </Grid>
                            </CardContent>
                        </CardActionArea>
                    </Card>


                </Grid>
                <Grid container item
                    className={classes.paper}
                    xs={12}
                    justify="center"
                    alignItems="center"

                >
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="200"
                                image="toddler.png"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Grid
                                    container spacing={1}
                                    justify="center"
                                    alignItems="center"
                                >
                                    <Typography gutterBottom variant="h5" component="h2" >
                                        Nugget
                                </Typography>
                                </Grid>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                </Grid>
                <Grid container item
                    className={classes.paper}
                    xs={12}
                    justify="center"
                    alignItems="center"

                >


                </Grid>
            </Grid>



        </>
    );
}
