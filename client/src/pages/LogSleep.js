import React from "react";
import BackBtn from "../components/Layout/BackBtn";
import CopyrightFooter from "../components/Layout/CopyrightFooter";
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Card, CardMedia, Typography, Box, Paper, Grid } from "@material-ui/core";
import SleepTable from "../components/Layout/SleepTable"
import SleepInput from "../components/Layout/SleepInput"


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
        borderRadius: 30,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
}));


function LogSleep() {
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


                <div className={classes.root}>
                    <Grid container spacing={3}>
                        <BackBtn />
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <Typography variant="h3" className={classes.text}>Sleeping Times</Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                    <SleepTable />
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <Typography variant="h3" className={classes.text}>Add a New Nap</Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                    <SleepInput />
                </div>
            </main>
            <Box mt={8}>
                <CopyrightFooter />
            </Box>

        </>
    );
}


export default LogSleep;