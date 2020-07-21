import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function BackBtn() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button component={Link} to="/child-overview">
          <ArrowBackIcon/>
      </Button>
    </div>
  );
}
export default BackBtn;