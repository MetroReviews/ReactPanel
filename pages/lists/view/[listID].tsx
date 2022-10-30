import {
    Tabs,
    Badge,
    Button,
    Card,
    Progress,
    Spinner,
    Table,
  } from "flowbite-react";
  import { Timeline } from "react-twitter-widgets";
  import React, { useEffect, useState } from "react";
  // components
  import useSWR from "swr";
  import { useRouter } from "next/router";
  import { Navbar } from "../../../components/Interface/Navbar";
  import { Medium, Large, GridCard } from "../../../components/Layout/Card";
  
  import * as showdown from "showdown";
  import Image from "next/image";
  
  var converter = new showdown.Converter();
  
  const Home = () => {
    const router = useRouter();
    const { listID } = router.query;
    const { data: list, error } = useSWR(`lists/${listID}`);
  
    if (error) return <div>Error!</div>;
    if (!list) return <div>Loading...</div>;
  
    const mdDescription = converter.makeHtml(list?.description);
  
    return (
      <div className="bg-white dark:bg-black">
        <Navbar />
        <br />
        <br />
        <div className="p-3">
          <div className="flex flex-row justify-between content-baseline">
            <h3 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white uppercase">
              {list?.name}
            </h3>
            <Card className="w-[50%]">
              {list?.state === 0 && ( // PENDING API SUPPORT
                <div className="flex flex-row">
                  <Spinner color="warning" aria-label="Purple spinner example" />
                  <span className="pl-3 text-black dark:text-white">
                    Pending API Support
                  </span>
                </div>
              )}
              {list?.state === 1 && ( // SUPPORTED
                <span className="text-black dark:text-white">
                  <Progress
                    progress={100}
                    label="Supported"
                    labelPosition="outside"
                    labelProgress={true}
                    color="green"
                  />
                </span>
              )}
              {list?.state === 2 && ( // DEFUNCT
                <span className="text-black dark:text-white">
                  <Progress
                    progress={100}
                    label="Defunct list"
                    labelPosition="outside"
                    labelProgress={true}
                    color="red"
                    className="text-black dark:text-white"
                  />
                </span>
              )}
              {list?.state === 3 && ( // ENROLLMENT UNCONFIRMED
                <span className="text-black dark:text-white">
                  <div className="flex flex-row">
                  <Spinner color="purple" aria-label="Purple spinner example" />
                  <span className="pl-3 text-black dark:text-white">
                    Enrollment unconfirmed by our team
                  </span>
                </div>
                </span>
              )}
            </Card>
          </div>
          <br />
          <div className="flex flex-row justify-between content-start gap-4">
            <div className="flex flex-col gap-4">
              <div className="p-6 w-[60rem] h-fit bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Description
                </h5>
                <hr />
                <br />
                <center>
                <p
                  className="format dark:format-invert w-full"
                  dangerouslySetInnerHTML={{
                    __html: mdDescription,
                  }}>
              </p>
                </center>
            </div>
            </div>
              <div className="flex flex-col gap-2">
                <Table>
                  <Table.Head>
                    <Table.HeadCell>TYPE</Table.HeadCell>
                    <Table.HeadCell>STATUS</Table.HeadCell>
                  </Table.Head>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>List ID</Table.Cell>
                      <Table.Cell>{list?.id}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Website</Table.Cell>
                      <Table.Cell>
                        <Button href={list?.domain}>
                          View
                        </Button>
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;
  