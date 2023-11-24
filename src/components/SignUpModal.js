import { useState, useEffect } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import SignUp from './SignUp';
import LogIn from './LogIn';

const SignUpModal = ({ isOpen, onClose }) => {
  //State for switching between SignUp and LogIn
  const [showLogIn, setShowLogIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(true);

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setShowSignUp(true);
      setShowLogIn(false);
    }
  }, [isOpen]);

  // Custom onClose handler
  const handleClose = () => {
    onClose(); // Call the original onClose function passed as prop
    // Additional actions if needed
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} isCentered>
      <ModalOverlay sx={{ backdropFilter: 'blur(10px)' }} />
      <ModalContent
        maxW='900px'
        w='500px'
        h='620px'
        pt='50px'
        pb='40px'
        bg='black'
        // bg={{ backdropFilter: 'blur(5px)' }}
        border='3px solid #29f0cf'
        borderRadius='40px'>
        <ModalCloseButton
          m='10px'
          color='#29f0cf'
          _hover={{ transform: 'scale(1.2)' }}
        />
        <ModalBody>
          {showLogIn && (
            <LogIn setShowSignUp={setShowSignUp} setShowLogIn={setShowLogIn} />
          )}
          {showSignUp && (
            <SignUp setShowLogIn={setShowLogIn} setShowSignUp={setShowSignUp} />
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SignUpModal;
