import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import { registerUser } from "../modules/fetch/index";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return;
    }
    try {
      await registerUser(
        e.target.name.value,
        e.target.email.value,
        password
      );
      toast({
        title: "Registered",
        description: "You have successfully registered.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate("/");
    } catch (e) {
      const error = new Error(e);
      toast({
        title: "An error occurred.",
        description: error?.message || "An error occurred. Please try again.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
    setError(error?.message || "An error occurred");
  };

  return (
    <Box
      w="full"
      py={4}
      px={8}
      mx="auto"
      mt={8}
      maxW="md"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
    >
      <Text fontSize="2xl" fontWeight="bold" mb={4} textAlign="center">
        Register
      </Text>

      <form onSubmit={handleSubmit}>
        {error && (
          <Text color="red.500" mb={4} textAlign="center">
            {error}
          </Text>
        )}

        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            type="name"
            name="name"
            placeholder="Enter your name"
            size="lg"
          />
        </FormControl>

        <FormControl isRequired mt={4}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            placeholder="Enter your email address"
            size="lg"
          />
        </FormControl>

        <FormControl isRequired mt={4}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            placeholder="Enter a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            size="lg"
          />
        </FormControl>

        <FormControl isRequired mt={4}>
          <FormLabel>Confirm Password</FormLabel>
          <Input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            size="lg"
          />
          {password !== confirmPassword && (
            <Text fontSize="sm" color="red.500" mt={1}>
              The passwords do not match
            </Text>
          )}
        </FormControl>

        <Button mt={6} colorScheme="teal" size="lg" type="submit" width="full">
          Register
        </Button>
      </form>
    </Box>
  );
};

export default Register;
