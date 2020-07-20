import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardActions, CardContent, CardMedia, CardActionArea, TextField, Typography, Container, Grid } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import CopyrightFooter from '../components/Layout/CopyrightFooter';



const useStyles = makeStyles((theme) => ({
    heroContent: {
        margin: theme.spacing(0),
    },
    paper: {
        marginTop: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.warning.main,
        color: theme.palette.primary.dark,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: theme.palette.warning.main,
        color: theme.palette.primary.dark,

    },
}));

function LoginForm(props) {
    const classes = useStyles();
    const { formObject, handleFormSubmit, handleInputChange } = props;

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
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <CopyrightFooter />
            </Box>
        </Container>
    );
}

export default LoginForm;
