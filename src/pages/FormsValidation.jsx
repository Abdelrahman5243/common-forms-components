import React from "react";
import FormPure from "../components/formik/formikPureValidation/Form";
import FormYup from "../components/formik/formikYup/Form";
import FormZod from "../components/formik/formikZod/Form";
import RFormPure from "../components/reactFormHook/rFHookPureValidation/Form";
import RFormYup from "../components/reactFormHook/rFHookYup/Form";
import RFormZod from "../components/reactFormHook/rFHookZod/Form";
const FormsValidation = () => {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">
          Formik with Pure Validation
        </h2>
        <FormPure />
      </div>

      <div className="bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">
          Formik with Yup Validation
        </h2>
        <FormYup />
      </div>

      <div className="bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">
          Formik with zod Validation
        </h2>
        <FormZod />
      </div>

      <div className="bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">
          react hook form with pure Validation
        </h2>
        <RFormPure />
      </div>

      <div className="bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">
          react hook form with yup Validation
        </h2>
        <RFormYup />
      </div>

      <div className="bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">
          react hook form with zod Validation
        </h2>
        <RFormZod />
      </div>
    </div>
  );
};

export default FormsValidation;
