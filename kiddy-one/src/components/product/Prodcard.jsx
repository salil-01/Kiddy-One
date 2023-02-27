import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Box, Image, Text, Button, GridItem, useToast } from "@chakra-ui/react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

const ProdCard = ({ product }) => {
  const [flag, setflag] = useState(false);
  const { cartCount, setCartCount,setcartData } = useContext(AuthContext);
  const toast = useToast();
  const handleClick = (id) => {
    setflag(true);
    axios
      .get(`https://firstcry-mockserver.onrender.com/products/${id}`)
      .then((res) => {
        res = res.data;
        res = { ...res, quantity: 1 };
        // console.log(res);
        let LSdata = JSON.parse(localStorage.getItem("cartdata")) || [];
        console.log("cartlen", LSdata);
        setcartData([...LSdata, res])
        localStorage.setItem("cartdata", JSON.stringify([...LSdata, res]));
        setCartCount(cartCount + 1);
        toast({
          position: "top",
          title: `Item added Successfully`,
          status: "success",
          isClosable: true,
        });
      });
  };
  return (
    <Box
      padding={"20px"}
      boxShadow={"md"}
      rounded="lg"
      _hover={{
        boxShadow: "2xl",
        borderColor: "#433333",
      }}
      bg="white"
    >
      <Box marginBottom={"15px"}>
        <Link to={`/singleproduct/${product.id}`}>
          <Image boxSize={"100%"} src={product.image} alt="" />
        </Link>
      </Box>
      <Text fontWeight="bold" textAlign={"left"} marginBottom={"5px"}>
        {product.title.substring(0, 35)}...
      </Text>
      <Text fontWeight="light" textAlign={"left"} marginBottom={"5px"}>
        {product.category.split("_")}
      </Text>
      <Text textAlign={"left"} marginBottom={"15px"} fontWeight={"500"}>
        ₹{product.price}{" "}
        <Text as={"span"} fontWeight={"light"} margin={"0px 10px 0px 10px"}>
          {" "}
          <Text as={"s"}>₹{product.mrp}</Text>
        </Text>{" "}
        <Text as={"span"} fontWeight={"400"} color={"rgb(255,112,67)"}>
          (23% off)
        </Text>{" "}
      </Text>

      {flag == false && (
        <Button
          w="50%"
          padding={"5px"}
          color={"#333333"}
          _hover={{ bg: "#433333", color: "white" }}
          borderRadius="5"
          onClick={() => handleClick(product.id)}
        >
          Add To Cart
        </Button>
      )}
      {flag == true && (
        <Link to="/cart">
          <Button
            w="50%"
            color={"#333333"}
            _hover={{ bg: "#433333", color: "white" }}
            padding={"5px"}
            borderRadius="5"
          >
            Go To Cart-
          </Button>
        </Link>
      )}
    </Box>
  );
};

export default ProdCard;
