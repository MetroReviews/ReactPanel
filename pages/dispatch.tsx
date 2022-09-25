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
  Badge,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { Timeline } from "react-twitter-widgets";
import React, { useEffect, useState } from "react";
// components
import { Sidebar } from "../components/Interface/Sidebar";
import { ContentMenu } from "../components/Interface/ContentMenu";
import useSWR from "swr";

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
      <ContentMenu />
      <br />
      <Box background="transparent" color="white" width="100%" p={4}>
        <Stack direction="row">
          <Heading size="lg" fontWeight="bold">
            Dispatch Center
          </Heading>
          <Spacer />
          <Button onClick={onOpen}>Tags Legend</Button>
        </Stack>
        <br />
        <Tabs variant="soft-rounded" colorScheme="purple">
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
        </Tabs>
      </Box>

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
