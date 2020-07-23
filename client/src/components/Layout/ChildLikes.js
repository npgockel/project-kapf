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



function ChildLikes(props) {
  const classes = useStyles();
  const [likes, setLikes] = useState([]);
  const [postLikes, setPostLikes] = useState([]);

  useEffect(() => {
    loadLikes();
  }, [])


  function loadLikes() {
    API.Likes.getAll()
      .then(res => {
        let chila = res.data;
        let chilas = chila.filter(item => item.ChildId === props.child.id)
        setLikes(chilas)
      })
      .catch(err => console.log(err))
  }

  const postLike = () => {
    let likeData = {
      like: postLikes,
      ChildId: props.child.id
    }
    API.Likes.create(likeData);
    refreshPage();
  };

  const handleLikesChange = (event) => {
    setPostLikes(event.target.value);
  };


  function refreshPage() {
    window.location.reload(false);
  };


  return (
    <div>
      <Card className={classes.root}>
        <Grid container
          justify="center"
        >
          <Grid item
            className={classes.cardpad}
            xs={12} md={6}>
            <form
              align="center"
            >
              <TextField
                id="outlined-multiline-static"
                label="Likes"
                variant="outlined"
                value={postLikes}
                onChange={handleLikesChange}
              />
              <Button
                variant="contained"
                className={classes.button1}
                onClick={postLike}
              >
                Add
      </Button>
            </form>
          </Grid>
        </Grid>
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