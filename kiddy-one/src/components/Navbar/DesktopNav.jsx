import {
  Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Grid,
  Flex,
  Center,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import DeskNavItem from "./DeskNavItem";
import navSubMenuData from "./NavbarCategories";

const DesktopNav = () => {
  return (
    <Flex
      direction={"row"}
      w={"85%"}
      margin={"auto"}
      spacing={1}
      justifyContent={"space-between"}
      height={"100%"}
      alignItems={"center"}
    >
      {navSubMenuData.map((navItem) => (
        <Box
          key={navItem.label}
          _hover={{
            cursor: "pointer",
            bg: "white",
            borderRadius: "3px",
          }}
          width={"100%"}
        >
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                to={navItem.href ?? "/product"}
                color={"#575757"}
                textDecoration="none"
                _hover={{
                  color: "black",
                  fontWeight: "400",
                }}
                height={"60px"}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                width={"60vw"}
                backgroundColor={"white"}
                boxShadow="md"
              >
                <Grid
                  p={"15px"}
                  templateColumns={"repeat(5,1fr)"}
                  autoRows={"35px"}
                  textTransform={"uppercase"}
                  width={"100%"}
                >
                  {navItem.children.map((child, index) => (
                    <DeskNavItem key={index} {...child} />
                  ))}
                </Grid>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Flex>
  );
};
export default DesktopNav;
