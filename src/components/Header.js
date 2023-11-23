import { useState } from 'react';
import { Flex, Box, Button, Image } from '@chakra-ui/react';
import logo from '../assets/img/logo.png';
import { GoDotFill } from 'react-icons/go';
import { useAuth } from './useAuth';
import SignUpModal from './SignUpModal';

const Header = () => {
  //Testing the useAuth function
  const currentUser = useAuth();

  //State for signup modal
  const [isSignUpModalOpen, setSignUpModalOpen] = useState(false);

  //Setter functions for sign up modal
  const openSignUpModal = () => setSignUpModalOpen(true);
  const closeSignUpModal = () => setSignUpModalOpen(false);

  return (
    <>
      <Flex
        as='header'
        position='absolute'
        top={0}
        left={0}
        right={0}
        zIndex={3}
        align='center'
        justify='space-between'
        py='20px'
        px='30px'
        bg='transparent'>
        <Box maxW='150px'>
          <Image src={logo} />
        </Box>

        {/* <Flex justify='center' flexGrow={1} color='white'>
        <Link
          href='#'
          mx={2}
          textDecoration='none'
          _hover={{ textDecoration: 'none' }}>
          Learn More
        </Link>
        <Link href='#' mx={2}>
          Features
        </Link>
        <Link href='#' mx={2}>
          Pricing
        </Link>
      </Flex> */}

        <Button
          bg='#29f0cf'
          color='black'
          fontFamily='Poppins'
          borderRadius='68px'
          px='40px'
          py='25px'
          onClick={openSignUpModal}
          _hover={{ bg: '#05f2e6', transform: 'scale(0.97)' }}>
          Sign Up
        </Button>
      </Flex>
      <SignUpModal isOpen={isSignUpModalOpen} onClose={closeSignUpModal} />
    </>
  );
};

export default Header;
