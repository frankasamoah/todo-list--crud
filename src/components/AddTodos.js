import { useRef } from "react"

const AddTodos = ({setTodos}) => {
  const inputRef = useRef();


  const handleChange = ({target}) => {
  //  console.log(target.value);
  const newTodo = target.value;
  setTodos(prev => [newTodo, ...prev])
  }

  return (
    <form>
      <input type="text" onChange={handleChange}/>
    </form>
  )
}

export default AddTodos