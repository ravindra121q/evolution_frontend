import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { SignUpPage } from "../pages/SignUpPage";
import { Posts } from "../pages/Posts";
import { UpdatePosts } from "../pages/UpdatePosts";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/signup" element={<SignUpPage/>} />
      <Route path="/post" element={<Posts/>} />
      <Route path="/update" element={<UpdatePosts/>} />
      {/* <Route path="/update" element={<HomePage/>} /> */}
    </Routes>
  );
};
