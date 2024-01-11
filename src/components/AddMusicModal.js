import { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  VStack,
  Center,
  Input,
  Box,
  Image,
  Text,
  Button,
} from '@chakra-ui/react';
import logo from '../assets/img/logo.png';

const AddMusicModal = ({
  isOpen,
  onClose,
  toggle,
  setModalIsOpen,
  setModalToggle,
}) => {
  const [tracksErrorMessage, setTracksErrorMessage] = useState('');
  const [lengthError, setLengthError] = useState('');
  const [albumTitle, setAlbumTitle] = useState('');
  const [totalTracks, setTotalTracks] = useState('');

  const closeAddMusicModal = () => {
    setModalIsOpen(false);
    setModalToggle('');
    setTracksErrorMessage('');
    setLengthError('');
    setAlbumTitle('');
    setTotalTracks('');
  };

  const handleTotalTracksChange = (e) => {
    const enteredValue = e.target.value;
    const numericValue = parseInt(enteredValue, 10);

    if (!isNaN(numericValue) && numericValue >= 1 && numericValue <= 100) {
      setTotalTracks(numericValue);
      setTracksErrorMessage('');
    } else {
      setTotalTracks('');
      setTracksErrorMessage('Max 100 Tracks');
    }
  };

  const handleAlbumTitleChange = (e) => {
    const enteredTitle = e.target.value;

    // Validate if the length is within the limit
    if (enteredTitle.length <= 100) {
      setLengthError('');
      setAlbumTitle(enteredTitle);
    } else {
      setLengthError('Max 100 characters');
    }

    // Set the placeholder dynamically based on the error message and input content
    if (lengthError || enteredTitle.trim() === '') {
      e.target.placeholder = lengthError || 'Album Title';
    } else {
      e.target.placeholder = 'Album Title';
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={closeAddMusicModal} isCentered>
      <ModalOverlay sx={{ backdropFilter: 'blur(10px)' }} />
      <ModalContent
        maxW='900px'
        w='500px'
        h='620px'
        pt='50px'
        pb='40px'
        bg='black'
        border='3px solid #29f0cf'
        borderRadius='40px'>
        <ModalCloseButton
          m='10px'
          color='#29f0cf'
          _hover={{ transform: 'scale(1.2)' }}
        />
        <ModalBody>
          {isOpen && toggle === 'addMusic' && (
            <Center>
              <VStack>
                <Box w='250px' mb='40px'>
                  <Image src={logo} />
                </Box>
                <Box color='#29f0cf' fontFamily='poppins' textAlign='center'>
                  <Text fontWeight={900} marginBottom='30px'>
                    Congratulations on adding your first album!
                  </Text>
                  <VStack spacing={4} position='relative'>
                    <Text>What's the title of the album?</Text>
                    <Input
                      id='albumTitleInput'
                      bg='none'
                      border='2px solid #29f0cf'
                      borderRadius='68px'
                      w='300px'
                      h='50px'
                      placeholder='Album Title'
                      value={albumTitle}
                      onChange={handleAlbumTitleChange}
                      color='white'
                      _focus={{ borderColor: '#05f2e6' }}
                      _hover={{
                        borderColor: '#05f2e6',
                      }}
                    />
                    {lengthError && (
                      <Text
                        color='red'
                        fontSize='sm'
                        mt='95px'
                        position='absolute'>
                        {lengthError}
                      </Text>
                    )}
                    <Text color='transparent' fontSize='sm'>
                      {' '}
                    </Text>
                    <Text>How many tracks are on the album?</Text>
                    <Input
                      bg='none'
                      border='2px solid #29f0cf'
                      borderRadius='68px'
                      w='300px'
                      h='50px'
                      placeholder={'Total Tracks'}
                      value={totalTracks}
                      onChange={handleTotalTracksChange}
                      color='white'
                      _focus={{ borderColor: '#05f2e6' }}
                      _hover={{
                        borderColor: '#05f2e6',
                      }}
                    />
                    {tracksErrorMessage && (
                      <Text
                        color='red'
                        fontSize='sm'
                        mt='215px'
                        position='absolute'>
                        {tracksErrorMessage}
                      </Text>
                    )}
                  </VStack>
                </Box>

                <Button
                  bg='#29f0cf'
                  color='black'
                  fontFamily='Poppins'
                  borderRadius='68px'
                  px='40px'
                  py='25px'
                  mt='35px'
                  _hover={{ bg: '#05f2e6', transform: 'scale(0.97)' }}>
                  Let's Get Started!
                </Button>
              </VStack>
            </Center>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AddMusicModal;
