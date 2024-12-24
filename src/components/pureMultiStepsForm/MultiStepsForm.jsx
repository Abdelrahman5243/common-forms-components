import React, { useState } from "react";

const MultiStepForm = ({ steps, onSubmit }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const isLastStep = currentStep === steps.length - 1;

  const validateCurrentStep = () => {
    const currentValidation = steps[currentStep].validate;
    if (currentValidation) {
      const validationErrors = currentValidation(formData);
      setErrors(validationErrors);
      return Object.keys(validationErrors).length === 0; // Return true if no errors
    }
    return true; // No validation function, assume valid
  };

  const handleNext = () => {
    if (validateCurrentStep()) {
      setErrors({});
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setErrors({});
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleChange = (stepData) => {
    setFormData((prev) => ({ ...prev, ...stepData }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLastStep) {
      if (validateCurrentStep()) {
        onSubmit(formData);
      }
    } else {
      handleNext();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="p-4 bg-white shadow-md rounded-md">
        {steps[currentStep].component({
          data: formData,
          onChange: handleChange,
          errors,
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
    </form>
  );
};

export default MultiStepForm;
