import { useReducer } from "react"

type CounterState={  // reducer state type
    count:number
}

type updateAction={
    type:'increment'|'decrement'
    payload:number
}
type resetAction={
    type:'rewind'
}

type CounterAction={ // reducer action type with strict type
    type:'increment'|'decrement'|'rewind'
    payload?:number // now payload is not mandatory
}

// DISCRIMINATED UNION APPROACH
type CounterAction2= updateAction | resetAction

const initialState = { count:0 }

const reducer = ( state:CounterState , action:CounterAction2 )=>{
    switch (action.type) {
        case 'increment':
            return {count:state.count + action?.payload}
        case 'decrement':
            return {count:state.count - action?.payload}
        case 'rewind':
            return initialState
        default:
            return state;
    }
}

const Counter2 = () => {
    const [state, dispatch] = useReducer(reducer,initialState)  

    return (
  
      <>
      <h2>UseReducer Strict Action Types</h2>
        Count: {state.count}
        <button onClick={()=>dispatch({type:'increment',payload:10})}>
          Increment 10
        </button>
        <button onClick={()=>dispatch({type:'decrement',payload:10})}>
          Decrement 10
        </button>

        {/* 
        
        as we have restrict the action type now we can not pass reset as action type instead of increment or decrement only

        <button onClick={()=>dispatch({type:'reset',payload:10})}>
          Decrement 10
        </button> 
        
        */}

        <button onClick={()=>dispatch({type:'rewind'})}>
           Rewind
        </button>
      
      </>
  
    )
}

export default Counter2

// Here at the moment everything work fine but one problem is that our action type is string which means if we pass anything a string value no error will come , means if we pass {type:'reset',payload:30} then no error will come because reset eventhough is not getting handled by reducer still it is a valid action type , so using ts we can further restrict the action type 

// here now lets say we have another action type called rewind which is similar to reset button in this case we dont need to pass payload data to action so to tell ts that payload is not necessary when dispatching the action is by ? keyword , but by this now math operation with undefined is not possible so ts now throw error which can be solved by DISCRIMINATED UNION APPROACH FOR REDUCER