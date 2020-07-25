import React, { useEffect, useState } from 'react';
import BackBtn from "../components/Layout/BackBtn";
import Header from "../components/Layout/Header";
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Container, Typography, Card, CardContent, Grid, Paper, Button, Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import API from '../utils/API';
import CopyrightFooter from "../components/Layout/CopyrightFooter"

import IconButton from '@material-ui/core/IconButton';

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
    buttonOption1: {
        background: theme.palette.warning.main,
        margin: theme.spacing(6, 0, 0, 0),
        borderRadius: 10,
    },
    buttonOption4: {
        background: theme.palette.secondary.light,
        margin: theme.spacing(0),
        padding: theme.spacing(0),
        borderRadius: 10,
    },
    button1: {
        backgroundColor: theme.palette.success.main,
        margin: theme.spacing(1),
        borderRadius: 10,
    },
    button2: {
        backgroundColor: theme.palette.warning.main,
        margin: theme.spacing(1),
        borderRadius: 10,
    },
    button3: {
        backgroundColor: theme.palette.info.main,
        margin: theme.spacing(1),
        borderRadius: 10,
    },
    button4: {
        backgroundColor: theme.palette.error.main,
        margin: theme.spacing(1),
        borderRadius: 10,
    }
}));


function ChildOverview(props) {
    const classes = useStyles();
    const [childs, setChildren] = useState([])
    const { user, logoutUser } = props;


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
        <Container
            maxWidth='false'
        >
            <Header />
            <main>
                <Grid container
                    justify="center"
                    fullwidth
                >
                    <Grid item
                        className={classes.headBody}
                        xs={12} sm={10} md={9} lg={8} xl={7}
                    >
                        <div >
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
                                            {childs.childName}'s<br></br>Overview
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

                <Grid container
                    spacing={3}
                    direction="column"
                    alignItems="center">
                    <Grid item
                        xs={10} sm={9} md={8} lg={7} xl={6}
                    >
                        <Card>
                            <Grid container spacing={3} direction="column" alignItems="center">
                                <Grid item xs={12}>
                                    <Card>
                                        <CardContent>
                                            <img src={childs.childImg} alt="beauty"></img>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>

                            <Grid container
                                direction="row"
                                align="center"
                                // fullwidth
                                justify="center"
                            >
                                <Grid item
                                    xs={12} sm={6} md={4} lg={2}
                                >
                                    <Button
                                        component={Link} to={{ pathname: "/logfood", state: props.location.state }}
                                        variant="contained"
                                        size="medium"
                                        className={classes.button1}
                                    >
                                        Log Food
                    </Button>
                                </Grid>
                                <Grid item
                                    xs={12} sm={6} md={4} lg={2}
                                >
                                    <Button
                                        component={Link}
                                        to={{ pathname: "/logsleep", state: props.location.state }} className={classes.paper}
                                        variant="contained"
                                        size="medium"
                                        className={classes.button2}
                                    >
                                        Log Sleep
                    </Button>
                                </Grid>
                                <Grid item
                                    xs={12} sm={6} md={4} lg={2}
                                >
                                    <Button
                                        component={Link}
                                        to={{ pathname: "/loginfo", state: props.location.state }} className={classes.paper}
                                        variant="contained"
                                        size="medium"
                                        className={classes.button3}
                                    >
                                        Log Info

                    </Button>
                                </Grid>
                                <Grid item
                                    xs={12} sm={6} md={4} lg={2}
                                >
                                    <Button component={Link} to={{ pathname: "/addbabysitter", state: props.location.state }}
                                        variant="contained"
                                        size="medium"
                                        className={classes.button4}
                                    >
                                        Add Babysitter
                    </Button>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>
            </main>
            <Box mt={8}>
                <CopyrightFooter />
            </Box>


        </Container >
    );
}

export default ChildOverview;