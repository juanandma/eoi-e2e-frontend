import { FieldSet } from "./FieldSet.js";
import { Field } from "./Field.js";
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

      <h1>New Country Form</h1>
      <form onSubmit={handleSubmit(submitForm)}>
        <FieldSet label="CountryDefinition">
          <Field label="Name" error={errors.name}>
            <input {...register("name", { required: 'This field is required' })} type="text" id="name" />
          </Field>
        </FieldSet>

        <Field>
          <button variant="primary">Save</button>
        </Field>
      </form>
  );
};