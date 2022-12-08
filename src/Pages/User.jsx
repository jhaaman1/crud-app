import { Box, Button, Flex, Heading, Image, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Profile from '../Components/Profile'
import Logout from './Logout'

const User = () => {

   
  return ( 
    <Box  style={{border: '2px solid red', width: "1500px", height: "1500px", margin: "auto"}}>
        <Box bg='#5B84B1FF' className='Navbar' borderRadius={5} width='100%' h='90px' pt={4}>
            <Flex w='97%' m='auto'>
                <Image w='50px' src='https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f426.svg' alt='' />
                <Spacer />
                
                <Button colorScheme='twitter' size='sm' mr={4}><Link to='/signin'>SignIn</Link></Button>
                <Button colorScheme='twitter' size='sm'><Link to='/signup'>SignUp</Link></Button>
            </Flex>
        </Box>
        <Box>

        <Box border='2px solid red' w='400px' h='400px' m='auto'>
            <Profile />


        </Box>
        </Box>
    </Box>
 
  )
}

export default User