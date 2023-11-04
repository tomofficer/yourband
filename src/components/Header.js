import { Flex, Box, Link, Button, Image } from '@chakra-ui/react';
import logo from '../assets/img/logo.png';

const Header = () => {
  return (
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
        borderRadius='68px'
        px='40px'
        py='25px'
        _hover={{ bg: '#23d6b8' }}>
        Subscribe
      </Button>
    </Flex>
  );
};

export default Header;
