import React, {useRef, KeyboardEvent} from 'react';
import {Button} from "../ui/button/Button";
import s from './Todolist.module.css'
import {FilterType} from "../../App";
import {Input} from "../ui/input/Input";

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
    const inputRef = useRef<HTMLInputElement>(null)
    const onClickAllHandler = () => {changeFilter('all') }
    const onClickActiveHandler = () => {changeFilter('active') }
    const onClickCompletedHandler = () => {changeFilter('completed') }

    const addTaskHandler = () => {
        if (inputRef.current){
            if (inputRef.current.value !==''){
                addTask(inputRef.current.value.trim())
                inputRef.current.value = ''
            }
        }
    }
    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter'){
            addTaskHandler()
        }
    }
    return (
        <div>
            <h3>What to learn</h3>
            <div>
                <Input ref={inputRef} onKeyDown={onKeyDownHandler}/>
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
