import { Route, Routes, NavLink } from "react-router-dom";
import FormsValidation from "./pages/FormsValidation";
import MultiStepFormPage from "./pages/MultiStepsFormPage";
import MultiStepFormikYup from "./pages/MultiStepsFormYupFormik";
import Rating from "./pages/Rating";

const navItems = [
  { to: "/", label: "Forms Validation" },
  { to: "/pure-multi-steps-form", label: "Multi Step Form pure" },
  { to: "/pure-multi-steps-formik-yup", label: "Multi Step Form yup & formik" },
  { to: "/rating", label: "Rating" },
];

const App = () => (
  <>
    <nav className="bg-gray-900 p-4 text-white flex flex-col md:flex-row justify-between items-center">
      <ul className="flex flex-col items-center justify-center md:flex-row gap-4">
        {navItems.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                `px-4 py-2 rounded-md ${isActive ? "bg-gray-700" : ""}`
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<FormsValidation />} />
      <Route path="/pure-multi-steps-form" element={<MultiStepFormPage />} />
      <Route
        path="/pure-multi-steps-formik-yup"
        element={<MultiStepFormikYup />}
      />
      <Route path="/rating" element={<Rating />} />
      <Route
        path="*"
        element={
          <div className="h-[calc(100vh-4rem)] flex items-center justify-center">
            <h1 className="text-extrabold text-6xl text-gray-500">
              404 Page Not Found
            </h1>
          </div>
        }
      />
    </Routes>
  </>
);

export default App;
