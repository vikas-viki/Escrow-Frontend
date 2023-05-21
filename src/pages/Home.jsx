import React from "react";
import { useStateContext } from "../context/index.jsx";
import { DisplayCampaigns } from "../components";

const Home = () => {
  const { listingDetailsWithData, isLoading } = useStateContext();

  return (
    <>
      <DisplayCampaigns
        title="All Listings"
        isLoading={isLoading}
        listings={listingDetailsWithData}
      />
    </>
  );
};

export default Home;
