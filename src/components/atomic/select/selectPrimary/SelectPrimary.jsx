import { memo } from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line react-refresh/only-export-components
const SelectPrimary = ({ options, ...props }) => {
  return (
    <select {...props}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

SelectPrimary.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export default memo(SelectPrimary);
