import React from 'react';
import * as RadixCheckbox from '@radix-ui/react-checkbox';
import Check from "../../../assets/icons/Сheck";
import s from './Checkbox.module.css'

type CheckBoxProps = {
    checked?: boolean
    onChange?: (checked: boolean) => void
}
export const Checkbox = ({checked, onChange}: CheckBoxProps) => {
    return (
        <RadixCheckbox.Root
            className={s.root}
            checked={checked}
            onCheckedChange={onChange}
        >
                <RadixCheckbox.Indicator
                    className={s.indicator}>
                    {checked && <Check/>}
                </RadixCheckbox.Indicator >
        </RadixCheckbox.Root>
    );
};
