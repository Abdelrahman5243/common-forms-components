import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const MyForm = () => {
  const validate = (values) => {
    const errors = {};

    if (!values.name.trim()) {
      errors.name = "Name is required";
    } else if (values.name.length < 3) {
      errors.name = "Name must be at least 3 characters";
    }

    if (!values.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.password.trim()) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    return errors;
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validate={validate}
      onSubmit={(values, { resetForm }) => {
        console.log("Form data:", values);
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="font-medium mb-2">
              Name
            </label>
            <Field
              type="text"
              id="name"
              name="name"
              className="p-2 border border-gray-300 rounded-md"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500 mt-1"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="font-medium mb-2">
              Email
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              className="p-2 border border-gray-300 rounded-md"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 mt-1"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="font-medium mb-2">
              Password
            </label>
            <Field
              type="password"
              id="password"
              name="password"
              className="p-2 border border-gray-300 rounded-md"
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
              className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600"
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
