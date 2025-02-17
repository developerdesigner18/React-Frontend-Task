import * as Yup from "yup";

const SignUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .trim()
    .min(2, "First Name must be at least 2 characters")
    .max(50, "First Name must be at most 50 characters")
    .required("First Name is required"),

  lastName: Yup.string()
    .trim()
    .min(2, "Last Name must be at least 2 characters")
    .max(50, "Last Name must be at most 50 characters")
    .required("Last Name is required"),

  email: Yup.string()
    .trim()
    .email("Invalid email format")
    .required("Email is required"),

  phone: Yup.string()
    .trim()
    .matches(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format")
    .required("Phone Number is required"),
});

export default SignUpSchema;
