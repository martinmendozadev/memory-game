import { Box, Button, Flex } from '@chakra-ui/react';

import Card from '@components/Card';
import { IMAGES_URLS } from '@utils/constants';

export default function Home() {
  return (
    <Flex align="center" direction="column">
      <Flex justify="space-evenly" wrap="wrap">
        {IMAGES_URLS?.map((image) => (
          <Card key={`${image.name}`} url={image.url} name={image.name} />
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
