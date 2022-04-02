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
    if (fieldName === "categoria") {
      setValues({
        ...values,
        [values.categoria.id]: value,
      });
    }
    setValues({
      ...values,
      [fieldName]: value,
    });
  }

  const handleImageValues = async (values) => {
    let document = "";
    let reader = new FileReader();

    reader.readAsDataURL(values.target.files[0]);
    reader.onload = function () {
      document = reader.result;

      console.log(document);

      document: document
        ? String(document).replace(/^data:(.;base64,)?/, "")
        : String(this.document).replace(/^data:(.;base64,)?/, "");

      setValues((prevValue) => ({
        ...prevValue,
        [values.target.name]: document,
      }));
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  };

  function handleBlur(event) {
    // const fieldName = event.target.getAttribute("name");
    // console.log(fieldName);
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
    handleImageValues,
  };
};

export default useValidateForm;
