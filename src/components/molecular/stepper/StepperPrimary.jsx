import { memo } from "react";
import PropTypes from "prop-types";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

// eslint-disable-next-line react-refresh/only-export-components
const StepperPrimary = ({ steps, currentStep, ...props }) => {
  return (
    <Stepper activeStep={currentStep - 1} alternativeLabel className="w-full" {...props}>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

StepperPrimary.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentStep: PropTypes.number.isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export default memo(StepperPrimary);
