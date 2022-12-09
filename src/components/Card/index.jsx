import { Box, Image } from '@chakra-ui/react';

function Card({ url, name }) {
  return (
    <Box m={6} h={40} w={32}>
      <Image alt={name} cursor="pointer" objectFit="cover" src={url} />
    </Box>
  );
}

export default Card;
