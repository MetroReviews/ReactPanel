import React, { useEffect, useState } from "react";
// components
import useSWR from "swr";
import { Navbar } from "../components/Interface/Navbar";
import { Large, Medium, Small, Heading } from "../components/Layout/Card";
import { Card, Timeline, Button } from "flowbite-react";

import { TwitterTimelineEmbed } from "react-twitter-embed";

const Home = () => {
  const { data: lists } = useSWR("lists");
  const { data: listsPending } = useSWR("lists_pending_support");
  const { data: botsAwaitingDispatch } = useSWR("bots_waiting_dispatch");
  const { data: bots } = useSWR("bots");

  return (
    <div className="bg-white dark:bg-black">
      <Navbar />
      <br />
      <div className="p-2">
        <div className="flex flex-row">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Welcome back.
          </h2>
        </div>
        <br />
        <div className="flex md:flex-row lg:flex-row gap-2 max-[400px]:flex-col sm:flex-col">
          <Card className="w-66 max-[400px]:w-[100%]">
            <small className="text-gray-600 dark:text-gray-400">
              Approved bots on the network
            </small>
            <h2 className="text-black dark:text-white text-4xl font-bold">
              {bots?.filter((b) => b.state === 2).length}
            </h2>
          </Card>
          <Card className="w-66 max-[400px]:w-[100%]"> 
            <small className="text-gray-600 dark:text-gray-400">
              Bots currently in dispatch
            </small>
            <h2 className="text-black dark:text-white text-4xl font-bold">
              {botsAwaitingDispatch?.length}
            </h2>
          </Card>
          <Card className="w-66 max-[400px]:w-[100%]">
            <small className="text-gray-600 dark:text-gray-400">
              Lists currently supported by Metro
            </small>
            <h2 className="text-black dark:text-white text-4xl font-bold">
              {lists?.filter((l) => l.state === 1).length}
            </h2>
          </Card>
          <Card className="w-66 max-[400px]:w-[100%]">
            <small className="text-gray-600 dark:text-gray-400">
              Lists enrolled but pending support
            </small>
            <h2 className="text-black dark:text-white text-4xl font-bold">
              {listsPending?.length}
            </h2>
          </Card>
        </div>
        <br />
        <div className="flex lg:flex-row md:flex-row gap-2 sm:flex-col max-[400px]:flex-col">
          <Card className="md:w-[50%] lg:w-[50%] sm:w-[100%]">
            <h2 className="text-black dark:text-white text-xl font-bold">
              Changelog
            </h2>
            <Timeline>
              <Timeline.Item>
                <Timeline.Point />
                <Timeline.Content>
                  <Timeline.Time>October 2022</Timeline.Time>
                  <Timeline.Title>
                    Resigned UI for Metro Reviews Panel
                  </Timeline.Title>
                  <Timeline.Body>
                    We have switched the CSS framework from Chakra UI to
                    Flowbite and Tailwind CSS for more usability, and sleekness.
                  </Timeline.Body>
                  <Button color="gray">Learn More</Button>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Point />
                <Timeline.Content>
                  <Timeline.Time>18 Sep 2022</Timeline.Time>
                  <Timeline.Title>
                    Implemented statistics and the Dispatch Center
                  </Timeline.Title>
                  <Timeline.Body>
                    Added the Dispatch Center and statistics from the Metro
                    Reviews API.
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Point />
                <Timeline.Content>
                  <Timeline.Time>10 Sep 2022</Timeline.Time>
                  <Timeline.Title>
                    Introducing the new Metro Reviews panel
                  </Timeline.Title>
                  <Timeline.Body>
                    Our developer team have built a new panel based off Next.js,
                    and Chakra UI.
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
            </Timeline>
          </Card>
          <Card className="w-[50%]">
            <h2 className="text-black dark:text-white text-xl font-bold">
              Updates from our team
            </h2>
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="metro_reviews"
              theme="dark"
              options={{ height: 400 }}
              noBorders
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
