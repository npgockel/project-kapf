import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CopyrightFooter from "../components/Layout/CopyrightFooter";
import ChildCreate from "../components/Layout/ChildCreate";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { AppBar, Paper, Container, Typography, Card, CardMedia, Box, Grid, Button } from '@material-ui/core';
import { Link } from "react-router-dom";

import BackBtn from "../components/Layout/BackBtn";
import IconButton from '@material-ui/core/IconButton';


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
    headBody: {
        padding: theme.spacing(2, 0, 2),
        borderRadius: 10,
    },
    buttonOption4: {
        background: theme.palette.secondary.light,
        margin: theme.spacing(6, 0),
        borderRadius: 10,
    },
    cardGrid: {
        padding: theme.spacing(8),
    },
    topAlignment: {
        margin: 10,
        padding: 10,

    },
}));

function AddChild() {
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
                                        >
                                            Log<br></br>Out
                                        </Button>
                                    </Grid>
                                </Grid>
                            </AppBar>
                        </div>
                    </Grid>
                </Grid>


                <Grid container
                    // spacing={4}
                    fullwidth
                    justify="center"
                >
                    <ChildCreate />

                </Grid>
            </main>
            <Box mt={8}>
                <CopyrightFooter />
            </Box>
        </Container>
    );
};

export default AddChild;