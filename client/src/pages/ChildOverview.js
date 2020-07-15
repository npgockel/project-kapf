import React, { useEffect, useState } from 'react';
import BackBtn from "../components/Layout/BackBtn";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography, Button } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Link } from "react-router-dom";
import API from '../utils/API';


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


function ChildOverview(props) {
    const classes = useStyles();
    const [childs, setChildren] = useState([])
    console.log(props);

    useEffect(() => {
        loadChildren()
    }, [])

    function loadChildren() {
        API.Child.getById()
            .then(res => {
                setChildren(res.data)
            })
            .catch(err => console.log(err))
    }




    return (
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
                            <img src={"https://i.ibb.co/SPchxzh/beautifulbabies.png"}></img>
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
            </Grid>
        </div>
    );
}

export default ChildOverview;