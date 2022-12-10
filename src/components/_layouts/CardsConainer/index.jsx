import { useState, useEffect } from 'react';
import { Box, Button, Flex } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { FaRedo } from 'react-icons/fa';

import Card from '@components/Card';
import Alert from '@components/Alert';
import {
  ALERT_TYPES,
  IMAGES_URLS,
  TIME_TO_USER_WATCH_CARDS_ON_ERROR,
} from '@utils/constants';
import { useAppContext } from '@context/appContext';

export default function CardsContainer() {
  const { t } = useTranslation('common');
  const { isLoading, isErrorMatching, setIsLoading, setIsErrorMatching } =
    useAppContext();
  const [cards, setCards] = useState([]);
  const [cardSelectedOne, setCardSelectedOne] = useState(null);
  const [cardSelectedTwo, setCardSelectedTwo] = useState(null);

  const setCardFlipped = (card) => {
    if (!isLoading && cardSelectedOne) {
      setCardSelectedTwo(card);
    } else if (!isLoading && !cardSelectedTwo) {
      setCardSelectedOne(card);
    }
  };

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
    if (cardSelectedOne && cardSelectedTwo) {
      setIsLoading(true);
      if (cardSelectedOne.key === cardSelectedTwo.key) {
        setCards((prevCards) =>
          prevCards?.map((item) => {
            if (item.key === cardSelectedOne.key) {
              return { ...item, matched: true };
            }

            return item;
          })
        );
      } else {
        setIsErrorMatching(true);
      }

      setTimeout(() => {
        setCardSelectedOne(null);
        setCardSelectedTwo(null);
        setIsErrorMatching(false);
        setIsLoading(false);
      }, TIME_TO_USER_WATCH_CARDS_ON_ERROR);
    }
  }, [cardSelectedOne, cardSelectedTwo]);

  return (
    <Flex align="center" direction="column" mb={6}>
      {!cardSelectedOne && !cardSelectedTwo && (
        <Alert content={t('help.selectFirstCard')} type={ALERT_TYPES.info} />
      )}
      {cardSelectedOne && !cardSelectedTwo && (
        <Alert content={t('help.selectSecondCard')} type={ALERT_TYPES.info} />
      )}
      {isErrorMatching && (
        <Alert
          content={t('help.errorMatchingCards')}
          type={ALERT_TYPES.error}
        />
      )}

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
          onClick={onRestartGameHandle}
          rightIcon={<FaRedo />}>
          {t('buttons.restart')}
        </Button>
      </Box>
    </Flex>
  );
}
