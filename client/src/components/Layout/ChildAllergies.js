import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HealingIcon from '@material-ui/icons/Healing';
import { yellow } from '@material-ui/core/colors';
import API from '../../utils/API';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    backgroundColor: theme.palette.background.paper,
  },
  cardpad: {
    margin: theme.spacing(1),
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  button1: {
    backgroundColor: theme.palette.info.main,
    margin: theme.spacing(1),
    borderRadius: 10,
  },
}));




function ChildAllergies(props) {
  const classes = useStyles();
  const [allergies, setAllergies] = useState([]);
  const [postAllergies, setPostAllergies] = useState([]);

  useEffect(() => {
    loadAllergies();
  }, [])


  function loadAllergies() {
    API.Allergy.getAll()
      .then(res => {
        let ca = res.data;
        let cas = ca.filter(item => item.ChildId === props.child.id)
        setAllergies(cas)
      })
      .catch(err => console.log(err))
  }


  const postAllergy = () => {
    let allergyData = {
      allergy: postAllergies,
      ChildId: props.child.id
    }
    API.Allergy.create(allergyData);
    refreshPage();
  };


  const handleAllergiesChange = (event) => {
    setPostAllergies(event.target.value);
  };

  function refreshPage() {
    window.location.reload(false);
  };



  return (
    <div>
      <Card className={classes.root}>
        <Grid item
          className={classes.cardpad}

          xs={12} md={6}>
          <form>
            <TextField
              id="outlined-multiline-static"
              label="Allergies"
              variant="outlined"
              value={postAllergies}
              onChange={handleAllergiesChange}
            />
            <Button
              variant="contained"
              className={classes.button1}
              onClick={postAllergy}
            >
              Add
          </Button>
          </form>
        </Grid>
        <CardContent>
          <List>
            {allergies.map((list) => (
              <ListItem >
                <ListItemIcon>
                  <HealingIcon style={{ color: yellow[900] }} />
                </ListItemIcon>
                <ListItemText>
                  {list.allergy}
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChildAllergies;