import React from "react";
import { useForm } from "react-hook-form";

const MyForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form data:", data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="flex flex-col">
        <label htmlFor="name" className="font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 3,
              message: "Name must be at least 3 characters",
            },
          })}
          className="p-2 border border-gray-300 rounded-md"
        />
        {errors.name && (
          <div className="text-red-500 mt-1">{errors.name.message}</div>
        )}
      </div>

      <div className="flex flex-col">
        <label htmlFor="email" className="font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          })}
          className="p-2 border border-gray-300 rounded-md"
        />
        {errors.email && (
          <div className="text-red-500 mt-1">{errors.email.message}</div>
        )}
      </div>

      <div className="flex flex-col">
        <label htmlFor="password" className="font-medium mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
          className="p-2 border border-gray-300 rounded-md"
        />
        {errors.password && (
          <div className="text-red-500 mt-1">{errors.password.message}</div>
        )}
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
    </form>
  );
};

export default MyForm;
