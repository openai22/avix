import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // small delay so animation can start smoothly
    const timeout = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth" // change to "auto" if you want instant
      });
    }, 50);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}
