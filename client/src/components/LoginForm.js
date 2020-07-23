import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Button, AppBar, Card, CardMedia, TextField, Typography, Container, Grid } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import CopyrightFooter from '../components/Layout/CopyrightFooter';
import { Link } from "react-router-dom";



const useStyles = makeStyles((theme) => ({
    heroContent: {
        padding: theme.spacing(5, 0, 0, 0),
    },
    radius: {
        borderRadius: 10,
    },
    paper: {
        marginTop: theme.spacing(8),
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
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: theme.palette.warning.main,
        color: theme.palette.primary.dark,
        borderRadius: 10,
    },
}));

function LoginForm(props) {
    const classes = useStyles();
    const { formObject, handleFormSubmit, handleInputChange } = props;

    return (
        <Container component="main">
            <CssBaseline />

            <AppBar
                position="static"
                spacing="0"
                color="transparent"
                fullwidth
                className={classes.heroContent}
            >
                <Grid container
                    fullwidth
                    justify="center"
                >
                    <Grid item
                        xs={12} sm={11} md={10} lg={9} xl={8}
                    >
                        <Card
                            className={classes.radius}
                        >
                            <CardMedia
                                component="img"
                                alt="Swaddle Swan Logo"
                                image="Banner.png"
                                title="Swaddle Swan Logo"
                            />
                        </Card>
                    </Grid>
                </Grid>
            </AppBar>

            <Grid container
                className={classes.paper}>
                <Grid item
                    align="center"
                >
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                </Typography>
                </Grid>
                <Grid
                    xs={11} sm={5} md={4} lg={3}
                >
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
                            component={Link}
                            to="/signup"
                            fullWidth
                            className={classes.submit}
                            align="center"
                        >
                            Don't have an account?<br></br> Sign Up!
                    </Button>
                        <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
                    </form>
                </Grid>
            </Grid>
            <Box mt={8}>
                <CopyrightFooter />
            </Box>
        </Container >
    );
}

export default LoginForm;
