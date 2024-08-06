import * as Yup from "yup";

const allValidation = {
  1: Yup.object({
    emailId: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*[A-Z].*[A-Z])(?=.*[a-z].*[a-z])(?=.*[0-9].*[0-9])(?=.*[\W_].*[\W_]).{8,}$/,
        "Password must contain at least 2 capital letters, 2 small letters, 2 numbers, and 2 special characters",
      ),
  }),
  2: Yup.object({
    firstName: Yup.string()
      .required("Name is required")
      .matches(/^[A-Za-z\s]+$/, "Only alphabets are allowed")
      .min(2, "Name must be at least 2 characters long")
      .max(50, "Name cannot exceed 50 characters"),
    lastName: Yup.string().matches(/^[A-Za-z]*$/, "Only alphabets are allowed"),
    address: Yup.string()
      .required("Name is required")
      .min(10, "Name must be at least 2 characters long"),
  }),
  3: Yup.object({
    countryCode: Yup.string()
      .required("Country code is required")
      .oneOf(["+91", "+1"], "Please select a valid country code: India (+91) or America (+1)"),
    phoneNumber: Yup.string()
      .required("Phone number is required")
      .matches(/^\d{10}$/, "Phone number must be exactly 10 digits long"),
    acceptTermsAndCondition: Yup.boolean()
      .required("You must accept the terms and conditions")
      .oneOf([true], "You must accept the terms and conditions"),
  }),
};
export const formValidation = (step) => {
  return allValidation[step];
};
