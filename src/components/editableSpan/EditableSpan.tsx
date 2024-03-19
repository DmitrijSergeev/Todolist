import React, {useState} from 'react';
import {Input} from "../ui/input/Input";

type EditableSpanProps = {
    value: string
}
export const EditableSpan = ({value}: EditableSpanProps) => {
    const [editMode, setEditMode] = useState(false)

    const activateSetEditableSpan = () => {
        setEditMode(true)
    }
    const deActivateSetEditableSpan = () => {
        setEditMode(false)
    }
    return (
        <>
            {editMode ? (
                <Input value={value} autoFocus onBlur={deActivateSetEditableSpan}/>
            ) : (
                <span onDoubleClick={activateSetEditableSpan}>{value}</span>
            )}
        </>
    );
};
