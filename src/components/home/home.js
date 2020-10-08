import React, { useEffect, useState } from "react";
import UserPage from "./UserComponent";
function HomePage(props) {
  const { loaded, data } = props;
  return (
    <div className="home" style={{ paddingTop: "70px" }}>
      {loaded ? <UserPage data={data} /> : <h2>Loaing.....</h2>}
    </div>
  );
}

export default HomePage;
