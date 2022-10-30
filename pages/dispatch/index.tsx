import { Tabs, Badge, Button } from "flowbite-react";
import { Timeline } from "react-twitter-widgets";
import React, { useEffect, useState } from "react";
// components
import useSWR from "swr";
import { Navbar } from "../../components/Interface/Navbar";
import { Medium, Large, GridCard } from "../../components/Layout/Card";

const Home = () => {
  const { data: bots, error } = useSWR("bots");

  if (error) return <div>Error!</div>;
  if (!bots) return <div>Loading...</div>;

  return (
    <div className="bg-white dark:bg-black">
      <Navbar />
      <br />
      <div className="p-2">
        <div className="flex flex-row">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Dispatch Center
          </h2>
        </div>
        <br />
        <Tabs.Group aria-label="Tabs with icons" style="underline">
          <Tabs.Item
            active={true}
            title={
              "Awaiting dispatch" +
              " | " +
              bots?.filter((b) => b.state === 0).length
            }
          >
            <div className="flex flex-row flex-wrap">
              {bots
                ?.filter((b) => b.state === 0)
                .map((bot, index) => (
                  <GridCard key={index}>
                    <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                      {bot?.username}
                    </h5>
                    {bot?.state === 0 && ( // PENDING DISPATCH
                      <Badge color="warning" size="lg" className="w-auto">
                        Bot awaiting dispatch
                      </Badge>
                    )}
                    <div className="h-[10rem]">
                      <span className="break-normal">{bot?.description}</span>
                    </div>
                    <br />
                    <div className="flex">
                      <Button href={"/dispatch/view/"+bot?.bot_id}>
                        View
                        <svg
                          className="ml-2 -mr-1 h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Button>
                    </div>
                  </GridCard>
                ))}
            </div>
          </Tabs.Item>
          <Tabs.Item
            title={
              "Pending review" +
              " | " +
              bots?.filter((b) => b.state === 1).length
            }
          >
            <div className="flex flex-row flex-wrap">
              {bots
                ?.filter((b) => b.state === 1)
                .map((bot, index) => (
                  <GridCard key={index}>
                    <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                      {bot?.username}
                    </h5>
                    {bot?.state === 1 && ( // PENDING REVIEW
                      <Badge color="info" size="lg" className="w-auto">
                        Pending review
                      </Badge>
                    )}
                    <div className="h-[10rem]">
                      <span className="break-normal">{bot?.description}</span>
                    </div>
                    <br />
                    <div className="flex">
                      <Button href={"/dispatch/view/"+bot?.bot_id}>
                        View
                        <svg
                          className="ml-2 -mr-1 h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Button>
                    </div>
                  </GridCard>
                ))}
            </div>
          </Tabs.Item>
          <Tabs.Item
            title={
              "Approved" + " | " + bots?.filter((b) => b.state === 2).length
            }
          >
            <div className="flex flex-row flex-wrap">
              {bots
                ?.filter((b) => b.state === 2)
                .map((bot, index) => (
                  <GridCard key={index}>
                    <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                      {bot?.username}
                    </h5>
                    {bot?.state === 2 && ( // APPROVED
                      <Badge color="success" size="lg" className="w-auto">
                        Approved
                      </Badge>
                    )}
                    <div className="h-[10rem]">
                      <span className="break-normal">{bot?.description}</span>
                    </div>
                    <br />
                    <div className="flex">
                      <Button href={"/dispatch/view/"+bot?.bot_id}>
                        View
                        <svg
                          className="ml-2 -mr-1 h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Button>
                    </div>
                  </GridCard>
                ))}
            </div>
          </Tabs.Item>
          <Tabs.Item
            title={"Denied" + " | " + bots?.filter((b) => b.state === 3).length}
          >
            <div className="flex flex-row flex-wrap">
              {bots
                ?.filter((b) => b.state === 3)
                .map((bot, index) => (
                  <GridCard key={index}>
                    <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                      {bot?.username}
                    </h5>
                    {bot?.state === 3 && ( // DENIED
                      <Badge color="failure" size="lg" className="w-auto">
                        Denied
                      </Badge>
                    )}
                    <div className="h-[10rem]">
                      <span className="break-normal">{bot?.description}</span>
                    </div>
                    <br />
                    <div className="flex">
                      <Button href={"/dispatch/view/"+bot?.bot_id}>
                        View
                        <svg
                          className="ml-2 -mr-1 h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Button>
                    </div>
                  </GridCard>
                ))}
            </div>
          </Tabs.Item>
        </Tabs.Group>
      </div>
    </div>
  );
};

export default Home;
