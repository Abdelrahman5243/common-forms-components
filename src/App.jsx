import { Route, Routes, NavLink } from "react-router-dom";
import FormsValidation from "./pages/FormsValidation";
import MultiStepFormPage from "./pages/MultiStepsFormPage";
import MultiStepFormikYup from "./pages/MultiStepsFormYupFormik";
import Rating from "./pages/Rating";

function App() {
  return (
    <>
      <nav className="bg-gray-900 p-4 text-white flex flex-col md:flex-row justify-between items-center">
        <ul className="flex flex-col md:flex-row gap-3">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "px-4 py-2 bg-gray-700 rounded-md"
                  : "px-4 py-2 hover:bg-gray-700 rounded-md"
              }
            >
              Forms Validation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pure-multi-steps-form"
              className={({ isActive }) =>
                isActive
                  ? "px-4 py-2 bg-gray-700 rounded-md"
                  : "px-4 py-2 hover:bg-gray-700 rounded-md"
              }
            >
              Multi Step Form pure
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pure-multi-steps-formik-yup"
              className={({ isActive }) =>
                isActive
                  ? "px-4 py-2 bg-gray-700 rounded-md"
                  : "px-4 py-2 hover:bg-gray-700 rounded-md"
              }
            >
              Multi Step Form yup & formik
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/rating"
              className={({ isActive }) =>
                isActive
                  ? "px-4 py-2 bg-gray-700 rounded-md"
                  : "px-4 py-2 hover:bg-gray-700 rounded-md"
              }
            >
              Rating
            </NavLink>
          </li>
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
      </Routes>
    </>
  );
}

export default App;
