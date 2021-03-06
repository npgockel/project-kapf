import React from "react";
import BackBtn from "../components/Layout/BackBtn";
import Header from "../components/Layout/Header";
import CopyrightFooter from "../components/Layout/CopyrightFooter";
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Container, Button, Typography, Box, Paper, Grid } from "@material-ui/core";
import SleepTable from "../components/Layout/SleepTable"
import SleepInput from "../components/Layout/SleepInput"
import IconButton from '@material-ui/core/IconButton';
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    heroContent: {
        padding: theme.spacing(5, 0, 0, 0),
    },
    radius: {
        borderRadius: 10,
    },
    headBody: {
        padding: theme.spacing(2, 0, 2),
        borderRadius: 10,
    },
    headText: {
        color: theme.palette.primary.dark,
    },
    buttonOption4: {
        background: theme.palette.warning.main,
        margin: theme.spacing(0),
        padding: theme.spacing(0),
            borderRadius: 10,
    },
    buttonOption3: {
        background: theme.palette.secondary.light,
        margin: theme.spacing(0),
        padding: theme.spacing(0),
            borderRadius: 10,
    },
    cardGrid: {
        padding: theme.spacing(8),
    },
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    paper: {
        textAlign: 'center',
        borderRadius: 10,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
}));


function LogSleep(props) {
    const classes = useStyles();
    const { user, logoutUser } = props;

    return (
        <Container
            maxWidth='false'
        >
            <Header />
            <main>
                <Grid container
                    justify="center"
                >
                    <Grid item
                        className={classes.headBody}
                        xs={12} sm={10} md={9} lg={8} xl={7}
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
                                            <BackBtn />
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="h6"
                                            align="center"
                                            className={classes.title}
                                        >
                                            Log<br></br>Sleep
                                    </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Button
                                            size="small"
                                            className={classes.buttonOption3}
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


                <div
                    justify="center"
                    align="center"
                    className={classes.root}
                >
                    <Grid container
                        justify="center"
                        align="center"
                        direction="row"
                    >
                        <Grid item
                            justify="center"
                            align="center"

                            xs={9} lg={8} xl={7}
                        >
                            <Paper className={classes.buttonOption4}>
                                <Typography variant="h4" className={classes.text}>Sleeping Times</Typography>
                            </Paper>
                        </Grid>
                        <Grid item
                            xs={10}
                            >
                            <SleepTable child={props.location.state} />
                        </Grid>
                    </Grid>


                    <Grid container
                        justify="center"
                        align="center"
                    >
                        <Grid item
                            xs={9} lg={8} xl={7}

                        >
                            <Paper className={classes.buttonOption4}>
                                <Typography variant="h4" className={classes.text}>Add a New Nap</Typography>
                            </Paper>
                        </Grid>
                        <Grid item
                            xs={9} lg={8} xl={7}
                        >
                            <SleepInput child={props.location.state} />
                        </Grid>
                    </Grid>
                </div>
            </main>
            <Box mt={8}>
                <CopyrightFooter />
            </Box>

        </Container>
    );
}
// sleep={props.location.state}

export default LogSleep;