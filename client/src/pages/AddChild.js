import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import StickyFooter from "../components/Layout/StickyFooter";
import ChildCreate from "../components/Layout/ChildCreate";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
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

function AddChild() {
    const classes = useStyles();
    return (
        <>
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
            <StickyFooter />
        </>
    );
};

export default AddChild;