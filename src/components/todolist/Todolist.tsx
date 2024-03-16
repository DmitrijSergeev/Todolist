import React from 'react';
import {Button} from "../ui/button/Button";

export type TaskProps = {
    id: string
    title: string
    isDone: boolean
}

type TodolistProps = {
    tasks: TaskProps[]
    removeTask: (id: string)=>void
}
export const Todolist = ({tasks, removeTask}: TodolistProps) => {

    return (
        <div>
            <h3>What to learn</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {tasks.map( (el)=>{
                    const removeOnCklick = () => {
                        removeTask(el.id)
                    }
                    return (
                        <li key={el.id}>
                            <button onClick={removeOnCklick}>X</button>
                            <input type="checkbox" checked={el.isDone}/>
                            <span>{el.title}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <Button>All</Button>
                <Button>Active</Button>
                <Button>Completed</Button>
            </div>
        </div>
    );
};
