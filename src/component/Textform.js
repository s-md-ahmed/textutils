import React, {useState} from 'react'
export default function Textform(props) {
  const [text, setText] = useState('');
    const handleUpClick = () => {
      if(text==='')
      {
        alert("No text at all")
        return;
      }
      let newText ="";
      let word ="";
      for (let i = 0; i < text.length; i++) {
        if (text[i] !== ' ') {
          word += text[i]; // Build up the current word
        } else {
          // Capitalize the first letter of the current word and add it to newText
          newText += word[0].toUpperCase() + word.slice(1).toLowerCase() + ' ';
          word =""; // Reset the current word
        }
      }
      newText += word[0].toUpperCase() + word.slice(1).toLowerCase();
      // Capitalize the first letter of the last word and add it to newText
    
      setText(newText);
      props.showAlert("Converted to mixed case","success ")
    }
    const handledownClick = () => {
      if(text==='')
      {
        alert("No text at all")
        return;
      }
      let othertext=text.toLowerCase();
      setText(othertext);
      props.showAlert("Text converted to lower case","success ")
    }
    function reverse(str)
    {
      let i;
      let reverse="";
      for(i=str.length-1;i>=0;i--)
      {
        reverse=reverse+str[i];
      }
      return reverse;
    }
    const reversetext=()=>{
      if(text==='')
      {
        alert("No text at all")
        return;
      }
      let newText ="";
      let word ="";
      let i;
      for (i =text.length-1; i >=0; i--) {
        if (text[i] !== ' ') {
          word += text[i]; // Build up the current word
        } else {
            newText+=reverse(word)+" ";
            word=""
    }
  }
  newText+=reverse(word);
  word=""  
  setText(newText)
  props.showAlert("Words in reverse order","success ")
}
    const cleartext=()=>{
      if(text==='')
      {
        alert("No text at all")
        return;
      }
      setText('');
      props.showAlert("Text cleared!","success ")
      return;
    }
    const encrypttext = () => {
      if(text==='')
      {
        alert("No text at all")
        return;
      }
      let i;
      let encrypt = "";
      for (i = 0; i < text.length; i++) {
        if (text[i] !== " ") {
          encrypt = encrypt + text.charCodeAt(i);
        } else {
          encrypt += " ";
        }
      }
      if (i === text.length - 1) {
        encrypt = encrypt + text.charCodeAt(i);
      }
      setText(encrypt);
      props.showAlert("Text encrypted!","success ")
    }
    const copytext=() => {
      var text=document.getElementById("myBox");
      if (text.value === '') {
        alert("No text at all");
        return;
      } else {
        
        navigator.clipboard.writeText(text.value);
      }
      props.showAlert("Text copied","success ")
    }    
    const handleextraspaces=()=>
    {
      if (text === '') {
        alert("No text at all");
        return;
      }
      else{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra spaces handled","success ")

    }
  }
  const handleOnChange=(event)=>
  {
    // console.log("onchange")
    setText(event.target.value)
  }
  // text="new text" wrong way to change the state
  // setText("new text")
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
    <div className="mb-3">
  <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8" style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'#13466e':'white'}}></textarea>
</div>
<button className="btn btn-danger text-info mx-3 my-3" onClick={handleUpClick}>Convert to mixed case</button>
<button className=" mx-3 my-3 btn btn-info" onClick={handledownClick} >convert to lower case</button>
<button className=" mx-3 my-3 btn btn-info" onClick={cleartext} >Clear text</button>
<button className=" mx-3 my-3 btn btn-info" onClick={reversetext} >Reverse word order</button>
<button className=" mx-3 my-3 btn btn-info" onClick={encrypttext} >Encrypt text</button>
<button className=" mx-3 my-3 btn btn-info" onClick={copytext} >Text copy</button>
<button className=" mx-3 my-3 btn btn-info" onClick={handleextraspaces} >Handle extra spaces</button>
</div>
<div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
  <h1>Your Text summary here</h1>
  <p>{text.trim() === "" ? "0" : text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
  <p>time taken to read is {0.008*(text.trim() === "" ? "0" : text.split(/\s+/).filter((element)=>{return element.length!==0}).length)} minutes read</p>
  <h3>preview</h3>
  <p>{text!==''?text:"Enter text something in the textbox above to preview it here"}</p>
</div>
</>
  )
}
