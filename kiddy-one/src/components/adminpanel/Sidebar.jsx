import React, { useRef } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  Box,
  Text,
  Button,
} from "@chakra-ui/react";

const Sidebar = ({ setShowPage }) => {
  return (
    <Box mt={5} pt={3} pl={2} width="100%" height="100%">
      <Text fontSize={15} as="b">
        Admin Panel
      </Text>

      <Accordion allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Button
                pr={1}
                mt={5}
                w="full"
                variant="outline"
                border={"1px solid blue"}
                color="blue"
                _hover={{ bg: "blue", color: "white" }}
                onClick={() => setShowPage("dashboard")}
              >
                DashBoard
              </Button>

              <AccordionIcon mt={5} />
            </AccordionButton>
          </h2>
        </AccordionItem>
      </Accordion>

      <Accordion allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Button
                pr={1}
                mt={5}
                w="full"
                variant="outline"
                border={"1px solid blue"}
                color="blue"
                _hover={{ bg: "blue", color: "white" }}
                onClick={() => setShowPage("showprods")}
              >
                Products Management
              </Button>

              <AccordionIcon mt={5} />
            </AccordionButton>
          </h2>
        </AccordionItem>
      </Accordion>

      <Accordion allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Button
                pr={1}
                mt={5}
                w="full"
                variant="outline"
                border={"1px solid blue"}
                color="blue"
                _hover={{ bg: "blue", color: "white" }}
                onClick={() => setShowPage("showusers")}
              >
                {" "}
                User Management
              </Button>

              <AccordionIcon mt={5} />
            </AccordionButton>
          </h2>
        </AccordionItem>
      </Accordion>
      <Accordion allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Button
                pr={1}
                mt={5}
                w="full"
                variant="outline"
                border={"1px solid blue"}
                color="blue"
                _hover={{ bg: "blue", color: "white" }}
                onClick={() => setShowPage("addproduct")}
              >
                {" "}
                Add Products
              </Button>

              <AccordionIcon mt={5} />
            </AccordionButton>
          </h2>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default Sidebar;
