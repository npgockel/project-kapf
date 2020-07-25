import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Card, Button, IconButton, Container, CardMedia, Typography, Grid, Paper, Box } from "@material-ui/core";
import BackBtn from "../components/Layout/BackBtn";
import Header from "../components/Layout/Header";
import CopyrightFooter from "../components/Layout/CopyrightFooter"
import { ChildLikes, ChildDislikes, ChildAllergies, ChildNotes } from "../components";
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    heroContent: {
        padding: theme.spacing(5, 0, 0, 0),
    },
    radius: {
        borderRadius: 10,
    },
    buttonOption4: {
        background: theme.palette.info.main,
        margin: theme.spacing(0),
        padding: theme.spacing(0),
        borderRadius: 10,
    },
    headBody: {
        padding: theme.spacing(2, 0, 2),
        borderRadius: 10,
    },
    headText: {
        color: theme.palette.primary.dark,
    },
    buttonOption3: {
        background: theme.palette.secondary.light,
        margin: theme.spacing(0),
        padding: theme.spacing(0),
        borderRadius: 10,
    },
    buttonOption1: {
        backgroundColor: theme.palette.info.main,
        margin: theme.spacing(3, 0),
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
        textAlign: 'center',
        borderRadius: 10,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
}));



function LogInfo(props) {
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
                        <div>
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
                                        >
                                            Log<br></br>Information
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

                <div className={classes.root}>
                    <Grid container
                        justify="center"
                        // align="center"
                        fullwidth
                        spacing={1}
                    >
                        <Grid item
                            xs={10} sm={9} md={8}
                        >
                            <Paper className={classes.buttonOption1}>
                                <Typography variant="h5" className={classes.text}>Likes</Typography>
                                <ChildLikes child={props.location.state} />
                            </Paper>
                        </Grid>
                        <Grid item
                            xs={10} sm={9} md={8}
                        >
                            <Paper className={classes.buttonOption1}>
                                <Typography variant="h5" className={classes.text}>Disikes</Typography>
                                <ChildDislikes child={props.location.state} />
                            </Paper>
                        </Grid>
                    </Grid>
                    <Grid container
                        justify="center"
                        // align="center"
                        fullwidth
                    >

                        <Grid item
                            xs={10} sm={9} md={8}
                        >
                            <Paper className={classes.buttonOption1}>
                                <Typography variant="h5" className={classes.text}>Allergies</Typography>
                                <ChildAllergies child={props.location.state} />
                            </Paper>
                        </Grid>
                        <Grid item
                            xs={10} sm={9} md={8}
                        >
                            <Paper className={classes.buttonOption1}>
                                <Typography variant="h5" className={classes.text}>Notes</Typography>
                                <ChildNotes child={props.location.state} />
                            </Paper>
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


export default LogInfo;
