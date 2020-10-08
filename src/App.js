import React from "react";
import logo from "./logo.svg";
import Header from "./components/header/Header";
import useNavbar from "./hooqs/useNavbar";
import useFetch from "./hooqs/useFetch";
import newsURL from "./data/getURLs";
import HomePage from "./components/home/home";
import Home from "./components/home/home";

function App() {
  //const [isLoaded, chartData] = useFetch(bcURL);
  const [isLoaded, newsData] = useFetch(newsURL);
  const { isNavbar, isRow } = useNavbar();

  console.log(newsData);
  return (
    <div className="grey lighten-4">
      <Header changeNav={isNavbar} />

      <div>
        {" "}
        <HomePage data={newsData} loaded={isLoaded} />
      </div>
    </div>
  );
}

export default App;
