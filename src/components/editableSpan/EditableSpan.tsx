import React, {useRef, useState} from 'react';
import {Input} from "../ui/input/Input";

type EditableSpanProps = {
    value: string
    updateTitle: (title: string)=>void
}
export const EditableSpan = ({value, updateTitle}: EditableSpanProps) => {
    const [editMode, setEditMode] = useState(false)

    const editRef = useRef<HTMLInputElement>(null)

    const changeTitleHandler = () => {
        if (editRef.current) {
                updateTitle(editRef.current.value)
        }
    }
    const activateSetEditableSpan = () => {
        setEditMode(true)
    }
    const deActivateSetEditableSpan = () => {
        setEditMode(false)
    }
    return (
        <>
            {editMode ? (
                <Input value={value}
                       autoFocus
                       onBlur={deActivateSetEditableSpan}
                       ref={editRef}
                       onChange={changeTitleHandler}
                />
            ) : (
                <span onDoubleClick={activateSetEditableSpan}>{value}</span>
            )}
        </>
    );
};
