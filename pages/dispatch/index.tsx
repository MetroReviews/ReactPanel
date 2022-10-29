// Chakra imports
import {
  Flex,
  Grid,
  Image,
  SimpleGrid,
  useColorModeValue,
  Spacer,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
  Heading,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { Tabs, Badge, Button } from "flowbite-react";
import { Timeline } from "react-twitter-widgets";
import React, { useEffect, useState } from "react";
// components
import { Sidebar } from "../../components/Interface/Sidebar";
import { ContentMenu } from "../../components/Interface/ContentMenu";
import useSWR from "swr";
import { Navbar } from "../../components/Interface/Navbar";
import { Medium, Large, GridCard } from "../../components/Layout/Card";

const Home = () => {
  const { data: lists } = useSWR("lists");
  const { data: listsPending } = useSWR("lists_pending_support");
  const { data: botsAwaitingDispatch } = useSWR("bots_waiting_dispatch");
  const { data: bots } = useSWR("bots");
  const { isOpen, onOpen, onClose } = useDisclosure();

  function BasicUsage() {
    return <></>;
  }

  return (
    <div style={{ background: "black" }}>
      <Navbar />
      <br />
      <div className="p-2">
        <Stack direction="row">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Dispatch Center
          </h2>
          <Spacer />
          <Button onClick={onOpen}>Tags Legend</Button>
        </Stack>
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
                  <GridCard>
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
                      <Button>
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
            {bots
                ?.filter((b) => b.state === 1)
                .map((bot, index) => (
                  <GridCard>
                    <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                      {bot?.username}
                    </h5>
                    {bot?.state === 1 && ( // PENDING DISPATCH
                      <Badge color="info" size="lg" className="w-auto">
                        Pending review
                      </Badge>
                    )}
                    <div className="h-[10rem]">
                      <span className="break-normal">{bot?.description}</span>
                    </div>
                    <br />
                    <div className="flex">
                      <Button>
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
          </Tabs.Item>
          <Tabs.Item
            title={
              "Approved" + " | " + bots?.filter((b) => b.state === 2).length
            }
          >
            Settings content
          </Tabs.Item>
          <Tabs.Item
            title={"Denied" + " | " + bots?.filter((b) => b.state === 3).length}
          >
            Contacts content
          </Tabs.Item>
        </Tabs.Group>
        {/**<Tabs variant="soft-rounded" colorScheme="purple">
          <TabList>
            <Tab>
              Awaiting dispatch &nbsp;
              <Badge colorScheme="purple.900">
                {bots?.filter((b) => b.state === 0).length}
              </Badge>
            </Tab>
            <Tab>
              Pending review &nbsp;
              <Badge colorScheme="purple.900">
                {bots?.filter((b) => b.state === 1).length}
              </Badge>
            </Tab>
            <Tab>
              Approved &nbsp;
              <Badge colorScheme="purple.900">
                {bots?.filter((b) => b.state === 2).length}
              </Badge>
            </Tab>
            <Tab>
              Denied &nbsp;
              <Badge colorScheme="purple.900">
                {bots?.filter((b) => b.state === 3).length}
              </Badge>
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Flex direction="row" flexWrap="wrap">
                {bots
                  ?.filter((b) => b.state === 0)
                  .map((bot, index) => (
                    <Box
                      background="gray.700"
                      color="white"
                      width="300px"
                      margin="5px"
                      p="10px"
                      borderRadius="md"
                    >
                      <Stack direction="row" marginBottom="5px">
                        <Heading size="md">{bot?.username}</Heading>
                        <Spacer />
                      </Stack>
                      {bot?.state === 0 && ( // PENDING DISPATCH
                        <Badge colorScheme="yellow" p={2}>
                          Bot awaiting dispatch
                        </Badge>
                      )}
                      {bot?.state === 1 && ( // CLAIMED - PENDING REVIEW
                        <>
                          <Badge colorScheme="purple" p={2}>
                            Bot pending review
                          </Badge>
                          <Badge p={2}>Claimed by {bot?.reviewer}</Badge>
                        </>
                      )}
                      {bot?.state === 2 && ( // APPROVED
                        <>
                          <Badge colorScheme="green" p={2}>
                            Approved
                          </Badge>
                        </>
                      )}
                      {bot?.state === 3 && ( // DENIED
                        <>
                          <Badge colorScheme="red" p={2}>
                            Denied
                          </Badge>
                        </>
                      )}
                      <Stack direction="column">
                        <span>{bot?.description}</span>
                      </Stack>
                    </Box>
                  ))}
              </Flex>
            </TabPanel>
            <TabPanel>
              <Flex direction="row" flexWrap="wrap">
                {bots
                  ?.filter((b) => b.state === 1)
                  .map((bot, index) => (
                    <Box
                      background="gray.700"
                      color="white"
                      width="300px"
                      margin="5px"
                      p="10px"
                      borderRadius="md"
                    >
                      <Stack direction="row" marginBottom="5px">
                        <Heading size="md">{bot?.username}</Heading>
                        <Spacer />
                      </Stack>
                      {bot?.state === 0 && ( // PENDING DISPATCH
                        <Badge colorScheme="yellow" p={2}>
                          Bot awaiting dispatch
                        </Badge>
                      )}
                      {bot?.state === 1 && ( // CLAIMED - PENDING REVIEW
                        <>
                          <Badge colorScheme="purple" p={2}>
                            Bot pending review
                          </Badge>
                          <Badge p={2}>Claimed by {bot?.reviewer}</Badge>
                        </>
                      )}
                      {bot?.state === 2 && ( // APPROVED
                        <>
                          <Badge colorScheme="green" p={2}>
                            Approved
                          </Badge>
                        </>
                      )}
                      {bot?.state === 3 && ( // DENIED
                        <>
                          <Badge colorScheme="red" p={2}>
                            Denied
                          </Badge>
                        </>
                      )}
                      <Stack direction="column">
                        <span>{bot?.description}</span>
                      </Stack>
                    </Box>
                  ))}
              </Flex>
            </TabPanel>
            <TabPanel>
              <Flex direction="row" flexWrap="wrap">
                {bots
                  ?.filter((b) => b.state === 2)
                  .map((bot, index) => (
                    <Box
                      background="gray.700"
                      color="white"
                      width="300px"
                      margin="5px"
                      p="10px"
                      borderRadius="md"
                    >
                      <Stack direction="row" marginBottom="5px">
                        <Heading size="md">{bot?.username}</Heading>
                        <Spacer />
                      </Stack>
                      {bot?.state === 0 && ( // PENDING DISPATCH
                        <Badge colorScheme="yellow" p={2}>
                          Bot awaiting dispatch
                        </Badge>
                      )}
                      {bot?.state === 1 && ( // CLAIMED - PENDING REVIEW
                        <>
                          <Badge colorScheme="purple" p={2}>
                            Bot pending review
                          </Badge>
                          <Badge p={2}>Claimed by {bot?.reviewer}</Badge>
                        </>
                      )}
                      {bot?.state === 2 && ( // APPROVED
                        <>
                          <Badge colorScheme="green" p={2}>
                            Approved
                          </Badge>
                        </>
                      )}
                      {bot?.state === 3 && ( // DENIED
                        <>
                          <Badge colorScheme="red" p={2}>
                            Denied
                          </Badge>
                        </>
                      )}
                      <Stack direction="column">
                        <span>{bot?.description}</span>
                      </Stack>
                    </Box>
                  ))}
              </Flex>
            </TabPanel>
            <TabPanel>
              <Flex direction="row" flexWrap="wrap">
                {bots
                  ?.filter((b) => b.state === 3)
                  .map((bot, index) => (
                    <Box
                      background="gray.700"
                      color="white"
                      width="300px"
                      margin="5px"
                      p="10px"
                      borderRadius="md"
                    >
                      <Stack direction="row" marginBottom="5px">
                        <Heading size="md">{bot?.username}</Heading>
                        <Spacer />
                      </Stack>
                      {bot?.state === 0 && ( // PENDING DISPATCH
                        <Badge colorScheme="yellow" p={2}>
                          Bot awaiting dispatch
                        </Badge>
                      )}
                      {bot?.state === 1 && ( // CLAIMED - PENDING REVIEW
                        <>
                          <Badge colorScheme="purple" p={2}>
                            Bot pending review
                          </Badge>
                          <Badge p={2}>Claimed by {bot?.reviewer}</Badge>
                        </>
                      )}
                      {bot?.state === 2 && ( // APPROVED
                        <>
                          <Badge colorScheme="green" p={2}>
                            Approved
                          </Badge>
                        </>
                      )}
                      {bot?.state === 3 && ( // DENIED
                        <>
                          <Badge colorScheme="red" p={2}>
                            Denied
                          </Badge>
                        </>
                      )}
                      <Stack direction="column">
                        <span>{bot?.description}</span>
                      </Stack>
                    </Box>
                  ))}
              </Flex>
            </TabPanel>
          </TabPanels>
                  </Tabs>**/}
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Bot Card - Tags Legend</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box
              background="gray.800"
              color="white"
              width="auto"
              p={3}
              m={3}
              borderRadius="md"
            >
              <Badge colorScheme="yellow" p={2}>
                Bot awaiting dispatch
              </Badge>
              <p>
                <br />
                This means the bot has been added to Metro via a supported bot
                list. It is waiting to be claimed and reviewed by Metro Reviews
                staff.
              </p>
            </Box>
            <Box
              background="gray.800"
              color="white"
              width="auto"
              p={3}
              m={3}
              borderRadius="md"
            >
              <Badge colorScheme="purple" p={2}>
                Bot pending review
              </Badge>
              <Badge p={2}>Claimed by (reviewer)</Badge>
              <p>
                <br />
                This means the bot has been claimed by a Metro Reviews staff
                member. It is now being reviewed. The bot cannot be claimed by
                another staff member unless the bot is unclaimed.
              </p>
            </Box>
            <Box
              background="gray.800"
              color="white"
              width="auto"
              p={3}
              m={3}
              borderRadius="md"
            >
              <Badge colorScheme="green" p={2}>
                Approved
              </Badge>
              <p>
                <br />
                This means the bot has been approved and is now available on the
                all bot lists that are supported by Metro Reviews. If the
                submitter has not opted into Cross-Add, the bot will only appear
                on the bot list that the submitter used to submit the bot.
              </p>
            </Box>
            <Box
              background="gray.800"
              color="white"
              width="auto"
              p={3}
              m={3}
              borderRadius="md"
            >
              <Badge colorScheme="red" p={2}>
                Denied
              </Badge>
              <p>
                <br />
                This means the bot has been denied by Metro Reviews staff. The
                submitter will need to resubmit the bot to the bot list again.
              </p>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Home;
