import MultiStepForm from "../components/multiStepsFormUsingYupFormik/MultiStepsForm";
import Step1 from "../components/multiStepsFormUsingYupFormik/Step1";
import Step2 from "../components/multiStepsFormUsingYupFormik/Step2";
import Step3 from "../components/multiStepsFormUsingYupFormik/Step3";

const MultiStepFormPage = () => {
  const steps = [
    { component: Step1, validationSchema: Step1.validationSchema },
    { component: Step2, validationSchema: Step2.validationSchema },
    { component: Step3, validationSchema: Step3.validationSchema },
  ];

  const handleFormSubmit = (formData) => {
    console.log("Final Form Data:", formData);
  };

  return (
    <div className="container mx-auto p-6 space-y-8">
      <MultiStepForm steps={steps} onSubmit={handleFormSubmit} />
    </div>
  );
};

export default MultiStepFormPage;
