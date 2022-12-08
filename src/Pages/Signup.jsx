import React, { useState } from "react";
import {
  Box,
  Heading,
  FormControl,
  Input,
  Text,
  Link,
  useToast,
} from "@chakra-ui/react";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userSignup } from "../Redux/Auth/action";
// import { userSignup } from "../../redux/AuthReducer/Actions";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector((store) => store.AuthReducer.isAuth);
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password && userName) {
      dispatch(
        userSignup({
          email: email,
          password: password,
          UserName: userName
        })
      )
        .then(() => {
          toast({
            title: "Authentication successful!",
            status: "success",
            isClosable: true,
          });
        })
        .catch(() => {
          toast({
            title: "Something went wrong",
            status: "error",
            isClosable: true,
          });
        });
    }
  };

  return isAuth ? (
    <Navigate to="/user" />
  ) : (
    <div>
      <Box
        m="auto"
        w="100%"
        maxW="500px"
        textAlign="center"
        pt="50px"
        pb="50px"
      >
        <Heading fontWeight="500" color="#12284C" size="xl" mb="20px">
          CREATE ACCOUNT
        </Heading>
        <Text m="auto" w="80%" mb="30px" mt="10px" fontSize="md" color="gray">
          Complete the form below to create a account.
        </Text>
        <Box>
          <FormControl>
            <Input
              height="45px"
              id="email"
              mb="15px"
              name="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              border="1px"
              borderColor="black"
              borderRadius="0px"
              placeholder="Email*"
            />
            <Input
              height="45px"
              id="userName"
              mb="15px"
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
              name="userName"
              type="text"
              border="1px"
              borderColor="black"
              borderRadius="0px"
              placeholder="User Name*"
            />
            
            <Input
              height="45px"
              id="password"
              name="password"
              mb="15px"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              border="1px"
              borderColor="black"
              borderRadius="0px"
              placeholder="Password*"
            />
            <Input
              onClick={handleSubmit}
              height="45px"
              w="50%"
              type="submit"
              value="CREATE ACOUNT"
              backgroundColor="#12284C"
              borderRadius="0px"
              color="white"
              fontWeight="700"
              _hover={{ cursor: "pointer" }}
            />
          </FormControl>
        </Box>
        <Box mt="30px" alignItems="center">
          <Text color="gray" fontSize="sm">
            Already have a account?
            <span onClick={() => navigate("/login")}>
              <Link
                fontSize="sm"
                color="#12284C"
                fontWeight="bold"
                textDecoration="underline"
              >
                Sign In
              </Link>
            </span>
          </Text>
        </Box>
      </Box>
    </div>
  );
};

export default Signup;
