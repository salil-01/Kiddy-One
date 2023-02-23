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
  Grid
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {  useNavigate, useSearchParams } from "react-router-dom";
import Pagination from "./Pagination";

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
    console.log(order)
    // const isAuth = true;
    const navigate = useNavigate();
  
    //search Param Hook
    const [searchParams, setSearchParams] = useSearchParams();
    // console.log(searchParams) //to check what search Param holds
    const inititalPage = searchParams.get("page");
    const [page, setPage] = useState(getCurrentPage(inititalPage) || 1);
    //fetching data
    const fetchAndUpdateData = (page,sort="price",order="") => {
      setLoading(true);
      getData(`https://firstcry-mockserver.onrender.com/products?_page=${page}&_limit=15&_sort=${sort}&_order=${order}`)
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
        console.log("useeffect",order);
      fetchAndUpdateData(page,order);
    }, [page,order]);
  
    //using useeffect for searchParam
    useEffect(() => {
      setSearchParams({ page: page }); //it takes obj as parameter
    }, [page]);

  return (
    <Box w="95%" m="auto" mt="10px">
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
      <Divider h="4" />

      <Text textAlign={"left"}>FILTERS</Text>
      <Flex justifyContent={"space-between"} margin={"10px"}>
        <Box>
          <Select>
            <option value="">Bundles</option>
            <option value="">Single Styles</option>
          </Select>
        </Box>
        <Box>
          <Select>
            <option value="">Country Of Origin</option>
            <option value="">All Countries</option>
            <option value="">India</option>
          </Select>
        </Box>
        <Box>
          <Select>
            <option value="">Size</option>
            <option value="">Small</option>
            <option value="">Medium</option>
            <option value="">Large</option>
          </Select>
        </Box>
        <Box>
          <Select name="sort" id="sortButton" onChange={(e)=>setOrder(e.target.value)}>
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

      <Box
        display={{ base: "grid", md: "grid", lg: "flex" }}
        border={"1px solid"}
      >
        <Box
          w={{ base: "100%", sm: "100%", md: "100%", lg: "20%", xl: "20%" }}
          //   border="1px"
          borderColor="gray.200"
          border={"1px solid"}
        >
          {/* <FilterComp /> */}
          <CheckboxGroup colorScheme="green"   >
            <Stack spacing={[1, 2]} direction={["column", "rocolumnw"]}>
              <Text textAlign={"left"}>Gender</Text>
              <Checkbox value="male">Boys</Checkbox>
              <Checkbox value="female">Girls</Checkbox>
            </Stack>
          </CheckboxGroup>
          <CheckboxGroup colorScheme="green">
            <Stack spacing={[1, 2]} direction={["column", "rocolumnw"]}>
              <Text textAlign={"left"}>Categories</Text>
              <Checkbox value="tshirts">T-Shirts</Checkbox>
              <Checkbox value="pajamas">Pajamas</Checkbox>
              <Checkbox value="frock">Frock</Checkbox>
              <Checkbox value="jeans">Jeans</Checkbox>
              <Checkbox value="footwear">Foot Wear</Checkbox>
            </Stack>
          </CheckboxGroup>
          <CheckboxGroup colorScheme="green">
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
          <CheckboxGroup colorScheme="green">
            <Stack spacing={[1, 2]} direction={["column", "rocolumnw"]}>
              <Text textAlign={"left"}>Colors</Text>
              <Checkbox value="red">Red</Checkbox>
              <Checkbox value="yellow">Yellow</Checkbox>
              <Checkbox value="green">Green</Checkbox>
              <Checkbox value="gray">Gray</Checkbox>
              <Checkbox value="Pink">Pink</Checkbox>
              <Checkbox value="white">White</Checkbox>
            </Stack>
          </CheckboxGroup>
        </Box>
        <Box
          w={{ base: "100%", sm: "100%", md: "100%", lg: "80%", xl: "80%" }}
          //   border="1px"
          border={"1px solid"}
          borderColor="gray.200"
        >
          {/* <ProductList /> */}
          {loading?(<Spinner/>):(
            <>
            <Grid>
            prod grid
            {data?.map((element)=>(
                <Box key={element.id}>
                    <Text>{element.brand}</Text>
                    <Text>{element.price}</Text>
                </Box>
            ))}
            </Grid>
            <Box data-testid="pagination-container">
        <Pagination 
        // totalPages={data?.totalPages}
        // currentPage={page}
        // handlePageChange= {(page)=>setPage(page)}
        />
      </Box>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ProdTop;
