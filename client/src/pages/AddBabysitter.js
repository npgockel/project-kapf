import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CopyrightFooter from "../components/Layout/CopyrightFooter";
import BabysitterLink from "../components/Layout/BabysitterLink";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Box, Grid, Card, Typography, CardMedia, AppBar, Button } from '@material-ui/core';
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
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
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    paper: {
        margin: 0,
        padding: 10,

    },
    topAlignment: {
        margin: 10,
        padding: 10,

    },
}));

function AddBabysitter(props) {
    const classes = useStyles();

    return (
        <>
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
                    <Grid container item
                        className={classes.topAlignment}
                        xs={12}
                        justify="flex-start"
                        alignItems="center"
                    >
                        <div className={classes.root}>
                            <Button component={Link} to="/Home">
                                <ArrowBackIosIcon />
                            </Button>
                        </div>

                    </Grid>
                </Grid>
            </main>
            <BabysitterLink child={props.location.state} />
            <Box mt={8}>
                <CopyrightFooter />
            </Box>
        </>

    );
};

export default AddBabysitter;