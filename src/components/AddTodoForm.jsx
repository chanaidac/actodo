import { useState } from "react";

const AddTodoForm = (props) => {

    const activityArr = props.activityArr;
    const setActivityArr = props.setActivityArr;

    const [newActivity, setNewActivity] = useState('')

    const handleNewActivity = (event) => {
        setNewActivity(event.target.value)
    }

    const addNewActivity = () => {
        setActivityArr([...activityArr,
        {
            id: activityArr.length+1,
            activity: newActivity
        }
        ])
        setNewActivity('')

    }

    return (
        <div className="flex flex-col gap-3">
            <h2>Manage Activities</h2>
            <div>
                <input type="text" value={newActivity} onChange={handleNewActivity} className="border border-black bg-transparent p-1" placeholder="Next Activity?" />
                <button className="bg-black text-white p-1 border border-black" onClick={addNewActivity}>Add</button>
            </div>
        </div>
    )
}
export default AddTodoForm;