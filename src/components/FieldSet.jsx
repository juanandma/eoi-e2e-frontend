
export const FieldSet = ({ label, children }) => {
  return (
    <div>
      {label && <legend>{label}</legend>}
      <div>{children}</div>
    </div>
  );
};
