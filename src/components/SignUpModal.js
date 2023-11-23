import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useToast,
} from '@chakra-ui/react';
import SignUp from './SignUp'; // Import your SignUp component

const SignUpModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent py='50px'>
        <ModalCloseButton />
        <ModalBody>
          <SignUp />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SignUpModal;
