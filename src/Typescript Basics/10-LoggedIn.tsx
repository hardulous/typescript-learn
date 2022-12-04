import { useState } from "react"

const LoggedIn = () => {

  const [LoggedIn, setLoggedIn] = useState(false)  

  const handleLogin = ()=>{
    setLoggedIn(true)
  }  
  const handleLogout = ()=>{
    setLoggedIn(false)
  }  

  return (

    <>
      <h2>UseState Hook With Implicit Type</h2>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>LogOut</button>
      <h4>
        {
            LoggedIn ? 'Logged In' : "Logged Out"
        }
        {
            // LoggedIn.length
        }
      </h4>
    </>

  )

}

export default LoggedIn

// useState hook with typescript , here assume we have state loggedIn with default value false and will conditionally render some jsx based on value of this state variable , but in ts their is one problem we know in js every variable even state variable is of type any so we can pass loggedIn.length in jsx even if initial value of state loggedIn is not array but in ts by inference rule the default type of loggedIn is become boolean due to which if we pass loggedIn.length then it will show us error

// if we hover in setLoggedIn method then it will show [ const setLoggedIn: (value: React.SetStateAction<boolean>) => void ] means this setter function will only accept value of type boolean and if we try to give any other value like setLoggedIn(23) then ts will show error because of type inference , but we know in js and app state variable can be updated to any value based on user interaction with app

// 