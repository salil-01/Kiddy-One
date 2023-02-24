import { DeleteIcon } from "@chakra-ui/icons";
import {
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
  VStack,
  Box,
  HStack,
} from "@chakra-ui/react";

export default function CartCard({
  id,
  image,
  title,
  mrp,
  price,
  gender,
  quantity,
  handlequantity,
  removeitem,
}) {
  return (
    <>
      <Flex
        borderRadius={"5px"}
        flexDirection={"column"}
        gap={5}
        padding={2}
        _hover={{
          boxShadow:
            "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
        }}
        // border={"1px solid"}
        width={"100%"}
      >
        <Flex
          flexDirection={"row"}
          bg="white"
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box
            width={"50%"}
            paddingRight={2}
            paddingBottom={2}
            boxShadow={"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"}
            borderRadius={2}
          >
            <Image boxSize={"100%"} src={image} />
          </Box>
          <Flex width={"45%"} flexDirection={"column"} textAlign={"left"}>
            <Heading as={"h5"} fontSize={"1.0rem"}>
              {title}...
            </Heading>
            <Text
              textDecorationLine={"line-through"}
              fontWeight={600}
              color={"gray.500"}
              //   textAlign={"center"}
            >
              MRP : ₹{mrp}
            </Text>
            <Text fontWeight={600} mb={2}>
              Price : ₹{price}
            </Text>
            <Text
              textAlign={"left"}
              color={useColorModeValue("gray.700", "gray.400")}
            >
              Gender : {gender}
            </Text>
            <HStack
              // width={"auto"}
              // direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              // border={"1px solid red"}
              margin={"5px auto 0px"}
            >
              <Button
                isDisabled={quantity == 1}
                onClick={() => {
                  handlequantity(-1, id);
                }}
                flex={1}
                fontSize={"lg"}
                _focus={{
                  bg: "gray.200",
                }}
              >
                -
              </Button>
              <Text>{quantity}</Text>
              <Button
                onClick={() => handlequantity(1, id)}
                flex={1}
                fontSize={"lg"}
                bg={"rgb(255,112,67)"}
                color={"white"}
                boxShadow={
                  "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                }
                _hover={{
                  bg: "",
                }}
                _focus={{
                  bg: "",
                }}
              >
                +
              </Button>
            </HStack>
          </Flex>
        </Flex>
        <Box marginBottom={"20px"}>
          <Button
            onClick={() => removeitem(id)}
            backgroundColor={"white"}
            padding={"5px"}
            width={"100px"}
            _hover={{
              bg: "rgb(255,112,67)",
              color: "white",
            }}
          >
            <Text paddingRight={"5px"} textAlign={"left"}>
              REMOVE
            </Text>
            <DeleteIcon />
          </Button>
        </Box>
      </Flex>
    </>
  );
}
