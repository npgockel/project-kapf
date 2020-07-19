import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CopyrightFooter from "../components/Layout/CopyrightFooter";
import ChildCreate from "../components/Layout/ChildCreate";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { AppBar, Card, CardMedia, Box, Grid, Button } from '@material-ui/core';
import { Link } from "react-router-dom";



const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    paper: {
        margin: 0,
        padding: 10,
    },
    topAlignment: {
        margin: 10,
        padding: 10,

    },
}));

function AddChild() {
    const classes = useStyles();
    return (
        <>
            <AppBar
                position="static"
                spacing="0"
                color="transparent"
            // className={classes.heroContent}
            >
                {/* <Image
                src="Banner.png"
                disableSpinner
                /> */}
                <Card >
                    <CardMedia
                        component="img"
                        alt="Swaddle Swan Logo"
                        image="Banner.png"
                        title="Swaddle Swan Logo"
                    />
                </Card>
            </AppBar>


            <Grid container spacing={4}>
                <Grid container item
                    className={classes.topAlignment}
                    xs={12} s={6} m={4}
                    justify="flex-start"
                    alignItems="center"
                >
                    <div className={classes.root}>
                        <Button component={Link} to="/home">
                            <ArrowBackIosIcon />
                        </Button>
                    </div>

                </Grid>
            </Grid>
            <ChildCreate />
            <Box mt={8}>
                <CopyrightFooter />
            </Box>
        </>
    );
};

export default AddChild;