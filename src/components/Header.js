import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Flex, Box, Button, Image } from '@chakra-ui/react';
import logo from '../assets/img/logo.png';
import { GoDotFill } from 'react-icons/go';
import { useAuth } from './useAuth';
import SignUpModal from './SignUpModal';

const Header = () => {
  //Testing the useAuth function
  const currentUser = useAuth();

  //Navigation variable
  const navigate = useNavigate();

  //State
  const [modalIsOpen, setModalIsOpen] = useState(false); //Open Modal
  const [modalToggle, setModalToggle] = useState(''); //Toggle content

  //Click handlers
  const closeSignUpModal = () => {
    setModalIsOpen(false);
    setModalToggle('');
  };

  const loginClick = () => {
    setModalIsOpen(true);
    setModalToggle('login');
    console.log('Toggle state: ', modalToggle);
  };

  const signUpClick = () => {
    setModalIsOpen(true);
    setModalToggle('signup');
    console.log('Toggle state: ', modalToggle);
  };

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
        <Box>
          <Button
            color='#29f0cf'
            bg='none'
            fontFamily='Poppins'
            px='20px'
            py='25px'
            onClick={loginClick}
            _hover={{ bg: 'none', color: '#05f2e6', transform: 'scale(0.97)' }}>
            Log In
          </Button>
          <Button
            bg='#29f0cf'
            color='black'
            fontFamily='Poppins'
            borderRadius='68px'
            px='40px'
            py='25px'
            onClick={signUpClick}
            _hover={{ bg: '#05f2e6', transform: 'scale(0.97)' }}>
            Sign Up
          </Button>
        </Box>
      </Flex>
      <SignUpModal
        isOpen={modalIsOpen}
        onClose={closeSignUpModal}
        toggle={modalToggle}
        loginClick={loginClick}
        signUpClick={signUpClick}
      />
    </>
  );
};

export default Header;
