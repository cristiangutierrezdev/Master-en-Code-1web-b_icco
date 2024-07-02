import Button from "./Button";

function Card(props) {
  return (
    <div>
      esto es el card {" "}
      <Button name={props.unicornio.name}/>
    </div>
  );
}

export default Card;
