

import React from "react"


type TextInputProps = {
    label ?:string,
    placeholder ?:string,
    backgroundColor ?:string
}
function InputLabel(props:TextInputProps) {
    return (
        <div  style={{color:props.backgroundColor}}>
            <h1>This is form for the application</h1>
                <label className="pr-2" htmlFor={props.label}>{props.label}</label>
                <input type='text'  id={props.label}  placeholder={props.placeholder}/>
            
        </div>
    )
}

export default InputLabel
