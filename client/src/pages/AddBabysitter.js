import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import StickyFooter from "../components/Layout/StickyFooter";
import BabysitterLink from "../components/Layout/BabysitterLink";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';




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
            <StickyFooter />
        </>
    );
};

export default AddBabysitter;