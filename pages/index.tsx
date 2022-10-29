import { Timeline } from "react-twitter-widgets";
import React, { useEffect, useState } from "react";
// components
import useSWR from "swr";
import { Navbar } from "../components/Interface/Navbar";
import { Large, Medium, Small, Heading } from "../components/Layout/Card";

const Home = () => {
  const { data: lists } = useSWR("lists");
  const { data: listsPending } = useSWR("lists_pending_support");
  const { data: botsAwaitingDispatch } = useSWR("bots_waiting_dispatch");
  const { data: bots } = useSWR("bots");

  return (
    <div style={{ background: "black" }}>
      <Navbar />
      <br />
        <Heading title="Welcome back!" description="Manage all aspects of the Metro Reviews network from one place."></Heading>
        <br />
    </div>
  );
};

export default Home;
