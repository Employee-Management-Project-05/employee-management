import React from "react";
import "./home.css"
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
  'emp1.jpg',
  'emp2.jpg',
  'emp3.jpg'
];


export default function Home(){
    return(
    <div classNameName="bg4">
      
       <div>
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{backgroundImage: `url(${slideImages[0]})`}}>
              <h1 style={{color:"white" , marginRight:"150px", fontSize:"56px" , backgroundColor:"black" , opacity:"0.6" , padding: "20px 20px 20px 20px" }}>Welcome to the Employee Management System.</h1>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            <h1 style={{color:"white" , marginRight:"150px" , fontSize:"40px" , backgroundColor:"black" , opacity:"0.6" , padding: "20px 20px 20px 20px" }}>There is little success where there is little laughter.</h1>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            <h1 style={{color:"white" , marginRight:"150px" , fontSize:"40px" , backgroundColor:"black" , opacity:"0.6" , padding: "20px 20px 20px 20px" }}>The leader is the person who brings a little magic to the moment.</h1>
            
            </div>
          </div>
        </Slide>
      </div>
        
    </div>    
    
       
       
    )
}