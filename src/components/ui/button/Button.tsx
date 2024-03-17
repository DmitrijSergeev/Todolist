import {ComponentPropsWithRef, ElementType, ReactNode} from "react";
import clsx from "clsx";

type ButtonProps<T extends ElementType = 'button'> = {
    as?: T
    children: ReactNode
    className?: string
} & ComponentPropsWithRef<T>

export const Button = <T extends ElementType = 'button'> (props: ButtonProps<T>) => {
    const {className, as: Component = 'button', ...rest} = props

    return <Component className={clsx(className)} {...rest}/>
}