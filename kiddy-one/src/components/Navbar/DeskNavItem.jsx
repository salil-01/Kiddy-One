import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const DeskNavItem = ({ label, href }) => {
  return (
    <Link to={href}>
      <Box>
        <Text
          transition={"all .1s ease"}
          textDecoration="none"
          _hover={{ fontWeight: "600" }}
          fontSize={"0.8rem"}
          color={"#757575"}
          _groupHover={{ color: "yellow.400" }}
        >
          {label}
        </Text>
      </Box>
    </Link>
  );
};
export default DeskNavItem;
