import { Flex, Image } from '@chakra-ui/react';

import CardCover from '@components/CardCover';

function Card({ card, flipped, name, setCardFlipped, url }) {
  const onClickCardHandle = () => {
    setCardFlipped(card);
  };

  return (
    <Flex
      align="center"
      cursor="pointer"
      justify="center"
      h={40}
      m={6}
      position="relative"
      onClick={onClickCardHandle}
      transform={!flipped && 'rotateY(180deg)'}
      w={32}>
      <Image
        alt={name}
        objectFit="cover"
        position="absolute"
        src={url}
        transform={flipped && 'rotateY(180deg)'}
      />
      <CardCover flipped={flipped} />
    </Flex>
  );
}

export default Card;
