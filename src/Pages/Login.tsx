import React, { useContext, useState, ChangeEvent, KeyboardEvent } from "react";
import {
  Button,
  Container,
  FormControl,
  Input,
  VStack,
  Heading,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { AuthContextType, LoginDetails } from "../constains";

// Initial state for login details
const initState: LoginDetails = {
  username: "",
  password: "",
};

// Login component responsible for handling user login
const Login: React.FC = () => {
  const [loginDetails, setLoginDetails] = useState<LoginDetails>(initState);
  const { login } = useContext<AuthContextType>(
    AuthContext as React.Context<AuthContextType>
  );
  const navigate = useNavigate();
  const toast = useToast();

  // Handles input change event
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };

  // Handles key press event (Enter key) for submitting the login form
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  // Handles login attempt
  const handleLogin = () => {
    if (loginDetails.username === "foo" && loginDetails.password === "bar") {
      login();
      toast({
        title: "Login Success.",
        description: "You have been successfully logged in.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      navigate("/home");
    } else {
      toast({
        title: "Login Failed.",
        description: "Invalid username or password.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const { username, password } = loginDetails;

  return (
    <Container
      width="100%"
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <VStack
        width="full"
        maxWidth="400px"
        borderRadius="lg"
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        p={4}
      >
        <FormControl p={2}>
          <Heading
            fontWeight="bolder"
            textAlign="center"
            fontSize="20px"
            mb="20px"
          >
            SIGN FORM
          </Heading>
          <Input
            name="username"
            value={username}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            type="text"
            placeholder="Enter Username"
            borderRadius="lg"
            focusBorderColor="teal.100"
            required
          />
        </FormControl>
        <FormControl p={2}>
          <Input
            name="password"
            value={password}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            type="password"
            placeholder="Enter password"
            borderRadius="lg"
            focusBorderColor="teal.100"
            required
          />
        </FormControl>

        <FormControl>
          <Button
            loadingText="Submitting"
            width="full"
            p={4}
            borderRadius="lg"
            colorScheme="teal"
            _hover={{
              bg: "teal.300",
              color: "white",
            }}
            variant="outline"
            mt={4}
            onClick={handleLogin}
          >
            SIGN IN
          </Button>
        </FormControl>
      </VStack>
    </Container>
  );
};

export default Login;
