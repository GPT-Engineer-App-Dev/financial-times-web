import { Container, Box, Text, VStack, Heading, SimpleGrid } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Box mb={8}>
        <Heading as="h1" size="xl" mb={4}>Top Stories</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
          <Box bg="gray.100" p={4} borderRadius="md">
            <Heading as="h2" size="md">Story 1</Heading>
            <Text>Summary of the top story...</Text>
          </Box>
          <Box bg="gray.100" p={4} borderRadius="md">
            <Heading as="h2" size="md">Story 2</Heading>
            <Text>Summary of the top story...</Text>
          </Box>
          <Box bg="gray.100" p={4} borderRadius="md">
            <Heading as="h2" size="md">Story 3</Heading>
            <Text>Summary of the top story...</Text>
          </Box>
        </SimpleGrid>
      </Box>
      <Box mb={8}>
        <Heading as="h1" size="xl" mb={4}>Latest News</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
          <Box bg="gray.100" p={4} borderRadius="md">
            <Heading as="h2" size="md">News 1</Heading>
            <Text>Summary of the latest news...</Text>
          </Box>
          <Box bg="gray.100" p={4} borderRadius="md">
            <Heading as="h2" size="md">News 2</Heading>
            <Text>Summary of the latest news...</Text>
          </Box>
          <Box bg="gray.100" p={4} borderRadius="md">
            <Heading as="h2" size="md">News 3</Heading>
            <Text>Summary of the latest news...</Text>
          </Box>
        </SimpleGrid>
      </Box>
      <Box>
        <Heading as="h1" size="xl" mb={4}>Featured Articles</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
          <Box bg="gray.100" p={4} borderRadius="md">
            <Heading as="h2" size="md">Article 1</Heading>
            <Text>Summary of the featured article...</Text>
          </Box>
          <Box bg="gray.100" p={4} borderRadius="md">
            <Heading as="h2" size="md">Article 2</Heading>
            <Text>Summary of the featured article...</Text>
          </Box>
          <Box bg="gray.100" p={4} borderRadius="md">
            <Heading as="h2" size="md">Article 3</Heading>
            <Text>Summary of the featured article...</Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default Index;