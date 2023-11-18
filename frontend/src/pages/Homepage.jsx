import { VStack, Box, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Books from "../components/Books";
import { getAllBooks } from "../modules/fetch";

export default function Homepage() {
  const [books, setBooks] = useState([]);
  
  useEffect(() => {
    const fetchBooks = async () => {
      const books = await getAllBooks();
      setBooks(books);
    };
    fetchBooks();
  }, []);

  return (
    <VStack spacing={8} align="center" w="100vw" p={8}>
      <Heading as="h1" size="xl" mb={4}>
        Welcome to Book Website
      </Heading>
      {books?.books?.length > 0 ? (
        books.books.map((book) => (
          <Books key={`${book.id} ${book.title}`} {...book} />
        ))
      ) : (
        <Box>
          <Text>No books available at the moment. Check back later!</Text>
        </Box>
      )}
    </VStack>
  );
}
