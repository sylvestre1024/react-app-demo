import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './style/App.scss';
import Navigation from "./components/molecules/Navigation";
import Login from "./components/pages/Login";
import Welcome from "./components/pages/Welcome";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h2>Etes-vous-pret à faire de grandes choses en React ?</h2>
        <Navigation/>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/welcome'>
            <Welcome />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
