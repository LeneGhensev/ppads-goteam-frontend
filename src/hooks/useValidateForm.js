import { useEffect, useState } from "react";

const useValidateForm = ({ initialValues, validate }) => {
  const [touched, setTouchedFields] = useState({});
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState(initialValues);

  useEffect(() => {
    validateValues(values);
  }, [values]);

  function handleChange(event) {
    const fieldName = event.target.name;
    const { value } = event.target;

    setValues({
      ...values,
      [fieldName]: value,
    });
  }

  function handleBlur(event) {
    setTouchedFields({
      ...touched,
      [event.target.name]: true,
    });
  }

  function validateValues(values) {
    setErrors(validate(values));
  }

  return {
    values,
    errors,
    touched,
    handleBlur,
    setErrors,
    handleChange,
  };
};

export default useValidateForm;
