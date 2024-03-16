import {ReactNode} from "react";

type ButtonProps = {
    children: ReactNode
}

export const Button = ({ children }: ButtonProps) => {
    return <button>{children}</button>
}