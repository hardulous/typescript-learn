
// creating data type 
type GreetProps = {
    name : string
    messageCount : number
    isLoggedIn : boolean
    isAdmin?:boolean // here by ? it means this isAdmin prop is optional means whether passed or not no error will come by ts
}

// here by this GreetProps type now my props structure become an object which contain name property and if we try to use property other than name than ts will throw compile time error where js does not show any error 
const Greet = (props: GreetProps) => {
  
  // destructuring isAdmin with default value false if not passed from parent
  const { isAdmin = false } = props

  return (

    <div>
      {
        props.isLoggedIn ?   <h4>Welcome to my channel {props.name} ! You have {props.messageCount} unread messages</h4> 
        : <h4>Welcome Guest</h4>
      }
      {
        isAdmin ? "Namaste sir" : "Kaun h tu"
      }
    </div>

  )
  
}

export default Greet

// here in above component we are showing some hard coded message but now assume if the message is displaying some data coming from backend in the form of prop name , then in a ts file if we just pass parameter prop to function component and try to use it then the ts will thrown compile type error [ Parameter 'props' implicitly has an 'any' type. ]

// the meaning of this error is typescript telling us that we have not told ts what is the structure that is type of this variable props and if we try to pass and create variable without any type or any type then ts will not allow us to do this and throw error 

// so we have to tell ts about the type of variable prop we are passing and we do this by [ type ] keyword 

// by type keyword we are creating a custom data type which can be used as a data type for any variable 

// to define type of variable prop syntax is [ props : data type ] 

// once type of variable is created and mentioned then vs code will start showing autocomplete even if value of this props coming from parent component 

// here if we add another property to GreetProp type that is message then we have to pass messsage prop from its parent component else ts will show error because now my GreetProp is expecting message prop as well not only name prop