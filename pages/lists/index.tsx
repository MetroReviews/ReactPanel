import { Tabs, Badge, Button } from "flowbite-react";
import { Timeline } from "react-twitter-widgets";
import React, { useEffect, useState } from "react";
// components
import useSWR from "swr";
import { Navbar } from "../../components/Interface/Navbar";
import { Medium, Large, GridCard } from "../../components/Layout/Card";

const Home = () => {
  const { data: lists, error } = useSWR("lists");

  if (error) return <div>Error!</div>;
  if (!lists) return <div>Loading...</div>;

  return (
    <div className="bg-white dark:bg-black">
      <Navbar />
      <br />
      <div className="p-2">
        <div className="flex flex-row">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Lists Manager
          </h2>
        </div>
        <br />
        <div className="flex flex-row flex-wrap">
              {lists
                ?.map((list, index) => (
                  <GridCard key={index}>
                    <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                      {list?.name}
                    </h5>
                    {list?.state === 0 && ( // PENDING API SUPPORT
                      <Badge color="warning" size="lg" className="w-auto">
                        Pending API Support
                      </Badge>
                    )}
                    {list?.state === 1 && ( // SUPPORTED
                      <Badge color="success" size="lg" className="w-auto">
                       Supported
                      </Badge>
                    )}
                    {list?.state === 2 && ( // DEFUNCT
                      <Badge color="failure" size="lg" className="w-auto">
                       Defunct
                      </Badge>
                    )}
                    {list?.state === 3 && ( // UNCONFIRMED ENROLLMENT
                      <Badge color="purple" size="lg" className="w-auto">
                       Enrollment unconfirmed
                      </Badge>
                    )}
                    <div className="h-[10rem]">
                      <span className="break-normal">
                              <span>
                                {list?.description.substring(0, 250) + "..."}
                                </span>
                              </span>
                    </div>
                    <br />
                    <div className="flex">
                      <Button href={"/lists/view/"+list?.id}>
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
      </div>
    </div>
  );
};

export default Home;
