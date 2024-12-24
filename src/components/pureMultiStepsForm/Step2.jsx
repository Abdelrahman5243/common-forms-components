export function Step2({ data, onChange, errors }) {
  return (
    <div>
      <h3 className="text-2xl font-semibold">Step 2</h3>
      <input
        type="text"
        placeholder="Last Name"
        value={data.lastName || ""}
        onChange={(e) => onChange({ lastName: e.target.value })}
        className={`p-2 border-2 rounded-md w-full focus:outline-none ${
          errors.lastName ? "border-red-500" : "border-gray-200"
        } focus:border-blue-500`}
      />
      {errors.lastName && (
        <p className="text-red-500 text-sm">{errors.lastName}</p>
      )}
    </div>
  );
}

// Add validation function for Step2
Step2.validate = (data) => {
  const errors = {};

  // Ensure Last Name is provided
  if (!data.lastName || data.lastName.trim() === "") {
    errors.lastName = "Last Name is required.";
  }

  // Regex to ensure Last Name contains only alphabetic characters and spaces
  const lastNameRegex = /^[a-zA-Z\s]+$/;
  if (data.lastName && !lastNameRegex.test(data.lastName)) {
    errors.lastName = "Last Name must contain only letters and spaces.";
  }

  return errors;
};
