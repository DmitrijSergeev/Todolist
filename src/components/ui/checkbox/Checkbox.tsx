import React from 'react';
import * as RadixCheckbox from '@radix-ui/react-checkbox';
import * as LabelRadix from '@radix-ui/react-label'
import Check from "../../../assets/icons/Сheck";
import s from './Checkbox.module.scss'
import clsx from "clsx";

type CheckBoxProps = {
    checked: boolean
    disabled?: boolean
    id?: string
    label?: string
    onChange: (checked: boolean) => void
    required?: boolean
}
export const Checkbox = (
    {checked, onChange, disabled}: CheckBoxProps) => {
    const classNames = {
        container: clsx(s.container),
        label: clsx(s.label, disabled && s.disabled),
        root: s.root,
        indicator: s.indicator,
        buttonWrapper: clsx(s.buttonWrapper, disabled && s.disabled),
    }
    return (
        <div className={classNames.container}>
            <LabelRadix.Root asChild className={classNames.label}>
                <div className={classNames.buttonWrapper}>
                    <RadixCheckbox.Root
                        className={classNames.root}
                        checked={checked}
                        onCheckedChange={onChange}
                    > {checked &&
                        <RadixCheckbox.Indicator className={classNames.indicator}>
                            <Check/>
                        </RadixCheckbox.Indicator>
                    }
                    </RadixCheckbox.Root>
                </div>
            </LabelRadix.Root>
        </div>
    );
};
