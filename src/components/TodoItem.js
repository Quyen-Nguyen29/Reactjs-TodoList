import {StatusCompleted,StatusUnCompleted} from './../constants/const'

function TodoItem({ todo, handlingDeletingTodoItem, togglingTodoItemStatus, setTodo }) {

    return (

        <li className={`${todo.status===StatusCompleted ? "completed" : ""}`}>
            <span className="item-text" >{todo.text}</span>
            <span className="complete-btn" onClick={() => togglingTodoItemStatus(todo.id)}  ><img src="./assets/images/icon-complete.png" alt="icon complete" /></span >
            <span className="delete-btn" onClick={() => handlingDeletingTodoItem(todo.id)} ><img src="./assets/images/icon-delete.png" alt="icon delete" /></span>
            <span className="edit-btn" onClick={() => setTodo(todo)}  >Edit</span>
        </li>

    );
}

export default TodoItem;
