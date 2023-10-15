import React from "react";
import { HiMenu } from "react-icons/hi";
import { NAV_DATA } from "../data/data";

function Navbar() {
  return (
    <div className="flex items-center px-5 py-5 ">
      <h1 className="text-4xl text-neutral-800 font-bold max-lg:flex-1">
        snap
      </h1>
      <div className="flex items-center flex-1 max-lg:hidden pt-2">
        {/* Nav links */}
        <ul className="flex items-center menu menu-horizontal px-1">
          {NAV_DATA.map((data) => {
            return (
              <li className="px-5" key={data.id}>
                <details>
                  <summary>{data.title}</summary>
                  <ul className="p-2 bg-base-100 shadow-lg w-52">
                    {data.hasSide &&
                      data.subNav.map((subNav) => {
                        return (
                          <div
                            className="flex items-center gap-5 mt-3 hover:bg-neutral-200 rounded-md hover:cursor-pointer"
                            key={subNav.id}
                          >
                            {subNav.icon && (
                              <img
                                src={subNav.icon}
                                alt={subNav.title}
                                className="w-7 h-7"
                              />
                            )}
                            <li href={subNav.path} className="py-1">
                              {subNav.title}
                            </li>
                          </div>
                        );
                      })}
                  </ul>
                </details>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex items-center justify-center text-neutral-500 hover:text-neutral-700 max-lg:hidden">
        <span className="p-3">
          <a href="/">Login</a>
        </span>
        <span className="rounded-xl border-2 border-neutral-400 p-2 px-4 hover:text-neutral-700 hover:border-neutral-700 cursor-pointer">
          <a href="/">Register</a>
        </span>
      </div>
      <div className="flex-none lg:hidden">
        <label
          htmlFor="my-drawer-3"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost"
        >
          <HiMenu fontSize={30} />
        </label>
      </div>
    </div>
  );
}

export default Navbar;
