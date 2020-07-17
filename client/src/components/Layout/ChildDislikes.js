import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import { red } from '@material-ui/core/colors';
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



function ChildDislikes(props) {
  const classes = useStyles();
  const [dislikes, setDislikes] = useState([])

  useEffect(() => {
    loadDislikes();
  }, [])


  function loadDislikes() {
    API.Dislikes.getAll()
      .then(res => {
        setDislikes(res.data)
      })
      .catch(err => console.log(err))
  }


  console.log(dislikes);

  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
          <List>
          {dislikes.map((list) => (
            <ListItem >
              <ListItemIcon>
                <SentimentVeryDissatisfiedIcon style={{ color: red[500] }} />
              </ListItemIcon>
              <ListItemText>
                {list.dislike}
              </ListItemText>
            </ListItem>
              ))}
          </List>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChildDislikes;