import { Box, Text, VStack, HStack } from '@chakra-ui/react';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { FaPlus } from 'react-icons/fa';

const Dashboard = () => {
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

  return (
    <>
      <Box
        display='flex'
        bg='black'
        h='100vh'
        justifyContent='center'
        alignItems='center'>
        <section>
          <Header />
          {/* <Button bg='none' color='white' onClick={handleLogout}>
            Logout
          </Button> */}
        </section>

        <section>
          <Box display='flex' color='#29f0cf'>
            <HStack spacing={20}>
              <VStack spacing={4}>
                <Box
                  border='2px #29f0cf solid'
                  p='20px'
                  borderRadius='50px'
                  _hover={{ transform: 'scale(0.97)' }}>
                  <FaPlus color='#29f0cf' size='100px' />
                </Box>
                <Text fontSize='20px' fontFamily='poppins'>
                  Add An Album
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
    </>
  );
};

export default Dashboard;
