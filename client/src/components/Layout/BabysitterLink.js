import React, { useEffect, useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import API from '../../utils/API.js';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import CopyrightFooter from './CopyrightFooter';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';



const useStyles = makeStyles((theme) => ({
    layout: {
        width: 'auto',
        // marginLeft: theme.spacing(2),
        // marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        margin: theme.spacing(1, 0, 1),
        align: 'center',
        padding: theme.spacing(1, 0, 1, 0),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(1, 0, 1, 0),
        },
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
    button4: {
        backgroundColor: theme.palette.error.main,
        margin: theme.spacing(1),
        borderRadius: 10,
    },

    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },

}));

function BabysitterLink(props) {
    const classes = useStyles();
    const [babysitterEmail, setBabysitterEmail] = useState('');
    const [babysitterId, setBabysitterId] = useState();
    const [babysitter, setBabysitter] = useState('');
    const [babysitterFirstName, setFirstName] = useState('');
    const [babysitterLastName, setLastName] = useState('');

    const handleFirstName = (name) => {
        setFirstName(name);
    }

    const handleLastName = (name) => {
        setLastName(name);
    }

    const handleEmail = (event) => {
        setBabysitterEmail(event.target.value);
        console.log(babysitterEmail);
    };

    const handleBabysitterId = (id) => {
        setBabysitterId(id);
        console.log(id);
    }

    const postBabysitterLink = () => {
        let babysitterLink = {
            AdultId: babysitterId,
            ChildId: props.child.id
        }
        API.BabysitterRelation.create(babysitterLink)
    }

    useEffect(() => {
        API.Adult.getById(babysitterId)
            .then(res => {
                setBabysitter(res.data.email);
                console.log(res.data.email);
                handleFirstName(res.data.firstName);
                handleLastName(res.data.lastName);

            })
            .catch(err => console.log(err))
    }, [babysitterId])





    function findBabysitters(babysitterEmailQuery) {
        API.Adult.getAll().then(res => {
            for (let i = 0; i < res.data.length; i++) {
                if (res.data[i].email === babysitterEmailQuery) {
                    handleBabysitterId(res.data[i].id);

                }
            }
        })
    }

    return (
        <Fragment>
            <CssBaseline />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Grid container
                        justify="center"
                        spacing={1}
                        direction="column"
                        fullwidth
                        alignItems="center"
                    >
                        <Grid item
                            xs={12}
                            sm={8}
                        >
                            <TextField
                                id="outlined-helperText"
                                label="Babysitters (by email)"
                                value={babysitterEmail}
                                // helperText="Email only"
                                variant="outlined"
                                onChange={handleEmail}
                            />
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <Button
                                onClick={() => findBabysitters(babysitterEmail)}
                                className={classes.button4}
                                variant='contained'
                                size='medium'
                            >
                                Search
                            </Button>
                        </Grid>
                    </Grid>


                </Paper>

                <Paper className={classes.paper}
                    align="center"
                    justify="center"
                >
                    <Typography variant="h6" gutterBottom>
                        Babysitters Found
                    </Typography>
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                {babysitterFirstName} {babysitterLastName}
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                {babysitter}
                            </Typography>
                        </CardContent>
                    </Card>
                    <Button
                        size="medium"
                        onClick={postBabysitterLink}
                        className={classes.button4}
                    >
                        Add Babysitter
                    </Button>
                </Paper>

            </main>
        </Fragment>
    );
};

export default BabysitterLink;