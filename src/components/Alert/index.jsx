import { Flex, Text } from '@chakra-ui/react';

export default function Alert({ content }) {
  return (
    <Flex justifyContent="center" w="100%" bgColor="green.200">
      <Text as="i" color="black" fontWeight="semibold">
        {content}
      </Text>
    </Flex>
  );
}
