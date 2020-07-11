import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import StickyFooter from "../components/Layout/StickyFooter";
import Checkout from "../components/Layout/Checkout";
import Typography from '@material-ui/core/Typography';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import API from '../utils/API';


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
        </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles({
    root: {
        // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',

    },
    paper: {
        margin: 0,
        padding: 10,
        // backgroundColor: "beige",
    },
    topAlignment: {
        margin: 10,
        padding: 10,

    },
});

export default function AddChild() {
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
                    <ArrowBackIosIcon></ArrowBackIosIcon>
                </Grid>
            </Grid>
            <Checkout />
            <StickyFooter />
        </>
    );
}
