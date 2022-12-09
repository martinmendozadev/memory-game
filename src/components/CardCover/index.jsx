import { Image } from '@chakra-ui/react';

import { COVER_IMAGE } from '@utils/constants';

function CardCover({ onClick }) {
  return (
    <Image
      alt="cover"
      cursor="pointer"
      objectFit="cover"
      src={COVER_IMAGE}
      onClick={onClick}
    />
  );
}

export default CardCover;
