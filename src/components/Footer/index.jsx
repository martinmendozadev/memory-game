import { useTranslation } from 'next-i18next';
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Tooltip,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import {
  FaLinkedinIn,
  FaTelegramPlane,
  FaGithub,
  FaRegEnvelope,
} from 'react-icons/fa';

import { SOCIAL_MEDIA } from '@utils/constants';

function SocialButton({ children, label, href }) {
  return (
    <Tooltip label={label} aria-label={label}>
      <chakra.button
        alignItems="center"
        as="a"
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        cursor="pointer"
        display="inline-flex"
        h={8}
        href={href}
        justifyContent="center"
        rounded="full"
        transition="background 0.3s ease"
        target="_blank"
        w={8}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    </Tooltip>
  );
}

function Footer() {
  const { t } = useTranslation('common');

  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      borderColor={useColorModeValue('gray.200', 'gray.900')}
      borderStyle="solid"
      borderTop={1}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        align={{ base: 'center', md: 'center' }}
        as={Stack}
        direction={{ base: 'column', md: 'row' }}
        justify={{ base: 'center', md: 'space-between' }}
        maxW="6xl"
        py={4}
        spacing={4}>
        <Text>{t('footer.caption')}</Text>
        <Stack direction="row" spacing={6}>
          <SocialButton
            href={SOCIAL_MEDIA.linkedin.href}
            label={SOCIAL_MEDIA.linkedin.label}>
            <FaLinkedinIn />
          </SocialButton>
          <SocialButton
            href={SOCIAL_MEDIA.email.href}
            label={SOCIAL_MEDIA.email.label}>
            <FaRegEnvelope />
          </SocialButton>
          <SocialButton
            href={SOCIAL_MEDIA.telegram.href}
            label={SOCIAL_MEDIA.telegram.label}>
            <FaTelegramPlane />
          </SocialButton>
          <SocialButton
            href={SOCIAL_MEDIA.github.href}
            label={SOCIAL_MEDIA.github.label}>
            <FaGithub />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;
