
function Form({ inputText, setInputText, todos, setTodos, setFilterStatus, filterStatus }) {



    // handling events
    const handlingInputText = (e) => {
        setInputText(e.target.value);
    }

    const handlingAddElement = (e) => {
        e.preventDefault();
        setTodos([...todos, { text: inputText, completed: false, id: todos.length + 1 }]) //question:  text: inputText là cấu trúc gì? tại sao kp là "text": inputText theo dạng item của object
        setInputText('')

    }

    const handlingOptionSelectionStatus = ((e) => {

        setFilterStatus(e.target.value)

    })





    return (

        <form>
            <input type="text" placeholder="Input your to do" value={inputText} onChange={handlingInputText} />
            <button onClick={handlingAddElement} >Add</button>

            <select name="options" id="options" onChange={handlingOptionSelectionStatus}>
                <option value="all">{filterStatus}</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>

        </form>




    );
}

export default Form;
