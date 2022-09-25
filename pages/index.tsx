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

  return (
    <div style={{ background: "black" }}>
      <ContentMenu />
      <br />
      <Box background="transparent" color="white" width="100%" p={4}>
        <Heading size="lg" fontWeight="bold">
          Welcome back!
        </Heading>
        <br />
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          <Box backgroundColor="gray.600" p={4} borderRadius="md">
            <Stat>
              <StatLabel>Bots on Metro Reviews</StatLabel>
              <StatNumber>{bots?.length}</StatNumber>
              <StatHelpText>total bots</StatHelpText>
            </Stat>
          </Box>
          <Box backgroundColor="gray.600" p={4} borderRadius="md">
            <Stat>
              <StatLabel>Bots waiting in dispatch</StatLabel>
              <StatNumber>{botsAwaitingDispatch?.length}</StatNumber>
              <StatHelpText>total bots</StatHelpText>
            </Stat>
          </Box>
          <Box backgroundColor="gray.600" p={4} borderRadius="md">
            <Stat>
              <StatLabel>Lists supported</StatLabel>
              <StatNumber>{lists?.length}</StatNumber>
              <StatHelpText>total bot lists</StatHelpText>
            </Stat>
          </Box>
          <Box backgroundColor="gray.600" p={4} borderRadius="md">
            <Stat>
              <StatLabel>Lists awaiting support</StatLabel>
              <StatNumber>
                {listsPending?.filter((l) => l.name !== "Test List").length}
              </StatNumber>
              <StatHelpText>total bot lists</StatHelpText>
            </Stat>
          </Box>
        </Grid>
        <br />
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <Box background="transparent" borderRadius="md">
            <Heading size="md">Tweets from our team</Heading>
            <br />
            <Box borderRadius="lg">
              <Timeline
                dataSource={{
                  sourceType: "profile",
                  screenName: "Metro_Reviews",
                }}
                options={{
                  width: "400",
                  height: "600",
                  chrome: "noheader nofooter",
                  theme: "dark",
                }}
              />
            </Box>
          </Box>
          <Box background="transparent">
            <Heading size="md">How-to's and Knowledge articles</Heading>
          </Box>
        </Grid>
      </Box>
    </div>
  );
};

export default Home;
