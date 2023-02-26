import React, { useState } from "react";
import {
  useDisclosure,
  FormLabel,
  Box,
  FormControl,
  Input,
  Tooltip,
  Select,
  useToast,
  Heading,
} from "@chakra-ui/react";
// import { useState } from "react";
import { useRef } from "react";

export const Address = () => {
  const initialData = {
    name: "",
    mobile: "",
    alternumber: "",
    pincode: "",
    city: "",
    state: "",
    flat: "",
    area: "",
    landmark: "",
    loaction: "",
  };

  const [formData, setFormData] = useState(initialData);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const [cardNumber, setCardnumber] = useState("");
  const [cardname, setCardname] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvv, setCvv] = useState("");
  const [upi, setUpi] = useState("");
  const [cash, setCash] = useState("");
  const [register, setRegister] = useState("");
  const [password, setPassword] = useState("");
  const [register2, setRegister2] = useState("");
  const [password2, setPassword2] = useState("");

  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    toast({
      title: "Card Details saved Successfully",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };
  return (
    <>
      <Heading as={"h3"} fontSize={"1.6rem"}>
        Address
      </Heading>
      <FormControl>
        <Box>
          <Tooltip
            hasArrow
            label="enter valid name"
            placement="top"
            bg="#ff7043"
          >
            <Input
              mt={1}
              type={"text"}
              isRequired
              name="name"
              placeholder="Full Name*"
              variant="flushed"
              // value={formData.name}
              // onChange={(e)=>setFormData({type:"name" ,payload:e.target.value})}
              onChange={handleChange}
            />
          </Tooltip>
        </Box>

        <Box display="flex" mt={5}>
          <Box>
            <FormLabel>Mobile</FormLabel>
            <Tooltip
              hasArrow
              label="enter valid mobile no."
              placement="top"
              bg="#ff7043"
            >
              <Input
                type="number"
                name="mobile"
                placeholder="+91-Mobile Number"
                variant="flushed"
                maxLength="10"
                onChange={handleChange}
                //   value={formData.mobile}
                //   onChange={(e)=>setFormData({type:"mobile" ,payload:e.target.value})}
              />
            </Tooltip>
          </Box>
          <Box pl={4}>
            <FormLabel>Alternate No. (Optional)</FormLabel>
            <Tooltip
              hasArrow
              label="enter valid no."
              placement="top"
              bg="#ff7043"
            >
              <Input
                type="number"
                name="alternumber"
                maxLength="10"
                placeholder="+91- Alternate No"
                variant="flushed"
                onChange={handleChange}
                //   value={formData.alternumber}
                //   onChange={(e)=>setFormData({type:"alternumber" ,payload:e.target.value})}
              />
            </Tooltip>
          </Box>
        </Box>

        <Box display="flex" mt={2}>
          <Box>
            <Tooltip
              hasArrow
              label="enter valid pincode"
              placement="top"
              bg="#ff7043"
            >
              <Input
                mt={5}
                type="number"
                name="pincode"
                maxLength="6"
                placeholder="Pincode*"
                variant="flushed"
                //   value={formData.pincode}
                //   onChange={(e)=>setFormData({type:"pincode" ,payload:e.target.value})}
                onChange={handleChange}
              />
            </Tooltip>
          </Box>
          <Box pl={4}>
            <Tooltip
              hasArrow
              label="enter valid name"
              placement="top"
              bg="#ff7043"
            >
              <Input
                mt={5}
                type={"text"}
                name="city"
                placeholder="City*"
                variant="flushed"
                onChange={handleChange}
                //   value={formData.city}
                //   onChange={(e)=>setFormData({type:"city" ,payload:e.target.value})}
              />
            </Tooltip>
          </Box>
        </Box>
        <Box>
          <Tooltip
            hasArrow
            label="enter valid state"
            placement="top"
            bg="#ff7043"
          >
            <Input
              mt={5}
              type={"text"}
              name="state"
              placeholder="State*"
              variant="flushed"
              onChange={handleChange}
              // value={formData.state}
              // onChange={(e)=>setFormData({type:"state" ,payload:e.target.value})}
            />
          </Tooltip>
        </Box>
        <Box>
          <Tooltip
            hasArrow
            label="enter valid details"
            placement="top"
            bg="#ff7043"
          >
            <Input
              mt={5}
              type={"text"}
              name="flat"
              placeholder="Flat/House No./Building*"
              variant="flushed"
              onChange={handleChange}
              // value={formData.flat}
              // onChange={(e)=>setFormData({type:"flat" ,payload:e.target.value})}
            />
          </Tooltip>
        </Box>
        <Box>
          <Tooltip
            hasArrow
            label="enter valid detail"
            placement="top"
            bg="#ff7043"
          >
            <Input
              mt={5}
              type={"text"}
              name="area"
              placeholder="Area/Locality*"
              variant="flushed"
              onChange={handleChange}
              // value={formData.area}
              // onChange={(e)=>setFormData({type:"area" ,payload:e.target.value})}
            />
          </Tooltip>
        </Box>
        <Box>
          <Tooltip
            hasArrow
            label="enter valid landmark"
            placement="top"
            bg="#ff7043"
          >
            <Input
              mt={5}
              type={"text"}
              name="landmark"
              placeholder="Landmark(optional)"
              variant="flushed"
              onChange={handleChange}
              // value={formData.landmark}
              // onChange={(e)=>setFormData({type:"landmark" , payload:e.target.value})}
            />
          </Tooltip>
        </Box>

        <Box>
          <Select
            mt={5}
            name="location"
            onChange={handleChange}
            placeholder="Select Location"
          >
            <option value="home">Home</option>
            <option value="office">Office</option>
          </Select>
        </Box>

        {formData.name.length === 0 ||
        formData.alternumber.length === 0 ||
        formData.mobile.length === 0 ||
        formData.pincode.length === 0 ||
        formData.city.length === 0 ||
        formData.state.length === 0 ||
        formData.flat.length === 0 ||
        formData.area.length === 0 ||
        formData.landmark.length === 0 ||
        formData.location.length === 0 ? (
          <Box fontSize={"0.7rem"} color={"red"} textAlign={"left"}>
            *Fill All the Crediantial correctly
          </Box>
        ) : null}
      </FormControl>
    </>
  );
};
