import React from "react";
import Menu from "./Menu";
import { Box, Container } from "@chakra-ui/react";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Box as="main" pb={8}>
        <Menu />
        <Container maxW="container.md" pt={14}>
          {children}
          <Footer />
        </Container>
      </Box>
    </div>
  );
};

export default Layout;
