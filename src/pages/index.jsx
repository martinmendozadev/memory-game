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

  const onRestartGameHandle = () => {
    setCards((prevCards) =>
      prevCards.map((card) => {
        if (card.matched) {
          return { ...card, matched: false };
        }

        return card;
      })
    );

    setCardSelectedOne(null);
    setCardSelectedTwo(null);
  };

  useEffect(() => {
    const allFruits = [...IMAGES_URLS, ...IMAGES_URLS]
      .sort(() => Math.random() - 0.5)
      .map((item) => ({ ...item, id: Math.random(), matched: false }));

    setCards(allFruits);
  }, []);

  useEffect(() => {
    if (cardSelectedOne && cardSelectedTwo) {
      if (cardSelectedOne.key === cardSelectedTwo.key) {
        setCards((prevCards) =>
          prevCards?.map((item) => {
            if (item.src === cardSelectedOne.src) {
              return { ...item, matched: true };
            }

            return item;
          })
        );
      }

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
            key={`${card.id}`}
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
        <Button
          colorScheme="teal"
          mt={6}
          size="md"
          onClick={onRestartGameHandle}>
          Restart
        </Button>
      </Box>
    </Flex>
  );
}
