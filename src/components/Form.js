
function Form({ handlingAddTodo, handlingInputText, inputText, todos }) {
    const abc=(e)=>{
        // hanle event here
        e.preventDefault()
        handlingAddTodo(inputText)
    }
    return (

        <form className='input-form'>
            <input type="text" placeholder="Input your to do" value={inputText} onChange={handlingInputText} />
            <button onClick={abc}>Add</button>

        </form>

    );
}

export default Form;
