import React, { useEffect, useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import Header from "./components/Header";
import SearchBar from "./components/searchBar";

function App() {
  const dispatch = useDispatch();
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    dispatch.Auth.getAllPosts("", (data: any) => {
      console.log(data, "callback-----------------");
    });
    function handleScroll() {
      if (window?.pageYOffset >= 63) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header />
      <SearchBar sticky={sticky} />
    </>
  );
}

export default App;
