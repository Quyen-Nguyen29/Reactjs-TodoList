import './app.scss';
import { useState, useEffect } from 'react';
import { StatusCompleted, StatusUnCompleted, FilterAll, FilterUncompleted, FilterCompleted } from './constants/const'

// https://www.youtube.com/watch?v=pCA4qpQDZD8

// to do
// 1 tách filter component
// 2 use addToDoItem function to append new todo item, dont pass more prop into child component this may be cause of performance issue
// 3 swith to filter state to manage filter status and more than that
// 4 push delele id from todo  item to app component to delete item 

//include file
// Form
import Form from './components/Form';
import TodoList from './components/TodoList';
import Filter from './components/Filter';


function App() {
  //State
  const [todos, setTodos] = useState([
    { "id": 1, "text": "testtttttttt", "status": StatusUnCompleted,isShow :true },
    { "id": 2, "text": "testtttttttt1", "status": StatusUnCompleted,isShow:true }])
  const [inputText, setInputText] = useState('');
  const [todo, setTodo] = useState({})

  const [filterState, setFilterState] = useState(FilterAll)





  ///Function

  const handlingInputText = (e) => {
    setInputText(e.target.value)

  }

  const handlingAddTodo = ( inputtext) => {
    /////////
    let id = todo.id
    if (inputtext === "") {
      alert( "Please input your todo")
      return
    }
    if (!id) {
      setTodos([...todos, { "id": todos.length + 1, "text": inputtext, "status": StatusUnCompleted,isShow:true }]);
      setInputText('');
      return
    }
    let newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, "text": inputtext }
      }
      return todo
    })
    setTodos(newTodos)
    setTodo({})
    setInputText('');
  }

  useEffect(()=>{
    if(!todo.id){
     
      return
    }
    setInputText(todo.text)
  },[todo])

  const togglingTodoItemStatus = (itemId) => {
    setTodos(todos.map((todo) => {
      if (todo.id === itemId) {
        return { ...todo, "status": todo.status === StatusCompleted ? StatusUnCompleted : StatusCompleted }
      }
      return todo
    }))

  }

  const handlingDeletingTodoItem = (itemId) => {

    setTodos(todos.filter((element) => {
      return (element.id !== itemId)
    }))
  }

  // const handlingEditTodoItem = (editItemId) => {
  //   todos.forEach((todoItem) => {
  //     if (todoItem.id === editItemId) {
  //       setInputText(todoItem.text)
  //     }
  //   })


  // }

  useEffect(() => {


  }, [filterState]);

  const handlingFilterItem = (value) => {
    setFilterState(value)
    // console.log(filterState) ///if console.log here it will show the previous

    switch (value) {
      case StatusCompleted:
        setTodos(todos.map((todo)=>{
          return {...todo,isShow:todo.status===StatusCompleted}
        }))
        return;
      case StatusUnCompleted:
        setTodos(todos.map((todo)=>{
          return {...todo,isShow:todo.status===StatusUnCompleted}
        }))
        return;
      default:
        setTodos(todos.map((todo)=>{
          return {...todo,isShow:true}
        }))
        return;
    }




  }

  // filter component


  return (
    <div className="App">
      <header className="App-header"> </header>
      {/* {console.log(filterState)}  */}  {/* ///if console.log here it will show the previous */}
      <main>
        <div className="container">
          <h1>To do list</h1>
          <div className='group-form'>
            <Form todos={todos} handlingAddTodo={handlingAddTodo} handlingInputText={handlingInputText} inputText={inputText} />
            <Filter handlingFilterItem={handlingFilterItem} />

          </div>

          <TodoList todos={todos} 
          // setTodos={setTodos}
            setTodo={setTodo}
            handlingDeletingTodoItem={handlingDeletingTodoItem}
            togglingTodoItemStatus={togglingTodoItemStatus}
            // handlingEditTodoItem={handlingEditTodoItem}
          />


        </div>

      </main>

    </div>
  );
}

export default App;


//// thinking
/****
 * cấu trúc todo data: [{"id": 0,"text": "abc", "completedStatus": false  }]
 * Sắp xếp App.js ( Form.js + Filter.js + TodoList.js(TodoItem.js))
 * truyền props để tối ưu performance. Props có thể truyền ( state, setState, và feature function trigger)
 * Đặt feature function ở cùng chổ với state.
 * Đặt state ở chổ cần dùng nó ( nhớ là state chỉ truyền từ cha sang còn ko truyền ngược lại đc)
 *
 * -----
 * bắt đầu: todos: sẽ là 1 array rỗng, hay có chứa giá trị là những objects đã đc nhập vào trc đó
 * cấu trúc của 1 item add vào {"id": giatrinumberduynhat, "text":"a string contain text item-lấy từ input value in Form", "status": giá trị boolean -true: completed, false: uncompleted }
 * Remember: cấu trúc: setTodos([...todos, { text: inputText, completed: false, id: todos.length + 1 }])
 *e.preventDefault();    Prevent refresh lại trang khi event kích hoạt//
 */





/////////////////Questions
/**
 * 1.Form tag: input and select are html element in form. We seperate them to specify fuction for each component
 **So. Do we need wrap these in the form?; is it okay to have 2 form in 1 page?
 *
 *2.Khi nào function cần parameter event và khi nào ko.
 *3.Why cũng là action click but 1 số refresh và một số lại ko? Có phải là tại vì nó là button nên refresh lại còn others thì ko? có nút nào giống button ko
 *4.Thay vì truyền props thì truyền function-- Cũng truyền qua nhiều cấp. vậy tại sao truyền funstion thì performance lại tốt hơn truyền props?
  **Có phải vì function có thẻ đc lưu vào bộ nhớ đệm thông quá việc use useCallback hook
 *
 *
 *
 *   **/



///
