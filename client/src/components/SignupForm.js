import React from "react";
import { Button, TextField, Container, Grid, Typography } from '@material-ui/core';

// function SignupForm(props) {
//     const { formObject, handleFormSubmit, handleInputChange } = props;

//     return (
//         <>
//             <Paper>
//                 <Container maxWidth="sm">
//                     <form>
//                         <Grid container spacing={3}>
//                             <Grid item xs={12}>
//                                 <Typography variant="h4" gutterBottom>
//                                     Signup
//                                 </Typography>
//                             </Grid>
//                             <Grid item xs={12}>
//                                 <TextField
//                                     label="Email"
//                                     value={formObject.email}
//                                     name="email"
//                                     onChange={handleInputChange}
//                                     as="input"
//                                     type="email"
//                                     placeholder="Enter your Email"
//                                     helperText="This will be public!"
//                                 />
//                             </Grid>
//                             <Grid item xs={12}>
//                                 <TextField
//                                     label="Password"
//                                     value={formObject.password}
//                                     name="password"
//                                     onChange={handleInputChange}
//                                     as="input"
//                                     type="password"
//                                     placeholder="Enter your password"
//                                     helperText="This will be your password (we won't share it with anyone!)"
//                                 />
//                             </Grid>
//                             <Grid item xs={12}>
//                                 <Button variant="contained" color="primary" type="submit" onClick={handleFormSubmit}>
//                                     Signup
//                                 </Button>
//                             </Grid>
//                         </Grid>
//                     </form>
//                 </Container>
//             </Paper>
//         </>
//     )
// }

// export default SignupForm;
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function SignupForm(props) {
    const classes = useStyles();
    const { formObject, handleFormSubmit, handleInputChange } = props;
    // const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
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
                        color="primary"
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
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}

export default SignupForm;