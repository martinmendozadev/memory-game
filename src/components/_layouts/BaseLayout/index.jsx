import { Flex } from '@chakra-ui/react';

import Header from '@components/Header';
import Footer from '@components/Footer';

function BaseLayout({ children }) {
  return (
    <Flex direction="column" justify="space-between" h="100vh">
      <Header />
      <Flex justify="center" align="center" my={6}>
        {children}
      </Flex>
      <Footer />
    </Flex>
  );
}

export default BaseLayout;
