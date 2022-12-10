import { useTranslation } from 'next-i18next';
import { Flex, Heading, useColorModeValue } from '@chakra-ui/react';

export default function Header() {
  const { t } = useTranslation('common');

  return (
    <Flex justify="center" bg={useColorModeValue('gray.50', 'gray.900')} py={4}>
      <Heading>{t('header.title')}</Heading>
    </Flex>
  );
}
