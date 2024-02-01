import React, { useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import Header from "./components/Header";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch.Auth.getAllPosts("", (data: any) => {
      console.log(data, "callback-----------------");
    });
  }, []);
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
