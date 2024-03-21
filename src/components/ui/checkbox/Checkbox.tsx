import React, {ChangeEvent} from 'react';
import * as RadixCheckbox from '@radix-ui/react-checkbox';
import Check from "../../../assets/icons/Check";

type CheckBoxProps = {
    checked: boolean
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
export const Checkbox = ({checked, onChange}: CheckBoxProps) => {
    return (
        <RadixCheckbox.Root>
            <RadixCheckbox.Indicator >
                <Check/>
            </RadixCheckbox.Indicator >
        </RadixCheckbox.Root>
    );
};
