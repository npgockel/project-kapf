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
import DeleteBtn from './DeleteBtn';

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
      note: postNotes,
      ChildId: props.child.id
    }
    API.Note.create(noteData);
    refreshPage();
  };

  function deleteNote(id) {
    API.Note.delete(id)
      .then(res => loadNotes())
      .catch(err => console.log(err));
  };

  const handleNotesChange = (event) => {
    setPostNotes(event.target.value);
  };

  function refreshPage() {
    window.location.reload(false);
  };

  return (
    <div>
      <Card >
        <CardContent>
          <List>
            {notes.map((list) => (
              <Grid item xs={12} md={4} sm={6}>
              <ListItem >
                <ListItemIcon>
                  <InfoIcon style={{ color: blue[500] }} />
                </ListItemIcon>
                <ListItemText>
                  {list.note}
                </ListItemText>
                <DeleteBtn onClick={() => deleteNote(list.id)} />
              </ListItem>
              </Grid>
            ))}
          </List>
        </CardContent>
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
            </form>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default ChildNotes;