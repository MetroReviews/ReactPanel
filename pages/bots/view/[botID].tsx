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
    const { botID } = router.query;
    const { data: bot, error } = useSWR(`bots/${botID}`);
  
    if (error) return <div>Error!</div>;
    if (!bot) return <div>Loading...</div>;
  
    const mdDescription = converter.makeHtml(bot?.long_description);
  
    return (
      <div className="bg-white dark:bg-black">
        <Navbar />
        <br />
        <br />
        <div className="p-3">
          <br />
          <div className="flex flex-row justify-center content-start gap-4">
            <div className="flex flex-col gap-4">
            <h3 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white uppercase">
              {bot?.username}
            </h3>
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
              <Card className="w-[100%]">
              {bot?.state === 0 && ( // AWAITING DISPATCH
                <div className="flex flex-row">
                  <Spinner color="warning" aria-label="Purple spinner example" />
                  <span className="pl-3 text-black dark:text-white">
                    Awaiting to be dispatched
                  </span>
                </div>
              )}
              {bot?.state === 1 && ( // AWAITING REVIEW
                <span className="text-black dark:text-white">
                  <Progress
                    progress={50}
                    label="Currently being reviewed"
                    labelPosition="outside"
                    labelProgress={true}
                    color="blue"
                  />
                </span>
              )}
              {bot?.state === 2 && ( // APPROVED
                <span className="text-black dark:text-white">
                  <Progress
                    progress={100}
                    label="Approved by our team"
                    labelPosition="outside"
                    labelProgress={true}
                    color="green"
                    className="text-black dark:text-white"
                  />
                </span>
              )}
              {bot?.state === 3 && ( // DENIED
                <span className="text-black dark:text-white">
                  <Progress
                    progress={100}
                    label="Denied by our team"
                    labelPosition="outside"
                    labelProgress={true}
                    color="red"
                    className="text-black dark:text-white"
                  />
                </span>
              )}
            </Card>
                <Table>
                  <Table.Head>
                    <Table.HeadCell>TYPE</Table.HeadCell>
                    <Table.HeadCell>STATUS</Table.HeadCell>
                  </Table.Head>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>Prefix</Table.Cell>
                      <Table.Cell>{bot?.prefix}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Bot ID</Table.Cell>
                      <Table.Cell>{bot?.bot_id}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Owner</Table.Cell>
                      <Table.Cell>
                        <Button href={`https://discord.com/users/${bot?.owner}`}>
                          View on Discord
                        </Button>
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Library</Table.Cell>
                      <Table.Cell>{bot?.library}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>NSFW</Table.Cell>
                      <Table.Cell>{bot?.nsfw ? "Yes" : "No"}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Tags</Table.Cell>
                      <Table.Cell>
                        {bot?.tags.map((tag, index) => (
                          <Badge
                            color="gray"
                            key="index"
                            size="lg"
                            className="m-1"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Support Server</Table.Cell>
                      <Table.Cell>
                        <Button href={bot?.support}>Discord</Button>
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Donate</Table.Cell>
                      <Table.Cell>
                        <Button href={bot?.donate || "#"}>View link</Button>
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
  