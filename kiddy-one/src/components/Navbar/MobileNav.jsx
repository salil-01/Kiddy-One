import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Image,
  useMediaQuery,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import MobileNavItem from "./MobileNavItem";
import navSubMenuData from "./NavbarCategories";
const MobileNav = () => {
  return (
    <Box>
      <Box display="flex" ml={9} marginTop={5}>
        <Box>
          <Icon className="IC" fontSize="20px">
            {/* <BsFillCartFill /> */}
          </Icon>
        </Box>
        <Box ml={3}>
          <Icon className="IC" fontSize="20px">
            {/* <BiSearch /> */}
          </Icon>
        </Box>
        <Box ml={3}>
          <Icon className="IC" fontSize="20px">
            {/* <FaUserAlt /> */}
          </Icon>
        </Box>
      </Box>
      <Stack bg={useColorModeValue("white", "gray.800")} p={4}>
        {navSubMenuData.map((navItem, index) => (
          <MobileNavItem key={index} {...navItem} />
        ))}
      </Stack>
    </Box>
  );
};
export default MobileNav;
