import Navbar from "@/components/Navbar";
import { useRef } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const rootLayoutRef = useRef<HTMLDivElement>(null);
  return (
    <div
      className="w-screen h-screen overflow-x-hidden overflow-y-auto"
      id="root-layout"
      ref={rootLayoutRef}
    >
      <Navbar rootLayoutRef={rootLayoutRef} />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
