import React from "react";
import { AppBar, Button, Card, CardMedia, Grid, Paper, Container, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BackBtn from "./BackBtn";
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles((theme) => ({
    radius: {
        borderRadius: 10,
    },
    headBody: {
        padding: theme.spacing(2, 0, 2, 0),
        borderRadius: 10,
    },

}));


function TopBar() {
    const classes = useStyles();

    return (
        <>
            <Grid container
                justify="center"
                fullwidth
            >
                <Grid item
                    className={classes.headBody}
                    xs={11} sm={10} md={9} lg={8} xl={7}

                >
                    <div >
                        <AppBar
                            className={classes.radius}
                            color="transparent"

                            position="static">
                            <Grid container
                                direction="row"
                                justify="space-between"
                                alignItems="center"
                            >
                                <Grid item
                                >
                                    <IconButton
                                        edge="start"
                                    >
                                        <BackBtn />
                                    </IconButton>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h6"
                                        className={classes.title}
                                    >
                                        Let's Make Your<br></br>Child's Profile
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Button
                                        size="small"
                                        className={classes.buttonOption4}
                                    >
                                        Log<br></br>Out
                                        </Button>
                                </Grid>
                            </Grid>
                        </AppBar>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}

export default TopBar;