import { appWithTranslation } from 'next-i18next';
import { ChakraProvider } from '@chakra-ui/react';

import '@styles/globals.css';
import { AppContextProvider } from '@context/appContext';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </ChakraProvider>
  );
}

export default appWithTranslation(MyApp);
