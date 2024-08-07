import InputPrimary from "../../atomic/input/inputPrimary/InputPrimary";
import TextPrimary from "../../atomic/text/textPrimary/TextPrimary";
import ButtonPrimary from "../../atomic/button/buttonPrimary/ButtonPrimary";
import { formStepConfig } from "../../../formConfig/formConfig";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { postForm } from "../../../redux/actions/postForm";
import { formValidation } from "../../../validation/formValidation";
import { useNavigate } from "react-router-dom";
import SelectPrimary from "../../atomic/select/selectPrimary/SelectPrimary";
import StepperPrimary from "../../molecular/stepper/StepperPrimary";
import LabelPrimary from "../../atomic/label/labelPrimary/LabelPrimary";
const MultiStepForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialValues = useSelector((state) => state.form.profileData);
  const loading = useSelector((state) => state.form.loading);
  const currentStep = useSelector((state) => state.form.currentStep);
  const { values, handleChange, handleSubmit, errors, handleBlur, touched, setFieldValue } =
    useFormik({
      initialValues: initialValues,

      validationSchema: formValidation(currentStep),
      onSubmit: (values) => {
        dispatch({ type: "FORM_UPDATE", payload: values });
        if (currentStep === 3) {
          // eslint-disable-next-line no-unused-vars
          const { acceptTermsAndCondition, ...userData } = values;
          dispatch(postForm(userData, () => navigate("/posts")));
        } else {
          dispatch({ type: "STEP_UPDATE", payload: 1 });
        }
      },
    });

  const steps = [
    { label: "Step 1", value: 1 },
    { label: "Step 2", value: 2 },
    { label: "Step 3", value: 3 },
  ];
  const renderInputField = (field) => {
    switch (field.type) {
      case "select":
        return (
          <div>
            <SelectPrimary
              name={field.name}
              value={values[field.name] || ""}
              onChange={handleChange}
              className={field.className}
              onBlur={handleBlur}
              options={field.options}
            />
            {errors[field.name] && (
              <p className=" w-64 text-xs text-red-500">{errors[field.name]} </p>
            )}
          </div>
        );
      case "checkbox":
        return (
          <div className="flex flex-col ">
            <div className="flex w-60 items-center justify-start gap-2 sm:w-80 ">
              <InputPrimary
                type="checkbox"
                name={field.name}
                className="rounded-lg bg-none "
                checked={values[field.name]}
                onChange={(e) => setFieldValue(field.name, e.target.checked)}
                onBlur={handleBlur}
              />
              {field.text}
            </div>
            {touched[field.name] && (
              <TextPrimary className=" w-64 text-xs text-red-500">{errors[field.name]}</TextPrimary>
            )}
          </div>
        );

      default:
        return (
          <InputPrimary
            className="h-11 w-64  rounded-lg border-2 bg-none pl-2 text-slate-400  placeholder:text-slate-300   focus:outline-none  focus:ring-2 focus:ring-blue-300 sm:w-80"
            type={field.type}
            name={field.name}
            value={values[field.name]}
            placeholder={field.placeholder}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched[field.name] && errors[field.name]}
          />
        );
    }
  };

  const getStepConfig = () => {
    return formStepConfig.find((i) => i.step === currentStep);
  };
  const stepConfig = getStepConfig();

  const handleBack = () => {
    currentStep > 1 && dispatch({ type: "STEP_UPDATE", payload: -1 });
  };
  const handleSave = () => {
    dispatch({ type: "FORM_UPDATE", payload: values });
  };

  return (
    <div className="flex w-full flex-col items-center justify-center rounded-md bg-white p-4 sm:w-3/6 sm:p-8 md:w-4/6 lg:w-3/6">
      <div className="w-full">
        <StepperPrimary
          activeStep={currentStep - 1}
          alternativeLabel
          className="w-full"
          steps={steps}
          currentStep={currentStep}
        />
      </div>

      <div className="min-h-80 shadow-custom-shadow-1 flex w-full flex-col items-center justify-evenly gap-4 rounded-lg p-4  sm:p-8 ">
        {stepConfig.fields.map((field, index) => (
          <div key={`${field.name}${currentStep}`} className="flex flex-col items-start">
            {field.label && (
              <LabelPrimary className="text-sm text-slate-400 sm:text-lg" text={field.label} />
            )}
            {renderInputField(field, index)}
          </div>
        ))}
      </div>

      <div className="mt-4 flex w-full justify-between">
        <ButtonPrimary
          className={`mb-2 me-2 rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-3 py-2.5  text-center text-xs font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-2 focus:ring-blue-300 sm:px-5 sm:text-sm ${
            currentStep === 1 && "cursor-not-allowed"
          }`}
          onClick={handleBack}
          disabled={currentStep === 1}
        >
          Back
        </ButtonPrimary>
        <ButtonPrimary
          className="mb-2 me-2 rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-3 py-2.5  text-center text-xs font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-2 focus:ring-blue-300 sm:px-5 sm:text-sm"
          onClick={handleSave}
        >
          Save
        </ButtonPrimary>
        <ButtonPrimary
          className="mb-2 me-2 rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-3 py-2.5  text-center text-xs font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-2 focus:ring-blue-300 sm:px-5 sm:text-sm"
          type="submit"
          onClick={handleSubmit}
        >
          {loading ? "Loading..." : "Save and Next"}
        </ButtonPrimary>
      </div>
    </div>
  );
};

export default MultiStepForm;
