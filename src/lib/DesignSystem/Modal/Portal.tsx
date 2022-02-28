import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { PortalProps } from "react-portal";

function Portal({ children }: React.PropsWithChildren<PortalProps>) {
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
