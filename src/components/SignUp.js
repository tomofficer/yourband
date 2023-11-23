import React, { useState } from 'react';
import { VStack, Input, Button, useToast, Box, Image } from '@chakra-ui/react';
import { signUp } from '../services/authService.js';
import logo from '../assets/img/logo.png';

const SignUp = () => {
  //State variables
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  //Define useToast variable (ChakraUI built-in error handling)
  const toast = useToast();

  //Signup handler with error handling (Chakra Toast)
  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      toast({
        title: 'Error.',
        description: 'Passwords do not match.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      return; // Stop the sign-up process if passwords don't match
    }

    try {
      await signUp(email, password);
      toast({
        title: 'Account created.',
        description: 'You have successfully signed up!',
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
    <>
      <VStack>
        <Box w='250px' mb='30px'>
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
        <Input
          bg='none'
          border='2px solid #29f0cf'
          borderRadius='68px'
          w='300px'
          h='50px'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
          mt='20px'
          color='white'
          _focus={{ borderColor: '#05f2e6' }}
          _hover={{
            borderColor: '#05f2e6',
          }}
        />
        <Input
          bg='none'
          border='2px solid #29f0cf'
          borderRadius='68px'
          w='300px'
          h='50px'
          type='password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder='Confirm Password'
          mt='20px'
          color='white'
          _focus={{ borderColor: '#05f2e6' }}
          _hover={{
            borderColor: '#05f2e6',
          }}
        />

        <Button
          bg='#29f0cf'
          color='black'
          fontFamily='Poppins'
          borderRadius='68px'
          px='40px'
          py='25px'
          mt='40px'
          onClick={handleSignUp}
          _hover={{ bg: '#05f2e6', transform: 'scale(0.97)' }}>
          Sign Up
        </Button>
        <Button
          color='#29f0cf'
          bg='none'
          fontFamily='Poppins'
          px='40px'
          py='25px'
          mt='0px'
          _hover={{ bg: 'none', transform: 'scale(0.97)' }}>
          Sign In
        </Button>
      </VStack>
    </>
  );
};

export default SignUp;
