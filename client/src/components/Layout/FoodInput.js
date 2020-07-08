import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import { DateTimePicker } from "@material-ui/pickers";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import API from "../../utils/API.js"

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

const types = [
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
    const [type, setType] = useState('ounce');
    const [quantity, setQuantity] = useState();
    const [selectedDate, handleDateChange] = useState(new Date());

    const handleFoodChange = (event) => {
        setFood(event.target.value);
    };
    const handleTypeChange = (event) => {
        setType(event.target.value);
    };
    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };
    const postFood = () => {
        let foodData = {
            foodType: food,
            foodUnit: type,
            foodQuantity: quantity,
            foodDate: selectedDate
        }
        API.Food.create(foodData);
        console.log("thanks for click");
    }

    return (
        <>
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
                                value={quantity}
                                onChange={handleQuantityChange}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                            />
                            <TextField
                                id="standard-select"
                                select
                                label="Type of Amount"
                                value={type}
                                onChange={handleTypeChange}
                                helperText="Please select your amount"
                            >
                                {types.map((option) => (
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
            <Grid container spacing={3} direction="column" alignItems="center">
                <Grid item xs={12}>
                    <Button onClick={postFood} className={classes.paper} variant="contained" size="large" color="primary">
                        Log New Food
                </Button>
                </Grid>
            </Grid>
        </>
    );
}

export default FoodInput;