import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HealingIcon from '@material-ui/icons/Healing';
import { yellow } from '@material-ui/core/colors';
import SvgIcon from '@material-ui/core/SvgIcon';

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


function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}


function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

function ChildAllergies(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
          <List>
            <ListItem>
              <ListItemIcon>
                <HealingIcon style={{ color: yellow[900] }} />
              </ListItemIcon>
              <ListItemText>
                Peanut Allergy
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <HealingIcon style={{ color: yellow[900] }} />
              </ListItemIcon>
              <ListItemText>
                Bees
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <HealingIcon style={{ color: yellow[900] }} />
              </ListItemIcon>
              <ListItemText>
                Lactose Intolerant
              </ListItemText>
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChildAllergies;