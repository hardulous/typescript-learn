// here this means the type of names proeprty is array of object where each object consist of first and last property of type string
type personListProps = {
  names: {
    first: string;
    last: string;
  }[];
};

const PersonList = (props: personListProps) => {
  return (
    <>
      <h4>PERSON LIST ARE -:</h4>
      <ul>
        {props.names.map((name, i) => {
          return (
            <li key={i}>
              {name.first} {name.last}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default PersonList;

// here defining array of objects as a type for my prop variable

// for array of string we declare by proeprty = string[] , for array of number we write property = number[] etc...

