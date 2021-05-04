import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";
import { AuthProvider } from "./context/AuthContext";

import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import Collection from "./pages/collection/Collection";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

function App() {
  return (
    <div className="app">
      <GlobalProvider>
        <AuthProvider>
          <Router>
            <Switch>
              <PrivateRoute component={Collection} path="/collection" exact />
              <PublicRoute
                restricted={true}
                component={Signup}
                path="/signup"
                exact
              />
              <PublicRoute
                restricted={true}
                component={Login}
                path="/login"
                exact
              />
              <PublicRoute
                restricted={false}
                component={Search}
                path="/s/:searchTerm"
                exact
              />
              <PublicRoute restricted={false} component={Home} path="/" exact />
            </Switch>
          </Router>
        </AuthProvider>
      </GlobalProvider>
    </div>
  );
}

export default App;
