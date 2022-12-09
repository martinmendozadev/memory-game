import { Box, Image } from '@chakra-ui/react';

function Card({ url, name }) {
  return (
    <Box boxSize="md">
      <Image src={url} alt={name} />
    </Box>
  );
}

export default Card;
