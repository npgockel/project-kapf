import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Card, CardMedia, Typography, Grid, Paper, Box } from "@material-ui/core";
import BackBtn from "../components/Layout/BackBtn";
import CopyrightFooter from "../components/Layout/CopyrightFooter"
import { ChildLikes, ChildDislikes, ChildAllergies, ChildNotes } from "../components";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: "white",
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
}));


function LogInfo() {
    const classes = useStyles();


    return (
        <>
            <AppBar
                position="static"
                spacing="0"
                color="transparent"
            // className={classes.heroContent}
            >
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
            </AppBar>

            <div className={classes.root}>
                <BackBtn />
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <Typography variant="h5" className={classes.text}>Likes</Typography>
                        </Paper>
                        <ChildLikes />
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <Typography variant="h5" className={classes.text}>Disikes</Typography>
                        </Paper>
                        <ChildDislikes />
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Typography variant="h5" className={classes.text}>Allergies</Typography>
                        </Paper>
                        <ChildAllergies />
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Typography variant="h5" className={classes.text}>Notes</Typography>
                        </Paper>
                        <ChildNotes />
                    </Grid>
                </Grid>
                <Box mt={8}>
                    <CopyrightFooter />
                </Box>

            </div>
        </>
    );
}


export default LogInfo;