import React, { useEffect, useState } from 'react';
import BackBtn from "../components/Layout/BackBtn";
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, CardMedia, Typography, Card, CardContent, Grid, Paper, Button, Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import API from '../utils/API';
import CopyrightFooter from "../components/Layout/CopyrightFooter"

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
        background: theme.palette.primary.main,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
    },
    paper2: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: "white",
        background: theme.palette.info.light,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    cardImg: {
        height: 250,
        width: 250
    }
}));


function ChildOverview(props) {
    const classes = useStyles();
    const [childs, setChildren] = useState([])

    useEffect(() => {
        loadChildren()
    }, [])

    function loadChildren() {
        API.Child.getById(props.location.state.id)
            .then(res => {
                setChildren(res.data)
            })
            .catch(err => console.log(err))
    }
    console.log(props.location.state)

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
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <Typography variant="h3" className={classes.text}>
                                    Child Overview
                        </Typography>
                            </Paper>
                            <BackBtn />
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} direction="column" alignItems="center">
                        <Grid item xs={12}>
                            <Card>
                                <CardContent>
                                    <img className={classes.cardImg} src={childs.childImg} alt="beauty"></img>
                                    <Typography className={classes.paper2} gutterBottom variant="h5" component="h2">
                                        {childs.childName}
                                    </Typography>

                                </CardContent>

                            </Card>
                            <div>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} direction="column" alignItems="center">
                        <Grid item xs={12}>
                            <Button component={Link} to={{ pathname: "/logfood", state: props.location.state }} className={classes.paper} variant="contained" size="large" color="primary">
                                Log Food
                    </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Button component={Link} to="/logsleep" className={classes.paper} variant="contained" size="large" color="primary">
                                Log Sleep
                    </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Button component={Link} to="/loginfo" className={classes.paper} variant="contained" size="large" color="primary">
                                Log Info
                    </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Button component={Link} to={{ pathname: "/addbabysitter", state: props.location.state }} className={classes.paper} variant="contained" size="large" color="primary">
                                Add Babysitter
                    </Button>
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

export default ChildOverview;