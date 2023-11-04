import { useState } from 'react';
import './Landing.css';
import {
  Box,
  Text,
  Heading,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  HStack,
  Center,
  Icon,
} from '@chakra-ui/react';
import bg1 from '../assets/img/landing1.jpg';
import bg2 from '../assets/img/landing3.jpg';
import bg3 from '../assets/img/landing2.jpg';
import Header from '../components/Header';
import { GoDotFill } from 'react-icons/go';

// Array of background images
const backgrounds = [bg1, bg2, bg3];

//Array of content
const content = [
  {
    header: 'Your Band. Your Profits.',
    text: "It's Your Band. It's Your Merch. You deserve 100% of your profits.",
  },
  {
    header: 'Better Than Bandcamp.',
    text: 'Better layouts. Custom domains. No price gouging. No hidden fees.',
  },
  {
    header: 'Made For Musicians, By Musicians.',
    text: 'Join the independent artist revolution. Take back your profits.',
  },
];

const Landing = () => {
  const [currentBg, setCurrentBg] = useState(0);
  const [currentContent, setCurrentContent] = useState(content[0]);
  const [contentAnimation, setContentAnimation] = useState('');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const changeBackground = (index) => {
    if (index !== currentBg && !isTransitioning) {
      setIsTransitioning(true);
      setContentAnimation('slide-out'); // Slide out the current content

      setTimeout(() => {
        setCurrentBg(index);
        setCurrentContent(content[index]); // Set the new content
        setContentAnimation('slide-in'); // Slide in the new content
      }, 250); // This should match the duration of the slideOutToRight animation

      setTimeout(() => {
        setIsTransitioning(false);
        setContentAnimation(''); // Reset the animation class
      }, 500); // This should be the total duration of both animations
    }
  };

  return (
    <>
      <Header />
      <Box position='relative' height='100vh' width='100vw' overflow='hidden'>
        {/* Background images */}
        {backgrounds.map((bg, index) => (
          <Box
            key={index}
            bgImage={`url(${bg})`}
            bgPosition='center'
            bgRepeat='no-repeat'
            bgSize='cover'
            position='absolute'
            top={0}
            left={0}
            right={0}
            bottom={0}
            opacity={index === currentBg ? 1 : 0}
            transition='opacity 1s ease-in-out'
          />
        ))}
        {/* Overlay */}
        <Box
          position='absolute'
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg='blackAlpha.700'
          zIndex={1} // Ensure overlay is above the background images but below the content
        />
        {/* Animated Content */}
        <Box
          position='absolute' // Using absolute to overlay on top of static content
          zIndex={10}
          top='40%'
          left='150px' // Using left for absolute positioning
          width='full' // Full width to allow sliding animations
          className={contentAnimation}>
          <Heading color='#29f0cf' mb='10px' fontSize='60px'>
            {currentContent.header}
          </Heading>
          <Text color='white' mb='20px' fontSize='30px'>
            {currentContent.text}
          </Text>
        </Box>
        {/* Static Content */}
        <Box
          position='relative' // Static content stays in the flow of the document
          zIndex={2}
          top='60%' // Adjust this value to place your static content appropriately
          ml='150px'
          mt>
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
        ;{/* Dots */}
        <Center
          mt='30px'
          zIndex={2}
          position='absolute'
          bottom='50px'
          width='full'>
          <HStack>
            {backgrounds.map((bg, index) => (
              <Icon
                key={index}
                as={GoDotFill}
                boxSize={'40px'}
                color={currentBg === index ? '#29f0cf' : 'gray'}
                onClick={() => changeBackground(index)}
                cursor='pointer'
              />
            ))}
          </HStack>
        </Center>
      </Box>
    </>
  );
};

export default Landing;
