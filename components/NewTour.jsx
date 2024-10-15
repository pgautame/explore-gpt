"use client";
import TourInfo from "@/components/TourInfo";
import {
  createNewTour,
  fetchUserTokensById,
  generateTourResponse,
  getExistingTour,
  subtractTokens,
} from "@/utils/actions";
import { useAuth } from "@clerk/nextjs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import TokenInfo from "./TokenInfo";

const NewTour = () => {
  const queryClient = useQueryClient();
  const { userId } = useAuth();

  const {
    mutate,
    isPending,
    data: tour,
  } = useMutation({
    mutationFn: async (destination) => {
      const existingTour = await getExistingTour(destination);

      if (existingTour) return existingTour;

      const currentTokens = await fetchUserTokensById(userId);

      if (currentTokens < 400) {
        toast.error("Token balance too low...");
        return;
      }

      const newTour = await generateTourResponse(destination);

      if (!newTour) {
        toast.error("No matching city found, please retry...");
        return null;
      }

      newTour.tour.city =
        newTour.tour.city.charAt(0).toUpperCase() +
        newTour.tour.city.toLowerCase().slice(1);
      newTour.tour.country =
        newTour.tour.country.charAt(0).toUpperCase() +
        newTour.tour.country.toLowerCase().slice(1);

      const response = await createNewTour(newTour.tour);
      queryClient.invalidateQueries({ queryKey: ["tours"] });
      const newTokens = await subtractTokens(userId, newTour.tokens);
      toast.success(`${newTokens} tokens remaining...`);
      return newTour.tour;
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const destination = Object.fromEntries(formData.entries());
    mutate(destination);
  };

  if (isPending) {
    return <span className="loading loading-lg"></span>;
  }

  return (
    <>
      <h1 className="text-4xl mb-8 font-bold">New Tour</h1>
      <form onSubmit={handleSubmit} className="max-w-2xl">
        <h2 className="mb-6">Select your dream destination</h2>
        <div className="join w-full">
          <input
            type="text"
            className="input input-bordered join-item w-full"
            placeholder="city"
            name="city"
            required
          />
          <input
            type="text"
            className="input input-bordered join-item w-full"
            placeholder="country"
            name="country"
            required
          />
          <button
            className="btn btn-primary join-item"
            type="submit"
            disabled={isPending}
          >
            {isPending ? "please wait..." : "generate tour"}
          </button>
        </div>
      </form>

      <div>{tour ? null : <TokenInfo />}</div>

      <div className="mt-14">
        <div className="mt-14">{tour ? <TourInfo tour={tour} /> : null}</div>
      </div>
    </>
  );
};
export default NewTour;
