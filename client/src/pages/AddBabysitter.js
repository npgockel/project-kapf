import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CopyrightFooter from "../components/Layout/CopyrightFooter";
import BabysitterLink from "../components/Layout/BabysitterLink";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Box, Grid, Card, CardMedia, AppBar, Link, Button } from '@material-ui/core';




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

function AddBabysitter() {
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
                    xs={12}
                    justify="flex-start"
                    alignItems="center"
                >
                    <div className={classes.root}>
                        <Button component={Link} to="/Home">
                            <ArrowBackIosIcon />
                        </Button>
                    </div>

                </Grid>
            </Grid>
            <BabysitterLink />
            <Box mt={8}>
                <CopyrightFooter />
            </Box>
        </>
    );
};

export default AddBabysitter;