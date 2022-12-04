import React, { useReducer } from 'react'

type CounterState={  // reducer state type
    count:number
}
type CounterAction={ // reducer action type
    type:string
    payload:number
}

const initialState = { count:0 }

const reducer = ( state:CounterState , action:CounterAction )=>{
    switch (action.type) {
        case 'increment':
            return {count:state.count + action.payload}
        case 'decrement':
            return {count:state.count - action.payload}
        default:
            return state;
    }
}

const Counter = () => {
 
  // by inference now the default state type is CounterState and dispatch method can only take object of type CounterAction as parameter and other than this will throw error 
  const [state, dispatch] = useReducer(reducer,initialState)  

  return (

    <>
    <h2>UseReducer With TypeScript</h2>
      Count: {state.count}
      <button onClick={()=>dispatch({type:'increment',payload:10})}>
        Increment 10
      </button>
      <button onClick={()=>dispatch({type:'decrement',payload:10})}>
        Decrement 10
      </button>
    
    </>

  )

}

export default Counter

// for complex state management where next state depend on previous state useReducer is preferabel and using ts we can also type useReducer hook

// here to type useReducer hook all we have to do is , give the reducer function parameter type that is state and action parameter passed to reducer function and by doing this now my actual useReducer state and dispatch method is complete with the help of ts inference 

// here similar to what happened in case of useState setter function once the type is declared we can not pass different type value as parameter to setter function similar to this in dispatch method as type is CounterAction that is {type:'increment',payload:10} and if we passed even single more or less property than type or payload then ts will show error 

// NOTE :: if we ever need to pass state variable , setter function and dispatch method as a props to child component then while mentioning prop type in child component , simply hover in state , setter and dispatch method and just copy paste the type from it that is for above dispatch method the type is  [ React.Dispatch<CounterAction> ]