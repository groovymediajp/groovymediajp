import React from "react";
import PropTypes from "prop-types";
import { Transition } from "@headlessui/react";
import Link from "next/link";

import Icon from "@mdi/react";
import { mdiCart } from "@mdi/js";

import { attributes } from "../../content/home.md";

export default function HeaderSmartphoneMenu({ open, close }) {
  const { services, apps } = attributes;

  return (
    <Transition
      show={open}
      enter="duration-200 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      {(ref) => (
        <div
          ref={ref}
          className="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img className="h-8 w-auto" src="/logo.svg" alt="" />
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    onClick={close}
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
                  >
                    <span className="sr-only">Close menu</span>

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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {apps.map((app) => (
                    <Link key={app.slug} href={`/shopifyapps/${app.slug}`}>
                      <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                        <Icon
                          path={mdiCart}
                          size={1}
                          className="flex-shrink-0 h-6 w-6 text-green-600"
                        />
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {app.name}
                        </span>
                      </a>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                {services.map((service) => (
                  <Link key={service.slug} href={`/services/${service.slug}`}>
                    <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                      {service.name}
                    </a>
                  </Link>
                ))}
              </div>
              <div>
                <Link href="/contact">
                  <a className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700">
                    担当者に相談する
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </Transition>
  );
}
HeaderSmartphoneMenu.propTypes = {
  open: PropTypes.bool,
  close: PropTypes.func.isRequired,
};
HeaderSmartphoneMenu.defaultProps = {
  open: false,
};
