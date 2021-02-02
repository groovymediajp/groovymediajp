import React, { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";

import Icon from "@mdi/react";
import { mdiWrench, mdiCart, mdiRepeat } from "@mdi/js";

const icons = {
  wrench: mdiWrench,
  cart: mdiCart,
  repeat: mdiRepeat,
};

import { attributes } from "../../content/home.md";

export default function HeaderServices() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();
  useEffect(() => {
    isOpen && menuRef.current.focus();
  }, [isOpen]);

  const { services } = attributes;

  return (
    <div
      onBlur={() => setTimeout(() => setIsOpen(false), 100)}
      ref={menuRef}
      className="relative"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        <span>サービス</span>
        <svg
          className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        {(ref) => (
          <div
            ref={ref}
            className="absolute left-1/2 z-10 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                {services.map((service) => (
                  <Link key={service.slug} href={`/services/${service.slug}`}>
                    <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                      <Icon
                        path={icons[service.icon]}
                        size={1}
                        className="flex-shrink-0 h-6 w-6 text-green-600"
                      />
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">
                          {service.name}
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          {service.description}
                        </p>
                      </div>
                    </a>
                  </Link>
                ))}
              </div>
              {/* <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                <div>
                  <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">
                    Recent Posts
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li className="text-base truncate">
                      <a
                        href="#"
                        className="font-medium text-gray-900 hover:text-gray-700"
                      >
                        Boost your conversion rate
                      </a>
                    </li>

                    <li className="text-base truncate">
                      <a
                        href="#"
                        className="font-medium text-gray-900 hover:text-gray-700"
                      >
                        How to use search engine optimization to drive traffic
                        to your site
                      </a>
                    </li>

                    <li className="text-base truncate">
                      <a
                        href="#"
                        className="font-medium text-gray-900 hover:text-gray-700"
                      >
                        Improve your customer experience
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-5 text-sm">
                  <Link href="/articles/">
                    <a className="font-medium text-green-600 hover:text-green-500">
                      &nbsp;すべての投稿を見る&nbsp;
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </Link>
                </div>
              </div> */}
            </div>
          </div>
        )}
      </Transition>
    </div>
  );
}
