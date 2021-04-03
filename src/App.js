import React, { Component, Suspense } from "react";
import "./App.css";
import routes from "./routes";
import { Switch, Route } from "react-router-dom";
import axios from "axios";

console.dir(axios);
console.log(axios.defaults.baseURL)
console.log(axios.defaults.headers.common.Authorization);

class App extends Component {
  render() {
    return (
      <>
        <Suspense fallback="loading">
          <Switch>
            {routes.map((route) => {
              return <Route {...route} />;
            })}
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default App;
