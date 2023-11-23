import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import SignUp from './SignUp'; // Import your SignUp component

const SignUpModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay sx={{ backdropFilter: 'blur(10px)' }} />
      <ModalContent
        maxW='900px'
        w='500px'
        h='auto'
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
          <SignUp />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SignUpModal;
