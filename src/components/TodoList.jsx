import TodoItem from "./TodoItem"

const TodoList = (props) => {

    const activityArr = props.activityArr;
    const setActivityArr = props.setActivityArr;

    return (
        <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow">
            <h2 className="text-2xl font-medium">Todo's Activity</h2>
            {activityArr.length === 0 ? <p>You haven't added any activity yet</p> : ''}
            
            {
                activityArr.map((item, index) => {
                    return (
                        <TodoItem activityId={item.id} key={index} activity={item.activity} index={index} activityArr={activityArr} setActivityArr={setActivityArr}></TodoItem>
                    )
                })
            }
        </div>
    )
}
export default TodoList