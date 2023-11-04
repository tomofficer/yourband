import {
  Box,
  Text,
  Heading,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  HStack,
} from '@chakra-ui/react';
import bg from '../assets/img/landing1.jpg';
import Header from '../components/Header';

const Landing = () => {
  return (
    <>
      <Header />
      <Box
        height='100vh'
        width='100vw'
        bgImage={`url(${bg})`}
        bgPosition='center'
        bgRepeat='no-repeat'
        bgSize='cover'
        position='relative'
        // display='flex'
        // flexDirection='column'
        // justifyContent='center'
        // alignItems='center'
        sx={{
          '::before': {
            content: `""`,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bg: 'blackAlpha.600',
            zIndex: 0, // Overlay is below the content
          },
        }}>
        <Box position='relative' zIndex={2} top='40%' ml='150px'>
          {' '}
          <Heading color='#29f0cf' mb='10px' fontSize='60px'>
            Your Band. Your Profits.
          </Heading>
          <Text color='white' mb='20px' fontSize='30px'>
            It's your band. It's your merch. You deserve 100% of your profits.
          </Text>
          <Text color='white' mb='20px' fontSize='20px'>
            Stream your audio. Sell your merch. Keep 100% of your profits.
          </Text>
          <Box id='form' as='section'>
            <InputGroup size='lg' maxW='800px'>
              <Input
                mb='20px'
                py='30px'
                borderRadius='68px'
                border='3px solid #29f0cf'
                pr='4.5rem'
                placeholder='Enter your email'
                _placeholder={{ opacity: 1, color: 'gray.500' }}
                color='white'
              />
              <InputRightElement width='10.75rem' m='10px'>
                <Button
                  color='black'
                  bg='#29f0cf'
                  h='full'
                  mb='2px'
                  borderRadius='68px'
                  w='full'
                  onClick={() => alert('Subscribed!')}
                  _hover={{
                    transform: 'scale(0.97)',
                    color: 'black',
                  }}>
                  Join The Waitlist
                </Button>
              </InputRightElement>
            </InputGroup>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Landing;
