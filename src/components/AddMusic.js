import {
  VStack,
  Input,
  Button,
  Box,
  Image,
  InputGroup,
  InputRightElement,
  IconButton,
  Center,
  Text,
} from '@chakra-ui/react';
import logo from '../assets/img/logo.png';

const AddMusic = () => {
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
          placeholder='Username'
          color='white'
          _focus={{ borderColor: '#05f2e6' }}
          _hover={{
            borderColor: '#05f2e6',
          }}
        />

        <InputGroup>
          <Input
            pr='2.5rem'
            placeholder='Password'
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
              size='sm'
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
          mt='118px'
          mb='0px'
          _hover={{ bg: '#05f2e6', transform: 'scale(0.97)' }}>
          Log In
        </Button>
        <Text fontSize='xs' color='gray.400'>
          Don't have an account? Create one below
        </Text>
        <Button
          color='#29f0cf'
          bg='none'
          fontFamily='Poppins'
          px='40px'
          // py='25px'
          _hover={{ bg: 'none', color: '#05f2e6', transform: 'scale(0.97)' }}>
          Sign Up
        </Button>
      </VStack>
    </Center>
  );
};

export default AddMusic;
