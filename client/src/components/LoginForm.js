import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField, Container, Grid, Paper } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
    media: {
        height: 200,
        width: 98,

    },
}));


function LoginForm(props) {
    const classes = useStyles();

    const { formObject, handleFormSubmit, handleInputChange } = props;

    return (
        <>
            <Paper>
                <Container maxWidth="sm">
                    <form>
                        <Grid container
                            spacing={1}
                            container
                            direction="column"
                            justify="center"
                            alignItems="center">
                            <CardMedia
                                className={classes.media}
                                image="toddler.png"
                                title="Toddler"
                            />

                            <Grid item xs={3}>
                                <TextField
                                    label="Email"
                                    value={formObject.email}
                                    name="email"
                                    onChange={handleInputChange}
                                    as="input"
                                    type="email"
                                    placeholder="Enter your Email"
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    label="Password"
                                    value={formObject.password}
                                    name="password"
                                    onChange={handleInputChange}
                                    as="input"
                                    type="password"
                                    placeholder="Enter your password"
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <Button variant="contained" color="primary" type="submit" onClick={handleFormSubmit}>
                                    Login
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                    <form>
                        <Grid container
                            spacing={1}
                            container
                            direction="column"
                            justify="center"
                            alignItems="center">
                            {/* <Grid item xs={3}>
                                <TextField
                                    label="Email"
                                    value={formObject.email}
                                    name="email"
                                    onChange={handleInputChange}
                                    as="input"
                                    type="email"
                                    placeholder="Enter your Email"
                                    helperText="This will be public!"
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    label="Password"
                                    value={formObject.password}
                                    name="password"
                                    onChange={handleInputChange}
                                    as="input"
                                    type="password"
                                    placeholder="Enter your password"
                                    helperText="Make it secure!"
                                />
                            </Grid> */}
                            <Grid item xs={3}>
                                <Button variant="contained" color="primary" type="submit" onClick={handleFormSubmit}>
                                    Signup
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Container>
            </Paper>
        </>
    )
}

export default LoginForm;