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
import Box from '@material-ui/core/Box';
import 'moment-timezone';


// ***These are the selections for user to make with types and units***
const types = [
    {
        value: 'Formula',
        label: 'Formula',
    },
    {
        value: 'Breast Milk',
        label: 'Breast Milk',
    },
    {
        value: 'Puree',
        label: 'Puree',
    },
    {
        value: 'Solid',
        label: 'Solid',
    },
];

const units = [
    {
        value: 'oz.',
        label: 'oz.',
    },
    {
        value: 'grams',
        label: 'grams',
    },
    {
        value: 'mL',
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
    buttonOption1: {
        background: theme.palette.secondary.light
    }
}));


// ***FoodInput Function***
function FoodInput(props) {
    const classes = useStyles();

    const [type, setType] = useState('Formula');
    const [unit, setUnit] = useState('oz.');
    const [quantity, setQuantity] = useState();
    const [selectedDate, setDateChange] = useState(new Date());

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
            foodDate: selectedDate,
            ChildId: props.child.id
        }
        API.Food.create(foodData);
        console.log('THE CLICK WORKED!', foodData);
        refreshPage();
    }

    function refreshPage() {
        window.location.reload(false);
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
                            // variant='outlined'
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
                    </form>
                    <Box m={6}>
                        <Grid container spacing={3} direction='column' alignItems='center'>
                            <Grid item
                                xs={12}
                                className={classes.buttonOption1}>
                                <Button
                                    onClick={postFood}
                                    className={classes.buttonOption1}
                                    variant='contained'
                                    size='large'
                                >
                                    Log New Food
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default FoodInput;