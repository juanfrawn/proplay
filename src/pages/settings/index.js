import Link from "next/link";
import { FaGooglePlay } from "react-icons/fa";
import { SiAppstore } from "react-icons/si";

const Settings = () => {
  return (
    <div className="w-screen md:w-full h-screen text-center flex flex-col pt-20 items-center">
      <h1 className="text-5xl font-bold mb-10">Settings</h1>
      <div className="flex flex-col justify-center text-7xl w-10/12">
        <h2 className="text-2xl mb-4">Setting One</h2>
        <ul className="items-center mb-20 w-full text-sm font-medium text-gray-900 bg-primary rounded-lg border border-selected sm:flex ">
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="list-1"
                type="radio"
                value=""
                name="list-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="list-1"
                className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Option 1
              </label>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="list-2"
                type="radio"
                value=""
                name="list-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="list-2"
                className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Option 2
              </label>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="list-3"
                type="radio"
                value=""
                name="list-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="list-3"
                className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Option 3
              </label>
            </div>
          </li>
          <li className="w-full dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="list-4"
                type="radio"
                value=""
                name="list-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="list-4"
                className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Option 4
              </label>
            </div>
          </li>
        </ul>
        <h2 className="text-2xl mb-4">Setting Two</h2>
        <ul className="items-center mb-20 w-full text-sm font-medium text-gray-900 bg-primary rounded-lg border border-selected sm:flex ">
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="list-5"
                type="radio"
                value=""
                name="list-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="list-5"
                className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Option 1
              </label>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="list-6"
                type="radio"
                value=""
                name="list-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="list-6"
                className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Option 2
              </label>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="list-7"
                type="radio"
                value=""
                name="list-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="list-7"
                className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Option 3
              </label>
            </div>
          </li>
          <li className="w-full dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="list-8"
                type="radio"
                value=""
                name="list-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="list-8"
                className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Option 4
              </label>
            </div>
          </li>
        </ul>
        <h2 className="text-2xl mb-4">Setting Three</h2>
        <ul className="items-center mb-20 w-full text-sm font-medium text-gray-900 bg-primary rounded-lg border border-selected sm:flex ">
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="list-9"
                type="radio"
                value=""
                name="list-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="list-9"
                className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Option 1
              </label>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="list-10"
                type="radio"
                value=""
                name="list-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="list-10"
                className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Option 2
              </label>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="list-11"
                type="radio"
                value=""
                name="list-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="list-11"
                className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Option 3
              </label>
            </div>
          </li>
          <li className="w-full dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="list-12"
                type="radio"
                value=""
                name="list-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="list-12"
                className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Option 4
              </label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Settings;
