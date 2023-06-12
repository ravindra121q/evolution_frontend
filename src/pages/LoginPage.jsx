import React from "react";
import { useState } from "react";
import axios from "axios";
export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    axios
      .post("https://long-red-pelican-ring.cyclic.app/users/login", {
        email,
        password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);

        alert(res.data.msg);
      });
  };
  return (
    <div>
      <h1>LoginPage</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <input type="submit" />{" "}
      </form>
    </div>
  );
};
