import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Home, SplashPage, ChildOverview, AddChild, LogFood, LogInfo, LogSleep, AddBabysitter } from "./pages";
import Auth from "./pages/Auth"
import { Navigation, Error } from "./components";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import API from './utils/API';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  someStyle: {
    color: "red"
  }
});

function App() {
  const [user, setUser] = useState({});
  const [error, setError] = useState("")

  useEffect(() => {
    function getCurrentUser() {
      API.Auth.user_data().then(res => {
        if (res.data) {
          setUser(res.data)
        }
      })
    }
    getCurrentUser()
  }, []) 



  function loginUser(email, password) {
    const data = {
      email: email,
      password: password
    }
    API.Auth.login(data).then(res => {
      setUser(res.data)

    })
  }

  function signupUser(email, password, firstName, lastName) {
    const data = {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName
    }
    API.Auth.signup(data).then(res => {
      setUser(res.data)
    }).catch(err => {
      setError("Email already taken")
    })
  }

  function logoutUser() {
    API.Auth.logout().then(res => {
      setUser({});
    })
  }

  function clearError() {
    setError("");
  }



  return (
    <>
      <Router>
        <Container fullwidth>
          <Grid container spacing={3}>
            {/* <Grid item xs={12}>
              <Navigation user={user} logoutUser={logoutUser} />
            </Grid>
            <Grid item xs={12}>
              {error && <Error error={error} clearError={clearError} />}
            </Grid> */}
            <Grid item xs={12}>
              <Switch>
              <Route exact path={["/","/splashpage"]}>
                  <SplashPage
                  />
                </Route>
                <Route exact path={["/addchild"]} render={props => < AddChild {...props} />}>
                </Route>
                <Route exact path={["/home"]}>
                  <Home
                  user={user} />
                </Route>
                <Route exact path={["/addbabysitter"]} render={props => < AddBabysitter {...props} />}>
                </Route>
                <Route exact path={["/login", "/signup"]}>
                  <Auth
                    user={user}
                    loginUser={loginUser}
                    signupUser={signupUser}
                  />
                </Route>
                <Route exact path={["/child-overview"]} render={props => < ChildOverview {...props} />}>
                </Route>
                <Route exact path={["/logfood"]} render={props => < LogFood {...props} />}>
                </Route>
                <Route exact path={["/logsleep"]} render={props => < LogSleep {...props} />}>
                </Route>
                <Route exact path={["/loginfo"]} render={props => < LogInfo {...props} />}>
                </Route>
              </Switch>
            </Grid>
          </Grid>
        </Container>
      </Router>
    </>
  );
}

function PrivateRoute(props) {
  return (
    <>
      {props.user.email ?
        <Route {...props}>
          {props.children}
        </Route>
        :
        <Redirect to="/login" />
      }
    </>
  )
}

export default App;
