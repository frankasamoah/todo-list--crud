import { useState } from 'react';
import './App.css';
import AddTodos from './components/AddTodos';


function App() {
  const [todos, setTodos] = useState([]);

  // console.log(todos);
  return (
    <div className="App">
     <AddTodos setTodos={setTodos}/>
     
    </div>
  );
}

export default App;
