import { Flex, Box } from "@chakra-ui/react";
import { Address } from "../components/payment/Address";
import CardDetail from "../components/payment/CardDetail";
import TopNavabr from "../components/Navbar/TopNavabr";

const Checkout = () => {
  return (
    <>
      <TopNavabr />
      <Box
        height={"100vh"}
        margin={"0px auto 20px"}
        padding={"10px"}
        bg={"rgb(239,238,241)"}
      >
        <Box
          height={"90%"}
          width={{ base: "95%", sm: "95%", md: "60%", lg: "40%" }}
          margin={"20px auto"}
          padding={"15px"}
          bg={"white"}
          borderRadius={"5px"}
          boxShadow={"xl"}
        >
          <Address />
        </Box>
        <CardDetail />
      </Box>
    </>
  );
};
export default Checkout;
