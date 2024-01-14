import React, { useState } from 'react';
import { Box, Center, VStack, Input, Button } from '@chakra-ui/react';

const YourComponent = () => {
  const [trackSections, setTrackSections] = useState(1);

  const handleAddTrack = () => {
    setTrackSections((prevSections) => prevSections + 1);
  };

  return (
    <>
      {[...Array(trackSections)].map((_, index) => (
        <Box key={index} padding='0px'>
          <Center>
            <VStack>
              <Input placeholder='Track Title' maxWidth='200px' />
              <Button>Upload Track</Button>
            </VStack>
          </Center>
        </Box>
      ))}
      <Center>
        <Button onClick={handleAddTrack}>Add Track</Button>
      </Center>
    </>
  );
};

export default YourComponent;
