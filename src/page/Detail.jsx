import React from "react";

import DetailContents from "../component/detailcontent/DetailContent";
import Header from "../component/head/Header";
import Navbar from "../component/head/Navbar";

export default function Detail() {

  return (
    <div>
      <Header/>
      <Navbar/>
      
      <DetailContents/>
      
    </div>
  );
}
