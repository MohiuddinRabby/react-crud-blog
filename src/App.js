import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogDetails from "./components/BlogDetails";
import CreateBlogPost from "./components/CreateBlogPost";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/create-new-blog" component={CreateBlogPost} />
            <Route path="/details/:id" component={BlogDetails} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
