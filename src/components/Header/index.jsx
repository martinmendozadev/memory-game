import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Header() {
  const { locale } = useRouter();
  const { t } = useTranslation('common');

  return (
    <Flex justify="center" bg={useColorModeValue('gray.50', 'gray.900')} py={4}>
      <Flex justify="space-evenly" w="100%">
        <Box>
          <Heading>{t('header.title')}</Heading>
        </Box>
        <Box>
          <Link as={NextLink} href="/" locale={locale === 'en' ? 'es' : 'en'}>
            <Button variant="outline">
              <Text casing="capitalize">{locale}</Text>
            </Button>
          </Link>
        </Box>
      </Flex>
    </Flex>
  );
}
