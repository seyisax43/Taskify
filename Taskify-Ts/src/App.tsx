import { useState } from 'react'

import './App.css'
import InputField from './components/InputField'
import { Todo } from './components/model'
import TodoList from './components/TodoList'




// let name: string;
// let age: number | string; 
// the pipe is calld union, it means the age can be number or string
// let isStudent: boolean;
// let hobbies: string[];
// let role: [number, string];
// unknown is recommended instead of any type
// let personName: unknown;

// let printName: (name: string) => void;

// interface person {
//   name: string;
//   age?: number;
// }
// this extends is use when you want to have the property of person in Guy
// interface Guy extends person {
//   profession: string;
//   name: 'seun'
// }

// function printName(name: string) {
//   console.log(name);
// }
// printName('Ayo')

// object, the ? make the age property optional
// type Person = {
//   name: string;
//   age?: number;
// };

// let person: Person = {
//   name: 'Seun',

// };

// let lotsOfPeople: Person[];



const App: React.FunctionComponent = () => {
  const [todo, setTodo] = useState<string>("")
  const [ todos, setTodos] = useState<Todo[]>([])


  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
    
  };
  console.log(todos);
  return (

    <div className='App'>
      <span className='heading'>Taskify</span>
      <InputField todo={ todo} setTodo={setTodo} handleAdd={handleAdd} />
     <TodoList todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App
