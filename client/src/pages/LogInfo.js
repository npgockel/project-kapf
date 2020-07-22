import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Card, Button, IconButton, Container, CardMedia, Typography, Grid, Paper, Box } from "@material-ui/core";
import BackBtn from "../components/Layout/BackBtn";
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
        background: theme.palette.secondary.light,
        margin: theme.spacing(6, 0),
        borderRadius: 10,
    },
    headBody: {
        padding: theme.spacing(2, 0, 2),
        borderRadius: 10,
    },
    headText: {
        color: theme.palette.primary.dark,
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
                                <Grid
                                    container
                                    direction="row"
                                    justify="space-between"
                                    alignItems="center"
                                >
                                    <Grid item>
                                        <IconButton
                                            edge="start"
                                            className={classes.menuButton}
                                            color="inherit"
                                            aria-label="menu"
                                        >
                                            <BackBtn />
                                        </IconButton>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="h5"
                                            align="center"
                                            className={classes.title}
                                        >
                                            Log<br></br>Food
                                    </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Button
                                            size="small"
                                            className={classes.buttonOption4}
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
                        align="center"
                        fullwidth
                        spacing={1}
                    >
                        <Grid item
                            xs={10} sm={9} md={4}
                        >
                            <Paper className={classes.buttonOption4}>
                                <Typography variant="h5" className={classes.text}>Likes</Typography>
                            </Paper>
                            <ChildLikes child={props.location.state} />
                        </Grid>
                        <Grid item
                            xs={10} sm={9} md={4}
                        >
                            <Paper className={classes.buttonOption4}>
                                <Typography variant="h5" className={classes.text}>Disikes</Typography>
                            </Paper>
                            <ChildDislikes child={props.location.state} />
                        </Grid>
                    </Grid>
                    <Grid container
                        justify="center"
                        align="center"
                        fullwidth
                    >

                        <Grid item
                            xs={10} sm={9} md={8}
                        >
                            <Paper className={classes.buttonOption4}>
                                <Typography variant="h5" className={classes.text}>Allergies</Typography>
                            </Paper>
                            <ChildAllergies child={props.location.state} />
                        </Grid>
                        <Grid item
                            xs={10} sm={9} md={8}
                        >
                            <Paper className={classes.buttonOption4}>
                                <Typography variant="h5" className={classes.text}>Notes</Typography>
                            </Paper>
                            <ChildNotes child={props.location.state} />
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
