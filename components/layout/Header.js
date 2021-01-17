import React, { useState } from "react";

import HeaderApps from "./HeaderApps";
import HeaderServices from "./HeaderServices";
import HeaderSmartphoneMenu from "./HeaderSmartphoneMenu";

export default function Header() {
  const [isSmartphoneOpen, setIsSmartphoneOpen] = useState(false);
  return (
    <div className="relative bg-gray-50 select-none">
      <div className="relative bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="/">
                <span className="sr-only">GroovyMedia</span>
                <img
                  className="h-8 w-auto sm:h-10"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt=""
                />
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                onClick={() => {
                  setIsSmartphoneOpen(true);
                }}
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span className="sr-only">Open menu</span>

                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <nav className="hidden md:flex space-x-10">
              <HeaderApps />
              <HeaderServices />
              <a
                href="/news/"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                お知らせ
              </a>
              <a
                href="/pages/company"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                会社概要
              </a>
            </nav>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <a
                href="/pages/contact"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                お問い合わせ
              </a>
            </div>
          </div>
        </div>

        <HeaderSmartphoneMenu
          close={() => {
            setIsSmartphoneOpen(false);
          }}
          open={isSmartphoneOpen}
        />
      </div>
    </div>
  );
}
