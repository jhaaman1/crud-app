import { Box, Button, Flex, Heading, Image, Spacer, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../Redux/App/action';

const Profile = () => {
  const data = useSelector((state) => state.AppReducer.data);
  const dispatch = useDispatch();
   useEffect(() => {
    dispatch(getBooks())
   },[])
    
  return (
    <Box>
          <Image src='https://i.pravatar.cc/200' alt='' m='auto' borderRadius={90}/>
          <Text>{'@aman'}</Text>
          <Heading>{'Aman'}</Heading>
          <Text>{'a@gmail.com'}</Text>
          <Flex>
              <Text>5 followers</Text>
              <Spacer/>
              <Text>7 following</Text>
          </Flex>
          <Flex m='auto'>
              <Button colorScheme='green'>Edit Profile</Button>
              <Spacer/>
              <Button colorScheme='red'>Delete Account</Button>
          </Flex>
        </Box>
      
  )
}

export default Profile