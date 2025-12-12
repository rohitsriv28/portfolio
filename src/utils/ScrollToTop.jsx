import { useEffect } from "react";

const ScrollTopOnRefresh = () => {
  useEffect(() => {
    // Scroll to top when the component mounts (on page refresh)
    window.scrollTo(0, 0);

    // Alternative approach: use storage to detect page refresh
    const handleBeforeUnload = () => {
      sessionStorage.setItem("wasRefreshed", "true");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    // Check if this load was from a refresh
    const wasRefreshed = sessionStorage.getItem("wasRefreshed");
    if (wasRefreshed) {
      window.scrollTo(0, 0);
      sessionStorage.removeItem("wasRefreshed");
    }

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return null;
};

export default ScrollTopOnRefresh;
