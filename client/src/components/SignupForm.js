import React from "react";
import { Avatar, Card, CardMedia, Link, Box, Checkbox, CssBaseline, FormControlLabel, Button, TextField, Container, Grid, Typography } from '@material-ui/core';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import CopyrightFooter from "./Layout/CopyrightFooter";


const useStyles = makeStyles((theme) => ({
    heroContent: {
        padding: theme.spacing(0),
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.success.main,
        color: theme.palette.primary.dark,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: theme.palette.success.main,
        color: theme.palette.primary.dark,
    },
}));

function SignupForm(props) {
    const classes = useStyles();
    const { formObject, handleFormSubmit, handleInputChange } = props;
    // const classes = useStyles();

    return (
        <Container component="main" maxWidth="sm">
            <CssBaseline />

            <div className={classes.heroContent}>
                {/* <Image
          height='auto'
            src="Banner.png"
            disableSpinner
          /> */}
                <Card >
                    <CardMedia
                        component="img"
                        alt="Swaddle Swan Logo"
                        image="Banner.png"
                        title="Swaddle Swan Logo"
                    />
                </Card>
            </div>


            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                value={formObject.firstName}
                                onChange={handleInputChange}
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                value={formObject.lastName}
                                onChange={handleInputChange}
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                value={formObject.email}
                                onChange={handleInputChange}
                                as="input"
                                type="email"
                                placeholder="Enter your Email"
                                helperText="This will be public!"
                                fullWidth
                                id="email"
                                label="email"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                value={formObject.password}
                                onChange={handleInputChange}
                                as="input"
                                type="password"
                                placeholder="Enter your password"
                                helperText="This will be your password (we won't share it with anyone!)"
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="I want to receive a year's worth of cloth diapers from Huggies."
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="#ffdbdb"
                        className={classes.submit}
                        onClick={handleFormSubmit}
                    >
                        Sign Up
          </Button>
                    <Button
                        component={Link} to="/login"
                        fullWidth
                    >
                        Aready have an account? Log in!
                    </Button>


                </form>
            </div>
            <Box mt={8}>
                <CopyrightFooter />
            </Box>
        </Container>
    );
}

export default SignupForm;