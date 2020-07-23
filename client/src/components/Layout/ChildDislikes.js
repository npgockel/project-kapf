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



function ChildDislikes(props) {
  const classes = useStyles();
  const [dislikes, setDislikes] = useState([]);
  const [postDislikes, setPostDislikes] = useState([]);

  console.log(dislikes)
  useEffect(() => {
    loadDislikes();
  }, [])


  function loadDislikes() {
    API.Dislikes.getAll()
      .then(res => {
        let cd = res.data;
        let cds = cd.filter(item => item.ChildId === props.child.id)
        setDislikes(cds)
      })
      .catch(err => console.log(err))
  }

  const postDislike = () => {
    let dislikeData = {
      dislike: postDislikes,
      ChildId: props.child.id
    }
    API.Dislikes.create(dislikeData);
    refreshPage();
  };

  const handleDislikesChange = (event) => {
    setPostDislikes(event.target.value);
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
            xs={12} md={6}
          >
            <form
              align="center"
            >
              <TextField
                id="outlined-multiline-static"
                label="Dislikes"
                variant="outlined"
                value={postDislikes}
                onChange={handleDislikesChange}
              />
              <Button
                variant="contained"
                className={classes.button1}
                onClick={postDislike}
              >
                Add
      </Button>
            </form>
          </Grid>
        </Grid>
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