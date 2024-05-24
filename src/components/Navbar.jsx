import { Box, Flex, Link, Heading } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="gray.800" color="white" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Heading size="md">Financial Times</Heading>
        <Flex alignItems="center">
          <NavLink to="/" exact>
            <Link px={2}>Home</Link>
          </NavLink>
          <NavLink to="/world">
            <Link px={2}>World</Link>
          </NavLink>
          <NavLink to="/business">
            <Link px={2}>Business</Link>
          </NavLink>
          <NavLink to="/markets">
            <Link px={2}>Markets</Link>
          </NavLink>
          <NavLink to="/opinion">
            <Link px={2}>Opinion</Link>
          </NavLink>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;