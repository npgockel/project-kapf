import React, { useEffect, useState } from 'react';
import BackBtn from "../components/Layout/BackBtn";
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, CardMedia, Typography, Card, CardContent, Grid, Paper, Button, Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import API from '../utils/API';
import CopyrightFooter from "../components/Layout/CopyrightFooter"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: "white",
        background: theme.palette.primary.main,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
}));


function ChildOverview(props) {
    const classes = useStyles();
    const [childs, setChildren] = useState([])

    useEffect(() => {
        loadChildren()
    })

    function loadChildren() {
        API.Child.getById(props.location.state.id)
            .then(res => {
                setChildren(res.data)
            })
            .catch(err => console.log(err))
    }


    return (
        <>
            <AppBar
                position="static"
                spacing="0"
                color="transparent"
            // className={classes.heroContent}
            >
                {/* <Image
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
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography variant="h3" className={classes.text}>
                            Child Overview
                        </Typography>
                    </Paper>
                    <BackBtn />
                </Grid>
            </Grid>
            <Grid container spacing={3} direction="column" alignItems="center">
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <img src={childs.childImg} alt="beauty"></img>
                            <Typography gutterBottom variant="h5" component="h2">
                                {childs.childName}
                            </Typography>

                        </CardContent>

                    </Card>
                    <div>
                    </div>
                </Grid>
            </Grid>
            <Grid container spacing={3} direction="column" alignItems="center">
                <Grid item xs={12}>
                    <Button component={Link} to={{ pathname: "/logfood", state: props.location.state }} className={classes.paper} variant="contained" size="large" color="primary">
                        Log Food
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button component={Link} to="/logsleep" className={classes.paper} variant="contained" size="large" color="primary">
                        Log Sleep
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button component={Link} to="/loginfo" className={classes.paper} variant="contained" size="large" color="primary">
                        Log Info
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button component={Link} to="/addbabysitter" className={classes.paper} variant="contained" size="large" color="primary">
                        Add Babysitter
                    </Button>
                </Grid>
            </Grid>
            <Box mt={8}>
                <CopyrightFooter />
            </Box>

        </div>
        </>
    );
}

export default ChildOverview;