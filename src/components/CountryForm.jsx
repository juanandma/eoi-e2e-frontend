import { FieldSet } from "./FieldSet.jsx";
import { Field } from "./Field.jsx";
import { useForm } from "react-hook-form";

export const CountryForm = ({ addCountry }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = async (formData) => {
    console.log(formData);
    //await addCountry(formData)
  };

  return (
    <div>
      <h1>New Country Form</h1>
      <form onSubmit={handleSubmit(submitForm)}>
        <FieldSet label="CountryDefinition">
          <Field label="Name" error={errors.name}>
            <input
              {...register("name", { required: "This field is required" })}
              type="text"
              id="name"
            />
          </Field>
          <Field label="IpAdress" error={errors.ipadress}>
            <input
              {...register("ipadress", { required: "This field is required" })}
              type="text"
              id="ipadress"
            />
          </Field>
        </FieldSet>
        <Field>
          <button type="submit">Save</button>
        </Field>
      </form>
    </div>
  );
};
