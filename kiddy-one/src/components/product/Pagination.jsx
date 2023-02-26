import { Box, Button, Flex } from "@chakra-ui/react";

function createArrayOfSize(n) {
  let arr = new Array(+n).fill(0);
  return arr;
}

function Pagination({ totalPages, currentPage, handlePageChange }) {
  console.log(totalPages);
  let pages = createArrayOfSize(totalPages).map((a, i) => (
    <Button
      size={"xs"}
      borderRadius={"6px"}
      border={"1px solid #333333"}
      _hover={{
        backgroundColor: "#333333",
        color: "white",
      }}
      key={i + 1}
      isDisabled={currentPage == i + 1}
      onClick={() => handlePageChange(i + 1)}
    >
      {i + 1}{" "}
    </Button>
  ));
  console.log(pages);
  return (
    <Flex
      justifyContent={"space-between"}
      width={["70%", "70%", "70%", "40%", "40%"]}
      margin={"auto"}
      flexDirection={"row"}
    >
      {pages}
    </Flex>
  );
}
export default Pagination;
