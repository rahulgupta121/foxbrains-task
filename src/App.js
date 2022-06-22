import logo from "./logo.svg";
import "./App.css";
import { Carousel, Container } from "react-bootstrap";
import axios from "axios";
import React, { useState, useEffect } from "react";
function App() {
  // set state
  const [abstract, setabstract] = useState();

  // for  slider bootstrap
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  //for images
  const [multimedia, setmultimedia] = useState();

  const getData = () => {
    axios
      .get(
        "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=zscDXL9AwbeAMCOkf3mdRzDFQrxZVNpd"
      )
      .then(function (response) {
        // handle success

        // whole object access
        console.log(response.data.response);

        //data get for abstract
        console.log(response.data.response.docs);
        setabstract(response.data.response.docs);
        // console.log(response.docs[0]);

        // setmultimedia()
        console.log(response.data.response.docs.multimedia[0].url);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };
  // for axios calls the apis
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      {/* {abstract}
      console.log({abstract}) */}
      <Container>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {abstract &&
            abstract.map((item, key) => {
              return (
                <>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={item.web_url}
                      alt="images slides"
                    />
                    <Carousel.Caption style={{width: "72%"}}>
                      {/* <h3>First slide label</h3> */}
                      <h3 style={{ fontSize: "22px" }}>
                        {" "}
                        <span style={{ color: "black" }}> Heading:</span>{" "}
                        {item.abstract}
                      </h3>
                      {/* {item.web_url} */}
                    </Carousel.Caption>
                  </Carousel.Item>
                </>
              );
            })}


        </Carousel>
      </Container>
    </div>
  );
}

export default App;
