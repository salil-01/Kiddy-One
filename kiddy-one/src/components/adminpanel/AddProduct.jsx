import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Heading,
  Spacer,
  useToast,
} from "@chakra-ui/react";
import { useReducer, useRef } from "react";
const initialState = {
  image: "",
  title: "",
  description: "",
  mrp: "",
  price: "",
  color: "",
  brand: " ",
  gender: "",
  category: "",
};
const reducerFn = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "title": {
      return {
        ...state,
        title: payload,
      };
    }
    case "brand": {
      return {
        ...state,
        brand: payload,
      };
    }
    case "image": {
      return {
        ...state,
        image: payload,
      };
    }
    case "mrp": {
      return {
        ...state,
        mrp: payload,
      };
    }
    case "price": {
      return {
        ...state,
        price: payload,
      };
    }
    case "color": {
      return {
        ...state,
        color: payload,
      };
    }
    case "description": {
      return {
        ...state,
        description: payload,
      };
    }
    case "gender": {
      return {
        ...state,
        gender: payload,
      };
    }
    case "category": {
      return {
        ...state,
        category: payload,
      };
    }
    case "reset": {
      return initialState;
    }
    default:
      return state;
  }
};
const AddProduct = () => {
  const initialRef = useRef(null);
  const toast = useToast();
  const [state, dispatch] = useReducer(reducerFn, initialState);
  //   const handleChange = () => {};
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(state);
    fetch(`https://firstcry-mockserver.onrender.com/products`, {
      method: "POST",
      body: JSON.stringify(state),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((data) => {
        console.log(data);
        toast({
          position: "top",
          title: `Product Added  Successfully`,
          status: "success",
          isClosable: true,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <Box
        padding={10}
        width={"40vw"}
        margin={"auto"}
        mt="60px"
        bg="white"
        borderRadius={"5px"}
        boxShadow={"2xl"}
      >
        <Heading as={"h3"} textAlign={"center"} fontSize={"1.0rem"} mb={"40px"}>
          Please Enter Product Details to Add a New Product
        </Heading>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Product Title</FormLabel>
            <Input
              ref={initialRef}
              placeholder="Please Enter Product Title"
              name="title"
              onChange={(e) =>
                dispatch({ type: "title", payload: e.target.value })
              }
              value={state.title}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Product Brand</FormLabel>
            <Input
              placeholder="Please Enter Brand Name"
              name="brand"
              onChange={(e) =>
                dispatch({ type: "brand", payload: e.target.value })
              }
              value={state.brand}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Product Image</FormLabel>
            <Input
              placeholder="Please Enter Image URL"
              name="image"
              onChange={(e) =>
                dispatch({ type: "image", payload: e.target.value })
              }
              value={state.image}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Product M.R.P</FormLabel>
            <Input
              placeholder="Please Enter MRP"
              name="mrp"
              onChange={(e) =>
                dispatch({ type: "mrp", payload: e.target.value })
              }
              value={state.mrp}
              type="number"
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Product Price</FormLabel>
            <Input
              placeholder="Please Enter Price"
              name="price"
              onChange={(e) =>
                dispatch({ type: "price", payload: e.target.value })
              }
              value={state.price}
              type="number"
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Product Color</FormLabel>
            <Input
              placeholder="Please Enter Color"
              name="color"
              onChange={(e) =>
                dispatch({ type: "color", payload: e.target.value })
              }
              value={state.color}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Description</FormLabel>
            <Input
              placeholder="Please Enter Description"
              name="description"
              onChange={(e) =>
                dispatch({ type: "description", payload: e.target.value })
              }
              value={state.description}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Gender</FormLabel>
            <Input
              placeholder="Please Enter Gender"
              name="gender"
              onChange={(e) =>
                dispatch({ type: "gender", payload: e.target.value })
              }
              value={state.gender}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Category</FormLabel>
            <Input
              placeholder="Please Enter Category of Product"
              name="category"
              onChange={(e) =>
                dispatch({ type: "category", payload: e.target.value })
              }
              value={state.category}
            />
          </FormControl>
          <FormControl>
            <Input
              type={"submit"}
              mt={"20px"}
              border={"1px solid orange"}
              _hover={{ bg: "orange", color: "white" }}
              value={"Add Product"}
            />
          </FormControl>
        </form>
      </Box>
    </>
  );
};
export default AddProduct;
