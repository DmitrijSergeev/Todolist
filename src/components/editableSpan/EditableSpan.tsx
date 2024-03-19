import React from 'react';

type EditableSpanProps = {
    value: string
}
export const EditableSpan = ({value}: EditableSpanProps) => {
    return (
        <span>{value}</span>
    );
};
