import * as Yup from "yup";

export const formValidationSchema = Yup.object({
  name: Yup.string().required("Name is required!"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  mobileno: Yup.string()
    .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits")
    .required("Mobile number is required!"),
  dob: Yup.date().required("Date of Birth is required!"),
  gender: Yup.boolean().required("Gender is required!"),
  address: Yup.string().required("Address is required!"),
  city: Yup.string().required("City is required!"),
  hobbies: Yup.array()
    .min(1, "Select at least one hobby")
    .required("Hobbies are required!"),
  status: Yup.boolean(),
});
