
import { Carousel, Container } from "react-bootstrap";
import axios from "axios";
import React, { useState, useEffect } from "react";
// import Navbar from './components/Navbar.js'
function Counter() {
  const [data, setData] = useState(0);
  // useEffect(() => {
  //   fetch("url")
  //     .then((response) => response.json())
  //     .catch((error) => console.log(error));
  // }, []);

  // // for axios calls the apis
  useEffect(() => {
    // getData();

    //   const getData = () => {
    //   console.log("console get data")
    // };
    console.log("useeffect render");
    document.title = `new message ${data}`;
  },);

  return (
    <div className="App">
      {console.log("componenet  render 1")}
      {data}
      <button onClick={(event) => setData(data + 1)}>add me</button>
    </div>
  );
}

export default Counter;
