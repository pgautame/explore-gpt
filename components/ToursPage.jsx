"use client";
import { getAllTours } from "@/utils/actions";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ToursList from "./ToursList";

const ToursPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [debouncedSearchValue, setDebouncedSearchValue] = useState(searchValue);
  const router = useRouter();

  // Debounce logic to delay API call until user stops typing
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchValue(searchValue);
    }, 450);

    // Clear timeout if the effect is called again before the delay is finished
    return () => {
      clearTimeout(handler);
    };
  }, [searchValue]);

  const { data, isPending } = useQuery({
    queryKey: ["tours", debouncedSearchValue],
    queryFn: () => getAllTours(debouncedSearchValue),
  });

  return (
    <>
      <h1 className="text-4xl mb-8 font-bold">Tours</h1>
      <form className="max-w-lg mb-12 flex">
        <div className="join w-full">
          <input
            type="text"
            placeholder="search a city or country"
            className="input input-bordered join-item w-full"
            name="search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            required
          />
          <button
            className="btn btn-primary join-item"
            type="button"
            disabled={isPending}
            onClick={() => setSearchValue("")}
          >
            {isPending ? "please wait" : "reset"}
          </button>
        </div>
        <button
          className="btn btn-secondary ml-5"
          type="button"
          onClick={() => router.push("/tours/new-tour")}
        >
          New Tour
        </button>
      </form>
      {isPending ? (
        <span className="loading"></span>
      ) : (
        <ToursList data={data} />
      )}
    </>
  );
};
export default ToursPage;
