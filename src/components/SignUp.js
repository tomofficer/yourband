import React, { useState } from 'react';
import { VStack, Input, Button, useToast } from '@chakra-ui/react';
import { signUp } from '../services/authService.js';

const SignUp = () => {
  //State variables
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //Define useToast variable (ChakraUI built-in error handling)
  const toast = useToast();

  // const handleSignUp = async () => {
  //   try {
  //     await signUp(email, password);
  //     // Handle success - maybe redirect to dashboard or show success message
  //   } catch (error) {
  //     console.error(error.message);
  //     // Handle errors - show error messages to user
  //   }
  // };

  const handleSignUp = async () => {
    try {
      await signUp(email, password);
      // Handle success
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
      // Handle errors - show error messages to user
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
        <Input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
        />
        <Input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
          mt='20px'
        />
        <Button onClick={handleSignUp} colorScheme='blue' mt='50px'>
          Sign Up
        </Button>
      </VStack>
    </>
    // <div>
    //   <input
    //     type='email'
    //     value={email}
    //     onChange={(e) => setEmail(e.target.value)}
    //   />
    //   <input
    //     type='password'
    //     value={password}
    //     onChange={(e) => setPassword(e.target.value)}
    //   />
    //   <button onClick={handleSignUp}>Sign Down</button>
    // </div>
  );
};

export default SignUp;
