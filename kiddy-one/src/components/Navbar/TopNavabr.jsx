import {
  Box,
  Flex,
  Image,
  Input,
  Text,
  Spacer,
  Icon,
  Divider,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Button,
  IconButton,
  Collapse,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

import { BsSearch, BsCart2 } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { AuthContext } from "../../context/AuthContext";
import Signup from "../../pages/SignUp";
const cartData = JSON.parse(localStorage.getItem("cartdata")) || [];
console.log("cart", cartData);
function TopNavBar() {
  //   let searcto = useRef();
  const { isAuth, logout } = useContext(AuthContext);
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      <Box>
        <Flex
          // flex={{ base: 1, md: "auto" }}
          // ml={{ base: -2 }}
          // border={"1px solid"}
          width={"98%"}
          //  gap={15}
          margin={"auto"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box display={{ base: "flex", md: "none" }}>
            <IconButton
              border={"1px solid orange"}
              width={"10%"}
              // marginLeft={"-12"}
              // border={"1px solid"}

              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Box>
          <Flex
            //  border={"1px solid"}
            width={"90%"}
            justifyContent={"space-around"}
            margin={"auto"}
            //  border={"1px solid"}
          >
            <Box
              width={{ base: "70%", md: "40%" }}
              // border={"1px solid"}
            >
              <Flex alignItems={"center"} gap={{ base: "6", md: "1" }}>
                <Link to="/">
                  <Image
                    src="kiddy-one-logo.png"
                    boxSize={"100%"}
                    width={"68px"}
                  ></Image>
                </Link>
                <Spacer />
                <Input
                  type={"text"}
                  height={"30px"}
                  width="70%"
                  placeholder="Search for Category, Brand or Product"
                  _placeholder={{ opacity: 1, color: "gray.500" }}
                ></Input>
                <Icon as={BsSearch} height={"20px"} width={"10%"} />
              </Flex>
            </Box>
            <Box
              width={"50%"}
              // border="1px solid"
              display={{ base: "none", md: "block" }}
            >
              <DesktopNav />
            </Box>
          </Flex>
        </Flex>
        <Collapse in={isOpen} animateOpacity>
          <MobileTopNav />
        </Collapse>
        <Divider width={"99%"} margin={"auto"} orientation="horizontal" border={"1px solid gray"} />
      </Box>
    </>
  );
}
export default TopNavBar;

const DesktopNav = () => {
  const { isAuth, logout, cartCount } = useContext(AuthContext);
  console.log(isAuth);
  return (
    <>
      <Flex
        height={"60px"}
        width={"100%"}
        margin={"auto"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Spacer />
        <Box width={"100%"}>
          <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            height={"20px"}
            width={"100%"}
            fontSize={"0.8rem"}
          >
            <Link
              to="/"
              textDecoration="none"
              _hover={{ textDecoration: "underline" }}
              color={"black"}
            >
              <Flex
                width={"100%"}
                gap={1}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Text>Select Location</Text>
                <Icon as={GoLocation} boxSize={"20px"} />
              </Flex>
            </Link>
            <Divider orientation="vertical" border={"1px solid black"} />
            <Link
              to="/"
              textDecoration="none"
              _hover={{ textDecoration: "underline" }}
              color={"black"}
            >
              <Text>Parenting</Text>
            </Link>
            <Divider orientation="vertical" border={"1px solid black"} />
            <Link
              to="/"
              textDecoration="none"
              _hover={{ textDecoration: "underline" }}
              color={"black"}
            >
              <Text>More</Text>
            </Link>
            <Divider orientation="vertical" border={"1px solid black"} />
            <Link
              to="#"
              textDecoration="none"
              _hover={{ textDecoration: "underline" }}
              color={"black"}
            >
              {" "}
              <Popover trigger={"hover"} placement={"bottom-start"}>
                <PopoverTrigger>
                  {isAuth ? (
                    <Text fontWeight={"bold"}>Salil</Text>
                  ) : (
                    <Text>Login/Register</Text>
                  )}
                </PopoverTrigger>
                <PopoverContent>
                  <Stack
                    height={"130px"}
                    spacing={2}
                    width={"100%"}
                    padding={"20px"}
                  >
                    {isAuth ? (
                      <Button
                        color={"rgb(255,112,67)"}
                        width={"50%"}
                        margin={"auto"}
                        padding="5px"
                        onClick={logout}
                        _hover={{
                          bg: "rgb(255,112,67)",
                          color: "white",
                        }}
                      >
                        Logout
                      </Button>
                    ) : (
                      <Link to="/login">
                        <Text
                          fontSize={"1.0rem"}
                          _hover={{ textDecoration: "underline" }}
                          fontWeight={"500"}
                        >
                          Login
                        </Text>
                      </Link>
                    )}
                    <Box>
                      <Signup />
                    </Box>
                    <Link to="/admin" fontSize={"1rem"}>
                      <Text
                        fontSize={"1.0rem"}
                        _hover={{ textDecoration: "underline" }}
                        fontWeight={"500"}
                      >
                        Admin Panel
                      </Text>
                    </Link>
                  </Stack>
                </PopoverContent>
              </Popover>
            </Link>
            <Divider orientation="vertical" border={"1px solid black"} />

            <Link
              to="#"
              textDecoration="none"
              _hover={{ textDecoration: "underline" }}
              color={"black"}
            >
              <Text>Track Order</Text>
            </Link>
            <Divider orientation="vertical" border={"1px solid black"} />
            <Link
              to="#"
              textDecoration="none"
              _hover={{ textDecoration: "underline" }}
              color={"black"}
            >
              <Text>Support</Text>
            </Link>
            <Divider orientation="vertical" border={"1px solid black"} />
            <Link
              to="#"
              textDecoration="none"
              _hover={{ textDecoration: "underline" }}
              color={"black"}
            >
              <Text>Stores</Text>
            </Link>
            <Divider orientation="vertical" border={"1px solid black"} />
            <Link
              to="/cart"
              textDecoration="none"
              _hover={{ textDecoration: "underline" }}
              color={"black"}
            >
              <Flex
                width={"100%"}
                gap={2}
                alignItems={"center"}
                justifyContent={"space-between"}
                // border={"1px solid"}
              >
                <Text>Cart</Text>

                <Icon as={BsCart2} boxSize={"25px"} />
                <Text
                  as={"span"}
                  margin={"-28px 0px 0px -20px"}
                  backgroundColor={"orange"}
                  color={"black"}
                  borderRadius={"10px"}
                  fontSize={"1.1rem"}
                  width={"30px"}
                >
                  {cartCount}
                </Text>
              </Flex>
            </Link>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

const MobileTopNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileTopNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileTopNavItem = ({ label, children }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={1}
        // as={Link}
        // to={to ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} to={child.to}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Select Location",
    children: [
      {
        label: "Delhi",
        to: "#",
      },
      {
        label: "Mumbai",
        to: "#",
      },
      {
        label: "Chennai",
        to: "#",
      },
    ],
  },
  {
    label: "Login/Register",
    children: [
      {
        label: "Login",
        to: "/login",
      },
      {
        label: "Register",
        to: "/signup",
      },
      {
        label: "Admin Panel",
        to: "/admin",
      },
    ],
  },
  {
    label: "Track Order",
    to: "#",
  },
  {
    label: "Support",
    to: "#",
  },
  {
    label: "Stores",
    to: "#",
  },
  {
    label: "Cart",
    to: "/cart",
  },
];
