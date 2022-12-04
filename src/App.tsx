import Greet from "./Typescript Basics/1-Greet";
import LoggedIn from "./Typescript Basics/10-LoggedIn";
import User from "./Typescript Basics/11-User";
import User2 from "./Typescript Basics/12-User2";
import Counter from "./Typescript Basics/13-Counter";
import Counter2 from "./Typescript Basics/14-Counter2";
import Person from "./Typescript Basics/2-Person";
import PersonList from "./Typescript Basics/3-PersonList.";
import Status from "./Typescript Basics/4-Status";
import Heading from "./Typescript Basics/5-Heading";
import Oscar from "./Typescript Basics/6-Oscar";
import Button from "./Typescript Basics/7-Button";
import Input from "./Typescript Basics/8-Input";
import StyleContainer from "./Typescript Basics/9-StyleContainer";

function App() {
  const personName = {
    first: "super",
    last: "man",
  };

  const personList = [
    {
      first: "aman",
      last: "bisht",
    },
    {
      first: "acey",
      last: "charausia",
    },
    {
      first: "rajni",
      last: "kant",
    },
  ];

  return (
    <>
      <h2>REACT WITH TYPESCRIPT</h2>

      {/* 1. Typing Props , here if we try to pass any other data type than string then ts will throw error because Greetprop name expect type string only */}
      <Greet name="aman bisht" messageCount={10} isLoggedIn={true} />

      {/* 2. Basic Props */}
      <Person name={personName} />
      <PersonList names={personList} />

      {/* 3. Advance Props */}
      <Status status="loading" />
      {/* <Status status="asdad"/>  , this will show error  */}

      <Heading>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        possimus porro dolor incidunt quia iusto placeat alias voluptatum nisi
        minima tenetur illo earum iure molestiae, eveniet hic fugiat minus sit.
      </Heading>

      <Oscar>
        <Heading>Oscar goes to aman bisht</Heading>
      </Oscar>

      {/* here sometime it is not neccessary that a specific prop has to be passed so in this case we use optional type */}
      <Greet
        name="tarun sharma"
        messageCount={20}
        isLoggedIn={false}
        isAdmin={true}
      />

      {/* 4. Event Props */}
      <Button
        handleClick={() => {
          console.log("I am clicked");
        }}
        handleClickEvent={(e, id) => {
          console.log(e.target, id);
        }}
      />
      
      <Input
       value="aman"
       handleChange={(e)=>{
        console.log(e)
       }}
      />

      {/* 5. Style Props , here as this componet prop type is mentioned as css proeprties so the object we pass in it must be a valid css style object and now auto complete also help us which is not in js file*/}
      <StyleContainer
      styles={{
        border:'1px solid black',
        padding:'1rem'   // here the css property and their value must be correctly spell otherwise show error 
      }}
      />

      {/* 6. Typing UseState Hook Implicitly And Explicitly */}
      <LoggedIn/>
      <User/>


      {/* 7. UseState Type Assertion */}
       <User2/>

       {/* 8. Typing UseReducer Hook */}
       <Counter/>

       {/* 9. UseReducer Strict Action Types */}
       <Counter2/>

    </>
  );
}

export default App;

// ################ TYPESCRIPT ####################################

// The official website of typescript is https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html

// 1. Typing Props

// it is a way of giving structure to prop and variable we are passing to a component that is mentioning data type so that ts can give us compile time error if we are using some property that does not exist on that variable , to delcare type we can use both interface and type keyword but we should use interface if building library and type for application there is hardly any differences between them

// NOTE:: if we have passed some prop from parent component to child one then in tsx that child component must accept that prop by passing prop parameter to function else ts will throw an error

/* NOTE::

Types by Inference:

TypeScript knows the JavaScript language and will generate types for you in many cases. For example if we create a variable and assigning it to a particular value, TypeScript will use the value as its type by default that is

let message = "Hello World";

as we have initilize value hello world to message variable so by inference the default type of variable message is String 

*/ 

/*

Prop Types And Tips , we should destructure props whenever neccesary in a function component that is , App = ({p1,p2}:type name) => {} , 2nd when working in a large codebase we should always pull all ts types in a seprate file just export them from their and use in any tsx component file , last always try to reuse one type in another type that is , EX

type Name = {    
  first:string,
  last:string
}

type Person = {
  fullName:Name   ( fullName type is coming from above type name reusing it )
  age:number
  address:string
}

*/ 

