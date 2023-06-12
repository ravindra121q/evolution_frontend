import axios from "axios";
import React, { useEffect, useState } from "react";

export const Posts = () => {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    axios
      .get("https://long-red-pelican-ring.cyclic.app/posts", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setData(res.data.post));
  }, []);
  const handleDelete = (id) => {
    console.log(id);
    axios
      .delete(`https://long-red-pelican-ring.cyclic.app/posts/delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        // localStorage.setItem("token", res.data.token);

        alert("Post Deleted");
      });
  };
  const handleUpdate=(id)=>{}
  return (
    <div>
      <h1>Posts</h1>
      <hr />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "10px",
        }}
      >
        {data.length > 0 ? (
          data.map((e) => {
            return (
              <div>
                <h3>{e.title}</h3>
                <h3>{e.body}</h3>
                <h3>{e.device}</h3>
                <h3>{e.no_of_comments}</h3>
                <button onClick={() => handleDelete(e._id)}>Delete</button>
                <button onClick={()=>handleUpdate(e._id)}>Update</button>
              </div>
            );
          })
        ) : (
          <h1>No Posts Found</h1>
        )}
      </div>
    </div>
  );
};
