import { FieldSet } from "./FieldSet.jsx";
import { Field } from "./Field.jsx";
import { useForm } from "react-hook-form";
import { CountryService } from "../services/CountryService.js";
import { Button } from "./Button.jsx";

export const NewCountryForm = () => {

  const { register, handleSubmit, formState: { errors }, } = useForm();

  const submitForm = (formData) => {
    console.log(formData);
    CountryService.addCountry(formData.name)
  };

  return (

    <div>
      <h1>New Country Form</h1><form onSubmit={handleSubmit(submitForm)}>
        <FieldSet label="CountryDefinition">
          <Field label="Name" error={errors.name}>
            <input {...register("name", { required: 'This field is required' })} type="text" id="name" />
          </Field>
        </FieldSet>

        <Field>
          <Button variant="primary">Save</Button>
        </Field>
      </form>
    </div>
  );
};