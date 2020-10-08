import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Article from "./Article";
function UserPage(props) {
  const [isShown, setIsShown] = useState(false);
  const [currentArticle, setCurrentArticle] = useState({});
  const readArticle = (article) => {
    setCurrentArticle(article);
    setIsShown(true);
    console.log(currentArticle);
  };
  const { data } = props;
  return (
    <div className="row">
      <div
        className="col s4"
        style={{
          textAlign: "center",
        }}
      >
        <div className="row">
          {data.articles.map((d, i) => (
            <div className="col s12" key={i}>
              <div className="card" onMouseEnter={() => readArticle(d)}>
                <div
                  className="a-title"
                  style={{ height: "90px", padding: "5px" }}
                >
                  {/* <LazyLoadImage src={d.title} /> */}
                  <p>{d.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="col s8">
        {isShown && (
          <Article data={currentArticle}>
            {" "}
            : <h1>loadingg.....</h1>
          </Article>
        )}
      </div>
    </div>
  );
}

export default UserPage;
