import React, { useReducer } from "react";
import { createContext } from "react";

// Here, a context object named PostList is created using createContext. It has three properties: postList, addPost, and deletePost. These are initialized with empty array [] and empty functions () => {}.

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

// This defines a reducer function named postListReducer. However, the reducer function does nothing but return the current post list without any modifications. Typically, a reducer function is used to update the state based on actions, but here it's just returning the current state.
const postListReducer = (currPostList, action) => {
  return currPostList;
};

// Two empty functions addPost and deletePost are declared. These functions are meant to add and delete posts from the postList, respectively. Currently, they are just empty placeholders.

const addPost = () => {};
const deletePost = () => {};

function PostListProvider({ children }) {
  const [postList, usePostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );
  return (
    <>
      <PostList.Provider
        value={{
          postList: postList,
          addPost: addPost,
          deletePost: deletePost,
        }}>
        {children}
      </PostList.Provider>
    </>
  );
}

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Himachal",
    body: " Hi Friends , I am going to Himachal for my vacations. Hope to enjoy a lot. Peace out.",
    reactions: 2,
    userId: "user-2",
    tags: ["vacatiopn", "Himachal"],
  },
  {
    id: "2",
    title: "Going to Mumbai",
    body: " Hi Friends , I am going to Mumbai for my vacations. Hope to enjoy a lot. Peace out.",
    reactions: 4,
    userId: "user-3",
    tags: ["vacatiopn", "Mumbai", "enjoying"],
  },
];

export default PostListProvider;
