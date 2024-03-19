import React, {useState} from 'react';

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
                <input value={value} autoFocus onBlur={deActivateSetEditableSpan}/>
            ) : (
                <span onDoubleClick={activateSetEditableSpan}>{value}</span>
            )}
        </>
    );
};
