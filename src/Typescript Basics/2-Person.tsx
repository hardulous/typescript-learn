
// here by this now my props variable container name proeprty which contain 2 property first and last of type string and if we try to pass data type other than string from parent component then it will throw error 
type personProp = {
    name:{
      first:string
      last:string
    }
}

const Person = (props:personProp) => {

  return (

    <>
      <h4>{props.name.first} {props.name.last}</h4>
    </>

  )
}

export default Person

// here now i am passing an object as an prop to my person component so we can created object type as well using type keyword 