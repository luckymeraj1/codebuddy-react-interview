import { memo } from "react";
import PropTypes from "prop-types";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useDispatch, useSelector } from "react-redux";

// eslint-disable-next-line react-refresh/only-export-components
const StepperPrimary = ({ steps, currentStep, ...props }) => {
  const dispatch = useDispatch();
  const completed = useSelector((state) => state.form.completed);
  const handleStepper = (value) => {
    if (completed.includes(value - 1)) {
      dispatch({ type: "STEPER_STATE", payload: value });
    }
  };
  return (
    <Stepper activeStep={currentStep - 1} alternativeLabel className="w-full" {...props}>
      {steps.map((step) => (
        <Step key={step.label} onClick={() => handleStepper(step.value)}>
          <StepLabel>{step.label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

StepperPrimary.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentStep: PropTypes.number.isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export default memo(StepperPrimary);
