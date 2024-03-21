import React, {useState} from 'react';
import './App.css';
import {TaskProps, Todolist} from "./components/todolist/Todolist";
import {v1} from "uuid";
import {AddItemForm} from "./components/addItemForm/AddItemForm";

export type FilterType = 'all' | 'active' | 'completed'

type TodolistType = {
    todoId: string
    title: string
    filter: FilterType
}
type TodoTaskType = Record<string, TaskProps[]>

const todoId1 = v1();
const todoId2 = v1();

function App() {

    const [todolists, setTodolists] = useState<TodolistType[]>([
        {todoId: todoId1, title: 'What to learn', filter: 'all'},
        {todoId: todoId2, title: 'What to buy', filter: 'all'},
    ])
    const [tasks, setTasks] = useState<TodoTaskType>({
        [todoId1]: [
            {taskId: v1(), title: 'HTML', isDone: true},
            {taskId: v1(), title: 'JS', isDone: false},
            {taskId: v1(), title: 'React', isDone: false},
        ],
        [todoId2]: [
            {taskId: v1(), title: 'Book', isDone: true},
            {taskId: v1(), title: 'Milk', isDone: false},
            {taskId: v1(), title: 'Eggs', isDone: false},
        ]
    })
    const changeFilter = (todoId: string, filter: FilterType) => {
        setTodolists(todolists.map(tl => tl.todoId === todoId ? {...tl, filter} : tl))
    }

    function removeTask(todoId: string, taskId: string) {
        setTasks({...tasks, [todoId]: tasks[todoId].filter( t => taskId !== t.taskId)} )
        // let filteredTasks = tasks.filter(t => t.taskId !== taskId)
        // setTasks(filteredTasks)
    }

    function addTask(todoId: string, title: string) {
        const newTask = {taskId: v1(), title, isDone: false}
        setTasks( {...tasks, [todoId]: [newTask, ...tasks[todoId]]} )
    }
    function changeTaskStatus(todoId: string, taskId: string, isDone: boolean) {
        setTasks({...tasks, [todoId]: tasks[todoId].map( t => taskId === t.taskId ?
                {...t, isDone}
                : t)})
    }
    function updateTaskTitle (todoId: string, taskId: string, title: string){
        setTasks( {...tasks, [todoId]: tasks[todoId].map( t => t.taskId === taskId
                ? {...t, title}
                : t) } )
    }
    function removeTodo (todoId: string){
        setTodolists(todolists.filter( tl => todoId !==tl.todoId))
        delete tasks[todoId]
        setTasks({...tasks})
    }
    function addTodo (title: string){
        const todoId = v1()
        const newTodo: TodolistType = {todoId, title, filter: 'all'}
        setTodolists([newTodo, ...todolists])
        setTasks({...tasks, [todoId]: []})
    }

    function updateTodoTitle (todoId: string, title: string) {
        setTodolists( todolists.map( tl => tl.todoId === todoId ? {...tl, title} : tl) )
    }

    return (
        <div className="App">
            <AddItemForm addItem={addTodo}/>
            {todolists.map(tl => {
                 let tasksForTodolist = tasks[tl.todoId]

                    if (tl.filter === 'active') {
                        tasksForTodolist = tasks[tl.todoId].filter(t => !t.isDone)
                    }
                    if (tl.filter === 'completed') {
                        tasksForTodolist = tasksForTodolist.filter(t => t.isDone)
                    }
                    return (
                        <Todolist
                            key={tl.todoId}
                            todoId={tl.todoId}
                            title={tl.title}
                            tasks={tasksForTodolist}
                            removeTask={removeTask}
                            changeFilter={changeFilter}
                            addTask={addTask}
                            changeTaskStatus={changeTaskStatus}
                            filter={tl.filter}
                            removeTodo={removeTodo}
                            updateTodoTitle={updateTodoTitle}
                            updateTaskTitle={updateTaskTitle}
                        />
                    )
                }
            )}
        </div>
    );
}

export default App;
