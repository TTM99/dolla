import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const data = useLocation();
  const { pathname } = data;

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(data);
  }, [pathname]);

  return null;
}
