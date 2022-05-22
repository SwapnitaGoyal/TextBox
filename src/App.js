import React , {useState} from 'react'
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import Textbox from './Components/Textbox';
import About from './Components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {

  const [mode , setMode] = useState('light');
  
  const [alert , SetAlert] = useState(null);

  const ShowAlert = (type , message)=>{
       SetAlert({
         type : type,
         msg: message
       })

       setTimeout(()=>{
         SetAlert(null);
       } , 2000)
  }
  const toggleMode = ()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = 'grey' ;
      ShowAlert('success' , 'Dark Mode is enabled');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      ShowAlert('success' , 'Light Mode is enabled');

    }
  }
  return (
    <>
      <Router>
      <Navbar title="Prettier" mode={mode} toggleMode = {toggleMode}/>
        <Alert alert={alert} />
        <div className='container my-2'>
        <Routes>
              <Route path="/about" element={<About mode={mode} />} />
              <Route path="/" element={ <Textbox ShowAlert = {ShowAlert} title = "Enter text to analyse below" mode={mode}></Textbox>
              } />
        </Routes>
        </div>
        </Router>
    </>
  );
}

export default App;
