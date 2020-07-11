import React from "react";
import { Button, AppBar, Toolbar } from '@material-ui/core';
import { Link } from "react-router-dom";

function Navigation(props) {
  const { user, logoutUser } = props;

  return (
    <>
      <AppBar position="static">
        <Toolbar>


          {user.email ?
            <>
              <Button component={Link} to="/home" color="inherit">Home</Button>
              <Button component={Link} to="/addchild" color="inherit">Add Your Child</Button>
              <Button component={Link} to="/nannyhome" color="inherit">Nanny Home</Button>
              <Button color="inherit">Logged in as: {user.email}</Button>
              <Button component={Link} to="/home" onClick={logoutUser} color="inherit">Logout</Button>
              <Button component={Link} to="/child-overview" color="inherit">ChildOverview</Button>
              <Button component={Link} to="/logfood" color="inherit">LogFood</Button>
              <Button component={Link} to="/logsleep" color="inherit">LogSleep</Button>
              <Button component={Link} to="/loginfo" color="inherit">LogInfo</Button>

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