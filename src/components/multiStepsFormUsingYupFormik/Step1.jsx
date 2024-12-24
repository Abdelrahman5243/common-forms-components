import * as Yup from "yup";

export default function Step1({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
}) {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-semibold">Step 1</h3>
      <input
        type="text"
        placeholder="First Name"
        name="firstName"
        value={values.firstName || ""}
        onChange={handleChange}
        onBlur={handleBlur}
        className={`p-2 border-2 rounded-md w-full focus:outline-none ${
          errors.firstName && touched.firstName
            ? "border-red-500"
            : "border-gray-200"
        }`}
      />
      {errors.firstName && touched.firstName && (
        <p className="text-red-500 text-sm">{errors.firstName}</p>
      )}
    </div>
  );
}

// Yup Validation Schema for Step 1
Step1.validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
});
