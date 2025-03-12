import { useState } from "react";
import "./App.css"

export default function App() {

    const [tasks, setTasks] = useState([])
    const [task, setTask] = useState("");
    const [filterTask, setFilterTask] = useState('all')

    const filteredTasks = tasks.filter((task) => {
            if (filterTask == 'all') {
                return task
            } else if (filterTask == 'completed') {
                return task.completed
            } else if (filterTask == 'uncompleted') {
                return !task.completed
            }
        })
    

    console.log(filteredTasks);
    

    function AddTask() {
        if (task) {
            setTasks([...tasks, {title: task, completed: false}]);
            setTask('')
        } else {
            return
        }
    }

    function removeTask(i) {

        setTasks(tasks.filter((task, index) => i !== index))
        
    }

    function changeComplate(i) {

        setTasks(tasks.map((task, index) => i === index && {title: task.title, completed: !task.completed}))
        
    }

    const displayTasks = filteredTasks.map((task, i) => 
    
        <div key={i} className="task">
            <h1>{task.title}</h1>
            <div className="box">
                <button onClick={() => changeComplate(i)} className={task.completed ? 'completed' : 'uncomplated'}>
                    {task.completed ? '✔' : '❌'}
                </button>
                {/* {task.completed ? <button className="uncomplated">C</button> : <button className="completed">UC</button>} */}
                <button className="removeBtn" onClick={() => removeTask(i)}>🗑</button>
            </div>
        </div>

    )

    return (
        <>
        
            <div className="todoCont">
                <div>
                    <input value={task} onChange={(e) => setTask(e.target.value)} type="text" placeholder="Добавить заметку" />
                    <button onClick={AddTask} type="button">Добавить</button>   
                </div>

                <div>
                    <button onClick={() => setFilterTask('all')}>All</button>
                    <button onClick={() => setFilterTask('completed')}>completed</button>
                    <button onClick={() => setFilterTask('uncompleted')}>Uncomplated</button>
                </div>
            </div>

            

            <div className="tasksBox">
                {displayTasks}
            </div>

        </>
    );
}