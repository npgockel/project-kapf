import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField, Typography, Container, Grid, Paper } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';

// const useStyles = makeStyles((theme) => ({
//     media: {
//         height: 200,
//         width: 98,


// }));



import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import { makeStyles } from '@material-ui/core/styles';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="/home">
                Nanny Nugget
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: '#d1d1f9',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function LoginForm(props) {
    const classes = useStyles();
    const { formObject, handleFormSubmit, handleInputChange } = props;

    const preventDefault = (event) => event.preventDefault();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
        </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        onChange={handleInputChange}
                        value={formObject.email}
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        value={formObject.password}
                        onChange={handleInputChange}
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="#ffdbdb" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="#ffdbdb"
                        className={classes.submit}
                        onClick={handleFormSubmit}
                    >
                        Sign In
                    </Button>
                    <Button
                        component={Link} to="/child-overview"
                        fullWidth
                    >
                        Don't have an account? Sign Up!
                    </Button>


                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        {/* <Grid item>
                            <Link
                                href="/signup"
                                onClick={preventDefault}
                            >
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid> */}
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}

