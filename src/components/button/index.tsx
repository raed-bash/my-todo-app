import React, { memo } from "react";
import "./index.css";
type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
type CustomProperties = { variant?: "primary" | "danger" };
function Button(props: Props & CustomProperties) {
  const { children, style, variant = "primary" } = props;
  const handleColor = () => {
    if (variant === "primary") return "#0A82ED";
    else if (variant === "danger") return "#d80909";
  };
  console.count("button");

  return (
    <button
      {...props}
      style={{
        transition: "background .2s",
        border: "none",
        borderRadius: "5px",
        padding: "5px 20px",
        fontWeight: "600",
        cursor: "pointer",
        background: handleColor(),
        color: "#fff",
        textTransform: "uppercase",

        ...style,
      }}
    >
      {children}
    </button>
  );
}
export default memo(Button);
