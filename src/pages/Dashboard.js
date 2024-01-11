import { useState } from 'react';
import { Box, Text, VStack, HStack, Button } from '@chakra-ui/react';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { FaPlus } from 'react-icons/fa';
import AddMusicModal from '../components/AddMusicModal';

const Dashboard = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalToggle, setModalToggle] = useState('');

  const navigate = useNavigate();
  const auth = getAuth();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate('/'); // Redirect to home or login page
      })
      .catch((error) => {
        // An error happened.
        console.error('Logout Error:', error);
      });
  };

  const addMusicClick = () => {
    setModalToggle('addMusic');
    setModalIsOpen(true);
    console.log('toggle:', modalToggle, 'modal open?:', modalIsOpen);
  };

  return (
    <>
      <Box
        display='flex'
        bg='black'
        h='100vh'
        justifyContent='center'
        alignItems='center'>
        <section id='header'>
          <Header />
          {/* <Button bg='none' color='white' onClick={handleLogout}>
            Logout
          </Button> */}
        </section>

        <section id='buttons'>
          <Box display='flex' color='#29f0cf'>
            <HStack spacing={20}>
              <VStack spacing={4}>
                <Box
                  border='2px #29f0cf solid'
                  p='20px'
                  borderRadius='50px'
                  onClick={addMusicClick}
                  _hover={{ transform: 'scale(0.97)' }}>
                  <FaPlus color='#29f0cf' size='100px' />
                </Box>
                <Text fontSize='20px' fontFamily='poppins'>
                  Add Music
                </Text>
              </VStack>
              <VStack spacing={4}>
                <Box
                  border='2px #29f0cf solid'
                  p='20px'
                  borderRadius='50px'
                  _hover={{ transform: 'scale(0.97)' }}>
                  <FaPlus color='#29f0cf' size='100px' />
                </Box>
                <Text fontSize='20px' fontFamily='poppins'>
                  Add Merch
                </Text>
              </VStack>
            </HStack>
          </Box>
        </section>
      </Box>
      <AddMusicModal
        isOpen={modalIsOpen}
        toggle={modalToggle}
        setModalIsOpen={setModalIsOpen}
        setModalToggle={setModalToggle}
      />
    </>
  );
};

export default Dashboard;
