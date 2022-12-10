import { Flex } from '@chakra-ui/react';

import Header from '@components/Header';
import Footer from '@components/Footer';

function BaseLayout({ children }) {
  return (
    <>
      <Header />
      <Flex justify="center" align="center" my={6}>
        {children}
      </Flex>
      <Footer />
    </>
  );
}

export default BaseLayout;
