import React, { useEffect } from 'react';
import { Box, Button, Flex, Heading, Image, Spacer, Text } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserData, logOut } from '../Redux/Auth/action'

const Logout = () => {
    
    const token = useSelector((store) => store.AuthReducer.token);
    const user = useSelector((store) => store.AuthReducer.user);
    const dispatch = useDispatch();
    useEffect(() => {
        if (token) dispatch(getUserData(token));
    }, []);
  return (
    <Box  style={{border: '2px solid red', width: "1500px", height: "1500px", margin: "auto"}}>
    <Box bg='#5B84B1FF' className='Navbar' borderRadius={5} width='100%' h='90px' pt={4}>
        <Flex w='97%' m='auto'>
            <Image w='50px' src='https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f426.svg' alt='' />
            <Spacer />
            
            <Box>
            <Heading size="md">
              {user?.UserName} 
            </Heading>
            <Text
              textDecoration="underline"
              _hover={{ cursor: "pointer" }}
              mt="5px"
              onClick={() => dispatch(logOut)}
            >
              Logout
            </Text>
          </Box>
        </Flex>
    </Box>
    <Box>


    </Box>
</Box>
  )
}

export default Logout