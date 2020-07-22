import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(0),
    },
  },
}));

function BackBtn() {
  const classes = useStyles();
  let history = useHistory();

  return (
    <div className={classes.root}>
      <Button onClick={() => history.goBack()}>
          <ArrowBackIcon/>
      </Button>
    </div>
  );
}
export default BackBtn;


// to={{ pathname: "/child-overview", state: props.location.state }}>