import { useState } from 'react';
import { CheckBoxOutlineBlank, CheckBoxOutlined } from '@mui/icons-material';
import Checkbox, { CheckboxProps } from '@mui/material/Checkbox';
import { FormControlLabel } from '@mui/material';

export type TypeCheckBoxProps = {
  name?: string;
  label?: string;
  labelPlacement?: "start" | "end" | "top" | "bottom";
  checked?: boolean;
  disabled?: boolean;
  onChange?: (value: boolean) => void | Promise<void>;
} & Omit<CheckboxProps, "name" | "label" | "labelPlacement" | "checked" | "disabled">;

export const CheckBox = ({
  name,
  label,
  labelPlacement = "end",
  checked = false,
  disabled,
  onChange,
  ...rest
}: TypeCheckBoxProps) => {
  const [isChecked, setIsChecked] = useState(checked);
  const icon = <CheckBoxOutlineBlank className={(isChecked === true && disabled) ? "t-bg-secondary-alt" : undefined} />
  const checkedIcon = <CheckBoxOutlined className={(isChecked === true && disabled) ? "t-bg-secondary-alt t-text-secondary" : undefined}
  />

  return (
    <div
      className='check-box-container'
    >
      <FormControlLabel
        disabled={disabled}
        control={
          <Checkbox
            checked={isChecked}
            icon={icon}
            checkedIcon={checkedIcon}
            onChange={(event) => {
              setIsChecked(event.target.checked);
            }}
          />
        }
        label={label ?? ""}
        labelPlacement={labelPlacement}
      />
    </div>
  );
};
