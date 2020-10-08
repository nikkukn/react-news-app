import { useEffect, useState } from "react";

function useNavbar() {
  const [isNavbar, setNavbar] = useState(false);

  const handleScroll = () => {
    window.scrollY > 100 ? setNavbar(true) : setNavbar(false);
  };

  // This function handle the scroll performance issue

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, [handleScroll]);

  return { isNavbar };
}

export default useNavbar;
