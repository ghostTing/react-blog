import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Header from '../layout/Header'
import Login from "../views/Login";
import BlogList from "../views/BlogList";

const Router = () => (
  <BrowserRouter basename="blog">
    <div>
      <Header></Header>
      <div className="view-container">
        <Route exact path="/login" component={Login}/>
        <Route exact path="/list" component={BlogList}/>
      </div>
    </div>
  </BrowserRouter>
);
export default Router
