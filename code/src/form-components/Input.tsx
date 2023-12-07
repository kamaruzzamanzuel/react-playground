import "./Input.css";
import TextField from '@mui/material/TextField';

const Input = () => {
  return (
    <div className='row'>
      <div className="col-12 col-md-6 col-xl-3 input-field-padding">
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
      </div>
      <div className="col-12 col-md-6 col-xl-3 input-field-padding">
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
      </div>
      <div className="col-12 col-md-6 col-xl-3 input-field-padding">
        <TextField
          id="outlined-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
        />
      </div>
      <div className="col-12 col-md-6 col-xl-3 input-field-padding">
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          error={true}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <div className="col-12 col-md-6 col-xl-3 input-field-padding">
        <TextField
          id="outlined-search"
          label="Search field"
          multiline={true}
          minRows={3}
          type="search" />
      </div>
      <div className="col-12 col-md-6 col-xl-3 input-field-padding">
        <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
        />
      </div>
    </div >
  );
};

export default Input;