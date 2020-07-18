import React, { useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import API from '../../utils/API.js';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import CopyrightFooter from './CopyrightFooter';



const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    stepper: {
        padding: theme.spacing(3, 0, 5),
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },

}));

function BabysitterLink() {
    const classes = useStyles();
    const [babysitterEmail, setBabysitterEmail] = useState('');
    const [babysitterId, setBabysitterId] = useState();

    const handleEmail = (event) => {
        setBabysitterEmail(event.target.value);
    };

    const handleBabysitterId = (id) => {
        setBabysitterId(id);
    }




    function findBabysitters(babysitterEmailQuery) {
        API.Adult.getAll().then(res => {
            for (let i = 0; i < res.data.length; i++) {
                if (res.data[i].email === babysitterEmailQuery) {
                    handleBabysitterId(res.data[i].id);
                }
            }
        })
    }

    function displayBabysitter(id) {
        API.Adult.getById(id).then(res => {
            console.log(res.data);

            if (!res.data) {
                return (
                    <>
                    No Babysitter Found
                    </>
                )
            }

            else {
                return (
                    <>
                        {res.data.firstName}
                        {res.data.lastName}
                        {res.data.email}
                    </>
                
                    )
            }
        })
    }

    return (
        <Fragment>
            <CssBaseline />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography component="h1" variant="h4" align="center">
                        Search for a Babysitter
          </Typography>
                    <Typography variant="h6" gutterBottom>
                        Search
          </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={6} sm={6}>
                            <TextField
                                id="outlined-helperText"
                                label="Search Babysitters"
                                defaultValue=""
                                helperText="Email only"
                                variant="outlined"
                                onChange={(handleEmail)}
                            />
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <Button onClick={findBabysitters(babysitterEmail)} variant='contained' size='large' color='primary'>
                                Search
                </Button>
                        </Grid>
                    </Grid>


                </Paper>

                <Paper className={classes.paper}>

                    <Typography variant="h6" gutterBottom>
                        Babysitters Found
      </Typography>
                    <Typography variant="h6" gutterBottom>
                        {displayBabysitter(babysitterId)}
                    </Typography>


                </Paper>

                <CopyrightFooter />
            </main>
        </Fragment>
    );
};

export default BabysitterLink;