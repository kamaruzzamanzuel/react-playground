import { FormControl, FormLabel, RadioGroup, Radio as MUIRadio, RadioProps, FormControlLabel } from '@mui/material';
import { useState } from 'react';
import "../form-components/form.css";

type TypeRadioProps = {
  name?: string;
  label?: string;
  checked?: boolean;
  group?: { value: string, label: string }[];
  labelPlacement?: "start" | "end" | "top" | "bottom";
} & Omit<RadioProps, "name" | "label" | "labelPlacement">

export const Radio = ({
  name,
  label,
  group,
  checked = false,
  labelPlacement = "end",
  ...rest
}: TypeRadioProps) => {
  const [value, setValue] = useState("");

  return (
    <div className="radio-container">
      <FormControl>
        <FormLabel>{label}</FormLabel>
        <RadioGroup
          value={value}
          onChange={async (event) => {
            setValue(event.target.value)
          }}
        >
          {
            (group ?? []).map((item, index) => (
              <FormControlLabel
                key={index}
                label={item.label}
                value={item.value}
                labelPlacement={labelPlacement}
                control={
                  <MUIRadio
                    {...rest}
                  />
                }
              />
            ))
          }
        </RadioGroup>
      </FormControl>
    </div>

  )
}
