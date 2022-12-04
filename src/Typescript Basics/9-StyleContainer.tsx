
type StyleProps={
    styles:React.CSSProperties
}

const StyleContainer = (props:StyleProps) => {

  return (

    <>
    
      <h4 style={props.styles}>
        Text With Styles In TypeScript Way
      </h4>

    </>

  )

}

export default StyleContainer

// here if we are passing style as a prop and parameter to a function so in this case the type of the variable holding style object is of               React.CSSProperties
