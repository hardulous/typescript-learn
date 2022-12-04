import { useState } from "react";

type authUser={
    name:string
    email:string
}

const User = () => {
  
  // here by explicitly telling type of state by this union <null | authUser> my state User can be of type either null or authUser so now setter function of this state can accept value of type null or authUser
  const [User, setUser] = useState<null|authUser>(null);

  const handleLogin = () => {
    setUser({   // type auth
        name:'aman',
        email:'aman@gmail.com'
    });
  };
  const handleLogout = () => {
    setUser(null);  // type null
  };

  return (
    <>
      <h2>UseState Hook With Explicit Type</h2>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>LogOut</button>

      {/* now by default ts will add ? when accesing User state property as now User can be null as well so adding . on null will throw error so ? for saftey checking first */}
      <h5>User name is {User?.name}</h5>
      <h5>User email is {User?.email }</h5>
    </>
  );
};

export default User;

// here now we will create useState hook whose initial value is only known at some point in future that is after some user operation is taken place

// here we have created state variable whose value can be anything either null or of type authUser 
