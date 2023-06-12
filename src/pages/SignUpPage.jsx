import axios from "axios";
import React, { useState } from "react";

export const SignUpPage = () => {
  const [className, setClassName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [is_married, setIs_married] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
   axios
      .post("https://long-red-pelican-ring.cyclic.app/users/register", {
       name:className, email,
        password,age,city,is_married
      })
      .then((res) => {
       

        alert(res.data.msg);
      });}
  return (
    <div>
      <h1>SignUpPage</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setClassName(e.target.value)}
        />
        <input
          type="text"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="age"
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="city"
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="text"
          placeholder="is_married"
          onChange={(e) => setIs_married(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
};
