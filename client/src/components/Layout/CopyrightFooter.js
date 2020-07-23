import React from 'react';
import { Grid, Link, Typography } from '@material-ui/core';


function CopyrightFooter() {
    return (
        <Grid contianer>
            <Grid item spacing={1}>
                <Typography variant="body2"
                    color="textSecondary" align="center">
                    {'Copyright © '}
                    <Link color="inherit" href="/">
                        Swaddle
                    </Link>{' '}
                    {new Date().getFullYear()}
                </Typography>

            </Grid>
        </Grid>
    );
};

export default CopyrightFooter;