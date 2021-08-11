import {useState} from "react";
import UserName from "./UserName";

export default function Hello(props) {
  console.log(props)
  const [name, setName] = useState(props.name);
  const [age, setAge] = useState(props.age);
  const msg = age > 19 ? "성인입니다." : "미성년자입니다."

  function changeName() {
    setName(name);
    setAge(age + 1);
  }
  return (
    <div>
      <h2>
        {name} ({age}세) : {msg}
      </h2>
      <UserName name={name}/>
      <button onClick={changeName}>Change</button>
    </div>
  );
}
