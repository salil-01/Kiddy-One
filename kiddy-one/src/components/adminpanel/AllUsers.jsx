import React from "react";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Spinner,
  Box,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const AllUsers = () => {
  const [loading, setLoading] = useState(false);
  const getOrderData = async (url) => {
    return await axios.get(url);
  };

  const deleteOrder = async (url, id) => {
    return await axios.delete(`${url}/${id}`);
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    if (data.length === 0) {
      setLoading(true);
      getOrderData("https://firstcry-mockserver.onrender.com/user")
        .then((e) => setData(e.data))
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [data.length]);
  const handleDelete = (id) => {
    setLoading(true);
    deleteOrder("https://firstcry-mockserver.onrender.com/user", id)
      .then((e) => getOrderData())
      .catch((e) => getOrderData())
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Box>
      <TableContainer
        margin="auto"
        mt={"60px"}
        //   mr={["30px"]}
      >
        <Table variant="striped" colorScheme="gray">
          <Thead>
            <Tr>
              <Th>S.No</Th>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Mobile</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {loading ? (
              <Spinner marginLeft={"30vw"} size={"xl"} />
            ) : (
              data?.map((element) => (
                <Tr>
                  <Td>{element.id}</Td>
                  <Td>{element.name}</Td>
                  <Td>{element.email}</Td>
                  <Td>{element.mobile}</Td>
                  <Td>
                    <Button
                      onClick={() => handleDelete(element.id)}
                      bgColor={"red.500"}
                      _hover={{ bgColor: "red.400" }}
                      color={"whiteAlpha.900"}
                      w="70px"
                    >
                      Delete
                    </Button>
                  </Td>
                </Tr>
              ))
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AllUsers;
