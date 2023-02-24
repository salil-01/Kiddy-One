import {
  Box,
  Flex,
  Image,
  Input,
  HStack,
  Text,
  Center,
  Spacer,
  Icon,
  Divider,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Button,
  VStack,
  IconButton,
  Collapse,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { useContext } from "react";
// import { Link } from "react-router-dom";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

import { BsSearch, BsCart2 } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { AuthContext } from "../../context/AuthContext";
const cartData = JSON.parse(localStorage.getItem("cartdata")) || [];
console.log("cart", cartData);
function TopNavBar() {
  //   let searchRef = useRef();
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
                <Link href="/">
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
        <Divider orientation="horizontal" border={"1px solid gray"} />
      </Box>
    </>
  );
}
export default TopNavBar;

const DesktopNav = () => {
  const { isAuth, logout } = useContext(AuthContext);
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
              href="#"
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
              href={"#"}
              textDecoration="none"
              _hover={{ textDecoration: "underline" }}
              color={"black"}
            >
              <Text>Parenting</Text>
            </Link>
            <Divider orientation="vertical" border={"1px solid black"} />
            <Link
              href="#"
              textDecoration="none"
              _hover={{ textDecoration: "underline" }}
              color={"black"}
            >
              <Text>More</Text>
            </Link>
            <Divider orientation="vertical" border={"1px solid black"} />
            <Link
              href="#"
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
                    height={"100px"}
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
                      <Link href="/login" fontSize={"1rem"}>
                        Login
                      </Link>
                    )}
                    <Link href="/signup" fontSize={"1rem"}>
                      Register
                    </Link>
                  </Stack>
                </PopoverContent>
              </Popover>
            </Link>
            <Divider orientation="vertical" border={"1px solid black"} />

            <Link
              href="#"
              textDecoration="none"
              _hover={{ textDecoration: "underline" }}
              color={"black"}
            >
              <Text>Track Order</Text>
            </Link>
            <Divider orientation="vertical" border={"1px solid black"} />
            <Link
              href="#"
              textDecoration="none"
              _hover={{ textDecoration: "underline" }}
              color={"black"}
            >
              <Text>Support</Text>
            </Link>
            <Divider orientation="vertical" border={"1px solid black"} />
            <Link
              href="#"
              textDecoration="none"
              _hover={{ textDecoration: "underline" }}
              color={"black"}
            >
              <Text>Stores</Text>
            </Link>
            <Divider orientation="vertical" border={"1px solid black"} />
            <Link
              href="/cart"
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
                  {cartData.length === null ? "0" : cartData.length}
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

const MobileTopNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={1}
        as={Link}
        href={href ?? "#"}
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
              <Link key={child.label} py={2} href={child.href}>
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
      },
      {
        label: "Mumbai",
      },
      {
        label: "Chennai",
      },
    ],
  },
  {
    label: "Login/Register",
    children: [
      {
        label: "Login",
        href: "/login",
      },
      {
        label: "Register",
        href: "/signup",
      },
    ],
  },
  {
    label: "Track Order",
    href: "#",
  },
  {
    label: "Support",
    href: "#",
  },
  {
    label: "Stores",
    href: "#",
  },
  {
    label: "Cart",
    href: "/cart",
  },
];
