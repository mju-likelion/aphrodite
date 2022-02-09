import React from "react";

type Props = {
  children: React.ReactNode;
};

function ModalBody({ children }: Props) {
  return <div>{children}</div>;
}

export default ModalBody;
