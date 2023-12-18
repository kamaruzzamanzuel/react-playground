import { InputAdornment } from '@mui/material';
import TextField, { TextFieldProps, TextFieldVariants } from '@mui/material/TextField';
import clsx from 'clsx';
import { useState } from 'react';

export type TypeInputProps<T extends TextFieldVariants = "outlined"> = {
  label: string;
  className?: string;
  type?: "text" | "password" | "number" | "money" | "percentage";
  variant?: T
  // inputProps?: Record<string, any>;
  // required?: boolean;
  // isCustomField?: boolean;
} & Omit<TextFieldProps<T>, "label" | "className" | "type" | "variant" | "multiline" | "rows">;

export const Input = ({
  label,
  className,
  type = "text",
  variant,
  ...rest
}: TypeInputProps) => {
  const textFieldType = ["number", "money", "percentage"].includes(type) ? "number" : type;
  const [isOnFocus, setIsOnFocus] = useState(false);
  const [value, setValue] = useState("");

  const setInputAdornment = (value: any) => {
    return (type === "money" && (value !== "" || isOnFocus))
      ? <InputAdornment position="start"><b>$</b></InputAdornment>
      : (type === "percentage" && (value !== "" || isOnFocus))
        ? <InputAdornment position="start"><b>%</b></InputAdornment>
        : (rest?.InputProps ?? {}).startAdornment;
  };

  return (
    <TextField
      className={clsx("usability-input", className)}
      variant={variant}
      label={label}
      type={textFieldType}
      value={value}
      onChange={() => setValue(value)}
      onFocus={() => setIsOnFocus(true)}
      onBlur={() => setIsOnFocus(false)}
      InputProps={{
        startAdornment: setInputAdornment(value)
      }}
      {...rest}
    />
    // <div
    //   className='input-container'
    // >

    // </div>
  );
};

export default Input;