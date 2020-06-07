/* Copyright 2020 the Deno authors. All rights reserved. MIT license. */

import React, { useMemo } from "react";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { entries } from "../../util/registry_utils";
import InlineCode from "../../components/InlineCode";
import { metaDescription } from "../";

import Head from "next/head";

const ThirdPartyRegistryList = () => {
  const [query, setQuery] = React.useState("");

  const list = useMemo(
    () =>
      Object.keys(entries)
        .filter(
          (name) =>
            name.toLowerCase().includes(query.toLowerCase()) ||
            (entries[name].desc ?? "")
              .toLowerCase()
              .includes(query.toLowerCase())
        )
        .sort((nameA, nameB) => nameA.localeCompare(nameB)),
    [entries, query]
  );

  return (
    <>
      <Head>
        <title>Third Party Modules | Deno</title>

        {metaDescription({
          title: "Deno Third Party Modules",
          description: "Third Party Modules for Deno.",
          url: "https://deno.land/x",
          image: "https://deno.land/v1_wide.jpg",
        })}
      </Head>
      <div className="bg-gray-50 min-h-full">
        <Header subtitle="Third Party Modules" />
        <div className="">
          <div className="max-w-screen-xl mx-auto pt-4 pb-16 sm:pt-8 sm:pb-20 px-4 sm:px-6 lg:pt-12 lg:pb-28 lg:px-8">
            <div className="pt-10">
              <dl className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <div>
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      What is deno.land/x?
                    </dt>
                    <dd className="mt-2">
                      <p className="text-base leading-6 text-gray-500">
                        <span className="font-semibold">deno.land/x</span> is a
                        URL rewriting service (or URL shortner) for Deno
                        scripts. It does not host files itself, it just serves
                        them from services like GitHub under one common domain.
                      </p>
                    </dd>
                  </div>
                  <div className="mt-12">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      How do I use deno.land/x?
                    </dt>
                    <dd className="mt-2">
                      <p className="text-base leading-6 text-gray-500 break-words">
                        The basic format of code URLs is
                        <InlineCode>
                          https://deno.land/x/IDENTIFIER@VERSION/FILE_PATH
                        </InlineCode>
                        . If you leave out the version, it will be defaulted to
                        the module’s default branch, usually{" "}
                        <InlineCode>master</InlineCode>.
                      </p>
                    </dd>
                  </div>
                  <div className="mt-12">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      How do I add a module to deno.land/x?
                    </dt>
                    <dd className="mt-2">
                      <p className="text-base leading-6 text-gray-500">
                        To add to this list, edit{" "}
                        <a
                          href="https://github.com/denoland/deno_website2/blob/master/database.json"
                          className="link"
                        >
                          database.json
                        </a>
                        {". "}
                        Run the tests and formatting before submitting a patch -
                        the PR must be green to be considered.{" "}
                      </p>
                    </dd>
                  </div>
                </div>
                <div className="mt-12 md:mt-0">
                  <div>
                    <dt
                      className="text-lg leading-6 font-medium text-gray-900"
                      id="warning"
                    >
                      I am getting a warning when importing from deno.land/x!
                    </dt>
                    <dd className="mt-2">
                      <p className="text-base leading-6 text-gray-500">
                        deno.land/x warns you when you are implicitly importing
                        from the default branch of a module (when you do not
                        explicitly specify version). This is because it can{" "}
                        <a href="" className="link">
                          be unsafe to not tag dependencies
                        </a>
                        . To get rid of the warning, explicitly specify a branch
                        or version.
                      </p>
                    </dd>
                  </div>
                  <div className="mt-12">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      Can I find functionality built-in to Deno here?
                    </dt>
                    <dd className="mt-2">
                      <p className="text-base leading-6 text-gray-500">
                        No, the built-in runtime is documented on{" "}
                        <a className="link" href="https://doc.deno.land/">
                          deno doc
                        </a>{" "}
                        and in the manual. See{" "}
                        <Link href="/[identifier]" as="/std">
                          <a className="link">/std</a>
                        </Link>{" "}
                        for the standard modules.
                      </p>
                    </dd>
                  </div>
                  <div className="mt-12">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      Do I need to add my module to the list to use deno.land/x?
                    </dt>
                    <dd className="mt-2">
                      <p className="text-base leading-6 text-gray-500">
                        [Experimental]: No, you can use the special module
                        identifiers <InlineCode>gh:[owner]:[repo]</InlineCode>{" "}
                        and <InlineCode>npm:[package]</InlineCode> to import
                        from any GitHub repository or NPM package.
                      </p>
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
          </div>
          <div className="max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 pt-4">
            <label htmlFor="query" className="font-medium sr-only">
              Search
            </label>
            <input
              id="query"
              className="block w-full px-4 py-2 leading-normal bg-white border border-gray-200 rounded-lg outline-none shadow hover:shadow-sm focus:shadow-sm appearance-none focus:border-gray-300 hover:border-gray-300 mt-1"
              type="text"
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="sm:max-w-screen-lg sm:mx-auto sm:px-6 md:px-8 pb-4 sm:pb-12">
            {list.length == 0 ? (
              <div className="px-4 sm:px-0 py-4 text-center sm:text-left text-sm leading-5 font-medium text-gray-500 truncate">
                No modules found
              </div>
            ) : (
              <div className="bg-white sm:shadow border border-gray-200 overflow-hidden sm:rounded-md mt-4">
                <ul>
                  {list.map((name, i) => {
                    const link = `/x/${name}`;
                    return (
                      <li
                        className={i !== 0 ? "border-t border-gray-200" : ""}
                        key={i}
                      >
                        <Link href="/x/[identifier]" as={link}>
                          <a className="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out">
                            <div className="flex items-center px-4 sm:px-6 py-2">
                              <div className="min-w-0 flex-1 flex items-center">
                                <div className="min-w-0 flex-1">
                                  <div className="text-sm leading-5 font-medium text-blue-500 truncate">
                                    {name}
                                  </div>
                                  {entries[name]?.desc && (
                                    <div className="mt-1 flex items-center text-sm leading-5 text-gray-500">
                                      <span className="truncate">
                                        {entries[name]?.desc ?? ""}
                                      </span>
                                    </div>
                                  )}
                                </div>
                              </div>
                              <div>
                                <svg
                                  className="h-5 w-5 text-gray-400"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </div>
                            </div>
                          </a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>
        <Footer simple />
      </div>
    </>
  );
};

export default ThirdPartyRegistryList;
