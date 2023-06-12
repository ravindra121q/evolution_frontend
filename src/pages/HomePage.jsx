import axios from "axios";
import React, { useState } from "react";

export const HomePage = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [device, setDevice] = useState("");
  const [no_of_comments, setNo_of_comments] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://long-red-pelican-ring.cyclic.app/posts/add", {
        title,
        body,
        device,
        no_of_comments,
      })
      .then((res) => {
        alert(res.data.msg);
      });
  };
  return (
    <div>
      HomePage <h3>ADD Post</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="body"
          onChange={(e) => setBody(e.target.value)}
        />
        <input
          type="text"
          placeholder="device"
          onChange={(e) => setDevice(e.target.value)}
        />
        <input
          type="text"
          placeholder="no_of_comments"
          onChange={(e) => setNo_of_comments(e.target.value)}
        />

        <input type="submit" />
      </form>
    </div>
  );
};
