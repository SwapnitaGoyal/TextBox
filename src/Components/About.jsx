import React from 'react'

export default function About(props) {
    
    let MyStyle={
        color: props.mode === 'light' ? 'black' : 'white' , 
        backgroundColor : props.mode === 'light' ? 'white' : 'grey' ,
        border: '1px solid' , 
        borderColor: props.mode === 'light'? 'black' : 'white'

    }
    
    

  
    return (
    <div>
        <div className="container my-1">
        <h1>About Us</h1>
            <div className="accordion" id="accordionExample" style={MyStyle}>
        <div className="accordion-item" style={MyStyle}>
            <h2 className="accordion-header" id="headingOne" style={MyStyle}>
            <button className="accordion-button" style={MyStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Text Editing Toolbar</strong>
            </button>
            </h2>
            <div id="collapseOne" style={MyStyle} className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={MyStyle}>
            This website provide a lot of tools for editing your text and make your text prettier.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={MyStyle}>
            <h2 className="accordion-header" id="headingTwo" style={MyStyle}>
            <button className="accordion-button collapsed" style={MyStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
               <strong>Easy to use</strong>
            </button>
            </h2>
            <div id="collapseTwo" style={MyStyle} className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={MyStyle}>
              This website is easy to use and has very user friendly interface.
              </div>
            </div>
        </div>
        <div className="accordion-item" style={MyStyle}>
            <h2 className="accordion-header" id="headingThree" style={MyStyle}>
            <button className="accordion-button collapsed" style={MyStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Preview Text files</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={MyStyle}>
               User can able to preview his/her text which is easy to read. Also it provide ount of words and characters with average time of reading the text.
               </div>
            </div>
        </div>
        </div>
        </div>
    
    </div>
  )
}
