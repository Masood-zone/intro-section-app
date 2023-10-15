import React from "react";
import { NAV_DATA } from "../data/data";

const MobileNav = () => {
  return (
    <div className="w-80 max-sm:w-56 min-h-screen bg-white px-5 py-5">
      <ul className="menu bg-base-100">
        {NAV_DATA.map((mobile) => {
          return (
            <li key={mobile.id}>
              <details open>
                <summary>{mobile.title}</summary>
                <ul className="">
                  {mobile.hasSide &&
                    mobile.subNav.map((sub) => {
                      return (
                        <>
                          {sub.icon && (
                            <div
                              className="flex items-center gap-5 mt-3 hover:bg-neutral-200 rounded-md hover:cursor-pointer"
                              key={sub.id}
                            >
                              <img
                                src={sub.icon}
                                alt={sub.title}
                                className="w-7 h-7"
                              />
                              <li className="py-1">{sub.title}</li>
                            </div>
                          )}
                          {!sub.icon && (
                            <li href={sub.path} className="py-1">
                              {sub.title}
                            </li>
                          )}
                        </>
                      );
                    })}
                </ul>
              </details>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MobileNav;
