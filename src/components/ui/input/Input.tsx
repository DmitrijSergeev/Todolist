import React, {ComponentPropsWithRef, forwardRef} from 'react';

type InputProps = {
    className?: string
} & ComponentPropsWithRef<'input'>


export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const {className, onKeyDown, ...rest} = props;

    return (
        <label>
            <input ref={ref} onKeyDown={onKeyDown} className={className} {...rest}>

            </input>
        </label>
    );
});
