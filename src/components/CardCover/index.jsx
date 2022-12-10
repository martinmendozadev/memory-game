import { Image } from '@chakra-ui/react';

import { COVER_IMAGE } from '@utils/constants';

function CardCover({ flipped }) {
  return (
    <Image
      alt="cover"
      objectFit="cover"
      position="absolute"
      src={COVER_IMAGE}
      transform={!flipped && 'rotateY(180deg)'}
    />
  );
}

export default CardCover;
