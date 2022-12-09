import { Box, Image } from '@chakra-ui/react';

function Card({ url, name }) {
  return (
    <Box m={6} h={40} w={32}>
      <Image objectFit="cover" src={url} alt={name} />
    </Box>
  );
}

export default Card;
