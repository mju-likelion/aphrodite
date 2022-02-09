import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

function Portal({ children }: React.PropsWithChildren<{}>) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted
    ? createPortal(children, document.getElementById("modal") as HTMLElement)
    : null;
}

export default Portal;
