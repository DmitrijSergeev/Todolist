import React from 'react';

export type TaskProps = {
    id: string
    title: string
    isDone: boolean
}

type TodolistProps = {
    tasks: TaskProps[]
}
export const Todolist = ({tasks}: TodolistProps) => {
    return (
        <div>
            <h3>What to learn</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {tasks.map( (el)=>{
                    return (
                        <li key={el.id}>
                            <input type="checkbox" checked={el.isDone}/>
                            <span>{el.title}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
};
