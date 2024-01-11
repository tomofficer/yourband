import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import SignUp from './SignUp';
import LogIn from './LogIn';
import AddMusic from './AddMusic';

const SignUpModal = ({
  modalIsOpen,
  onClose,
  modalToggle,
  loginClick,
  signUpClick,
}) => {
  return (
    <Modal isOpen={modalIsOpen} onClose={onClose} isCentered>
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
          {modalIsOpen && modalToggle === 'signup' && (
            <SignUp loginClick={loginClick} />
          )}

          {modalIsOpen && modalToggle === 'login' && (
            <LogIn signUpClick={signUpClick} />
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SignUpModal;
