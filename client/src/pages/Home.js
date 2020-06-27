import React from "react";
import { Container, Paper, Typography, Grid } from "@material-ui/core";

function Home() {

    return (
        <>
            <Paper>
                <Container>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>

                            <Typography variant="h2" align="center" gutterBottom>
                                Hello World
                            </Typography>

                        </Grid>
                    </Grid>
                
            </Container>
            </Paper>
        </>
    )
}

export default Home;