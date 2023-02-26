import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Text,
  useColorModeValue,
  Center,
  Image,
  useToast,
  HStack,
} from "@chakra-ui/react";
import { useContext, useState, useReducer } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { AuthContext } from "../context/AuthContext";
import TopNavBar from "../components/Navbar/TopNavabr";
import Signup from "./SignUp";

const initialState = {
  email: "",
  password: "",
};
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "email": {
      return {
        ...state,
        email: payload,
      };
    }
    case "password": {
      return {
        ...state,
        password: payload,
      };
    }
    case "reset": {
      return initialState;
    }
    default:
      return state;
  }
};
export default function SignIn() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const {email,password} = state;
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  //validating user data
  function validateData(data, { email, password }) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].email == email && data[i].password == password) {
        return true;
      } else {
        return false;
      }
    }
  }

  //handling submit event
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(email,password)
    setIsLoading(true);
    fetch("https://firstcry-mockserver.onrender.com/user")
      .then((res) => res.json())
      .then((data) => {
        if (validateData(data, state)) {
          login();
          // console.log(isAuth)
          dispatch({ type: "reset" });
          toast({
            position: "top",
            title: `Login successfull`,
            status: "success",
            isClosable: true,
          });
          navigate("/");
        } else {
          toast({
            position: "top",
            title: `Wrong Credentials`,
            status: "error",
            isClosable: true,
          });
        }
      })
      .catch((error) => {
        console.log(error);
        toast({
          position: "top",
          title: `Wrong Credentials`,
          status: "error",
          isClosable: true,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const style = {
    height: "30px",
    marginBottom: "20px",
    borderColor: "rgb(255,112,67)",
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
    borderWidth: "1.5px",
    borderRadius: "0px",
  };
  return (
    <>
      <TopNavBar />
      <Flex
        // height={"80vh"}
        align={"center"}
        justify={"center"}
        bg={"rgb(239,238,241)"}

        // border={"1px solid"}
      >
        <Stack
          spacing={8}
          mx={"auto"}
          maxW={"lg"}
          py={12}
          px={6}
          boxShadow={"2xl"}
          bg={"white"}
          borderRadius={"8px"}
          marginTop={"20px"}
        >
          <Image
            cursor={"pointer"}
            src="kiddy-one-logo.png"
            width="100px"
            height="100px"
            margin="auto"
            onClick={() => navigate("/")}
          />
          <Center>
            <Text fontSize={"1.2rem"} fontWeight={"bold"}>
              Login Here
            </Text>
          </Center>

          <Box rounded={"lg"} bg={useColorModeValue("white")} p={6}>
            <Stack
              spacing={2}
              width={{ sm: "250px", md: "280px", lg: "330px" }}
            >
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  isRequired
                  value={state.email}
                  onChange={(e) =>
                    dispatch({ type: "email", payload: e.target.value })
                  }
                  focusBorderColor="white"
                  style={style}
                  type="email"
                  placeholder="Enter your email address"
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    isRequired
                    value={state.password}
                    onChange={(e) =>
                      dispatch({ type: "password", payload: e.target.value })
                    }
                    focusBorderColor="white"
                    style={style}
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      marginBottom="15px"
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                {isLoading ? (
                  <Button
                    isLoading
                    loadingText="Logging In"
                    size="lg"
                    bg={"rgb(255,112,67)"}
                    color={"white"}
                    borderRadius="5px"
                    _hover={{
                      bg: "rgb(255,112,67)",
                    }}
                  >
                    Login
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    size="lg"
                    color={"rgb(255,112,67)"}
                    borderRadius="5px"
                    _hover={{
                      bg: "rgb(255,112,67)",
                      color: "white",
                    }}
                  >
                    Login
                  </Button>
                )}
              </Stack>

              <HStack spacing={["0", "0", "-1", "-3", "-3"]} pt={"4"}>
                <Text
                  as={"span"}
                  align={"center"}
                  marginLeft={["10px", "10px", "11px", "15px", "50px"]}
                >
                  New to Kiddy-Shop?
                </Text>
                <Box>
                  {" "}
                  <Signup />
                </Box>
              </HStack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
