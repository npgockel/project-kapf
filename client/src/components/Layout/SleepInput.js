import React, { Fragment, useState } from 'react';
import { Box, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import API from '../../utils/API.js';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    cardpad: {
        margin: theme.spacing(1),
    },
    paper: {
        textAlign: 'center',
        background: theme.palette.warning.main,
        borderRadius: 10,
    }
}));

function SleepInput(props) {
    const [startSleep, setStartSleep] = useState();
    const [endSleep, setEndSleep] = useState();
    const [totalSleep, setTotalSleep] = useState("test total");
    const [selectedDate, setSelectedDate] = useState(new Date());

    const classes = useStyles();

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const handleStartSleep = (date) => {
        setStartSleep(date);
    };
    const handleEndSleep = (date) => {
        setEndSleep(date);
    };

    const postSleep = () => {
        let sleepData = {
            sleepStart: startSleep,
            sleepEnd: endSleep,
            sleepTotal: totalSleep,
            sleepDate: selectedDate,
            ChildId: props.child.id
        }
        API.Sleep.create(sleepData);
        console.log("thanks for click", sleepData);
        refreshPage();
    }

    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <>
            <MuiPickersUtilsProvider utils={MomentUtils}>
                <Grid container
                    fullwidth
                    justify="center"
                    direction="row"
                    spacing={1}
                    className={classes.cardpad}
                >
                    <Grid item
                        xs={12} md={6} lg={4} xl={3}
                    >
                        <Fragment>
                            <KeyboardDatePicker
                                clearable
                                label="Date"

                                value={selectedDate}
                                placeholder="10/10/2018"
                                onChange={handleDateChange}
                                format="MM/DD/yyyy"
                            />
                        </Fragment>
                    </Grid>
                    <Grid item
                        xs={12} md={6} lg={4} xl={3}
                    >
                        <Fragment>
                            <KeyboardTimePicker
                                label="Start Time"
                                placeholder="08:00 AM"
                                mask="__:__ _M"
                                value={startSleep}
                                onChange={handleStartSleep}
                            />
                        </Fragment>
                    </Grid>
                    <Grid item
                        xs={12} md={6} lg={4} xl={3}
                    >
                        <Fragment>
                            <KeyboardTimePicker
                                label="End Time"
                                placeholder="08:00 AM"
                                mask="__:__ _M"
                                value={endSleep}
                                onChange={handleEndSleep}
                            />
                        </Fragment>
                    </Grid>
                </Grid>
            </MuiPickersUtilsProvider >
            <Box m={6}>
                <Grid container spacing={3} direction="column" alignItems="center">
                    <Grid item xs={12}>
                        <Button onClick={postSleep} className={classes.paper} variant="contained" size="medium" >
                            Log New Nap
                    </Button>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default SleepInput;