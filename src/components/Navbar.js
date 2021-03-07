import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="text-primary">React Blog</h1>
      <div className="links">
        <Link to="/" className="px-2">
          Home
        </Link>
        <Link to="/create-new-blog" className="px-2">
          New Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
