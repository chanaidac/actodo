import { useState } from "react"
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

const TodoContainer = () => {
    const [activityArr, setActivityArr] = useState([
        {
            id: 1,
            activity: 'Go for a run'
        },
        {
            id: 2,
            activity: 'Go for a sleep'
        },
        {
            id: 3,
            activity: 'Read books for 15 mins'
        },
    ])
    return (
        <div>
            <div className="flex gap-5 flex-wrap">
                <AddTodoForm activityArr={activityArr} setActivityArr={setActivityArr}></AddTodoForm>
                <TodoList activityArr={activityArr} setActivityArr={setActivityArr}></TodoList>
            </div>
        </div>
    )
}
export default TodoContainer;