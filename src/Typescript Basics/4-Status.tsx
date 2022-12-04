
// here now using union as type means now my status prop can contain any value out of loading,success,error and other than this will show error  
type statusProps ={
  status:'loading'|'success'|'error'
}

const Status = (props:statusProps) => {

  let message
  if(props.status === 'loading'){
    message = 'Loading'
  }
  else if(props.status === 'success'){
    message = 'Success'
  }
  else if(props.status === 'error'){
    message = 'Error'
  }

  return (

    <>
      <h2>Status - {message}</h2>
    </>

  )

}

export default Status

// here in professional react app we generally use redux in which our app have 3 state loading , success and error state and we show them with the help of props and state variable we can do the same in ts as well but now have to declare type of 

// here what we are doing basically handling case of loading , success and error if these value come from prop but if value other than this than my component will show null so in order to strict the value we pass to status as prop will use union in ts denoted by | 

// Unions provide a way to handle different types too. For example, you may have a function that takes an array or a string:

/*

  function getLength(obj: string | string[]) {
   return obj.length;
  }

  // above function obj parameter will take either string or array of string 

*/