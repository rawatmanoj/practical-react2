import React, { useState, useCallback } from "react";

import ShowArticles from "./components/ShowArticle";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";
import Timer from "./components/Timer";

function App() {
  console.log("app component");
  const [timer1, setTimer1] = useState(0);
  const [timer2, setTimer2] = useState(0);
  const [sortAsc, setsortAsc] = useState(false);
  const [sortDsc, setsortDsc] = useState(false);

  const handleAsc = () => {
    setsortAsc(true);
    setsortDsc(false);
  };

  const handleDsc = () => {
    setsortDsc(true);
    setsortAsc(false);
  };

  const setTime1 = () => {
    console.log("setTimeCallback2");
    setTimer1((state) => {
      return state + 1;
    });
  };

  const setTime2 = useCallback(() => {
    console.log("setTimeCallback2");
    setTimer2((state) => {
      return state + 1;
    });
  }, []);

  return (
    <div className="container">
      <div className="nav-bar">
        <div className="nav-heading">Sorting Articles</div>
      </div>
      <div className="sort-name">
        <p>SORT BY</p>
        <button onClick={handleAsc} className="sort-btn">
          Name Asc
        </button>
        <button onClick={handleDsc} className="sort-btn">
          Name Dsc
        </button>
      </div>

      <ShowArticles sortAsc={sortAsc} sortDsc={sortDsc} />
      <Timer timer={timer1} setTime={setTime1} />
      <Timer timer={timer2} setTime={setTime2} />
    </div>
  );
}

export default App;
