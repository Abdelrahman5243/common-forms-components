
import * as Yup from "yup";

export default function Step3({ values, errors, touched, handleChange, handleBlur }) {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-semibold">Step 3</h3>
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={values.email || ""}
        onChange={handleChange}
        onBlur={handleBlur}
        className={`p-2 border-2 rounded-md w-full focus:outline-none ${
          errors.email && touched.email ? "border-red-500" : "border-gray-200"
        }`}
      />
      {errors.email && touched.email && (
        <p className="text-red-500 text-sm">{errors.email}</p>
      )}

      <input
        type="password"
        placeholder="Password"
        name="password"
        value={values.password || ""}
        onChange={handleChange}
        onBlur={handleBlur}
        className={`p-2 border-2 rounded-md w-full focus:outline-none ${
          errors.password && touched.password
            ? "border-red-500"
            : "border-gray-200"
        }`}
      />
      {errors.password && touched.password && (
        <p className="text-red-500 text-sm">{errors.password}</p>
      )}
    </div>
  );
}

// Yup Validation Schema for Step 3
Step3.validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});
