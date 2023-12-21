import { FormControlLabel, FormGroup, Switch as MUISwitch, SwitchProps } from '@mui/material';

export type TypeSwitchProps = {
  label?: string;
  labelPlacement?: "start" | "end" | "top" | "bottom";
  checked?: boolean;
  disabled?: boolean;
  onChange?: (value: boolean) => void | Promise<void>;
} & Omit<SwitchProps, "label" | "labelPlacement" | "checked" | "disabled">

export const Switch = ({
  label,
  labelPlacement = "end",
  checked = false,
  disabled,
  onChange,
  ...rest
}: TypeSwitchProps) => {
  return (
    <div className='switch-container'>
      <FormGroup>
        <FormControlLabel
          label={label}
          control={<MUISwitch />}
          labelPlacement={labelPlacement}
        />
      </FormGroup>
    </div>
  )
}
