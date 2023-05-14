

function Filter({handlingFilterItem}) {


    /***
     * 1.Click  vào select chọn value
     * 2.nhận value đc chọn và filter theo giá trị
     * 
     */

    const handlingFilter=(e)=>{
        e.preventDefault()
        handlingFilterItem(e.target.value)
    }

    return (

        <form>
            <select onChange={(e)=> handlingFilter(e)} name="options" id="options">
                <option value="all"> All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>

        </form>

    );
}

export default Filter;
