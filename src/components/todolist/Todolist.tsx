import React, {ChangeEvent, useState} from 'react';
import {Button} from "../ui/button/Button";
import s from './Todolist.module.css'
import {FilterType} from "../../App";

export type TaskProps = {
    taskId: string
    title: string
    isDone: boolean
}

type TodolistProps = {
    tasks: TaskProps[]
    removeTask: (taskId: string)=>void
    changeFilter: (filter: FilterType)=> void
    addTask: (title: string)=>void
}
export const Todolist = ({tasks, removeTask, changeFilter, addTask}: TodolistProps) => {
    const [title, setTitle] = useState('')
    const onClickAllHandler = () => {changeFilter('all') }
    const onClickActiveHandler = () => {changeFilter('active') }
    const onClickCompletedHandler = () => {changeFilter('completed') }

    const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const addTaskHandler = () => {
        addTask(title)
    }
    return (
        <div>
            <h3>What to learn</h3>
            <div>
                <input value={title} onChange={onChangeTitleHandler}/>
                <Button onClick={addTaskHandler}>+</Button>
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
                <Button onClick={onClickAllHandler}>All</Button>
                <Button onClick={onClickActiveHandler}>Active</Button>
                <Button onClick={onClickCompletedHandler}>Completed</Button>
            </div>
        </div>
    );
};
