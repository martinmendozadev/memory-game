import { useState, useEffect } from 'react';
import { Box, Button, Flex } from '@chakra-ui/react';

import Card from '@components/Card';
import { IMAGES_URLS } from '@utils/constants';

export default function Home() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const allFruits = [...IMAGES_URLS, ...IMAGES_URLS]
      .sort(() => Math.random() - 0.5)
      .map((item) => ({ ...item, id: Math.random() }));

    setCards(allFruits);
  }, []);

  return (
    <Flex align="center" direction="column">
      <Flex justify="space-evenly" wrap="wrap">
        {cards?.map((card) => (
          <Card
            key={`${card.name}`}
            url={card.url}
            name={card.name}
            flipped={false}
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
