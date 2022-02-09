import React from "react";

type Props = {
  children: React.ReactNode;
};

function ModalBody({ children }: Props) {
  return <>{children}</>;
}

export default ModalBody;
