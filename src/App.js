import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField
} from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";
import "./styles.css";

export default function App() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      textField: "",
      checkbox: false
    }
  });

  const onSubmit = (values) => alert(JSON.stringify(values));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="textField"
        render={({ field }) => (
          // Material UI TextField already supports
          // `value` and `onChange`
          <TextField {...field} label="Text sfield" />
        )}
      />
      <br />

      <Controller
        control={control}
        name="checkbox"
        render={({ field: { value, onChange } }) => (
          // Checkbox accepts its value as `checked`
          // so we need to connect the props here
          <FormControlLabel
            control={<Checkbox checked={value} onChange={onChange} />}
            label="I am a checkbox"
          />
        )}
      />
      <br />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
}
