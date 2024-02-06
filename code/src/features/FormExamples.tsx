import "../form-components/Input.css";
import { CheckBox, Input, Radio, Switch, TextArea } from "../form-components";

const tt = ["1", "2", "3"];

const Form = () => {
  const genderGroups = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Others" }
  ];

  const branchOptions = [
    { value: "dhaka", text: "Dhaka" },
    { value: "sydney", text: "Sydney" }
  ];

  const res = tt.includesExt("null")

  console.log({ res })

  return (
    <div className="t-bg-white t-p-[20px]">
      <div className='row'>
        <div className="col-12 col-md-6 col-xl-3 input-field-padding">
          {/* <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Hello World"
          /> */}
          <Input
            label="Required Input"
            required
          />
        </div>
        <div className="col-12 col-md-6 col-xl-3 input-field-padding">
          <Input
            disabled
            value="jklghlk kjlg"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
        </div>
        <div className="col-12 col-md-6 col-xl-3 input-field-padding">
          <Input
            label="Read Only"
            defaultValue="Hello World"
            disabled
          // InputProps={{
          //   readOnly: true,
          // }}
          />
        </div>
        <div className="col-12 col-md-6 col-xl-3 input-field-padding">
          <Input
            label="Number"
            type="number"
            error={true}
            helperText={"Error occured"}
          // InputLabelProps={{
          //   shrink: true,
          // }}
          />
        </div>
        <div className="col-12 col-md-6 col-xl-3 input-field-padding">
          <TextArea
            label="Search field"
          />
        </div>
        <div className="col-12 col-md-6 col-xl-3 input-field-padding">
          <Input
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
          />
        </div>
        <div className="col-12 col-md-6 col-xl-3 input-field-padding">
          <Input
            label="Money"
            type="money"
          // InputProps={{
          //   startAdornment: (
          //     <InputAdornment position="start">
          //       <Euro />
          //     </InputAdornment>
          //   )
          // }}
          />
        </div>
        <div className="col-12 col-md-6 col-xl-3 input-field-padding">
          <CheckBox
            label="Checkbox"
          // label="Checkbox jjlkhb l;gh l;jghl;jgh l;jghl;jgh l;jghl;gh "
          // checked={true}
          // disabled
          />
        </div>
        <div className="col-12 col-md-6 col-xl-3 input-field-padding">
          <CheckBox label="Checkbox" />
        </div>
        <div className="col-12 col-md-6 col-xl-3 input-field-padding">
          <CheckBox label="Checkbox" />
        </div>
        <div className="col-12 col-md-6 col-xl-3 input-field-padding">
          <CheckBox label="Checkbox" />
        </div>
        <div className="col-12 col-md-12 input-field-padding">
          <div className="check-box-group row">
            <div className="col-12 col-md-3">
              <CheckBox label="Checkbox" disabled />
            </div>
            <div className="col-12 col-md-3">
              <CheckBox label="Checkbox" checked={true} />
            </div>
            <div className="col-12 col-md-3">
              <CheckBox label="Checkbox" checked={true} disabled />
            </div>
            <div className="col-12 col-md-3">
              <CheckBox label="Checkbox" />
            </div>
            <div className="col-12 col-md-3">
              <CheckBox label="Checkbox" />
            </div>
            <div className="col-12 col-md-3">
              <CheckBox label="Checkbox" />
            </div>
            <div className="col-12 col-md-3">
              <CheckBox label="Checkbox" />
            </div>
            <div className="col-12 col-md-3">
              <CheckBox label="Checkbox" />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-xl-3 input-field-padding">
          <Radio label="Radio Buttons" group={genderGroups} />
        </div>
        <div className="col-12 col-md-6 col-xl-3 input-field-padding">
          <Switch label="Radio Buttons" />
        </div>
      </div >
    </div>
  );
};

export default Form;