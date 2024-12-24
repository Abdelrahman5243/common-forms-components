import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const MyForm = () => {
  // Validation schema
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      ),
    options: Yup.string().required("Please select an option"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      options: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form data:", data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-md mx-auto">
      {/* Select Menu for Options */}
      <div className="flex flex-col">
        <label htmlFor="options" className="font-medium text-lg mb-2">
          Options
        </label>
        <Controller
          name="options"
          control={control}
          render={({ field }) => (
            <div className="relative">
              <select
                {...field}
                id="options"
                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
              >
                <option value="">Select an option</option>
                <option value="account-settings">Account settings</option>
                <option value="support">Support</option>
                <option value="license">License</option>
              </select>
            </div>
          )}
        />
        {errors.options && (
          <div className="text-red-500 mt-1">{errors.options.message}</div>
        )}
      </div>

      {/* Form Fields */}
      <div className="flex flex-col">
        <label htmlFor="name" className="font-medium text-lg mb-2">
          Name
        </label>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              id="name"
              className="p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}
        />
        {errors.name && (
          <div className="text-red-500 mt-1">{errors.name.message}</div>
        )}
      </div>

      <div className="flex flex-col">
        <label htmlFor="email" className="font-medium text-lg mb-2">
          Email
        </label>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="email"
              id="email"
              className="p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}
        />
        {errors.email && (
          <div className="text-red-500 mt-1">{errors.email.message}</div>
        )}
      </div>

      <div className="flex flex-col">
        <label htmlFor="password" className="font-medium text-lg mb-2">
          Password
        </label>
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="password"
              id="password"
              className="p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}
        />
        {errors.password && (
          <div className="text-red-500 mt-1">{errors.password.message}</div>
        )}
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default MyForm;
