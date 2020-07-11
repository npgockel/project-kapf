import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import { DateTimePicker } from "@material-ui/pickers";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import API from '../../utils/API.js';


// ***These are the selections for user to make with types and units***
const types = [
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

const units = [
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

// ***Styling***
const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));


// ***FoodInput Function***
function FoodInput() {
    const classes = useStyles();
    
    const [type, setType] = useState('formula');
    const [unit, setUnit] = useState('ounce');
    const [quantity, setQuantity] = useState();
    const [selectedDate, setDateChange] = useState(new Date('2014-08-18T21:11:54'));

    const handleTypeChange = (event) => {
        setType(event.target.value);
    };
    const handleUnitChange = (event) => {
        setUnit(event.target.value);
    };
    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };
    const handleDateChange = (event) => {
        setDateChange(event)
    }
    const postFood = () => {
        let foodData = {
            foodType: type,
            foodUnit: unit,
            foodQuantity: quantity,
            foodDate: selectedDate
        }
        API.Food.create(foodData);
        console.log('THE CLICK WORKED!', foodData);
    }

    return (
        <>
            <Grid container spacing={3} direction='column' alignItems='center'>
                <Grid item xs={12}>
                    <form className={classes.root} noValidate autoComplete='off'>
                        <div>
                            <TextField
                                id='standard-select'
                                select
                                label='Type of Food'
                                value={type}
                                onChange={handleTypeChange}
                                helperText='Please select a food type'
                            >
                                {types.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                id='outlined-number'
                                label='Amount'
                                type='number'
                                value={quantity}
                                onChange={handleQuantityChange}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant='outlined'
                            />
                            <TextField
                                id='standard-select'
                                select
                                label='Type of Amount'
                                value={unit}
                                onChange={handleUnitChange}
                                helperText='Please select your amount'
                            >
                                {units.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </div>
                    </form>
                    <Grid item xs={12}>
                        <div>
                            <MuiPickersUtilsProvider utils={MomentUtils}>
                                <Fragment>
                                    <DateTimePicker
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        label='Today = Current Time'
                                        showTodayButton
                                    />
                                </Fragment>
                            </MuiPickersUtilsProvider>
                        </div>
                    </Grid>

                    <Grid container spacing={3} direction='column' alignItems='center'>
                        <Grid item xs={12}>
                            <Button onClick={postFood} className={classes.paper} variant='contained' size='large' color='primary'>
                                Log New Food
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default FoodInput;