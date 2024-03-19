import React, {ComponentPropsWithRef, ElementType, forwardRef} from 'react';

type InputProps<T extends ElementType = 'input'> = {
    as?: T
    className?: string
} & ComponentPropsWithRef<T>


export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const {className, as: Component = 'input', ...rest} = props;

    return (
        <label>
            <Component ref={ref} className={className} {...rest}/>
        </label>
    );
});
