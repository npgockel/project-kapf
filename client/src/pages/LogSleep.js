import React from "react";
import BackBtn from "../components/Layout/BackBtn";
import CopyrightFooter from "../components/Layout/CopyrightFooter";
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Card, CardMedia, Typography, Box, Paper, Grid } from "@material-ui/core";
import SleepTable from "../components/Layout/SleepTable"
import SleepInput from "../components/Layout/SleepInput"


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: "white",
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        borderRadius: 30,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
}));


function LogSleep() {
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
                <Grid container spacing={3}>
                    <BackBtn />
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Typography variant="h3" className={classes.text}>Sleeping Times</Typography>
                        </Paper>
                    </Grid>
                </Grid>
                <SleepTable />
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Typography variant="h3" className={classes.text}>Add a New Nap</Typography>
                        </Paper>
                    </Grid>
                </Grid>
                <SleepInput />
                <Box mt={8}>
                    <CopyrightFooter />
                </Box>
            </div>
        </>
    );
}


export default LogSleep;