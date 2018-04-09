import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from '../layout/Header'
import Login from '../views/Login'
import BlogList from '../views/BlogList'
import BlogDetail from '../views/BlogDetail'
import CreateBlog from '../views/CreateBlog'

const BLOG_ROUTES = [
  {
    path: '/blog/home',
    component: BlogList
  },
  {
    path: '/blog/detail',
    component: BlogDetail
  }
]
const ADMIN_ROUTES = [
  {
    path: '/admin/create-blog',
    component: CreateBlog
  }
]
const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login}></Route>
      <Route path="/blog" component={BlogContent}></Route>
      <Route path="/admin" component={AdminContent}></Route>
    </Switch>
  </BrowserRouter>
)
const BlogContent = () => (
  <div>
    <Header></Header>
    <div className="view-container">
      <Switch>
        {BLOG_ROUTES.map((route, i) => <Route key={i} {...route} />)}
      </Switch>
    </div>
  </div>
)
const AdminContent = () => (
  <div className="view-container">
    <Switch>
      {ADMIN_ROUTES.map((route, i) => <Route key={i} {...route} />)}
    </Switch>
  </div>
)

export default Router
