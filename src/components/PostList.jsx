import React, { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/PostlistItem";

function PostList() {
  const { postList } = useContext(PostListData);
  return (
    <>
      <div className="row mx-5  my-5">
        {postList.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}

export default PostList;
