import {
  Box,
  SimpleGrid,
  Text,
  Center,
  Button,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { Grid } from "swiper";
import CartCard from "../components/cart/CartCard";
import TopNavBar from "../components/Navbar/TopNavabr";
import { AuthContext } from "../context/AuthContext";
let cartdata = JSON.parse(localStorage.getItem("cartdata")) || [];
const Cart = () => {
  const { cartCount, setCartCount,cartData,setcartData } = useContext(AuthContext);
  
  console.log("cartdata",cartData)
  const [price, setprice] = useState(0);
  const handlequantity = (value, id) => {
    const updatedData = cartData.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + value } : item
    );
    setcartData(updatedData);
    localStorage.setItem("cartdata", JSON.stringify(updatedData));
    // window.location.reload();
  };
  
  useEffect(() => {
    let tempprice =
    cartData.length > 0 &&
    cartData.reduce((acc, item) => {
        return (acc += item.quantity * Number(item.price));
      }, 0);
    setprice(tempprice);
  }, [cartdata, handlequantity,cartData]);
  // console.log("price", price);
  const removeitem = (id) => {
    const updatedData = cartData.filter((el) => {
      return el.id !== id;
    });
    setcartData(updatedData)
    localStorage.setItem("cartdata", JSON.stringify(updatedData));
    setCartCount(updatedData.length);
    // window.location.reload();
  };
  return (
    <>
      <TopNavBar />
      <Box backgroundColor="rgb(250,250,250)">
        {cartData && cartData.length == 0 ? (
          <Flex flexDirection={"column"} marginTop={"150px"} height={"100vh"}>
            <Heading as="h4">Uh hooo.</Heading>
            <Heading as={"h4"} marginBottom={"20px"}>
              Your Cart is Empty...
            </Heading>
            <Link to={"/product"}>
              <Button
                border={"1px solid orange"}
                _hover={{ bg: "orange", color: "white" }}
              >
                ADD SOME PRODUCT
              </Button>
            </Link>
          </Flex>
        ) : (
          <>
            <Box margin={"30px auto"}>
              <Heading as={"h3"} fontSize={"1.5rem"} marginBottom={"10px"}>
                Cart Subtotal : ₹{price}
              </Heading>
              <Link to={"/payment"}>
                <Button
                  border={"1px solid orange"}
                  _hover={{ bg: "orange", color: "white" }}
                >
                  Proceed To CheckOut ➡️{" "}
                </Button>
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
              {cartData &&
                cartData.length > 0 &&
                cartData.map((el) => (
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
