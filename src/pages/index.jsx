import { useState, useEffect } from 'react';
import { Box, Button, Flex } from '@chakra-ui/react';

import Card from '@components/Card';
import { IMAGES_URLS } from '@utils/constants';

export default function Home() {
  const [cards, setCards] = useState([]);
  const [cardSelectedOne, setCardSelectedOne] = useState(null);
  const [cardSelectedTwo, setCardSelectedTwo] = useState(null);

  const setCardFlipped = (card) =>
    cardSelectedOne ? setCardSelectedTwo(card) : setCardSelectedOne(card);

  useEffect(() => {
    const allFruits = [...IMAGES_URLS, ...IMAGES_URLS]
      .sort(() => Math.random() - 0.5)
      .map((item) => ({ ...item, id: Math.random() }));

    setCards(allFruits);
  }, []);

  useEffect(() => {
    if (
      cardSelectedOne &&
      cardSelectedTwo &&
      cardSelectedOne.src === cardSelectedTwo.src
    ) {
      setCards((prevCards) =>
        prevCards?.map((item) => {
          if (item.src === cardSelectedOne.src) {
            return { ...item, matched: true };
          }

          return item;
        })
      );

      setCardSelectedOne(null);
      setCardSelectedTwo(null);
    }
  }, [cardSelectedOne, cardSelectedTwo]);

  return (
    <Flex align="center" direction="column">
      <Flex justify="space-evenly" wrap="wrap">
        {cards?.map((card) => (
          <Card
            card={card}
            setCardFlipped={setCardFlipped}
            key={`${card.name}`}
            name={card.name}
            url={card.url}
            flipped={
              card === cardSelectedOne ||
              card === cardSelectedTwo ||
              card?.matched
            }
          />
        ))}
      </Flex>
      <Box>
        <Button colorScheme="teal" mt={6} size="md">
          Restart
        </Button>
      </Box>
    </Flex>
  );
}
