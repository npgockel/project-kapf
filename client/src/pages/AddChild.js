import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import StickyFooter from "../components/Layout/StickyFooter";
import Checkout from "../components/Layout/Checkout";

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SettingsIcon from '@material-ui/icons/Settings';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import AddCircleIcon from '@material-ui/icons/AddCircle';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import Input from '@material-ui/core/Input';

import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';

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
            <Grid container spacing={2}>
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
