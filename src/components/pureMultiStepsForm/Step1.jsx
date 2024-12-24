export function Step1({ data, onChange, errors }) {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-semibold">Step 1</h3>
      <input
        type="text"
        placeholder="First Name"
        value={data.firstName || ""}
        onChange={(e) => onChange({ firstName: e.target.value })}
        className={`p-2 border-2 rounded-md w-full focus:outline-none ${
          errors.firstName ? "border-red-500" : "border-gray-200"
        } focus:border-blue-500`}
      />
      {errors.firstName && (
        <p className="text-red-500 text-sm">{errors.firstName}</p>
      )}
    </div>
  );
}

Step1.validate = (data) => {
  const errors = {};

  // Ensure First Name is provided
  if (!data.firstName || data.firstName.trim() === "") {
    errors.firstName = "First Name is required.";
  }

  // Regex to ensure First Name contains only alphabetic characters and spaces
  const firstNameRegex = /^[a-zA-Z\s]+$/;
  if (data.firstName && !firstNameRegex.test(data.firstName)) {
    errors.firstName = "First Name must contain only letters and spaces.";
  }

  return errors;
};
