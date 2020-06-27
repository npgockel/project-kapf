import React from "react";
import { Button, AppBar, Toolbar } from '@material-ui/core';
import { Link } from "react-router-dom";

function Navigation(props) {
  const { user, logoutUser } = props;

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Button component={Link} to="/home" color="inherit">Home</Button>
          <Button component={Link} to="/requirements" color="inherit">Requirements</Button>
          <Button component={Link} to="/forum" color="inherit">Forum</Button>

          {user.email ?
            <>
              <Button color="inherit">Logged in as: {user.email}</Button>
              <Button component={Link} to="/home" onClick={logoutUser} color="inherit">Logout</Button>
            </>
            :
            <>
              <Button component={Link} to="/login" color="inherit">Login</Button>
              <Button component={Link} to="/signup" color="inherit">Signup</Button>
            </>
          }
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navigation;