import './app.scss';
import { useState, useEffect } from 'react';

// https://www.youtube.com/watch?v=pCA4qpQDZD8

//include file
// Form
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  //State
  const [inputText, setInputText] = useState(''); //it will save a string
  const [todos, setTodos] = useState([]); //it will save an array containing objects
  const [filterItems, setFilterItems] = useState([]); //it will save an array containing objects that via select option
  const [filterStatus, setFilterStatus] = useState('all'); //it will save option status

  //UseEffect
  useEffect(() => {

    handlingGetDataFromLocalStorage()

  }, []) //run once when app start


  useEffect(() => {

    handlingFilterSelectOption();
    handlingSaveDataToLocalStorage()

  }, [todos, filterStatus]) //thứ tự các state khác nhau thì kết quả to get về khác nhau. why?
  //Functions


  const handlingFilterSelectOption = () => {

    switch (filterStatus) {
      case "completed":
        setFilterItems(todos.filter(element => element.completed === true));
        break;

      case "uncompleted":
        setFilterItems(todos.filter(element => element.completed === false));
        break;

      default:
        setFilterItems(todos);
        break;
    }

  }

  //save to localStorage

  const handlingSaveDataToLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos));

  }

  const handlingGetDataFromLocalStorage = () => {

    if (localStorage.getItem('todos') === null) {
      localStorage.setItem("todos", JSON.stringify([]));
      console.log("abc")

    } else {
      // let todoFromLocalStorage = JSON.parse(localStorage.getItem("todos"))
      // setTodos(todoFromLocalStorage);
      console.log(JSON.parse(localStorage.getItem("todos")))
      // console.log(todos);
    }

  }




  return (
    <div className="App">
      <header className="App-header">  </header>

      <main>
        <div className="container">
          <h1>To do list</h1>

          {/* {
            console.log(todos)
          } */}

          <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} filterStatus={filterStatus} setFilterStatus={setFilterStatus} filterItems={filterItems} setFilterItems={setFilterItems} />
          <TodoList inputText={inputText} todos={todos} setTodos={setTodos} filterItems={filterItems} />



        </div>

      </main>

    </div>
  );
}

export default App;
