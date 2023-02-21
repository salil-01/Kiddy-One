import {
  Box,
  Flex,
  IconButton,
  Collapse,
  useColorModeValue,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import TopNavBar from "./TopNavabr";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [mds] = useMediaQuery("(min-width: 1194px)");
  return (
    <Box>
      <TopNavBar />
      <Flex
        bg={useColorModeValue("rgb(254,221,0)", "rgb(254,221,0)")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        borderBottom={0}
        w="100%"
        align={"center"}
      >
        <Flex flex={{ base: 1, md: "auto" }} display={mds ? "none" : "flex"}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>

        <Flex display={mds ? "flex" : "none"} w={"100%"}>
          <DesktopNav />
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};
export default Navbar;
