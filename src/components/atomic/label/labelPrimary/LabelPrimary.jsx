import { memo } from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line react-refresh/only-export-components
const LabelPrimary = ({ text, htmlFor, ...props }) => {
  return (
    <label htmlFor={htmlFor} {...props}>
      {text}
    </label>
  );
};

LabelPrimary.propTypes = {
  text: PropTypes.string.isRequired,
  htmlFor: PropTypes.string,
};

// eslint-disable-next-line react-refresh/only-export-components
export default memo(LabelPrimary);
