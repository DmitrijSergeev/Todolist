import React, {KeyboardEvent, useRef, useState} from 'react';
import {Input} from "../ui/input/Input";
import s from "../todolist/Todolist.module.css"
import {Button} from "../ui/button/Button";

type AddItemProps = {
    addItem: (title: string)=>void
}
export const AddItemForm = (props: AddItemProps) => {
    const {addItem} = props;

    const inputRef = useRef<HTMLInputElement>(null)

    const [error, setError] = useState<string | null>(null)

    const addTaskHandler = () => {
        if (inputRef.current) {
            if (inputRef.current.value !== '') {
                addItem(inputRef.current.value.trim())
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
            <Input ref={inputRef} onKeyDown={onKeyDownHandler}
                   className={error ? s.error : ''}
            />
            <Button onClick={addTaskHandler}>+</Button>
            {error && <div className={s.errorMessage}>{error}</div>}
        </div>
    );
};
