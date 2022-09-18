import React from "react";
// chakra imports
import {
  VStack,
  ButtonGroup,
  Button,
  Flex,
  Divider,
  HStack,
  Stack,
} from "@chakra-ui/react";
import logoImage from "../../public/images/logo.webp";
import { Image } from "@chakra-ui/react";

export const Sidebar = () => {
  return (
    <>
      <VStack
        spacing="5px"
        p={4}
        position="fixed"
        height="100vh"
        width="200px"
        backgroundColor="gray.900"
        alignItems="left"
      >
        <Flex flexDirection="row" alignItems="left">
          <Image
            src="/images/logo.webp"
            alt="Metro Reviews"
            width="50px"
            height="50px"
          />
        </Flex>
        <Divider />
        <Stack direction="column" spacing={3}>
          <a href="#">
            <Button
              width="170px"
              justifyContent="flex-start"
              variant="ghost"
              colorScheme="purple"
            >
              Dashboard
            </Button>
          </a>
          <a href="#">
            <Button
              width="170px"
              justifyContent="flex-start"
              variant="ghost"
              colorScheme="purple"
            >
              Dispatch
            </Button>
          </a>
          <a href="#">
            <Button
              width="170px"
              justifyContent="flex-start"
              variant="ghost"
              colorScheme="purple"
            >
              Bots Manager
            </Button>
          </a>
          <a href="#">
            <Button
              width="170px"
              justifyContent="flex-start"
              variant="ghost"
              colorScheme="purple"
            >
              Listing Manager
            </Button>
          </a>
        </Stack>
      </VStack>
    </>
  );
};
