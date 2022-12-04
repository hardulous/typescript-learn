import React from "react"

// here the type of react component is React.ReactNode 
type oscarProps = {
    children: React.ReactNode
}

const Oscar = (props:oscarProps) => {
  return (
    
    <>
      {
        props.children
      }
    </>

  )
}

export default Oscar

// here another variant of type of prop.children is passing component as prop so in this case type is React.ReactNode 