import TextField, { TextFieldProps, TextFieldVariants } from '@mui/material/TextField';

export type TypeTextFieldProps<T extends TextFieldVariants = "outlined"> = {
  label: string;
  className?: string;
  // type?: "text" | "password" | "number" | "money" | "percentage";
  variant?: T
  // inputProps?: Record<string, any>;
  // required?: boolean;
  // isCustomField?: boolean;
} & Omit<TextFieldProps<T>, "label" | "className" | "variant" | "multiline">;

export const TextArea = ({
  label,
  className,
  // type = "text",
  variant,
  minRows = 3,
  ...rest
}: TypeTextFieldProps) => {
  // const textAreaFieldType = ["number", "money", "percentage"].includes(type) ? "number" : type;

  return (
    <TextField
      label={label}
      variant={variant}
      // type={textAreaFieldType}
      minRows={minRows}
      multiline
      {...rest}
    />
  )
}

export default TextArea;