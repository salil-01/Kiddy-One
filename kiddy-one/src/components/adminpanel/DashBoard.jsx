import { Image, Box } from "@chakra-ui/react";
import React from "react";

const Dashboard = () => {
  return (
    <div>
      <Box align="right">
        <Image
          w="80%"
          margin="auto"
          box-shadow=" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
          border="1px solid black"
          borderRadius={5}
          src="admindash.png"
          mt={10}
          mr={40}
        />
      </Box>
    </div>
  );
};

export default Dashboard;
