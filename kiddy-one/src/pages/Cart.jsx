import { Box, SimpleGrid, Text,Center,Button, Flex, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { Grid } from "swiper";
import CartCard from "../components/cart/CartCard";
import TopNavBar from "../components/Navbar/TopNavabr";
const Cart = () => {
  const [price, setprice] = useState(0);
  const handlequantity = (value, id) => {
    const updatedData = cartdata.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + value } : item
    );
    localStorage.setItem("cartdata", JSON.stringify(updatedData));
    window.location.reload();
  };
  let cartdata = JSON.parse(localStorage.getItem("cartdata")) || [];
  useEffect(() => {
    let tempprice =
      cartdata.length > 0 &&
      cartdata.reduce((acc, item) => {
        return (acc += item.quantity * Number(item.price));
      }, 0);
    setprice(tempprice);
  }, [cartdata, handlequantity]);
  console.log("price", price);
  const removeitem = (id) => {
    const updatedData = cartdata.filter((el) => {
      return el.id !== id;
    });
    localStorage.setItem("cartdata", JSON.stringify(updatedData));
    window.location.reload();
  };
  return (
    <>
    <TopNavBar/>
    <Box backgroundColor="rgb(250,250,250)">
      {cartdata && cartdata.length == 0 ? (
        <Flex flexDirection={"column"} marginTop={"150px"} height={"100vh"} >
          
            <Heading as="h4">Uh hooo.</Heading>
            <Heading as={"h4"} marginBottom={"20px"}>Your Cart is Empty...</Heading>
            <Link to={"/product"}>
            <Button border={"1px solid orange"} _hover={{bg:"orange",color:"white"}}>ADD SOME PRODUCT</Button>
            </Link>
          
        </Flex>
      ) : (
        <>
        <Box margin={"30px auto"} >
          
          <Heading as={"h3"} fontSize={"1.5rem"} marginBottom={"10px"}>Cart Subtotal : ₹{price}</Heading>
          <Link to={"/payment"}>
          <Button border={"1px solid orange"} _hover={{bg:"orange",color:"white"}}>Proceed To CheckOut ➡️ </Button>
          </Link>
          
        </Box>
        <SimpleGrid
          backgroundColor={"rgb(239,238,241)"}
          margin="auto"
          width={{
            base: "90%",
            sm: "90%",
            md: "90%",
            lg: "95%",
            xl: "95%",
          }}
          gridTemplateColumns={{
            base: "repeat(2,1fr)",
            sm: "repeat(2,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(3,1fr)",
            xl: "repeat(3,1fr)",
          }}
          gap={"20px"}
          // border={"1px solid"}
        >
          {cartdata &&
            cartdata.length > 0 &&
            cartdata.map((el) => (
              <CartCard
                removeitem={removeitem}
                handlequantity={handlequantity}
                key={el.id}
                {...el}
              />
            ))}
        </SimpleGrid>
        </>
      )}
    </Box>
    </>
  );
};
export default Cart;
