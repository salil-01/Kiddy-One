import {
  Box,
  CardBody,
  Grid,
  GridItem,
  Card,
  Stack,
  Heading,
  Image,
  Text,
  Button,
  Flex,
  Spinner,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const AllProducts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noofElements, setnoofElements] = useState(3);
  const slice = data.slice(0, noofElements);
  const loadMore = () => {
    setnoofElements(noofElements + 3);
  };

  const getOrderData = async (url) => {
    return await axios.get(url);
  };
  useEffect(() => {
    if (data.length === 0) {
      setLoading(true);
      getOrderData("https://firstcry-mockserver.onrender.com/products")
        .then((res) => {
          setData(res.data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [data.length]);

  const deleteOrder = async (url, id) => {
    return await axios.delete(`${url}/${id}`);
  };

  const handleDelete = (id) => {
    deleteOrder("https://firstcry-mockserver.onrender.com/products", id)
      .then((e) => getOrderData())
      .catch((e) => getOrderData());
  };

  return (
    <Box width={"100%"}>
      <Grid
        gap={5}
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
        ]}
      >
        {loading ? (
          <Spinner size={"xl"} marginLeft={"35vw"} marginTop={"20vh"} />
        ) : (
          data?.map((el) => (
            <GridItem>
              <Card
                boxShadow={"md"}
                _hover={{
                  "box-shadow": "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                }}
              >
                <CardBody>
                  <Image src={el.image} />
                  <Flex
                    flexDirection={"column"}
                    mt="6"
                    gap={"10px"}
                    textAlign={"left"}
                  >
                    <Text>Id : {el.id}</Text>
                    <Heading as={"h4"} fontWeight={"500"} fontSize={"1.1rem"}>
                      Title : {el.title.substring(0, 40)}...
                    </Heading>
                    <Text color="gray">Brand : {el.brand}</Text>
                    <Text color="gray">Category : {el.category}</Text>
                    <Text color="gray">Gender : {el.gender}</Text>
                    <Text color="gray">MRP : ₹{el.mrp}</Text>

                    <Box margin={"auto"}>
                      <Button
                        onClick={() => handleDelete(el.id)}
                        bgColor={"red.500"}
                        margin="auto"
                        alignItems="center"
                        _hover={{ bgColor: "red.400" }}
                        color={"whiteAlpha.900"}
                        w="70px"
                      >
                        Delete
                      </Button>
                    </Box>
                  </Flex>
                </CardBody>
              </Card>
            </GridItem>
          ))
        )}
      </Grid>
      <Box align="center" p={10}>
        <Button
          onClick={() => loadMore()}
          _hover={{ bg: "RGBA(0, 0, 0, 0.24)" }}
          size="lg"
          h={50}
          variant="outline"
          color="black"
          bg="RGBA(0, 0, 0, 0.04)"
        >
          Load more
        </Button>
      </Box>
    </Box>
  );
};

export default AllProducts;
