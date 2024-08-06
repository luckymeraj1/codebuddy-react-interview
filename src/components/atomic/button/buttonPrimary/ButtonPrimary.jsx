import PropTypes from "prop-types";
import { memo } from "react";

// eslint-disable-next-line react-refresh/only-export-components
const ButtonPrimary = ({ isLoading, loadingText, children, ...props }) => {
  return (
    <button disabled={isLoading || props.disabled} {...props}>
      {isLoading ? loadingText : children}
    </button>
  );
};

ButtonPrimary.propTypes = {
  isLoading: PropTypes.bool,
  loadingText: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool,
};

ButtonPrimary.defaultProps = {
  isLoading: false,
  loadingText: "Loading...",
};

// eslint-disable-next-line react-refresh/only-export-components
export default memo(ButtonPrimary);
