import { useState, useEffect } from 'react';
import { Box, Button, Flex } from '@chakra-ui/react';

import Card from '@components/Card';
import {
  IMAGES_URLS,
  TIME_TO_USER_WATCH_CARDS_ON_ERROR,
} from '@utils/constants';
import { useAppContext } from '@context/appContext';

export default function Home() {
  const { setIsLoading } = useAppContext();
  const [cards, setCards] = useState([]);
  const [cardSelectedOne, setCardSelectedOne] = useState(null);
  const [cardSelectedTwo, setCardSelectedTwo] = useState(null);

  const setCardFlipped = (card) =>
    cardSelectedOne ? setCardSelectedTwo(card) : setCardSelectedOne(card);

  const startGame = () => {
    const cardsGame = [...IMAGES_URLS, ...IMAGES_URLS]
      .sort(() => Math.random() - 0.5)
      .map((item) => ({ ...item, id: Math.random(), matched: false }));

    setCards(cardsGame);
  };

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
    startGame();
  };

  useEffect(() => {
    setIsLoading(true);
    startGame();
    setIsLoading(false);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    if (cardSelectedOne && cardSelectedTwo) {
      if (cardSelectedOne.key === cardSelectedTwo.key) {
        setCards((prevCards) =>
          prevCards?.map((item) => {
            if (item.key === cardSelectedOne.key) {
              return { ...item, matched: true };
            }

            return item;
          })
        );
      }

      setTimeout(() => {
        setIsLoading(true);
        setCardSelectedOne(null);
        setCardSelectedTwo(null);
        setIsLoading(false);
      }, TIME_TO_USER_WATCH_CARDS_ON_ERROR);
    }
    setIsLoading(false);
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
              card.matched === true
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
