import React, { useState } from "react";

export default function (props) {
  // const[mystyle,setMyStyle]=useState({
    // color:'black',
    // backgroundColor:'white'
  // })
  // const[btntext,setbtntext]=useState("Enable dark mode")
  let mystyle={
    color:props.mode==='dark'?'white':'#042743',
    backgroundColor:props.mode==='dark'?'rgb(36,74,104)':'white',
  }
  return (
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>About us</h1>
      <div className="accordion" id="accordionExample" style={mystyle}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed" style={mystyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Analyse your text
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              Textutils allows u to analyse the text efficiently
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed" style={mystyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Free to use
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              It provides a free character and word counter as u keep on typing the text
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed" style={mystyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Browser compatible
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
            This software works in any web browser like chrome,firefox,brave and others too
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
