import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CopyrightFooter from "../components/Layout/CopyrightFooter";
import ChildCreate from "../components/Layout/ChildCreate";
import { AppBar, Container, Typography, Box, Grid, Button } from '@material-ui/core';
import { Link } from "react-router-dom";
import Header from "../components/Layout/Header"
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

function AddChild(props) {
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
                fullwidth
            >
                <Grid item
                    className={classes.headBody}
                    xs={11} sm={10} md={9} lg={8} xl={7}

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
                                <Grid item
                                >
                                    <IconButton
                                        edge="start"
                                    >
                                        <BackBtn />
                                    </IconButton>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h6"
                                        className={classes.title}
                                    >
                                        Let's Make Your<br></br>Child's Profile
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