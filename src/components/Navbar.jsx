import React from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "20px",
        justifyContent: "center",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">SignUp</Link>
      <Link to="/post">Posts</Link>
      {/* <Link to="/update">Post Update</Link> */}
      <Link to="/logout">Logout</Link>
    </div>
  );
};
