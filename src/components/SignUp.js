import React, { useState } from 'react';
import { VStack, Input, Button } from '@chakra-ui/react';
import { signUp } from '../services/authService.js';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      await signUp(email, password);
      // Handle success - maybe redirect to dashboard or show success message
    } catch (error) {
      console.error(error.message);
      // Handle errors - show error messages to user
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
