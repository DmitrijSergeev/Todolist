import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./components/todolist/Todolist";
import {v1} from "uuid";

export type FilterType = 'all'|'active'|'completed'

function App() {
    const [tasks, setTasks] = useState([
        {taskId:v1(), title: 'HTML', isDone: true},
        {taskId:v1(), title: 'JS', isDone: false},
        {taskId:v1(), title: 'React', isDone: false},
    ])

    const [filter, setFilter] = useState<FilterType>('all')

    let filteredTasks = tasks;
    if (filter === 'active'){
        filteredTasks = tasks.filter( t => !t.isDone)
    }
    if (filter === 'completed'){
        filteredTasks = tasks.filter( t => t.isDone)
    }
    const changeFilter = (filter: FilterType) => {
        setFilter(filter)
    }
    function removeTask (taskId: string){
        let filteredTasks = tasks.filter( t => t.taskId !==taskId )
        setTasks( filteredTasks )
    }

    function addTask(title: string) {
        const newTask = {taskId:v1(), title, isDone: false}
        setTasks( [newTask, ...tasks] )
    }

    return (
        <div className="App">

            <Todolist tasks={filteredTasks}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}
            />

        </div>
    );
}

export default App;
