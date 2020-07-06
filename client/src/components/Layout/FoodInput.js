import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import { DateTimePicker } from "@material-ui/pickers";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';


const foods = [
    {
        value: 'formula',
        label: 'Formula',
    },
    {
        value: 'breast milk',
        label: 'Breast Milk',
    },
    {
        value: 'puree',
        label: 'Puree',
    },
    {
        value: 'solid',
        label: 'Solid',
    },
];

const amounts = [
    {
        value: 'ounce',
        label: 'oz.',
    },
    {
        value: 'gram',
        label: 'grams',
    },
    {
        value: 'milliLiters',
        label: 'mL',
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));


function FoodInput() {
    const classes = useStyles();
    const [food, setFood] = useState('formula');
    const [amount, setAmount] = useState('ounce');
    const [selectedDate, handleDateChange] = useState(new Date());

    const handleFoodChange = (event) => {
        setFood(event.target.value);
    };
    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    return (
        <Grid container spacing={3} direction="column" alignItems="center">
            <Grid item xs={12}>
                <form className={classes.root} noValidate autoComplete="off">
                    <div>
                        <TextField
                            id="standard-select"
                            select
                            label="Type of Food"
                            value={food}
                            onChange={handleFoodChange}
                            helperText="Please select food type"
                        >
                            {foods.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            id="outlined-number"
                            label="Amount"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                        />
                        <TextField
                            id="standard-select"
                            select
                            label="Type of Amount"
                            value={amount}
                            onChange={handleAmountChange}
                            helperText="Please select your amount"
                        >
                            {amounts.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                </form>
            </Grid>
            <Grid item xs={12}>
                <div>
                    <MuiPickersUtilsProvider utils={MomentUtils}>
                        <Fragment>
                            <DateTimePicker
                                value={selectedDate}
                                onChange={handleDateChange}
                                label="Today = Current Time"
                                showTodayButton
                            />
                        </Fragment>
                    </MuiPickersUtilsProvider>
                </div>
            </Grid>
        </Grid>
    );
}

export default FoodInput;