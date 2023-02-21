import {
  Box,
  Grid,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Text,
  Button,
  ButtonGroup,
  Divider,
  HStack,
  Flex,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { brand, premium } from "./homedata";

function MidBody() {
  return (
    <>
      <Box>
        <Heading
          textAlign={"center"}
          margin={"60px 0px 20px 0px"}
          fontSize={"1.7rem"}
        >
          PREMIUM BOUTIQUES
        </Heading>
        <SimpleGrid
          columns={[2, null, 3]}
          width={"80%"}
          margin={"auto"}
          gap={10}
          padding={"5px"}
        >
          {premium.map((data, index) => {
            return (
              <Box
                key={index + 1}
                borderRadius={"6px"}
                padding={"10px"}
                boxShadow={"base"}
                _hover={{ boxShadow: "dark-lg" }}
              >
                <Box margin={"0px 0px 7px"}>
                  <Link to="/product">
                    <Image
                      borderTopRadius={"6px"}
                      src={data.image}
                      alt={data.name}
                      boxSize={"100%"}
                    />
                  </Link>
                </Box>
                <Divider
                  orientation="horizontal"
                  color="gray"
                  border={"1px solid teal"}
                />
                <Box>
                  <Heading
                    as={"h2"}
                    fontWeight={"400"}
                    fontSize={"1.0rem"}
                    textAlign={"left"}
                    margin={"20px 0px 5px 15px"}
                  >
                    {data.name}
                  </Heading>
                  <Text
                    color={"gray.500"}
                    fontSize={"0.9rem"}
                    fontWeight={"400"}
                    textAlign={"left"}
                    margin={"0px 0px 20px 15px"}
                  >
                    {data.subname}
                  </Text>
                  <Box margin={"5px 0px 15px"}>
                    <Button
                      colorScheme="orange"
                      variant="outline"
                      _hover={{ backgroundColor: "orange", color: "white" }}
                    >
                      Shop Now
                    </Button>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </SimpleGrid>
      </Box>
      <Box width={"99%"} margin={"30px auto"}>
        <Image
          src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/1920_446_desktop_spring_2023_01_new.jpg"
          boxSize={"100%"}
        />
      </Box>
      <Flex flexDirection={"column"} width={"99%"} margin={"10px auto 20px"}>
        <Image
          src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_060223_02_new_new.jpg"
          boxSize={"100%"}
          alt="error"
        />
        <Image
          src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_060223_03_new_new.jpg"
          boxSize={"100%"}
          alt="error"
        />
      </Flex>
      <Flex flexDirection={"column"} width={"80%"} margin={"0px auto"}>
        <Box width={"100%"}>
          <Image
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/1920_236_desktop_spring_2023_05.jpg"
            boxSize={"100%"}
          />
        </Box>
        <Flex flexDirection={"row"} width={"100%"}>
          <Box>
            <Image
              src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_060223_06.jpg"
              boxSize={"100%"}
            />
          </Box>
          <Box>
            <Image
              src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_060223_07.jpg"
              boxSize={"100%"}
            />
          </Box>
          <Box>
            <Image
              src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_060223_08.jpg"
              boxSize={"100%"}
            />
          </Box>
          <Box>
            <Image
              src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_060223_09.jpg"
              boxSize={"100%"}
            />
          </Box>
          <Box>
            <Image
              src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_060223_10.jpg"
              boxSize={"100%"}
            />
          </Box>
        </Flex>
      </Flex>
      <Box width={"99%"} margin={"20px auto"}>
        <Heading></Heading>
        <Box>
          <Image
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/spring_desktop_essentials_100223_01.jpg"
            boxSize={"100%"}
          />
        </Box>
      </Box>
      <Flex width={"99%"} margin={"0px auto"}>
        <Box>
          <Image
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate//spring_desktop_100223_58.jpg"
            boxSize={"100%"}
          />
        </Box>
        <Box>
          <Image
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate//spring_desktop_100223_59.jpg"
            boxSize={"100%"}
          />
        </Box>
      </Flex>
      <Box marginBottom={"80px"}>
        <Heading
          textAlign={"center"}
          margin={"60px 0px 20px 0px"}
          fontSize={"1.7rem"}
        >
          SHOP BY BRANDS
        </Heading>
        <SimpleGrid
          columns={[3, null, 5]}
          width={"80%"}
          margin={"auto"}
          gap={10}
          padding={"5px"}
        >
          {brand.map((data, index) => {
            return (
              <Box
                key={index + 1}
                borderRadius={"6px"}
                padding={"10px"}
                boxShadow={"base"}
                _hover={{ boxShadow: "dark-lg" }}
              >
                <Divider
                  orientation="horizontal"
                  color="gray.300"
                  border={"1px solid gray.100"}
                />
                <Box margin={"0px 0px 7px"}>
                  <Link to="/product">
                    <Image
                      borderTopRadius={"6px"}
                      src={data.image}
                      alt={data.name}
                      boxSize={"100%"}
                    />
                  </Link>
                </Box>
                <Divider
                  orientation="horizontal"
                  color="gray"
                  border={"1px solid teal"}
                />
              </Box>
            );
          })}
        </SimpleGrid>
      </Box>
    </>
  );
}
export default MidBody;
