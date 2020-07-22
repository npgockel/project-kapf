import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import { green } from '@material-ui/core/colors';
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



function ChildLikes(props) {
  const classes = useStyles();
  const [likes, setLikes] = useState([])

  useEffect(() => {
    loadLikes();
  }, [])


  function loadLikes() {
    API.Likes.getAll()
      .then(res => {
        setLikes(res.data)
      })
      .catch(err => console.log(err))
  }

  const postLike = () => {
    let likeData = {
        like: likes
    }
    API.Likes.create(likeData);
    console.log(likeData);
};

const handleLikesChange = (event) => {
  setLikes(event.target.value);
};

  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
          <List>
          {likes.map((list) => (
            <ListItem >
              <ListItemIcon>
              <SentimentSatisfiedAltIcon style={{ color: green[500] }} />
              </ListItemIcon>
              <ListItemText>
                {list.like}
              </ListItemText>
            </ListItem>
              ))}
          </List>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChildLikes;