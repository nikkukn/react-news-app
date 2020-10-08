import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
function Article(props) {
  const { data } = props;
  console.log(data);
  return (
    <div
      className="article"
      style={{
        position: "fixed",

        paddingRight: "10px",
        zIndex: "10000",
        width: "65.5%",
      }}
    >
      <div className="card">
        <div className="card-image">
          <img
            className="responsive-img"
            src={data.urlToImage}
            style={{ height: "300px" }}
          />
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <p>{data.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Article;
