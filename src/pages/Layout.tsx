import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useRef, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const rootLayoutRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  useEffect(() => {
    // Check if the current path includes a hash
    if (!location.hash) {
      // If there's no hash, scroll to the top
      if (rootLayoutRef.current) {
        rootLayoutRef.current.scrollTo(0, 0);
      }
    }
  }, [location]);
  return (
    <>
      <div
        className="w-screen h-screen overflow-x-hidden"
        id="root-layout"
        ref={rootLayoutRef}
      >
        <Navbar rootLayoutRef={rootLayoutRef} />
        <div>
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
