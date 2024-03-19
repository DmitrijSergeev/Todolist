import React, {useRef, KeyboardEvent, ChangeEvent, useState} from 'react';
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
    removeTask: (taskId: string) => void
    changeFilter: (filter: FilterType) => void
    addTask: (title: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean) => void
    filter: FilterType
    title: string
}
export const Todolist = (
    {tasks, removeTask, changeFilter, addTask, changeTaskStatus, filter, title}: TodolistProps) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const [error, setError] = useState<string | null>(null)

    const onClickAllHandler = () => {
        changeFilter('all')
    }
    const onClickActiveHandler = () => {
        changeFilter('active')
    }
    const onClickCompletedHandler = () => {
        changeFilter('completed')
    }

    const addTaskHandler = () => {
        if (inputRef.current) {
            if (inputRef.current.value !== '') {
                addTask(inputRef.current.value.trim())
                inputRef.current.value = ''
            } else {
                setError('Title is required')
            }
        }
    }
    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (e.key === 'Enter') {
            addTaskHandler()
        }
    }
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <Input ref={inputRef} onKeyDown={onKeyDownHandler}
                       className={error ? s.error : ''}
                />
                <Button onClick={addTaskHandler}>+</Button>
                {error && <div className={s.errorMessage}>{error}</div>}
            </div>
            {tasks.length === 0 ? (
                <p className={s.tasks}>Array is empty</p>
            ) : (
                <ul>
                    {tasks.map((t) => {
                        const removeOnCklick = () => {
                            removeTask(t.taskId)
                        }
                        const onChangeCheckedHandler = (e: ChangeEvent<HTMLInputElement>) => {
                            changeTaskStatus(t.taskId, e.currentTarget.checked)
                        }
                        return (
                            <li key={t.taskId}
                                className={t.isDone ? s.isDone : ''}>
                                <Button onClick={removeOnCklick}>X</Button>
                                <input type="checkbox" checked={t.isDone}
                                       onChange={onChangeCheckedHandler}
                                />
                                <span>{t.title}</span>
                            </li>
                        )
                    })}
                </ul>
            )}
            <div>
                <Button className={filter === 'all' ? s.activeFilter : ''} onClick={onClickAllHandler}>
                    All
                </Button>
                <Button className={filter === 'active' ? s.activeFilter : ''} onClick={onClickActiveHandler}>
                    Active
                </Button>
                <Button className={filter === 'completed' ? s.activeFilter : ''} onClick={onClickCompletedHandler}>
                    Completed
                </Button>
            </div>
        </div>
    );
};
