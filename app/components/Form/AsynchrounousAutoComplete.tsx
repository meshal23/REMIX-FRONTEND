/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFetcher } from "@remix-run/react";
import { useEffect, useState } from "react";
import { User } from "lucide-react";
import Spinner from "../Spinner";

const AsynchrounousAutoComplete = ({ service }: any) => {
  const fetcher = useFetcher();
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query.length < 3) return;

    const timer = setTimeout(() => {
      fetcher.load(service);
    }, 500);

    return clearTimeout(timer);
  }, [query]);

  return (
    <div className="mt-2">
      <div className="flex">
        <span className="inline-flex items-center px-3  text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
          {fetcher.state === "loading" ? <Spinner /> : <User />}
        </span>
        <input
          type="text"
          id="website-admin"
          className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e) => setQuery(e.target.value)}
        />
        {/* <ul>
          {fetcher.data?.map((item: any) => {
            <li>{item.name}</li>;
          })}
        </ul> */}
      </div>
    </div>
  );
};

export default AsynchrounousAutoComplete;
