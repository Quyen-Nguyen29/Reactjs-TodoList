import TodoItem from '../components/TodoItem';


function TodoList({ todos, setTodos,filterItems  }) {


    return (

        <ul >
            {
                filterItems.map((item) => {
                    return (
                        <TodoItem key={item.id} item={item} todos={todos} setTodos={setTodos} />
                    )
                })
            }
        </ul>

    );
}

export default TodoList;
