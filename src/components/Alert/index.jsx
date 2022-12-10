import { Flex, Text } from '@chakra-ui/react';

import { ALERT_TYPES } from '@utils/constants';

export default function Alert({ content, type }) {
  return (
    <Flex
      justifyContent="center"
      w="100%"
      bgColor={type === ALERT_TYPES.error ? 'red.500' : 'green.200'}>
      <Text as="i" color="black" fontWeight="semibold">
        {content}
      </Text>
    </Flex>
  );
}
