const TodoItem = (props) => {

    const activityArr = props.activityArr;
    const setActivityArr = props.setActivityArr;

    const deleteActivity = (deletiId) => {
        const tempArry = activityArr.filter((item) => {
            if (item.id === deletiId) {
                return false
            }
            else{
                return true
            }
        })
        setActivityArr(tempArry)
    }

    return (
        <div className="flex justify-between">
            <p>{props.index + 1}.{props.activity}</p>
            <button className="text-red-400" onClick={() => { deleteActivity(props.activityId) }}>Delete</button>
        </div>
    )
}
export default TodoItem