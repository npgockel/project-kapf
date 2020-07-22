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

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    backgroundColor: theme.palette.background.paper,
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
}));




function ChildAllergies(props) {
  const classes = useStyles();
  const [allergies, setAllergies] = useState([])

  useEffect(() => {
    loadAllergies();
  }, [])


  function loadAllergies() {
    API.Allergy.getAll()
      .then(res => {
        setAllergies(res.data)
      })
      .catch(err => console.log(err))
  }


  const postAllergy = () => {
    let allergyData = {
        allergy: allergies
    }
    API.Allergy.create(allergyData);
    console.log(allergyData);
};


const handleAllergiesChange = (event) => {
  setAllergies(event.target.value);
};





  return (
    <div>
      <Card className={classes.root}>
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