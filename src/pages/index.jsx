import { Flex } from '@chakra-ui/react';

import Card from '@components/Card';
import { IMAGES_URLS } from '@utils/constants';

export default function Home() {
  return (
    <Flex justify="space-evenly" wrap="wrap">
      {IMAGES_URLS?.map((image) => (
        <Card key={`${image.name}`} url={image.url} name={image.name} />
      ))}
    </Flex>
  );
}
