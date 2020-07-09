import React, { useState }from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';
import API from '../../utils/API.js';

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
    }
}));

function SleepInput() {
    
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [startSleep, setStartSleep] = useState();
    const [endSleep, setEndSleep] = useState();
    const [totalSleep, setTotalSleep] = useState();

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
            sleepDate: selectedDate
        }
        API.Sleep.create(sleepData);
        console.log("thanks for click");
    }

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container spacing={3} direction="column" alignItems="center">
                <Grid item xs={12}>
                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Select Date"
                        format="MM/dd/yyyy"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <KeyboardTimePicker
                        margin="normal"
                        id="time-picker"
                        label="Start Time"
                        value={selectedDate}
                        onChange={handleStartSleep}
                        KeyboardButtonProps={{
                            'aria-label': 'change time',
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <KeyboardTimePicker
                        margin="normal"
                        id="time-picker"
                        label="End Time"
                        value={selectedDate}
                        onChange={handleEndSleep}
                        KeyboardButtonProps={{
                            'aria-label': 'change time',
                        }}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={3} direction="column" alignItems="center">
                <Grid item xs={12}>
                    <Button onClick={postSleep} className={classes.paper} variant="contained" size="large" color="primary">
                        Log New Nap
                    </Button>
                </Grid>
            </Grid>
        </MuiPickersUtilsProvider>
    );
}

export default SleepInput;