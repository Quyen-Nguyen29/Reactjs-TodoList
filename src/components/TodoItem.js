function TodoItem({ item, todos, setTodos }) {

    const handlingCompletedItem = () => {
        
        setTodos(
            todos.map((element => {
                if (element.id === item.id) {
                    return (
                        { ...item, completed: !item.completed }
                    )
                }
                return element;
            }))
        )

    }

    // [{text:"", completed: true, id:1}]

    const handlingDeleteItem = () => {

        setTodos(todos.filter(element => element.id !== item.id)) //set lại mảng todos chỉ chứa những item khác item.id


    }

    return (

        <li className={`${item.completed ? 'completed' : ''}`}>
            <span className="item-text" >{item.text}</span>
            <span className="complete-btn" onClick={handlingCompletedItem} ><img src="./assets/images/icon-complete.png" alt="icon complete" /></span >

            <span className="delete-btn" onClick={handlingDeleteItem} ><img src="./assets/images/icon-delete.png" alt="icon delete" /></span>
        </li>

    );
}

export default TodoItem;
