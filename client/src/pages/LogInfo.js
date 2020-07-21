import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Card, CardMedia, Typography, Grid, Paper, Box } from "@material-ui/core";
import BackBtn from "../components/Layout/BackBtn";
import CopyrightFooter from "../components/Layout/CopyrightFooter"
import { ChildLikes, ChildDislikes, ChildAllergies, ChildNotes } from "../components";


const useStyles = makeStyles((theme) => ({
    heroContent: {
        padding: theme.spacing(5, 0, 1, 0),
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


function LogInfo(props) {
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
                    <BackBtn />
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <Paper className={classes.paper}>
                                <Typography variant="h5" className={classes.text}>Likes</Typography>
                            </Paper>
                            <ChildLikes child={props.location.state}/>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper className={classes.paper}>
                                <Typography variant="h5" className={classes.text}>Disikes</Typography>
                            </Paper>
                            <ChildDislikes child={props.location.state}/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <Typography variant="h5" className={classes.text}>Allergies</Typography>
                            </Paper>
                            <ChildAllergies child={props.location.state}/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <Typography variant="h5" className={classes.text}>Notes</Typography>
                            </Paper>
                            <ChildNotes child={props.location.state}/>
                        </Grid>
                    </Grid>
                </div>
            </main>
            <Box mt={8}>
                <CopyrightFooter />
            </Box>
        </>
    );
}


export default LogInfo;