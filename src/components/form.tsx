import React, { memo } from "react";
type Props = React.DetailedHTMLProps<
  React.FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
>;
function Form(props: Props) {
  const { children, onSubmit = () => {} } = props;
  return (
    <form
      {...props}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(e);
      }}
    >
      {children}
    </form>
  );
}
export default memo(Form);
