import React, { useState } from 'react';
import {
  VStack,
  Input,
  Button,
  useToast,
  Box,
  Image,
  InputGroup,
  InputRightElement,
  IconButton,
  Center,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { logIn } from '../services/authService.js'; // Import the logIn function
import logo from '../assets/img/logo.png';

const LogIn = ({ setShowSignUp, setShowLogIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast();

  // Show SignUp Handler
  const showSignUpHandler = () => {
    setShowLogIn(false);
    setShowSignUp(true);
  };

  const handleLogIn = async () => {
    try {
      await logIn(email, password);
      toast({
        title: 'Logged in.',
        description: 'You have successfully logged in!',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      // Optionally redirect to dashboard or other page
    } catch (error) {
      console.error(error.message);
      toast({
        title: 'Error.',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Center>
      <VStack>
        <Box w='250px' mb='40px'>
          <Image src={logo} />
        </Box>

        <Input
          bg='none'
          border='2px solid #29f0cf'
          borderRadius='68px'
          w='300px'
          h='50px'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
          color='white'
          _focus={{ borderColor: '#05f2e6' }}
          _hover={{
            borderColor: '#05f2e6',
          }}
        />

        <InputGroup>
          <Input
            pr='2.5rem'
            type={showPassword ? 'text' : 'password'}
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            bg='none'
            border='2px solid #29f0cf'
            borderRadius='68px'
            w='300px'
            h='50px'
            mt='20px'
            color='white'
            _focus={{ borderColor: '#05f2e6' }}
            _hover={{
              borderColor: '#05f2e6',
            }}
          />
          <InputRightElement height='100%'>
            <IconButton
              icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
              size='sm'
              onClick={() => setShowPassword(!showPassword)}
              variant='unstyled'
              pr='1rem'
              top='15%'
              color='white'
            />
          </InputRightElement>
        </InputGroup>

        <Button
          bg='#29f0cf'
          color='black'
          fontFamily='Poppins'
          borderRadius='68px'
          px='40px'
          py='25px'
          mt='40px'
          onClick={handleLogIn}
          _hover={{ bg: '#05f2e6', transform: 'scale(0.97)' }}>
          Log In
        </Button>
        <Button
          color='#29f0cf'
          bg='none'
          fontFamily='Poppins'
          px='40px'
          py='25px'
          onClick={showSignUpHandler}
          _hover={{ bg: 'none', color: '#05f2e6', transform: 'scale(0.97)' }}>
          Sign Up
        </Button>
      </VStack>
    </Center>
  );
};

export default LogIn;
