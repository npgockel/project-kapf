import React from "react";
import BackBtn from "../components/Layout/BackBtn";
import CopyrightFooter from "../components/Layout/CopyrightFooter";
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Card, CardMedia, Box, Grid, Paper, Typography } from '@material-ui/core';
import FoodTable from "../components/Layout/FoodTable";
import FoodInput from "../components/Layout/FoodInput";

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
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: "white",
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
}));


function LogFood(props) {
    const classes = useStyles();

    console.log(props.location.state);


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

                <div className={classes.root}>
                    <Grid container spacing={3}>
                        <BackBtn />
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <Typography variant="h4" className={classes.text}>Feeding Times</Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Box m={6}>
                        <FoodTable child={props.location.state}/>
                    </Box>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <Typography variant="h4" className={classes.text}>Add a New Food</Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Box m={6}>
                        <FoodInput child={props.location.state} />
                    </Box>
                </div>
            </main>
            <Box mt={8}>
                <CopyrightFooter />
            </Box>

        </>
    );
}

export default LogFood;