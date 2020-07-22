import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CopyrightFooter from "../components/Layout/CopyrightFooter";
import BabysitterLink from "../components/Layout/BabysitterLink";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Box, Grid, Card, Container, Typography, CardMedia, AppBar, Button } from '@material-ui/core';
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
    cardGrid: {
        padding: theme.spacing(8),
    },
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    paper: {
        margin: 0,
        // padding: 10,

    },
    topAlignment: {
        // margin: 10,
        // padding: 10,

    },
}));

function AddBabysitter(props) {
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
                                            Search For a <br></br>Babysitter
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

                <BabysitterLink child={props.location.state} />
                
                <Box mt={8}>
                    <CopyrightFooter />
                </Box>
            </main>
        </Container>

    );
};

export default AddBabysitter;