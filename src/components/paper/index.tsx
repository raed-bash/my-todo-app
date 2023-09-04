import React, { memo } from "react";
type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;
function Paper(props: Props) {
  const { children, style } = props;
  return (
    <div
      {...props}
      style={{
        boxShadow: "0 0 5px 2px #b0b0b0",
        padding: 10,
        borderRadius: 4,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
export default memo(Paper);
