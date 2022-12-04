import { useState } from "react";

type authUser={
    name:string
    email:string
}

const User2 = () => {

  // here by type assertion , as keyword telling ts that this empty {} is of type authUser so now no need to check by ? when accessing name and email property , by as keyword we are telling we know better than compiler and lying to ts that this empty {} is of type authUser and confident that User state will be intilized sonner with type authUser and will remain same always
  const [User, setUser] = useState<authUser>({} as authUser);

  const handleLogin = () => {
    setUser({   
        name:'aman',
        email:'aman@gmail.com'
    });
  };

  return (
    <>
      <h2>UseState Hook Type Assertion</h2>
      <button onClick={handleLogin}>Login</button>
      <h5>User name is {User.name}</h5>
      <h5>User email is {User.email }</h5>
    </>
  );
};

export default User2;

// here sometime in app we know the state variable value can never be null after component is mounted on dom for this we use type assertion by which we tell typescript that a state variable type will always be specific and can not be null denoted by as keyword
