import React  , {useState} from 'react'



export default function Textbox(props) {

  const [TextI , SetText] = useState("");
  
  const handleChange = (event) =>{
     SetText(event.target.value);
  }

  const handleUpClick = () =>{
    const newText = TextI.toUpperCase();
    SetText(newText); 
    props.ShowAlert('success' , 'Text is converted into UpperCase');
  }

  const handleLowClick = () =>{
    const newText = TextI.toLowerCase();
    SetText(newText);
    props.ShowAlert('success' , 'Text is converted into LowerCase');
  
  }

  const handleCapitalizeClick = ()=>{
    const newText = TextI.charAt(0).toUpperCase() + TextI.slice(1);
    SetText(newText);
    props.ShowAlert('success' , 'First letter is Capital now');
  
  }
  const handleCopyClick= () =>{
    navigator.clipboard.writeText(TextI);
    props.ShowAlert('success' , 'Copy to Clipboard');
  
  }
  const handleSpaceClick = ()=>{
    let newText = TextI.split(/[ ]+/);
    SetText(newText.join(" "));
    props.ShowAlert('success' , 'Extra spaces is removed');
  
  }
  const handleClearClick = () =>{
    SetText("");
    props.ShowAlert('success' , 'TextBox is cleared');
  
  }
  return (
    <>
    <div>
        <h1 className= 'my-2' style={{color: props.mode==='dark'?'white':'black'}}>{props.title}</h1>
      <div className="mb-3">
         <textarea className="form-control" style = {{backgroundColor: props.mode === 'dark' ? '#d6d3d3':'white' , 
        color:'black'}} id="exampleFormControlTextarea1" placeholder = "Enter your text here" rows="10" value={TextI} onChange = {handleChange}></textarea>
      </div>
      <button disabled={TextI.length===0} className={`btn btn-${props.mode === 'dark'?'light':'dark'} mx-2 my-2`} onClick = {handleUpClick}>Convert to Uppercase</button>
      <button disabled={TextI.length===0} className={`btn btn-${props.mode === 'dark'?'light':'dark'} mx-2 my-2`} onClick = {handleLowClick}>Convert to Lowercase</button>
      <button disabled={TextI.length===0} className={`btn btn-${props.mode === 'dark'?'light':'dark'} mx-2 my-2`} onClick = {handleCapitalizeClick}>Capitalize</button>
      <button disabled={TextI.length===0} className={`btn btn-${props.mode === 'dark'?'light':'dark'} mx-2 my-2`} onClick = {handleCopyClick}>Copy to Clipboard</button> 
      <button disabled={TextI.length===0} className={`btn btn-${props.mode === 'dark'?'light':'dark'} mx-2 my-2`} onClick = {handleSpaceClick}>Remove Extra Space</button>
      <button disabled={TextI.length===0} className={`btn btn-${props.mode === 'dark'?'light':'dark'} mx-2 my-2`} onClick={handleClearClick}>Clear Text</button> 
    </div>
    <div style={{color: props.mode==='dark'?'white':'black'}} className="my-2">
      <h1>Text Summary</h1>
      <p>{TextI.split(/\s+/).filter((ele)=>{return ele.length !== 0 }).length} words and {TextI.length} Characters.</p>
      <p>Time required to read above text : {0.008*TextI.split(" ").filter((ele) =>{return ele.length !== 0}).length} min</p>
      <h3>Text Preview</h3>
      <p>{TextI.length > 0 ? TextI:'Enter text in above textbox to preview here.'}</p>
    </div>
    </>
  )
}
