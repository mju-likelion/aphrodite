import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface Props {
  children?: React.ReactNode;
}

function Portal({ children }: Props) {
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
