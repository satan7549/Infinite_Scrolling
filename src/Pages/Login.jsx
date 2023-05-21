import React, { useContext, useState } from "react";
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

const initState = {
  username: "",
  password: "",
};

const Login = () => {
  const [loginDetails, setLoginDetails] = useState(initState);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  const handleLogin = () => {
    if (loginDetails.username === "foo" && loginDetails.password === "bar") {
      login();
      toast({
        title: "Login Sucess.",
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
      width={{
        base: "full",
        sm: "full",
        md: "container.xl",
        lg: "container.lg",
      }}
      centerContent={true}
    >
      <VStack
        width="full"
        borderRadius="lg"
        boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
        p={4}
        my={{ base: 24, sm: 24, md: 28, lg: 40 }}
      >
        <FormControl p={2}>
          <Heading
            fontWeight="bolder"
            textAlign={"center"}
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
