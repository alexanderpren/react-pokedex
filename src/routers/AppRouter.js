import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  Redirect
  } from "react-router-dom";
import { AuthRouter } from './AuthRouter';
import {HomeScreen} from "../components/home/HomeScreen"

export const AppRouter = () => {
    return (
        <Router>
            <Switch>

                <Route path="/auth" component={AuthRouter}></Route>
                <Route exact path="/" component={HomeScreen}></Route>
                <Redirect to="/auth/login"></Redirect>
            </Switch>
            
        </Router>
    )
}
