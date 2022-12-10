import { Flex, Image } from '@chakra-ui/react';

import CardCover from '@components/CardCover';

function Card({ url, name, flipped }) {
  const onHandleClick = () => {};

  return (
    <Flex
      align="center"
      cursor="pointer"
      justify="center"
      h={40}
      m={6}
      onClick={onHandleClick}
      w={32}
      transform={flipped && 'rotateY(180deg)'}>
      <Image
        alt={name}
        objectFit="cover"
        src={url}
        transform={!flipped && 'rotateY(180deg)'}
        position="absolute"
      />
      <CardCover flipped={flipped} />
    </Flex>
  );
}

export default Card;
