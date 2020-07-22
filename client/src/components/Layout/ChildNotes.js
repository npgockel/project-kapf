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
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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
  button1: {
    backgroundColor: theme.palette.success.main,
    margin: theme.spacing(1),
  },
}));


function ChildNotes(props) {
  const classes = useStyles();
  const [notes, setNotes] = useState([]);
  const [postNotes, setPostNotes] = useState([]);

  useEffect(() => {
    loadNotes();
  }, [])


  function loadNotes() {
    API.Note.getAll()
      .then(res => {
        let cn = res.data;
        let cns = cn.filter(item => item.ChildId === props.child.id)
        setNotes(cns)
      })
      .catch(err => console.log(err))
  }


  const postNote = () => {
    let noteData = {
      note: notes,
      ChildId: props.child.id
    }
    API.Note.create(noteData);
    refreshPage();
  };

  const handleNotesChange = (event) => {
    setPostNotes(event.target.value);
  };

  function refreshPage() {
    window.location.reload(false);
  };

  return (
    <div>
      <Card className={classes.root}>
        <Grid item xs={12} md={6}>
          <TextField
            id="outlined-multiline-static"
            label="Notes"
            variant="outlined"
            value={postNotes}
            onChange={handleNotesChange}
          />
          <Button
            variant="contained"
            className={classes.button1}
            onClick={postNote}
          >
            Add
      </Button>
        </Grid>
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

export default ChildNotes;