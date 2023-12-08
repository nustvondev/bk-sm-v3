import React from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";
import { PATH_ROUTE } from "../constants/global";
const LinkItem = ({ to, path, target, children, ...props }) => {
  const active = path === to;
  const inactiveColor = useColorModeValue("gray.800", "whiteAlpha.900");
  return (
    <Link
      as={NavLink}
      to={to}
      scroll={false}
      p={2}
      bg={active ? "grassTeal" : undefined}
      color={active ? "#202023" : inactiveColor}
      target={target}
      {...props}
    >
      {children}
    </Link>
  );
};
const Menu = (props) => {
  const location = useLocation();

  return (
    <div>
      <Box
        position="fixed"
        as="nav"
        w="100%"
        css={{ backdropFilter: "blur(10px)" }}
        zIndex={2}
      >
        <Container
          display="flex"
          p={2}
          maxW="container.md"
          wrap="wrap"
          align="center"
          justify="space-between"
        >
          <Flex align="center" mr={5}>
            <Heading as="h1" size="lg" letterSpacing={"tighter"}>
              Logo
            </Heading>
          </Flex>
          <Stack
            direction={{ base: "column", md: "row" }}
            display={{ base: "none", md: "flex" }}
            width={{ base: "full", md: "auto" }}
            alignItems="center"
            flexGrow={1}
            mt={{ base: 4, md: 0 }}
          >
            <LinkItem to={PATH_ROUTE.login} path={location.pathname}>
              Login
            </LinkItem>
            <LinkItem to={PATH_ROUTE.home} path={location.pathname}>
              Home
            </LinkItem>
          </Stack>
        </Container>
      </Box>
    </div>
  );
};

export default Menu;
