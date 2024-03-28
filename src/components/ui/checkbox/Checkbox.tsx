import React from 'react';
import * as CheckboxRadix from '@radix-ui/react-checkbox';
import * as LabelRadix from '@radix-ui/react-label'
import Check from "../../../assets/icons/Сheck";
import s from './Checkbox.module.scss'
import clsx from "clsx";

type CheckBoxProps = {
    checked: boolean
    disabled?: boolean
    id?: string
    onChange: (checked: boolean) => void
    required?: boolean
    className?: string
}
export const Checkbox = (
    {checked, onChange, disabled, className, id, required}: CheckBoxProps) => {
    const classNames = {
        buttonWrapper: clsx(s.buttonWrapper, disabled && s.disabled),
        container: clsx(s.container, className),
        indicator: s.indicator,
        label: clsx(s.label, disabled && s.disabled),
        root: s.root,
    }
    return (
        <div className={classNames.container}>
            <LabelRadix.Root asChild className={classNames.label}>
                <div className={classNames.buttonWrapper}>
                    <CheckboxRadix.Root
                        checked={checked}
                        className={classNames.root}
                        disabled={disabled}
                        id={id}
                        onCheckedChange={onChange}
                        required={required}
                    > {checked &&
                        <CheckboxRadix.Indicator className={classNames.indicator}>
                            <Check/>
                        </CheckboxRadix.Indicator>
                    }
                    </CheckboxRadix.Root>
                </div>
            </LabelRadix.Root>
        </div>
    );
};
