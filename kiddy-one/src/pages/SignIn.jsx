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
  } from "@chakra-ui/react";
  import { useContext, useState } from "react";
//   import { useDispatch, useSelector } from "react-redux";
  import { useNavigate, Link } from "react-router-dom";
  import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { AuthContext } from "../context/AuthContext";
//   import { login } from "../Redux/Authentication/action";
  
  export default function SignIn() {
    const isLoading = false
    const [showPassword, setShowPassword] = useState(false);
    const toast = useToast();
    const navigate = useNavigate();
    let {state,dispatch} = useContext(AuthContext);
    // console.log(state)
    // const location=useLocation();
    // const dispatch = useDispatch();
    // let isLoading = useSelector((store) => store.Authentication.isLoading);
    const submit = async (e) => {
    //   let userdata = email;
    //   dispatch(login(userdata, password, toast, setemail, setpassword));
    //   navigate("/");
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
        <Flex
          minH={"100vh"}
          align={"center"}
          justify={"center"}
          bg={useColorModeValue("white")}
        >
          <Stack
            spacing={8}
            mx={"auto"}
            maxW={"lg"}
            py={12}
            px={6}
          >
            <Image
              cursor={"pointer"}
            //   src={logo}
              width="100px"
              height="100px"
              margin="auto"
              onClick={() => navigate("/")}
            />
            <Center>
              <Text textAlign={"left"} fontStyle={"italic"} fontWeight={"bold"}>
                Login 
              </Text>
            </Center>
  
            <Box rounded={"lg"} bg={useColorModeValue("white")} p={6}>
              <Stack
                spacing={2}
                width={{ sm: "200px", md: "250px", lg: "250px" }}
              >
                <FormControl id="email" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input
                    isRequired
                    value={state.email}
                    onChange={(e) => dispatch({type:"email", payload:e.target.value})}
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
                      onChange={(e) => dispatch({type:"password", payload:e.target.value})}
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
                      loadingText="submitting"
                      size="lg"
                      bg={"rgb(255,112,67)"}
                      color={"white"}
                      borderRadius="0px"
                      _hover={{
                        bg: "rgb(255,112,67)",
                      }}
                    >
                      Login
                    </Button>
                  ) : (
                    <Button
                      onClick={submit}
                      size="lg"
                      bg={"rgb(255,112,67)"}
                      color={"white"}
                      borderRadius="0px"
                      _hover={{
                        bg: "rgb(255,112,67)",
                      }}
                    >
                      Login
                    </Button>
                  )}
                </Stack>
                <Stack pt={6}>
                  <Text align={"center"} fontSize="14px" fontStyle={"italic"}>
                    New to Kiddy-Shop?{" "}
                    <Link to="/signup" color={"blue.400"}>
                      Register Here
                    </Link>
                  </Text>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </>
    );
  }