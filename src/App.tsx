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
      let navbar: any = document.getElementsByClassName(
        "searchBar_searchBar__OIcL+"
      )[0];
      let sticky: any = navbar.offsetTop;
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
