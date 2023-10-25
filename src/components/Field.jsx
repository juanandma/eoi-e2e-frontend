import React from "react";

export const Field = ({ label, children, htmlFor, error }) => {
  const id = htmlFor || getChildId(children);
  return (
    <p errorState={!!error}>
      {label && <p htmlFor={id}>{label}</p>}
      {children}
      {!!error && <p role="alert">{error.message}</p>}
    </p>
  );
};

const getChildId = (children) => {
  const child = React.Children.only(children);

  if ("id" in child?.props) {
    return child.props.id;
  }
};