import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./ShowArticle.css";
import Timer from "./Timer";
export default React.memo(function ShowArticle({ sortAsc, sortDsc }) {
  const [article, setArticle] = useState(null);

  const inputRef = useRef(null);
  console.log("showArticle component");
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios("https://jsonplaceholder.typicode.com/users");
      const name = res.data.map((user) => {
        return user.name;
      });
      setArticle(name);
    };

    fetchData();
  }, []);

  console.log(article);

  const handleClick = (index) => {
    setArticle((pre) => {
      pre.splice(index, 1);
      return [...pre];
      //console.log(pre);
    });
    console.log(article);
  };

  //console.log(sortAsc, sortDsc);

  return article ? (
    <div className="container-showArticle">
      <input placeholder="search" className="search" />
      <div style={{ fontSize: "1.5rem" }}>Names</div>
      <button>click</button>
      <div className="names">
        {article.map((art, i) => {
          return (
            <div ref={inputRef} key={i}>
              {art}
              <button onClick={() => handleClick(i)} className="delBtn">
                del
              </button>
            </div>
          );
        })}
      </div>
    </div>
  ) : null;
});
