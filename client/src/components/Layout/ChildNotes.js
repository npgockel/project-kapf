import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InfoIcon from '@material-ui/icons/Info';
import { blue } from '@material-ui/core/colors';
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
  const [notes, setNotes] = useState([])

  useEffect(() => {
    loadNotes();
  }, [])


  function loadNotes() {
    API.Note.getAll()
      .then(res => {
        setNotes(res.data)
      })
      .catch(err => console.log(err))
  }


  console.log(notes);

  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
          <List>
          {notes.map((list) => (
            <ListItem >
              <ListItemIcon>
              <InfoIcon style={{ color: blue[500] }} />
              </ListItemIcon>
              <ListItemText>
                {list.note}
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