import { Box, Button, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Books({ id, title, author, image, publisher, year }) {
  return (
    <Link to={`/books/${id}`}>
      <HStack
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={4}
        m={4}
        maxW="300px"
        w="100%"
        transition="transform 0.2s"
        _hover={{ transform: "scale(1.05)" }}
      >
        <Image src={`http://localhost:8000/${image}`} alt={title} h="200px" objectFit="cover" />
        <VStack mt={3} align="start" spacing={2}>
          <Heading size="md" fontWeight="semibold">
            {title} ({year})
          </Heading>
          <Text fontSize="sm" color="gray.500">
            {author}
          </Text>
          <Text fontSize="sm">
            <span style={{ fontWeight: "bold" }}>Publisher:</span> {publisher}
          </Text>
        </VStack>
      </HStack>
    </Link>
  );
}
