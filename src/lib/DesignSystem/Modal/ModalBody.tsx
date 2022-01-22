import React from "react";

type Props = {
  body: string;
  children?: React.ReactDOM;
};

function ModalBody({ children, body }: Props) {
  return (
    <div>
      {body}
      {children}
    </div>
  );
}

export default ModalBody;
