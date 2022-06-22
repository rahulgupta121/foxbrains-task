import logo from './logo.svg';
// import './App.css';
import {Carousel, Container} from 'react-bootstrap'
import axios from 'axios'
import React, {useState, useEffect} from 'react';
function App() {

  // set state 
  const [abstract, setabstract] = useState()

  //for images
  const [multimedia, setmultimedia] = useState()


  const getData = () =>{
    axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=zscDXL9AwbeAMCOkf3mdRzDFQrxZVNpd')
    .then(function (response) {
      // handle success

      // whole object access
      console.log(response.data.response);
      
      //data get for abstract
      console.log(response.data.response.docs);
      setabstract(response.data.response.docs);
      // console.log(response.docs[0]);
  
      // setmultimedia()
      console.log(response.data.response.docs.multimedia);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  }
  // for axios calls the apis
  useEffect(() => {
    getData();
    
  }, [])
  

  return (
    <div className="App">
      
<Container>
     
    {abstract && abstract.map((item, key)=>{
      return (
        <>
        {/* <h1>{item.id}</h1> <br></br>
        <h1>{item.abstract}</h1> */}
         <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={item.abstract}
      alt="First slide"
    />
<Carousel.Caption>
      <p>{item.abstract}</p>
      {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  {/* <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item> */}
  {/* <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item> */}
</Carousel>


        
        </>
        
      )
    })}
    
</Container>

    </div>
  );
}

export default App;
