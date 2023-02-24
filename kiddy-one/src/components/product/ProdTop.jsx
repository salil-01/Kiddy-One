import { Link } from "react-router-dom";
// import axios from "axios";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
  Divider,
  Flex,
  Select,
  Text,
  CheckboxGroup,
  Checkbox,
  Stack,
  Spinner,
  SimpleGrid,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Pagination from "./Pagination";
import ProdCard from "./Prodcard";

const getData = (url) => {
  return fetch(url).then((res) => res.json());
};
//getting page number value in url with the help of search param
const getCurrentPage = (page) => {
  let pageNumber = Number(page);
  return pageNumber;
};

const ProdTop = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [order, setOrder] = useState("");
  const sort = "price";
  // console.log(order);
  // const isAuth = true;
  const navigate = useNavigate();

  //search Param Hook
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams) //to check what search Param holds
  const inititalPage = searchParams.get("page");
  const [page, setPage] = useState(getCurrentPage(inititalPage) || 1);
  //fetching data
  const fetchAndUpdateData = (page, sort = "price", order = "") => {
    setLoading(true);
    getData(
      `https://firstcry-mockserver.onrender.com/products?_page=${page}&_limit=15&_sort=${sort}&_order=${order}`
    )
      .then((res) => {
        console.log(res);
        setData(res);
        //   console.log(data)
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      })
      .finally(() => setLoading(false));
  };

  //using useeffect
  useEffect(() => {
    // console.log("useeffect", order);
    fetchAndUpdateData(page, sort, order);
  }, [page, sort, order]);

  //using useeffect for searchParam
  useEffect(() => {
    setSearchParams({ page: page }); //it takes obj as parameter
  }, [page]);

  return (
    <Box
      w="99%"
      m="auto"
      mt="10px"
      //  border={"1px solid"}
      padding={"5px"}
    >
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="#">
            Products
          </BreadcrumbLink>
        </BreadcrumbItem>
        {/* <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>Contact</BreadcrumbLink>
        </BreadcrumbItem> */}
      </Breadcrumb>
      <Divider
        orientation="horizontal"
        margin={"5px 0px 10px"}
        border={"1px solid gray"}
      />

      <Text textAlign={"left"}>FILTERS</Text>
      <Flex justifyContent={"space-between"} margin={"10px"}>
        <Box>
          <Select borderColor={"orange"}>
            <option value="">Bundles</option>
            <option value="">Single Styles</option>
          </Select>
        </Box>
        <Box>
          <Select borderColor={"orange"}>
            <option value="">Country Of Origin</option>
            <option value="">All Countries</option>
            <option value="">India</option>
          </Select>
        </Box>
        <Box>
          <Select borderColor={"orange"}>
            <option value="">Size</option>
            <option value="">Small</option>
            <option value="">Medium</option>
            <option value="">Large</option>
          </Select>
        </Box>
        <Box>
          <Select
            name="sort"
            id="sortButton"
            onChange={(e) => setOrder(e.target.value)}
            borderColor={"orange"}
          >
            <option value="">Sort by : Recommended</option>
            <option value="desc">Price : High to Low</option>
            <option value="asc">Price : Low to High</option>
            <option value="whatsNew">Whats New</option>
            <option value="popularity">Popularity</option>
            <option value="discount">Better Discount</option>
            <option value="rating">Customer Rating</option>
          </Select>
        </Box>
      </Flex>
      <Divider orientation="horizontal" border={"1px solid gray"} />
      {/* mid content wrapper */}
      <Flex
        flexDirection={{ base: "column", md: "column", lg: "row" }}
        // border={"1px solid"}
        margin={"auto"}
        justifyContent={"space-between"}
      >
        {/* filters wrapper */}
        <Flex
          w={{ base: "100%", sm: "100%", md: "100%", lg: "20%", xl: "20%" }}
          flexDirection={{
            base: "row",
            sm: "row",
            md: "row",
            lg: "column",
            xl: "column",
          }}
          justifyContent={"space-between"}
          //   border="1px"
          borderColor="gray.200"
          // border={"1px solid"}
          padding={"10px"}
          overflow={{
            base: "none",
            sm: "none",
            md: "none",
            lg: "scroll",
            xl: "scroll",
          }}
        >
          {/* <FilterComp /> */}
          <Text textAlign={"left"} fontWeight={"bold"}>
            FILTER BY
          </Text>
          <CheckboxGroup colorScheme="orange">
            <Stack spacing={[1, 2]} direction={["column", "rocolumnw"]}>
              <Text textAlign={"left"}>Gender</Text>
              <Checkbox value="male">Boys</Checkbox>
              <Checkbox value="female">Girls</Checkbox>
            </Stack>
          </CheckboxGroup>
          <CheckboxGroup colorScheme="orange">
            <Stack spacing={[1, 2]} direction={["column", "rocolumnw"]}>
              <Text textAlign={"left"}>Categories</Text>
              <Checkbox value="tshirts">T-Shirts</Checkbox>
              <Checkbox value="pajamas">Pajamas</Checkbox>
              <Checkbox value="frock">Frock</Checkbox>
              <Checkbox value="jeans">Jeans</Checkbox>
              <Checkbox value="footwear">Foot Wear</Checkbox>
            </Stack>
          </CheckboxGroup>
          <CheckboxGroup colorScheme="orange">
            <Stack spacing={[1, 2]} direction={["column", "rocolumnw"]}>
              <Text textAlign={"left"}>Brands</Text>
              <Checkbox value="angel">Angel & Rocket</Checkbox>
              <Checkbox value="anthrilo">Anthrilo</Checkbox>
              <Checkbox value="honeyhap">Honeyhap</Checkbox>
              <Checkbox value="pine">Pine Kids</Checkbox>
              <Checkbox value="kookie">Kookie Kids</Checkbox>
              <Checkbox value="rikidoos">Rikidoos</Checkbox>
            </Stack>
          </CheckboxGroup>
          <CheckboxGroup colorScheme="orange">
            <Stack spacing={[1, 2]} direction={["column", "rocolumnw"]}>
              <Text textAlign={"left"}>Colors</Text>
              <Checkbox value="red">Red</Checkbox>
              <Checkbox value="yellow">Yellow</Checkbox>
              <Checkbox value="orange">Green</Checkbox>
              <Checkbox value="gray">Gray</Checkbox>
              <Checkbox value="Pink">Pink</Checkbox>
              <Checkbox value="white">White</Checkbox>
            </Stack>
          </CheckboxGroup>
        </Flex>
        <Box
          w={{ base: "100%", sm: "100%", md: "100%", lg: "80%", xl: "80%" }}
          borderColor="gray.200"
          overflow={"scroll"}
          height={"100vh"}
          overflowX="hidden"
          // overflowY="hidden"
        >
          {/* <ProductList /> */}
          {loading ? (
            <Spinner size={"xl"} margin={"10% auto"} />
          ) : (
            <>
              <SimpleGrid
                gridTemplateColumns={{
                  base: "repeat(2,1fr)",
                  sm: "repeat(2,1fr)",
                  md: "repeat(2,1fr)",
                  lg: "repeat(3,1fr)",
                  xl: "repeat(3,1fr)",
                }}
                width="100%"
                gap={"10"}
                padding={"20px"}
                // border={"1px solid"}
              >
                {data?.map((element) => (
                  <ProdCard key={element.id} product={element} />
                ))}
              </SimpleGrid>
              <Box width={"40%"} margin={"50px auto 10px"}>
                <Pagination
                  totalPages={"4"}
                  currentPage={page}
                  handlePageChange={(page) => setPage(page)}
                />
              </Box>
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default ProdTop;
