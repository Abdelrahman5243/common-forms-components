import React, { useState } from "react";
import { Formik, Form } from "formik";

const MultiStepForm = ({ steps, onSubmit }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const isLastStep = currentStep === steps.length - 1;

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = (values) => {
    if (isLastStep) {
      onSubmit(values);
    } else {
      setFormData((prev) => ({ ...prev, ...values }));
      handleNext();
    }
  };

  return (
    <Formik
      initialValues={formData}
      validationSchema={steps[currentStep].validationSchema} // Get validation schema for current step
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, handleChange, handleBlur }) => (
        <Form className="space-y-4">
          <div className="p-4 bg-white shadow-md rounded-md">
            {steps[currentStep].component({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
            })}
          </div>
          <div className="flex justify-between mt-4">
            {currentStep > 0 && (
              <button
                type="button"
                onClick={handleBack}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md"
              >
                Back
              </button>
            )}
            <button
              type="submit"
              className={`px-4 py-2 rounded-md ${
                isLastStep
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-blue-500 hover:bg-blue-600"
              } text-white`}
            >
              {isLastStep ? "Submit" : "Next"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default MultiStepForm;
