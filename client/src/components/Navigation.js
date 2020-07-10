import React from "react";
import { Button, AppBar, Toolbar } from '@material-ui/core';
import { Link } from "react-router-dom";

function Navigation(props) {
  const { user, logoutUser } = props;

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
        <Button component={Link} to="/home" color="inherit">ParentHome</Button>
        <Button component={Link} to="/scheduling" color="inherit">Scheduling</Button>
          <Button component={Link} to="/addchild" color="inherit">Add Child</Button>
          <Button component={Link} to="/nannyhome" color="inherit">Nanny Home</Button>


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
          <Button component={Link} to="/child-overview" color="inherit">Child Home</Button>
          <Button component={Link} to="/logfood" color="inherit">Food</Button>
          <Button component={Link} to="/logsleep" color="inherit">Sleep</Button>
          <Button component={Link} to="/loginfo" color="inherit">Info</Button>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navigation;