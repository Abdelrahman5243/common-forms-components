export function Step3({ data, onChange, errors }) {
  return (
    <div>
      <h3 className="text-2xl font-semibold">Step 3</h3>
      <div className="mb-4">
        <input
          type="email"
          placeholder="Email"
          value={data.email || ""}
          onChange={(e) => onChange({ email: e.target.value })}
          required
          className={`p-2 border-2 rounded-md w-full focus:outline-none ${
            errors.email ? "border-red-500" : "border-gray-200"
          } focus:border-blue-500`}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={data.password || ""}
          onChange={(e) => onChange({ password: e.target.value })}
          required
          className={`p-2 border-2 rounded-md w-full focus:outline-none ${
            errors.password ? "border-red-500" : "border-gray-200"
          } focus:border-blue-500`}
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password}</p>
        )}
      </div>
    </div>
  );
}

Step3.validate = (data) => {
  const errors = {};

  // Email regex validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }

  // Password regex validation: At least 8 characters, 1 uppercase, 1 number, 1 special character
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  if (!data.password || !passwordRegex.test(data.password)) {
    errors.password =
      "Password must be at least 8 characters long, include one uppercase letter, one number, and one special character.";
  }

  return errors;
};
