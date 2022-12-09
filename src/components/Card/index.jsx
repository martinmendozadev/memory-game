import { useState } from 'react';
import { Box, Image } from '@chakra-ui/react';

import { COVER_IMAGE } from '@utils/constants';

function Card({ url, name }) {
  const [imageSRC, setImageSRC] = useState(url);

  const onHandleClick = () => {
    setImageSRC((prevImage) => (prevImage === url ? COVER_IMAGE : url));
  };

  return (
    <Box m={6} h={40} w={32}>
      {imageSRC === url ? (
        <Image
          alt={name}
          cursor="pointer"
          objectFit="cover"
          src={url}
          onClick={onHandleClick}
        />
      ) : (
        <Image
          alt={name}
          cursor="pointer"
          objectFit="cover"
          src={COVER_IMAGE}
          onClick={onHandleClick}
        />
      )}
    </Box>
  );
}

export default Card;
