import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Home, Requirements, Forum } from "./pages";
import Auth from "./pages/Auth"
import { Navigation, Error } from "./components";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import API from './utils/API';

function App() {
  const [user, setUser] = useState({});
  const [error, setError] = useState("")

  function loginUser(email, password) {
    const data = {
      email: email,
      password: password
    }
    API.Auth.login(data).then(res => {
      setUser(res.data)

    })
  }

  function signupUser(email, password) {
    const data = {
      email: email,
      password: password
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
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Navigation user={user} logoutUser={logoutUser} />
            </Grid>
            <Grid item xs={12}>
              {error && <Error error={error} clearError={clearError} />}
            </Grid>
            <Grid item xs={12}>
              <Switch>
                <Route exact path={["/", "/home"]}>
                  <Home />
                </Route>
                <Route exact path={["/requirements"]}>
                  <Requirements />
                </Route>
                <PrivateRoute exact user={user} path={["/forum"]}>
                  <Forum user={user} />
                </PrivateRoute>
                <Route exact path={["/login", "/signup"]}>
                  <Auth
                    user={user}
                    loginUser={loginUser}
                    signupUser={signupUser}
                  />
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
