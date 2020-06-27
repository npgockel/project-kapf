import React from "react";
import { Container, Grid, Button, TextField, Paper, Typography } from '@material-ui/core';

function LoginForm(props) {
    const { formObject, handleFormSubmit, handleInputChange } = props;

    return (
        <>
            <Paper>
                <Container maxWidth="sm">
                    <form>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography variant="h4" gutterBottom>
                                    Login
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
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
                            <Grid item xs={12}>
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
                            <Grid item xs={12}>
                                <Button variant="contained" color="primary" type="submit" onClick={handleFormSubmit}>
                                    Login
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