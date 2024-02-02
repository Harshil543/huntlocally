import React, { useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import Header from "./components/Header";
import SearchBar from "./components/searchBar";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch.Auth.getAllPosts("", (data: any) => {
      console.log(data, "callback-----------------");
    });
  }, []);
  return (
    <div>
      <Header />
      <SearchBar />
    </div>
  );
}

export default App;
