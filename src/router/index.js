import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from '../layout/Header'
import Login from "../views/Login";
import BlogList from "../views/BlogList";
const routes = [
  {
    path: "/blog/home",
    component: BlogList
  }
];
const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login}></Route>
      <Route path="/blog" component={BlogContent}></Route>
    </Switch>
  </BrowserRouter>
);
const BlogContent = () => (
  <div>
    <Header></Header>
    <div className="view-container">
      <Switch>
        {routes.map((route, i) => <Route key={i} {...route} />)}
      </Switch>
    </div>
  </div>
)
export default Router
