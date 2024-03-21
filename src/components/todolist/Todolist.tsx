import React, {ChangeEvent} from 'react';
import {Button} from "../ui/button/Button";
import s from './Todolist.module.css'
import {FilterType} from "../../App";
import {AddItemForm} from "../addItemForm/AddItemForm";
import {EditableSpan} from "../editableSpan/EditableSpan";
import {Checkbox} from "../ui/checkbox/Checkbox";

export type TaskProps = {
    taskId: string
    title: string
    isDone: boolean
}

type TodolistProps = {
    tasks: TaskProps[]
    removeTask: (todoId: string, taskId: string) => void
    changeFilter: (todoId: string, filter: FilterType) => void
    addTask: (todoId: string, taskId: string) => void
    changeTaskStatus: (todoId: string, taskId: string, isDone: boolean) => void
    filter: FilterType
    title: string
    todoId: string
    removeTodo: (todoId: string)=>void
    updateTodoTitle: (todoId: string, title: string)=>void
    updateTaskTitle: (todoId: string, taskId: string, title: string)=>void
}
export const Todolist = (props: TodolistProps) => {
    const {tasks, removeTask, changeFilter, addTask, changeTaskStatus,
        filter, title, todoId, removeTodo, updateTodoTitle, updateTaskTitle} = props;

    const changeTaskHandler = (todoId: string, filter: FilterType) => {
        changeFilter(todoId, filter)
    }
     const removeTodoHandler = () => {
        removeTodo(todoId)
    }
    const addTaskCallback = (title: string) => {
        addTask(todoId, title)
    }
    const updateTitle = (title: string) => {
        updateTodoTitle(todoId, title)
    }
    return (
        <div>
            <h3>
                <EditableSpan value={title} updateTitle={updateTitle}/>
            </h3>
            <Button onClick={removeTodoHandler}>x</Button>
            <AddItemForm addItem={addTaskCallback}/>
            {tasks.length === 0 ? (
                <p className={s.tasks}>Array is empty</p>
            ) : (
                <ul>
                    {tasks.map((t) => {
                        const removeOnCklick = () => {
                            removeTask(todoId, t.taskId)
                        }
                        const onChangeCheckedHandler = (e: ChangeEvent<HTMLInputElement>) => {
                            changeTaskStatus(todoId, t.taskId, e.currentTarget.checked)
                        }
                        const updateTitle = (title: string)=> {
                            updateTaskTitle(todoId, t.taskId, title)
                        }
                        return (
                            <li key={t.taskId}
                                className={t.isDone ? s.isDone : ''}>
                                <Button onClick={removeOnCklick}>X</Button>
                                <Checkbox checked={t.isDone}
                                       onChange={onChangeCheckedHandler}
                                />
                                <EditableSpan value={t.title} updateTitle={updateTitle}/>
                            </li>
                        )
                    })}
                </ul>
            )}
            <div>
                <Button className={filter === 'all' ? s.activeFilter : ''}
                        onClick={()=>{changeTaskHandler(todoId, 'all')}}>
                    All
                </Button>
                <Button className={filter === 'active' ? s.activeFilter : ''}
                        onClick={()=>{changeTaskHandler(todoId, 'active')}}>
                    Active
                </Button>
                <Button className={filter === 'completed' ? s.activeFilter : ''}
                        onClick={()=>{changeTaskHandler(todoId, 'completed')}}>
                    Completed
                </Button>
            </div>
        </div>
    );
};
