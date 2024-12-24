import { Route, Routes, Link } from "react-router-dom";
import FormsValidation from "./pages/FormsValidation";
import MultiStepFormPage from "./pages/MultiStepsFormPage";
import MultiStepFormikYup from "./pages/MultiStepsFormYupFormik";
import Rating from "./pages/Rating";

function App() {
  return (
    <>
      <nav className="bg-gray-900 p-4 text-white flex flex-col md:flex-row justify-between items-center">
        <ul className="flex flex-col md:flex-row">
          <li>
            <Link to="/" className="px-4 py-2 hover:bg-gray-700 rounded-md">
              Forms Validation
            </Link>
          </li>
          <li>
            <Link
              to="/pure-multi-steps-form"
              className="px-4 py-2 hover:bg-gray-700 rounded-md"
            >
              Multi Step Form pure
            </Link>
          </li>
          <li>
            <Link
              to="/pure-multi-steps-formik-yup"
              className="px-4 py-2 hover:bg-gray-700 rounded-md"
            >
              Multi Step Form yup & formik
            </Link>
          </li>
          <li>
            <Link
              to="/rating"
              className="px-4 py-2 hover:bg-gray-700 rounded-md"
            >
              Rating
            </Link>
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
