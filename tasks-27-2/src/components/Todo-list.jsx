import { useState } from "react";


export default function Todo() {

    const [tasks, setTasks] = useState([]);
    const [taskText, setTaskText] = useState("")

    function addTask() {
        setTasks([...tasks, {text: taskText, completed: false}])
        setTaskText("");
    }

    return (
        <div>
            <input onInput={(event) => setTaskText(event.target.value) } value={taskText} type="text" />
            
            <button onClick={() => addTask()}>Add task</button>
        </div>
    );
}