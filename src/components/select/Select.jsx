import React from "react";
import { InputLabel, MenuItem } from "@mui/material";
import MuiSelect from "@mui/material/Select";

import Styles from "./Select.styles";

const Select = ({
  id,
  name,
  label,
  labelId,
  value,
  defaultValue = "",
  helpertext = "",
  fullWidth,
  sx,
  onChange,
  onBlur,
  children,
  ...props
}) => {
  return (
    <Styles.FormControl fullWidth={fullWidth} sx={sx}>
      <InputLabel id={id} sx={{ backgroundColor: "white" }}>
        {label}
      </InputLabel>
      <MuiSelect
        name={name}
        labelId={labelId}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        helpertext={helpertext}
        defaultValue={defaultValue}
        {...props}
      >
        {children?.map(({ id, nome }) => (
          <MenuItem key={id} value={id}>
            {nome}
          </MenuItem>
        ))}
      </MuiSelect>
    </Styles.FormControl>
  );
};

export default Select;
