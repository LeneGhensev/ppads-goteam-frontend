import React from "react";

import Styles from "./TextField.styles";

const TextField = ({
  type,
  name,
  label,
  value,
  helpertext = "",
  onChange,
  children,
  ...props
}) => {
  return (
    <Styles.TextField
      type={type}
      name={name}
      label={label}
      value={value}
      onChange={onChange}
      helpertext={helpertext}
      {...props}
    />
  );
};

export default TextField;
