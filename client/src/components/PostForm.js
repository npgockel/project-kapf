import React from "react";
import { Button, Grid, Paper, Container, TextField, Typography } from '@material-ui/core';

function PostForm(props) {
    const { formObject, handleFormSubmit, handleInputChange } = props;

    return (
        <>
            <Paper>
                <Container maxWidth="sm">
                    <form>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography variant="h6">
                                    New Post
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Title"
                                    value={formObject.title}
                                    name="title"
                                    onChange={handleInputChange}
                                    helperText="Enter the Title of your Post"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Body"
                                    value={formObject.body}
                                    name="body"
                                    onChange={handleInputChange}
                                    helperText="Enter the Body of your Post"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" color="primary" type="submit" onClick={handleFormSubmit}>
                                    Post!
                                </Button>
                            </Grid>
                        </Grid>

                    </form>
                </Container>
            </Paper>
        </>
    )
}

export default PostForm;