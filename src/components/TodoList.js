import TodoItem from '../components/TodoItem';


function TodoList({ todos, handlingDeletingTodoItem, togglingTodoItemStatus, handlingEditTodoItem, setTodo }) {

    return (

        <ul   >
            {
                todos.map((todo) => {
                    return todo.isShow && (
                        <TodoItem key={todo.id} todo={todo}
                            setTodo={setTodo}
                            handlingDeletingTodoItem={handlingDeletingTodoItem}
                            togglingTodoItemStatus={togglingTodoItemStatus}
                       
                        />

                    )
                })

            }
        </ul>




    );
}

export default TodoList;
