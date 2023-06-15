import React from 'react';

export const SideBar = () => {
  return (
    <div className="hidden sm:flex h-full">
      <div
        style={{
          position: 'relative',
          userSelect: 'auto',
          width: 290,
          height: '100%',
          maxWidth: 520,
          minWidth: 195,
          boxSizing: 'border-box',
          flexShrink: 0,
        }}
      >
        <div className="flex flex-col h-full bg-gray-50 dark:bg-gray-900 dark:text-gray-200 border-r dark:border-gray-800 px-2 overflow-auto">
          <div className="pt-4 flex items-center px-1">
            <div className="flex items-center rounded hover:py-1 p-1 w-full">
              <span
                style={{
                  boxSizing: 'border-box',
                  display: 'inline-block',
                  overflow: 'hidden',
                  width: 'initial',
                  height: 'initial',
                  background: 'none',
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0,
                  position: 'relative',
                  maxWidth: '100%',
                }}
              >
                <span
                  style={{
                    boxSizing: 'border-box',
                    display: 'block',
                    width: 'initial',
                    height: 'initial',
                    background: 'none',
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    maxWidth: '100%',
                  }}
                >
                  <img
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2718%27%20height=%2718%27/%3e"
                    style={{
                      display: 'block',
                      maxWidth: '100%',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                    }}
                  />
                </span>
                <img
                  alt="logo"
                  src="/_next/image?url=%2Flogo.png&w=48&q=75"
                  decoding="async"
                  data-nimg="intrinsic"
                  className="rounded"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    boxSizing: 'border-box',
                    padding: 0,
                    border: 'none',
                    margin: 'auto',
                    display: 'block',
                    width: 0,
                    height: 0,
                    minWidth: '100%',
                    maxWidth: '100%',
                    minHeight: '100%',
                    maxHeight: '100%',
                  }}
                  srcSet="/_next/image?url=%2Flogo.png&w=32&q=75 1x, /_next/image?url=%2Flogo.png&w=48&q=75 2x"
                />
              </span>
              <span className="text-sm ml-2 mr-1 text-gray-900 dark:text-gray-300">
                aasdfasdf
              </span>
            </div>
          </div>
          <div className="flex pt-4 flex-col gap-0 ">
            <a
              className="flex items-center px-2 interact-bounce hover:bg-gray-100 dark:hover:bg-gray-800  py-1 rounded"
              href="/aasdfasdf/datasets"
            >
              <div className="flex items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-4 w-4 flex text-gray-600 dark:text-gray-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 1c3.866 0 7 1.79 7 4s-3.134 4-7 4-7-1.79-7-4 3.134-4 7-4zm5.694 8.13c.464-.264.91-.583 1.306-.952V10c0 2.21-3.134 4-7 4s-7-1.79-7-4V8.178c.396.37.842.688 1.306.953C5.838 10.006 7.854 10.5 10 10.5s4.162-.494 5.694-1.37zM3 13.179V15c0 2.21 3.134 4 7 4s7-1.79 7-4v-1.822c-.396.37-.842.688-1.306.953-1.532.875-3.548 1.369-5.694 1.369s-4.162-.494-5.694-1.37A7.009 7.009 0 013 13.179z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm ml-2 mr-1 text-gray-700 dark:text-gray-300">
                  Datasets
                </span>
              </div>
            </a>
            <a
              className="flex items-center px-2 interact-bounce hover:bg-gray-100 dark:hover:bg-gray-800 py-1   rounded"
              href="/aasdfasdf/models"
            >
              <div className="flex items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-4 w-4 flex text-gray-600 dark:text-gray-400"
                >
                  <path d="M14 6H6v8h8V6z" />
                  <path
                    fillRule="evenodd"
                    d="M9.25 3V1.75a.75.75 0 011.5 0V3h1.5V1.75a.75.75 0 011.5 0V3h.5A2.75 2.75 0 0117 5.75v.5h1.25a.75.75 0 010 1.5H17v1.5h1.25a.75.75 0 010 1.5H17v1.5h1.25a.75.75 0 010 1.5H17v.5A2.75 2.75 0 0114.25 17h-.5v1.25a.75.75 0 01-1.5 0V17h-1.5v1.25a.75.75 0 01-1.5 0V17h-1.5v1.25a.75.75 0 01-1.5 0V17h-.5A2.75 2.75 0 013 14.25v-.5H1.75a.75.75 0 010-1.5H3v-1.5H1.75a.75.75 0 010-1.5H3v-1.5H1.75a.75.75 0 010-1.5H3v-.5A2.75 2.75 0 015.75 3h.5V1.75a.75.75 0 011.5 0V3h1.5zM4.5 5.75c0-.69.56-1.25 1.25-1.25h8.5c.69 0 1.25.56 1.25 1.25v8.5c0 .69-.56 1.25-1.25 1.25h-8.5c-.69 0-1.25-.56-1.25-1.25v-8.5z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm ml-2 mr-1 text-gray-700 dark:text-gray-300">
                  Models
                </span>
              </div>
            </a>
            <a
              className="flex items-center px-2 interact-bounce hover:bg-gray-100 dark:hover:bg-gray-800 py-1   rounded"
              href="/aasdfasdf/stats"
            >
              <div className="flex items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-4 w-4 flex text-gray-600 dark:text-gray-400"
                >
                  <path d="M15.5 2A1.5 1.5 0 0014 3.5v13a1.5 1.5 0 001.5 1.5h1a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0016.5 2h-1zM9.5 6A1.5 1.5 0 008 7.5v9A1.5 1.5 0 009.5 18h1a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 6h-1zM3.5 10A1.5 1.5 0 002 11.5v5A1.5 1.5 0 003.5 18h1A1.5 1.5 0 006 16.5v-5A1.5 1.5 0 004.5 10h-1z" />
                </svg>
                <span className="text-sm ml-2 mr-1 text-gray-700 dark:text-gray-300">
                  Stats
                </span>
              </div>
            </a>
            <a
              className="flex items-center px-2 interact-bounce hover:bg-gray-100 dark:hover:bg-gray-800 py-1   rounded"
              href="/aasdfasdf/docs/functions"
            >
              <div className="flex items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-4 w-4 flex text-gray-600 dark:text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>
                <span className="text-sm ml-2 mr-1 text-gray-700 dark:text-gray-300">
                  Documentation
                </span>
              </div>
            </a>
            <a
              className="flex items-center px-2 interact-bounce hover:bg-gray-100 dark:hover:bg-gray-800 py-1   rounded"
              href="/aasdfasdf/settings"
            >
              <div className="flex items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-4 w-4 flex text-gray-600 dark:text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
                  />
                </svg>
                <span className="text-sm ml-2 mr-1 text-gray-700 dark:text-gray-300">
                  Settings
                </span>
              </div>
            </a>
          </div>
          <div className="pt-8">
            <div className="text-gray-500 px-2 text-xs pb-2">Functions</div>
            <div className="pb-2 px-2 flex gap-1 w-full">
              <button className="flex py-1 border border-b-2 px-2 rounded bg-white items-center interact-bounce hover:bg-gray-100 justify-between dark:bg-gray-800 dark:hover:bg-gray-700 ">
                <div className="text-sm truncate flex items-center text-elipsis">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-4 w-4 flex text-gray-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                    />
                  </svg>
                </div>
              </button>
              <button className="flex-grow">
                <a className="flex flex-1 cursor-pointer py-1 border border-b-2 px-2 rounded bg-white items-center interact-bounce hover:bg-gray-100 justify-between gap-2 dark:hover:bg-gray-700 dark:bg-gray-800">
                  <div className="text-sm truncate flex items-center text-elipsis">
                    New Function
                  </div>
                  <div className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-4 w-4 flex text-gray-600"
                    >
                      <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                    </svg>
                  </div>
                </a>
              </button>
            </div>
            <div className="flex flex-col text-sm">
              <div>
                <div className="relative h-0">
                  <div className="  opacity-0 h-2 w-full bg-blue-200 rounded-r rounded-l absolute -top-px" />
                </div>
                <div
                  role="button"
                  tabIndex={0}
                  aria-disabled="false"
                  aria-roledescription="draggable"
                  aria-describedby="DndDescribedBy-0"
                  className="p-1 rounded flex text-start items-center dark:hover:bg-gray-800 hover:bg-gray-100 gap-1 bg-background border border-border dark:bg-gray-800"
                  id="2eac132b-69b5-4344-9663-57b3f7c7a3aa"
                >
                  <div
                    className="p-1 h-6 flex items-center justify-center rounded hover:bg-gray-200 dark:hover:bg-gray-700"
                    role="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="text-gray-400 h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-1 leading-none">Untitled</div>
                  <button
                    className="p-1 dark:hover:bg-gray-800 hover:bg-gray-200 rounded opacity-0"
                    id="headlessui-menu-button-:r0:"
                    type="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="text-gray-400 h-4 w-4"
                    >
                      <path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
                    </svg>
                  </button>
                </div>
                <div className="relative h-0">
                  <div className="  opacity-0 h-2 w-full bg-blue-200 rounded-r rounded-l absolute -top-px" />
                </div>
              </div>
              <div>
                <div className="relative h-0">
                  <div className="  opacity-0 h-2 w-full bg-blue-200 rounded-r rounded-l absolute -top-px" />
                </div>
                <div
                  role="button"
                  tabIndex={0}
                  aria-disabled="false"
                  aria-roledescription="draggable"
                  aria-describedby="DndDescribedBy-0"
                  className="p-1 rounded cursor-default flex items-center gap-1"
                  id="d8e8319c-77d2-4400-8153-7d231fc4b88a"
                >
                  <button className="p-1 dark:hover:bg-gray-800 hover:bg-gray-200 rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="text-gray-400 h-4 w-4 transition-all"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <div
                    className="p-1 h-6 flex items-center justify-center rounded hover:bg-gray-200 dark:hover:bg-gray-700"
                    role="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="text-gray-400 h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-1">Untitled</div>
                  <button
                    className="p-1 dark:hover:bg-gray-800 hover:bg-gray-200 rounded opacity-0"
                    id="headlessui-menu-button-:r1a:"
                    type="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="text-gray-400 h-4 w-4"
                    >
                      <path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
                    </svg>
                  </button>
                </div>
                <div className="relative h-0">
                  <div className="  opacity-0 h-2 w-full bg-blue-200 rounded-r rounded-l absolute -top-px" />
                </div>
              </div>
              <div>
                <div className="relative h-0">
                  <div className="  opacity-0 h-2 w-full bg-blue-200 rounded-r rounded-l absolute -top-px" />
                </div>
                <div
                  role="button"
                  tabIndex={0}
                  aria-disabled="false"
                  aria-roledescription="draggable"
                  aria-describedby="DndDescribedBy-0"
                  className="p-1 rounded cursor-default flex items-center gap-1"
                  id="87764862-a307-4fcb-9060-9b437e324b25"
                >
                  <button className="p-1 dark:hover:bg-gray-800 hover:bg-gray-200 rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="text-gray-400 h-4 w-4 transition-all transform rotate-90"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <div
                    className="p-1 h-6 flex items-center justify-center rounded hover:bg-gray-200 dark:hover:bg-gray-700"
                    role="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="text-gray-400 h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-1">Samples</div>
                  <button
                    className="p-1 dark:hover:bg-gray-800 hover:bg-gray-200 rounded opacity-0"
                    id="headlessui-menu-button-:r1c:"
                    type="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="text-gray-400 h-4 w-4"
                    >
                      <path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
                    </svg>
                  </button>
                </div>
                <div>
                  <div className="pl-7 w-full flex flex-col">
                    <div>
                      <div className="relative h-0">
                        <div className="  opacity-0 h-2 w-full bg-blue-200 rounded-r rounded-l absolute -top-px" />
                      </div>
                      <div
                        role="button"
                        tabIndex={0}
                        aria-disabled="false"
                        aria-roledescription="draggable"
                        aria-describedby="DndDescribedBy-0"
                        className="p-1 rounded flex text-start items-center dark:hover:bg-gray-800 hover:bg-gray-100 gap-1"
                        id="fd5cdf5a-b14e-4de5-827b-831e3380acf4"
                      >
                        <div
                          className="p-1 h-6 flex items-center justify-center rounded hover:bg-gray-200 dark:hover:bg-gray-700"
                          role="button"
                        >
                          <span className="text-base">💥</span>
                        </div>
                        <div className="flex flex-1 leading-none">
                          Superhero Origin
                        </div>
                        <button
                          className="p-1 dark:hover:bg-gray-800 hover:bg-gray-200 rounded opacity-0"
                          id="headlessui-menu-button-:r1e:"
                          type="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="text-gray-400 h-4 w-4"
                          >
                            <path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
                          </svg>
                        </button>
                      </div>
                      <div className="relative h-0">
                        <div className="  opacity-0 h-2 w-full bg-blue-200 rounded-r rounded-l absolute -top-px" />
                      </div>
                    </div>
                    <div>
                      <div className="relative h-0">
                        <div className="  opacity-0 h-2 w-full bg-blue-200 rounded-r rounded-l absolute -top-px" />
                      </div>
                      <div
                        role="button"
                        tabIndex={0}
                        aria-disabled="false"
                        aria-roledescription="draggable"
                        aria-describedby="DndDescribedBy-0"
                        className="p-1 rounded flex text-start items-center dark:hover:bg-gray-800 hover:bg-gray-100 gap-1"
                        id="5aa8f8ca-c8aa-4960-b894-b89b00293969"
                      >
                        <div
                          className="p-1 h-6 flex items-center justify-center rounded hover:bg-gray-200 dark:hover:bg-gray-700"
                          role="button"
                        >
                          <span className="text-base">🎬️</span>
                        </div>
                        <div className="flex flex-1 leading-none">
                          Movie to Emoji
                        </div>
                        <button
                          className="p-1 dark:hover:bg-gray-800 hover:bg-gray-200 rounded opacity-0"
                          id="headlessui-menu-button-:r1g:"
                          type="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="text-gray-400 h-4 w-4"
                          >
                            <path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
                          </svg>
                        </button>
                      </div>
                      <div className="relative h-0">
                        <div className="  opacity-0 h-2 w-full bg-blue-200 rounded-r rounded-l absolute -top-px" />
                      </div>
                    </div>
                    <div>
                      <div className="relative h-0">
                        <div className="  opacity-0 h-2 w-full bg-blue-200 rounded-r rounded-l absolute -top-px" />
                      </div>
                      <div
                        role="button"
                        tabIndex={0}
                        aria-disabled="false"
                        aria-roledescription="draggable"
                        aria-describedby="DndDescribedBy-0"
                        className="p-1 rounded flex text-start items-center dark:hover:bg-gray-800 hover:bg-gray-100 gap-1"
                        id="a0ecf780-64cd-46e8-ba0e-88e3285cd722"
                      >
                        <div
                          className="p-1 h-6 flex items-center justify-center rounded hover:bg-gray-200 dark:hover:bg-gray-700"
                          role="button"
                        >
                          <span className="text-base">📖</span>
                        </div>
                        <div className="flex flex-1 leading-none">Rhymer </div>
                        <button
                          className="p-1 dark:hover:bg-gray-800 hover:bg-gray-200 rounded opacity-0"
                          id="headlessui-menu-button-:r1i:"
                          type="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="text-gray-400 h-4 w-4"
                          >
                            <path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
                          </svg>
                        </button>
                      </div>
                      <div className="relative h-0">
                        <div className="  opacity-0 h-2 w-full bg-blue-200 rounded-r rounded-l absolute -top-px" />
                      </div>
                    </div>
                    <div>
                      <div className="relative h-0">
                        <div className="  opacity-0 h-2 w-full bg-blue-200 rounded-r rounded-l absolute -top-px" />
                      </div>
                      <div
                        role="button"
                        tabIndex={0}
                        aria-disabled="false"
                        aria-roledescription="draggable"
                        aria-describedby="DndDescribedBy-0"
                        className="p-1 rounded flex text-start items-center dark:hover:bg-gray-800 hover:bg-gray-100 gap-1"
                        id="10a7dd0a-9346-472d-ab6b-a827a0f7e156"
                      >
                        <div
                          className="p-1 h-6 flex items-center justify-center rounded hover:bg-gray-200 dark:hover:bg-gray-700"
                          role="button"
                        >
                          <span className="text-base">🪜</span>
                        </div>
                        <div className="flex flex-1 leading-none">
                          Word Ladder
                        </div>
                        <button
                          className="p-1 dark:hover:bg-gray-800 hover:bg-gray-200 rounded opacity-0"
                          id="headlessui-menu-button-:r1k:"
                          type="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="text-gray-400 h-4 w-4"
                          >
                            <path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
                          </svg>
                        </button>
                      </div>
                      <div className="relative h-0">
                        <div className="  opacity-0 h-2 w-full bg-blue-200 rounded-r rounded-l absolute -top-px" />
                      </div>
                    </div>
                    <div>
                      <div className="relative h-0">
                        <div className="  opacity-0 h-2 w-full bg-blue-200 rounded-r rounded-l absolute -top-px" />
                      </div>
                      <div
                        role="button"
                        tabIndex={0}
                        aria-disabled="false"
                        aria-roledescription="draggable"
                        aria-describedby="DndDescribedBy-0"
                        className="p-1 rounded flex text-start items-center dark:hover:bg-gray-800 hover:bg-gray-100 gap-1"
                        id="48acbf74-9a3d-4017-aa9c-ed1d1a75fce1"
                      >
                        <div
                          className="p-1 h-6 flex items-center justify-center rounded hover:bg-gray-200 dark:hover:bg-gray-700"
                          role="button"
                        >
                          <span className="text-base">🥦</span>
                        </div>
                        <div className="flex flex-1 leading-none">
                          Healthify Food
                        </div>
                        <button
                          className="p-1 dark:hover:bg-gray-800 hover:bg-gray-200 rounded opacity-0"
                          id="headlessui-menu-button-:r1m:"
                          type="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="text-gray-400 h-4 w-4"
                          >
                            <path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
                          </svg>
                        </button>
                      </div>
                      <div className="relative h-0">
                        <div className="  opacity-0 h-2 w-full bg-blue-200 rounded-r rounded-l absolute -top-px" />
                      </div>
                    </div>
                    <div>
                      <div className="relative h-0">
                        <div className="  opacity-0 h-2 w-full bg-blue-200 rounded-r rounded-l absolute -top-px" />
                      </div>
                      <div
                        role="button"
                        tabIndex={0}
                        aria-disabled="false"
                        aria-roledescription="draggable"
                        aria-describedby="DndDescribedBy-0"
                        className="p-1 rounded flex text-start items-center dark:hover:bg-gray-800 hover:bg-gray-100 gap-1"
                        id="4c405689-64aa-4cd0-bad6-4f0b728f01f5"
                      >
                        <div
                          className="p-1 h-6 flex items-center justify-center rounded hover:bg-gray-200 dark:hover:bg-gray-700"
                          role="button"
                        >
                          <span className="text-base">😶</span>
                        </div>
                        <div className="flex flex-1 leading-none">
                          First to Third Person
                        </div>
                        <button
                          className="p-1 dark:hover:bg-gray-800 hover:bg-gray-200 rounded opacity-0"
                          id="headlessui-menu-button-:r1o:"
                          type="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="text-gray-400 h-4 w-4"
                          >
                            <path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
                          </svg>
                        </button>
                      </div>
                      <div className="relative h-0">
                        <div className="  opacity-0 h-2 w-full bg-blue-200 rounded-r rounded-l absolute -top-px" />
                      </div>
                    </div>
                    <div>
                      <div className="relative h-0">
                        <div className="  opacity-0 h-2 w-full bg-blue-200 rounded-r rounded-l absolute -top-px" />
                      </div>
                      <div
                        role="button"
                        tabIndex={0}
                        aria-disabled="false"
                        aria-roledescription="draggable"
                        aria-describedby="DndDescribedBy-0"
                        className="p-1 rounded flex text-start items-center dark:hover:bg-gray-800 hover:bg-gray-100 gap-1"
                        id="e7479ab7-c5c9-4349-8e8b-4f6ed2f80649"
                      >
                        <div
                          className="p-1 h-6 flex items-center justify-center rounded hover:bg-gray-200 dark:hover:bg-gray-700"
                          role="button"
                        >
                          <span className="text-base">💾</span>
                        </div>
                        <div className="flex flex-1 leading-none">
                          Parse Unstructured Data
                        </div>
                        <button
                          className="p-1 dark:hover:bg-gray-800 hover:bg-gray-200 rounded opacity-0"
                          id="headlessui-menu-button-:r1q:"
                          type="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="text-gray-400 h-4 w-4"
                          >
                            <path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
                          </svg>
                        </button>
                      </div>
                      <div className="relative h-0">
                        <div className="  opacity-0 h-2 w-full bg-blue-200 rounded-r rounded-l absolute -top-px" />
                      </div>
                    </div>
                    <div>
                      <div className="relative h-0">
                        <div className="  opacity-0 h-2 w-full bg-blue-200 rounded-r rounded-l absolute -top-px" />
                      </div>
                      <div
                        role="button"
                        tabIndex={0}
                        aria-disabled="false"
                        aria-roledescription="draggable"
                        aria-describedby="DndDescribedBy-0"
                        className="p-1 rounded flex text-start items-center dark:hover:bg-gray-800 hover:bg-gray-100 gap-1"
                        id="8f1f6df8-9776-4d97-a780-e7b00c6482d5"
                      >
                        <div
                          className="p-1 h-6 flex items-center justify-center rounded hover:bg-gray-200 dark:hover:bg-gray-700"
                          role="button"
                        >
                          <span className="text-base">🤖</span>
                        </div>
                        <div className="flex flex-1 leading-none">
                          Astronomy Chatbot
                        </div>
                        <button
                          className="p-1 dark:hover:bg-gray-800 hover:bg-gray-200 rounded opacity-0"
                          id="headlessui-menu-button-:r1s:"
                          type="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="text-gray-400 h-4 w-4"
                          >
                            <path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
                          </svg>
                        </button>
                      </div>
                      <div className="relative h-0">
                        <div className="  opacity-0 h-2 w-full bg-blue-200 rounded-r rounded-l absolute -top-px" />
                      </div>
                    </div>
                    <div>
                      <div className="relative h-0">
                        <div className="  opacity-0 h-2 w-full bg-blue-200 rounded-r rounded-l absolute -top-px" />
                      </div>
                      <div
                        role="button"
                        tabIndex={0}
                        aria-disabled="false"
                        aria-roledescription="draggable"
                        aria-describedby="DndDescribedBy-0"
                        className="p-1 rounded flex text-start items-center dark:hover:bg-gray-800 hover:bg-gray-100 gap-1"
                        id="95327497-d3a8-4560-bb69-0dbe7ca3c479"
                      >
                        <div
                          className="p-1 h-6 flex items-center justify-center rounded hover:bg-gray-200 dark:hover:bg-gray-700"
                          role="button"
                        >
                          <span className="text-base">📄</span>
                        </div>
                        <div className="flex flex-1 leading-none">
                          Paragraph Summary
                        </div>
                        <button
                          className="p-1 dark:hover:bg-gray-800 hover:bg-gray-200 rounded opacity-0"
                          id="headlessui-menu-button-:r1u:"
                          type="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="text-gray-400 h-4 w-4"
                          >
                            <path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
                          </svg>
                        </button>
                      </div>
                      <div className="relative h-0">
                        <div className="  opacity-0 h-2 w-full bg-blue-200 rounded-r rounded-l absolute -top-px" />
                      </div>
                    </div>
                    <div>
                      <div className="relative h-0">
                        <div className="  opacity-0 h-2 w-full bg-blue-200 rounded-r rounded-l absolute -top-px" />
                      </div>
                      <div
                        role="button"
                        tabIndex={0}
                        aria-disabled="false"
                        aria-roledescription="draggable"
                        aria-describedby="DndDescribedBy-0"
                        className="p-1 rounded flex text-start items-center dark:hover:bg-gray-800 hover:bg-gray-100 gap-1"
                        id="e59a88d6-68c8-4411-bbcd-1be6b0f35260"
                      >
                        <div
                          className="p-1 h-6 flex items-center justify-center rounded hover:bg-gray-200 dark:hover:bg-gray-700"
                          role="button"
                        >
                          <span className="text-base">💎</span>
                        </div>
                        <div className="flex flex-1 leading-none">
                          Python to Ruby
                        </div>
                        <button
                          className="p-1 dark:hover:bg-gray-800 hover:bg-gray-200 rounded opacity-0"
                          id="headlessui-menu-button-:r20:"
                          type="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="text-gray-400 h-4 w-4"
                          >
                            <path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
                          </svg>
                        </button>
                      </div>
                      <div className="relative h-0">
                        <div className="  opacity-0 h-2 w-full bg-blue-200 rounded-r rounded-l absolute -top-px" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative h-0">
                  <div className="  opacity-0 h-2 w-full bg-blue-200 rounded-r rounded-l absolute -top-px" />
                </div>
              </div>
            </div>
            <div id="DndDescribedBy-0" style={{display: 'none'}}>
              To pick up a draggable item, press the space bar. While dragging,
              use the arrow keys to move the item. Press space again to drop the
              item in its new position, or press escape to cancel.
            </div>
            <div
              id="DndLiveRegion-0"
              role="status"
              aria-live="assertive"
              aria-atomic="true"
              style={{
                position: 'fixed',
                width: 1,
                height: 1,
                margin: '-1px',
                border: 0,
                padding: 0,
                overflow: 'hidden',
                clip: 'rect(0px, 0px, 0px, 0px)',
                clipPath: 'inset(100%)',
                whiteSpace: 'nowrap',
              }}
            />
          </div>
          <div className="grow" />
          <a
            className="flex interact-bounce items-center px-2 mb-4 mt-8 interact-bounce hover:bg-gray-100 dark:hover:bg-gray-800 py-1 hover:py-1 rounded"
            href="/aasdfasdf/functions/archive"
          >
            <div className="flex items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-4 w-4 flex text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                />
              </svg>
              <span className="text-xs ml-2 mr-1 text-gray-500">
                Archived Functions
              </span>
            </div>
          </a>
        </div>
        <div>
          <div
            className=""
            style={{
              position: 'absolute',
              userSelect: 'none',
              width: 5,
              height: '100%',
              top: 0,
              cursor: 'col-resize',
              right: '-2px',
              zIndex: 999,
            }}
          >
            <div className="bg-green-500 h-full w-full opacity-0 transition" />
          </div>
        </div>
      </div>
    </div>
  );
};
