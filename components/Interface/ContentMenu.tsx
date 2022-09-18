import React from "react";
import {
  Flex,
  Avatar,
  Box,
  Heading,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Spacer,
  Image,
  Text,
  Button,
} from "@chakra-ui/react";

export const ContentMenu = () => {
  return (
    <>
      <Box backgroundColor="black" color="gray.400" width="100%">
        <Flex
          p={1}
          flexBasis="space-between"
          flexDirection="row"
          alignItems="center"
          justifyItems="left"
        >
          <Breadcrumb spacing="8px">
            <BreadcrumbItem>
              <Text>Metro Reviews</Text>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <a href="https://metrobots.xyz">
                <Button variant="solid" colorScheme="gray" size="xs">
                  Main Website
                </Button>
              </a>
            </BreadcrumbItem>
          </Breadcrumb>
        </Flex>
      </Box>
      <Box backgroundColor="gray.600" color="white" width="100%">
        <Flex
          p={6}
          flexBasis="space-between"
          flexDirection="row"
          alignItems="center"
          justifyItems="left"
        >
          <Image
            src="/images/logo.webp"
            alt="Metro Reviews"
            width="35px"
            height="35px"
          />

          <Spacer />
          <Avatar name="Dillon Veit" size="sm" />
        </Flex>
      </Box>
      <Box backgroundColor="gray.700" color="gray.400" width="100%">
        <Flex
          p={2}
          flexBasis="space-between"
          flexDirection="row"
          alignItems="center"
          justifyItems="left"
        >
          <Breadcrumb spacing="8px">
            <BreadcrumbItem>
              <Text color="#c691ff">Staff Panel</Text>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/dispatch">Dispatch</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/bots">Bots</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/lists">Lists</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Flex>
      </Box>
    </>
  );
};
