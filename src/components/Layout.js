import React from "react";
import Navbar from "./Navbar";
import Content from "./Content";
import MobileNav from "./MobileNav";

function Layout() {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="w-full">
          {/* Navbar here */}

          <Navbar />
        </div>
        {/* Page content */}
        <Content />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <MobileNav />
      </div>
    </div>
  );
}

export default Layout;
