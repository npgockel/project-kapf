import React, { useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

function AddressForm() {
  const [gender, setGender] = useState('female');
  const [fname, setFName] = useState('First Name');
  const [lname, setLName] = useState('Last Name');
  const [DOB, setDOB] = useState('YYYY-MM-DD');
  const classes = useStyles();

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  const handleFNameChange = (event) => {
    setFName(event.target.value);
  };
  const handleLNameChange = (event) => {
    setLName(event.target.value);
  };
  const handleDOBChange = (event) => {
    setDOB(event.target.value);
  };

  return (
    <Fragment>
      <Typography variant="h6" gutterBottom>
        Child's Basics
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            value={fname}
            onChange={handleFNameChange}
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            value={lname}
            onChange={handleLNameChange}
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup aria-label="gender" name="gender1" value={gender} onChange={handleGenderChange}>
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>        </Grid>
        <Grid item xs={12} sm={6}>
          <form className={classes.container} noValidate>
            <TextField
              id="date"
              label="Birthday"
              type="date"
              defaultValue="X"
              className={classes.textField}
              onChange={handleDOBChange}
              value={DOB}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default AddressForm;