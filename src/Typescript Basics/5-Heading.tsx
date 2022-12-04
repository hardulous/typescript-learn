
type headingProps = {
 children:string
}

const Heading = (props:headingProps) => {
  return (
    
    <h2>
        {props.children}
    </h2>

  )
}

export default Heading

// here this component will render a place holder text passed to it as a props.children so using ts we can also define the type of prop.children passed to a component here we have passed string data type only 