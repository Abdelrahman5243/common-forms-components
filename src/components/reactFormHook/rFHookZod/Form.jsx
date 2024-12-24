import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Validation schema using Zod
const validationSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .nonempty("Name is required"),
  email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email is required"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    )
    .nonempty("Password is required"),
  options: z.string().nonempty("Please select an option"),
});

const MyForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(validationSchema),
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 max-w-md mx-auto"
    >
      {/* Select Menu for Options */}
      <div className="flex flex-col">
        <label htmlFor="options" className="font-medium text-lg mb-2">
          Options
        </label>
        <div className="relative">
          <select
            id="options"
            {...register("options")}
            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
          >
            <option value="">Select an option</option>
            <option value="account-settings">Account settings</option>
            <option value="support">Support</option>
            <option value="license">License</option>
          </select>
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
        </div>
        {errors.options && (
          <div className="text-red-500 mt-1">{errors.options.message}</div>
        )}
      </div>

      {/* Form Fields */}
      <div className="flex flex-col">
        <label htmlFor="name" className="font-medium text-lg mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          {...register("name")}
          className="p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.name && (
          <div className="text-red-500 mt-1">{errors.name.message}</div>
        )}
      </div>

      <div className="flex flex-col">
        <label htmlFor="email" className="font-medium text-lg mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          {...register("email")}
          className="p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.email && (
          <div className="text-red-500 mt-1">{errors.email.message}</div>
        )}
      </div>

      <div className="flex flex-col">
        <label htmlFor="password" className="font-medium text-lg mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          {...register("password")}
          className="p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.password && (
          <div className="text-red-500 mt-1">{errors.password.message}</div>
        )}
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
    </form>
  );
};

export default MyForm;
