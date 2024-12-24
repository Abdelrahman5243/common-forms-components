import * as Yup from "yup";

export default function Step2({ values, errors, touched, handleChange, handleBlur }) {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-semibold">Step 2</h3>
      <input
        type="text"
        placeholder="Last Name"
        name="lastName"
        value={values.lastName || ""}
        onChange={handleChange}
        onBlur={handleBlur}
        className={`p-2 border-2 rounded-md w-full focus:outline-none ${
          errors.lastName && touched.lastName
            ? "border-red-500"
            : "border-gray-200"
        }`}
      />
      {errors.lastName && touched.lastName && (
        <p className="text-red-500 text-sm">{errors.lastName}</p>
      )}
    </div>
  );
}

// Yup Validation Schema for Step 2
Step2.validationSchema = Yup.object({
  lastName: Yup.string().required("Last Name is required"),
});
