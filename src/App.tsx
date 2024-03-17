import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./components/todolist/Todolist";
import {v1} from "uuid";

function App() {
    const [tasks, setTasks] = useState([
        {taskId:v1(), title: 'HTML', isDone: true},
        {taskId:v1(), title: 'JS', isDone: false},
        {taskId:v1(), title: 'React', isDone: false},
    ])

    function removeTask (taskId: string){
        let filteredTasks = tasks.filter( t => t.taskId !==taskId )
        setTasks( filteredTasks )
    }

    return (
        <div className="App">

            <Todolist tasks={tasks}
                      removeTask={removeTask}
            />

        </div>
    );
}

export default App;
