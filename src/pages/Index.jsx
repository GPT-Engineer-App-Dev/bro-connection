import React from "react";
import { Box, Heading, Text, Container, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box>
      {/* Header */}
      <Box as="header" bg="teal.500" py={4}>
        <Heading as="h1" size="xl" textAlign="center" color="white">
          TechMate
        </Heading>
      </Box>

      {/* Main Content */}
      <Container maxW="container.lg" py={8}>
        <VStack spacing={8}>
          <Heading as="h2" size="2xl" textAlign="center">
            Find your tech soulmate!
          </Heading>
          <Text fontSize="xl" textAlign="center">
            Welcome to TechMate, the ultimate dating app for tech enthusiasts. Connect with like-minded individuals who share your passion for technology and find your perfect match.
          </Text>
        </VStack>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="gray.200" py={4} textAlign="center">
        <Text>&copy; {new Date().getFullYear()} TechMate. All rights reserved.</Text>
      </Box>
    </Box>
  );
};

export default Index;
