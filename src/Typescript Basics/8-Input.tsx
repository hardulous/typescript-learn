import React from "react"

type inputProp = {
    value:string | number
    handleChange : (even:React.ChangeEvent<HTMLInputElement>) => void // here handleChange is a method which take event object which is of type change event on input element and return nothing
}

const Input = (props:inputProp) => {
 
  const changeInput = (e:React.ChangeEvent<HTMLInputElement>)=>{
    console.log(e)
  }  

  return (
   
    <>
      <input type="text" value={props.value} onChange={props.handleChange} />
      <input type="text" value={props.value} onChange={changeInput} />
    </>
    
  )
  
}

export default Input

// here in input element we need two prop input value and onchange handler

// here at this moment all props coming from parent but same thing can be done within component as well 