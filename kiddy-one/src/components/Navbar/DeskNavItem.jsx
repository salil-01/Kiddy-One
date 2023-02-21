import { Box, Text, Link } from "@chakra-ui/react";

const DeskNavItem = ({ label, href }) => {
  return (
    <Link
      href={href}
      textDecoration="none"
      _hover={{ fontWeight: "600" }}
      fontSize={"0.8rem"}
      color={"#757575"}
    >
      <Box>
        <Text transition={"all .3s ease"} _groupHover={{ color: "yellow.400" }}>
          {label}
        </Text>
      </Box>
    </Link>
  );
};
export default DeskNavItem;
