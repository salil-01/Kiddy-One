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
} from "@chakra-ui/react";
// import { Link } from "react-router-dom";
import { BsSearch, BsCart2 } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
function TopNavBar() {
  //   let searchRef = useRef();

  return (
    <>
      <Flex
        height={"60px"}
        width={"85%"}
        margin={"auto"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box width={"35%"}>
          <Flex alignItems={"center"} gap={"0"}>
            <Link href="/">
              <Image src="kiddy-one-logo.png" boxSize={"60px"} width={"68px"}></Image>
            </Link>
            <Spacer />
            <Input
              type={"text"}
              height={"30px"}
              width="70%"
              placeholder="Searc for Category Brand or Product"
              _placeholder={{ opacity: 1, color: "gray.500" }}
            ></Input>
            <Icon as={BsSearch} height={"20px"} width={"10%"} />
          </Flex>
        </Box>
        <Spacer />
        <Box width={"50%"}>
          <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            height={"20px"}
            width={"100%"}
            fontSize={"0.8rem"}
          >
            <Link href="#" textDecoration="none" _hover={{"textDecoration":"underline"}} color={"black"}>
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
            <Divider orientation="vertical" border={"1px solid gray.200"} />
            <Link href={"#"} textDecoration="none" _hover={{"textDecoration":"underline"}} color={"black"}>
              <Text>Parenting</Text>
            </Link>
            <Divider orientation="vertical" border={"1px solid gray.200"} />
            <Link href="#" textDecoration="none"  _hover={{"textDecoration":"underline"}} color={"black"}>
              <Text>More</Text>
            </Link>
            <Divider orientation="vertical" border={"1px solid gray.200"} />
            <Link href="#" textDecoration="none"  _hover={{"textDecoration":"underline"}} color={"black"}>
              <Text>Login/Register</Text>
            </Link>
            <Divider orientation="vertical" border={"1px solid gray.200"} />

            <Link href="#" textDecoration="none"  _hover={{"textDecoration":"underline"}} color={"black"}>
              <Text>Track Order</Text>
            </Link>
            <Divider orientation="vertical" border={"1px solid gray.200"} />
            <Link href="#" textDecoration="none"  _hover={{"textDecoration":"underline"}} color={"black"}>
              <Text>Support</Text>
            </Link>
            <Divider orientation="vertical" border={"1px solid gray.200"} />
            <Link href="#" textDecoration="none" _hover={{"textDecoration":"underline"}} color={"black"}>
              <Text>Stores</Text>
            </Link>
            <Divider orientation="vertical"  />
            <Link href="#" textDecoration="none" _hover={{"textDecoration":"underline"}} color={"black"}>
              <Flex
                width={"100%"}
                gap={2}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Text>Cart</Text>
                <Icon as={BsCart2} boxSize={"25px"} />
              </Flex>
            </Link>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}
export default TopNavBar;
