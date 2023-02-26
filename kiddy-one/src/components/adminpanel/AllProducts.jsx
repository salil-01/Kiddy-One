import {
  Box,
  CardBody,
  Grid,
  Card,
  Heading,
  Image,
  Text,
  Button,
  Flex,
  Spinner,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState, useReducer } from "react";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};
const deleteProduct = (id) => {
  return axios({
    method: "delete",
    url: `https://firstcry-mockserver.onrender.com/products/${id}`,
  });
};
const reducer = (state, action) => {
  let { type, payload } = action;
  switch (type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
      };
    case "success":
      return {
        ...state,
        data: payload,
        isLoading: false,
      };
    case "failure":
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};
const AllProducts = () => {
  const [data, dispatch] = useReducer(reducer, initialState);
  console.log(data);

  function getData() {
    dispatch({ type: "loading" });
    axios
      .get(`https://firstcry-mockserver.onrender.com/products`)
      .then((res) => {
        dispatch({ type: "success", payload: res.data });
        console.log(res.data);
      })
      .catch((error) => {
        dispatch({ type: "error" });
        // console.log(error);
      });
  }
  useEffect(() => {
    getData();
  }, []);

  const handleDelete = (id) => {
    deleteProduct(id).then(() => {
      getData();
    });
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
        {data.isLoading ? (
          <Spinner size={"xl"} marginLeft={"35vw"} marginTop={"20vh"} />
        ) : (
          data?.data?.map((el) => (
            <Card
              key={el.id}
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
                      w="80px"
                    >
                      Delete
                    </Button>
                  </Box>
                </Flex>
              </CardBody>
            </Card>
          ))
        )}
      </Grid>
    </Box>
  );
};

export default AllProducts;
