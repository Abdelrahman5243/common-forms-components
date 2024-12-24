import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const MyForm = () => {
/*
 * This schema defines the validation rules for the form fields.
 * - `options`: A required string field.
 * - `name`: A required string field with a minimum length of 3 characters.
 * - `email`: A required string field that must be a valid email address.
 * - `password`: A required string field with a minimum length of 8 characters.
 * 
 */

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8,"Password must be at least 8 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      ),
    options: Yup.string().required("Please select an option"),
  });

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        options: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log("Form data:", values);
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-6 max-w-md mx-auto">
          {/* Select Menu for Options */}
          <div className="flex flex-col">
            <label htmlFor="options" className="font-medium text-lg mb-2">
              Options
            </label>
            <div className="relative">
              <Field
                as="select"
                id="options"
                name="options"
                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
              >
                <option value="">Select an option</option>
                <option value="account-settings">Account settings</option>
                <option value="support">Support</option>
                <option value="license">License</option>
              </Field>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.2"
                stroke="currentColor"
                className="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-slate-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                />
              </svg>
            </div>{" "}
            <ErrorMessage
              name="options"
              component="div"
              className="text-red-500 mt-1"
            />
          </div>

          {/* Form Fields */}
          <div className="flex flex-col">
            <label htmlFor="name" className="font-medium text-lg mb-2">
              Name
            </label>
            <Field
              type="text"
              id="name"
              name="name"
              className="p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500 mt-1"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="font-medium text-lg mb-2">
              Email
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              className="p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 mt-1"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="font-medium text-lg mb-2">
              Password
            </label>
            <Field
              type="password"
              id="password"
              name="password"
              className="p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 mt-1"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 disabled:bg-blue-300"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default MyForm;
