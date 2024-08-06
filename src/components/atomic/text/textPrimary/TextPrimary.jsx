import PropTypes from "prop-types";
import { memo } from "react";

const styleMapping = {
  h1: "text-4xl font-bold my-2",
  h2: "text-3xl font-bold my-2",
  h3: "text-2xl font-bold my-2",
  h4: "text-xl font-bold my-2",
  h5: "text-lg font-bold my-2",
  h6: "text-base font-bold my-2",
  p: "text-base my-2",
  span: "text-sm my-2",
};

// eslint-disable-next-line react-refresh/only-export-components
const TextPrimary = ({ level, className, children, ...props }) => {
  const Tag = level || "p";

  return (
    <Tag className={`${className} ${styleMapping[level]}`} {...props}>
      {children}
    </Tag>
  );
};

TextPrimary.propTypes = {
  level: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "p", "span"]),
  className: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.object,
};

TextPrimary.defaultProps = {
  level: "p",
};

// eslint-disable-next-line react-refresh/only-export-components
export default memo(TextPrimary);
