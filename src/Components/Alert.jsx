import React from 'react'

export default function Alert(props) {  

    const Captilize = (str)=>{
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
  
    return (
      <div style={{height: '70px'}}>
      { props.alert && <div>
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          <strong>{Captilize(props.alert.type)}</strong> : {props.alert.msg} 
        </div>
    </div>}
    </div>
  )
}
