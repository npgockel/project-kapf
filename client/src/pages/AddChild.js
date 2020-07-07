import React from 'react';
import { SwipeableTemporaryDrawer } from "../components";
import { makeStyles } from '@material-ui/core/styles';

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

    }
});

export default function Home() {
    const classes = useStyles();

    return (
        <>
            {/* <Grid container spacing={1}>
                <Grid item xs={4}>
                    <Container className={classes.paper}>xs=4</Container>
                </Grid>
                <Grid item xs={4}>
                    <Container className={classes.paper}>xs=4</Container>
                </Grid>
                <Grid item xs={4}>
                    <Container className={classes.paper}>xs=4</Container>
                </Grid>
                <Grid item xs={8}>
                    <Container className={classes.paper}>xs=8</Container>
                </Grid>
                <Grid item xs={4}>
                    <Container className={classes.paper}>xs=4</Container>
                </Grid>
            </Grid>
 */}

            <Grid container spacing={2}>
                <Grid container item
                    className={classes.topAlignment}
                    xs={12}
                    justify="flex-start"
                    alignItems="center"

                >
                    <ArrowBackIosIcon></ArrowBackIosIcon>

                </Grid>


                <Grid container item
                    className={classes.paper}
                    xs={12}
                    justify="center"
                    alignItems="center"

                >
                    <h2>Add your Nugget</h2>


                </Grid>
            </Grid>


            <Grid container
                spacing={2}
                direction="column"
            >
                <Grid container item
                    className={classes.paper}
                    xs={6}
                    justify="center"
                    alignItems="center"
                >
                    <form className={classes.root} noValidate autoComplete="off">
                        <Input defaultValue="Name" inputProps={{ 'aria-label': 'description' }} /> 
                        <br></br>
                        <Input placeholder="Gender" inputProps={{ 'aria-label': 'description' }} />
                        <br></br>
                        <Input defaultValue="Birthdate" disabled inputProps={{ 'aria-label': 'description' }} />                        <br></br>
                        <Input defaultValue="Allergy" error inputProps={{ 'aria-label': 'description' }} />
                    </form>

                    {/* <FormControl component="fieldset">
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1"
                        //  value={value} onChange={handleChange}
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </FormControl> */}
                </Grid>

            </Grid>
        </>
    );
}
