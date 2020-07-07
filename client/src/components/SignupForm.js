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



function SignupForm(props) {
    const classes = useStyles();
    const { formObject, handleFormSubmit, handleInputChange } = props;

    return (
        <>

            {/* <Paper> */}
            <Container maxWidth="sm">
                <form>
                    <Grid container
                        spacing={0}
                        container
                        direction="column"
                        justify="space-between"
                        alignItems="center">
                        <CardMedia
                            className={classes.media}
                            image="toddler.png"
                            title="Toddler"
                        />

                        <Grid item xs={3}>
                            <TextField
                                label="Name"
                                value={formObject.email}
                                name="name"
                                onChange={handleInputChange}
                                as="input"
                                type="nmae"
                                placeholder="Enter your Name"
                            />
                        </Grid>
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
                        <Grid>
                            <TextField
                                label="Confirm Password"
                                value={formObject.password}
                                name="confirmpassword"
                                onChange={handleInputChange}
                                as="input"
                                type="password"
                                placeholder="Confirm password"
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
                    </Grid>
                </form>
                <form>
                    <Grid container
                        spacing={0}
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid item xs={3}>
                            <Button variant="contained" color="primary" type="submit" onClick={handleFormSubmit}>
                                Signup
                                </Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
            {/* </Paper> */}
        </>
    )
}

export default SignupForm;