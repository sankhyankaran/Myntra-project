import { useState } from "react";
import "./App.css";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import Sidebar from "./components/Sidebar";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import PostListProvider from "./store/PostlistItem";

function App() {
  const [selected, setSelected] = useState();
  return (
    <>
      <PostListProvider>
        <div className="container-fluid">
          <div className="d-flex">
            <Sidebar sidebartab={selected} setSelected={setSelected} />
            <div className="content">
              <Header />
              <div>{selected === "Home" ? <PostList /> : <CreatePost />}</div>
              <Footer />
            </div>
          </div>
        </div>
      </PostListProvider>
    </>
  );
}

export default App;
