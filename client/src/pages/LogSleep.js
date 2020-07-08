import React from "react";
import BackBtn from "../components/Layout/BackBtn";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from "@material-ui/core";
import SleepTable from "../components/Layout/SleepTable"
import SleepInput from "../components/Layout/SleepInput"





const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: "white",
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
}));


function LogSleep() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <BackBtn />
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography variant="h3" className={classes.text}>Sleeping Times</Typography>
                    </Paper>
                </Grid>
            </Grid>
            <SleepTable />
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography variant="h3" className={classes.text}>Add a New Nap</Typography>
                    </Paper>
                </Grid>
            </Grid>
            <SleepInput />
        </div>
    );
}

export default LogSleep;