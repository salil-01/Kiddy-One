import {
  Box,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Grid,
  Flex,
} from "@chakra-ui/react";

import DeskNavItem from "./DeskNavItem";
import navSubMenuData from "./NavbarCategories";

const DesktopNav = () => {
  return (
    <Flex
      direction={"row"}
      w={"80%"}
      margin={"auto"}
      spacing={4}
      justifyContent={"space-around"}
      marginBottom={"-20px"}
      height={"100%"}
    >
      {navSubMenuData.map((navItem) => (
        <Box
          key={navItem.label}
          p={8}
          _hover={{
            cursor:"pointer",
            bg: "white",
          }}
        >
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
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
              <PopoverContent p={4} width={"70vw"} backgroundColor={"#EEEEEE"}>
                <Grid
                  templateColumns={"repeat(5,1fr)"}
                  autoRows={"40px"}
                  textTransform={"uppercase"}
                  width={"100%"}
                  zIndex="1"
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
