import React from "react";
import { MdDelete } from "react-icons/md";

function Post({ post }) {
  return (
    <>
      <div className="card mx-4 my-2" style={{ width: "18rem" }}>
        {/* <img src="..." className="card-img-top" alt="..." /> */}
        <div className="card-body">
          <h5 className="card-title">
            {post.title}
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              <MdDelete />
              <span class="visually-hidden">unread messages</span>
            </span>
          </h5>
          <p className="card-text">{post.body}</p>
          {post.tags.map((tag) => (
            <span className="badge text-bg-primary mx-2 my-2 p-2">{tag}</span>
          ))}
          <div class="alert alert-primary p-2" role="alert">
            A simple primary alert—check it out!
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
