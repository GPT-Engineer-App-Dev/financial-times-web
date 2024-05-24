import { Box, Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="gray.800" color="white" py={4} mt={8}>
      <Flex justifyContent="space-between" alignItems="center" px={4}>
        <Text>&copy; {new Date().getFullYear()} Financial Times</Text>
        <Flex>
          <Link px={2} href="/contact">Contact</Link>
          <Link px={2} href="/privacy-policy">Privacy Policy</Link>
          <Link px={2} href="/terms-of-service">Terms of Service</Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;