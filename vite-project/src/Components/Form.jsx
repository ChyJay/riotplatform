import {useState} from "react";
export default function Form(){
  const [todo, setTodo] = useState("");

}
return(
  <div>
    <form>
      <input onChange={(e) => setTodo(e.target.value)} value={todo} type="text"/>
      <input onChange={(e) => setTodo(e.target.value)} value={todo} type="text"/>
      <button onClick={(e) => }>Add</button>
    </form>
  </div>
)