import { appWithTranslation } from 'next-i18next';
import { ChakraProvider } from '@chakra-ui/react';

import '@styles/globals.css';
import BaseLayout from '@components/_layouts/BaseLayout';
import { AppContextProvider } from '@context/appContext';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <AppContextProvider>
        <BaseLayout>
          <Component {...pageProps} />
        </BaseLayout>
      </AppContextProvider>
    </ChakraProvider>
  );
}

export default appWithTranslation(MyApp);
