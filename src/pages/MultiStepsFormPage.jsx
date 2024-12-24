import React, { useState } from "react";
import MultiStepForm from "../components/pureMultiStepsForm/MultiStepsForm";
import { Step1 } from "../components/pureMultiStepsForm/Step1";
import { Step2 } from "../components/pureMultiStepsForm/Step2";
import { Step3 } from "../components/pureMultiStepsForm/Step3";

const MultiStepFormPage = () => {
  const [submittedData, setSubmittedData] = useState(null);

  const steps = [
    { component: Step1, validate: Step1.validate },
    { component: Step2, validate: Step2.validate },
    { component: Step3, validate: Step3.validate },
  ];

  const handleFormSubmit = (formData) => {
    setSubmittedData(formData);
  };

  return (
    <div className="container mx-auto p-6 space-y-8">
      {submittedData ? (
        <div className="p-6 bg-white shadow-md rounded-md">
          <h2 className="text-2xl font-bold mb-4">Form Submission Result</h2>
          <pre className="bg-gray-100 p-4 rounded-md">
            {JSON.stringify(submittedData, null, 2)}
          </pre>
        </div>
      ) : (
        <MultiStepForm steps={steps} onSubmit={handleFormSubmit} />
      )}
    </div>
  );
};

export default MultiStepFormPage;
