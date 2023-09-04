import React, { forwardRef, memo } from "react";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

function Input(
  props: Props & { errormessage?: string },
  ref: React.LegacyRef<HTMLInputElement> | undefined
) {
  const { style, errormessage } = props;
  return (
    <div style={{ width: "100%" }}>
      <input
        {...props}
        ref={ref}
        style={{
          width: "100%",
          height: "40px",
          fontSize: "14px",
          outlineColor: "#0A82ED",
          borderRadius: "5px",
          border: "solid",
          borderWidth: errormessage ? "2px" : "1px",
          borderColor: errormessage ? "#d80909" : "#000",
          padding: 10,
          ...style,
        }}
      />
      <div
        style={{ fontSize: "10px", color: "red", marginLeft: 10, marginTop: 2 }}
      >
        {errormessage && errormessage}
      </div>
    </div>
  );
}
export default memo(forwardRef(Input));
