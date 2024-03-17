import React from 'react';
import {Button} from "../ui/button/Button";
import s from './Todolist.module.css'

export type TaskProps = {
    taskId: string
    title: string
    isDone: boolean
}

type TodolistProps = {
    tasks: TaskProps[]
    removeTask: (taskId: string)=>void
}
export const Todolist = ({tasks, removeTask}: TodolistProps) => {

    return (
        <div>
            <h3>What to learn</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            {tasks.length === 0 ? (
                <p className={s.tasks}>Array is empty</p>
                ) : (
                <ul>
                    {tasks.map((el) => {
                        const removeOnCklick = () => {
                            removeTask(el.taskId)
                        }
                        return (
                            <li key={el.taskId}>
                                <Button onClick={removeOnCklick}>X</Button>
                                <input type="checkbox" checked={el.isDone}/>
                                <span>{el.title}</span>
                            </li>
                        )
                    })}
                </ul>
            )}
            <div>
                <Button>All</Button>
                <Button>Active</Button>
                <Button>Completed</Button>
            </div>
        </div>
    );
};
