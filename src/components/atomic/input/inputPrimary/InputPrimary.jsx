/* eslint-disable react/prop-types */
import { memo, useState } from "react";
import TextPrimary from "../../text/textPrimary/TextPrimary";

// eslint-disable-next-line react-refresh/only-export-components
const InputPrimary = ({ error, type, ...props }) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <input type={type === "password" && show ? "text" : type} {...props} />
      {error && <p className=" w-64 text-xs text-red-500">{error}</p>}

      {type === "password" && (
        <div className="mt-2 flex gap-2">
          <input type="checkbox" onChange={(e) => setShow(e.target.checked)} />

          <TextPrimary className="my-0 text-sm" level="p">
            show password
          </TextPrimary>
        </div>
      )}
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default memo(InputPrimary);
