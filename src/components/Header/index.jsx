import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Link,
  Text,
  Tooltip,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaRegMoon, FaSun } from 'react-icons/fa';

export default function Header() {
  const { locale } = useRouter();
  const { t } = useTranslation('common');
  const { colorMode, toggleColorMode } = useColorMode();
  const local = locale === 'en' ? 'es' : 'en';

  return (
    <Flex justify="center" bg={useColorModeValue('gray.50', 'gray.900')} py={4}>
      <Flex justify="space-evenly" w="100%">
        <Box>
          <Heading>{t('header.title')}</Heading>
        </Box>
        <Flex>
          <Link as={NextLink} href="/" locale={local} mr={4}>
            <Tooltip
              label={t('buttons.changeLanguageTooltip')}
              aria-label={t('buttons.tooltip')}>
              <Button variant="outline">
                <Text casing="capitalize">{local}</Text>
              </Button>
            </Tooltip>
          </Link>

          <Tooltip
            label={t('buttons.themeTooltip')}
            aria-label={t('buttons.tooltip')}>
            <IconButton
              aria-label={t('buttons.theme')}
              fontSize="sm"
              fontWeight={600}
              icon={colorMode === 'dark' ? <FaSun /> : <FaRegMoon />}
              onClick={toggleColorMode}
              variant="outline"
            />
          </Tooltip>
        </Flex>
      </Flex>
    </Flex>
  );
}
