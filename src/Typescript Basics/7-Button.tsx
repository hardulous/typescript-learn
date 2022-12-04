
type buttonProps = {

    handleClick: () => void  // here type of handleClick is a function with no paramter and return nothing
    handleClickEvent: (event:React.MouseEvent<HTMLButtonElement>,id:number) => void // here the type of event is event perform by mouse and more specifically on html button element 
}

const Button = (props:buttonProps) => {

  return (

    <>
    
      <button onClick={props.handleClick} onDoubleClick={(e)=>{
        props.handleClickEvent(e,5)
      }}>Click On Me</button>

    </>

  )

}

export default Button

// so far we have declare type of prop passed to a component but we now in react app we perform event like button click , onChange input etc.... and in this event we pass event object as well , so using ts we can declare type of event object as well

// here most of the time on click make api call neither accept parameter not return anything 

// but some time we do pass some value to onclick like event object so in these case we pass paramter to click handler method