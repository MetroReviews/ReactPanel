import "../styles/globals.css";
import {
  ChakraProvider,
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
} from "@chakra-ui/react";

import { SWRConfig } from "swr";

function MyApp({ Component, pageProps }: any) {
  return (
    <ChakraProvider>
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <SWRConfig
            value={{
              fetcher: (url: string) =>
                fetch(`/api/${url}`).then((res) => res.json()),
            }}
          >
            <Component {...pageProps} />
            <CSSReset />
          </SWRConfig>
        </ColorModeProvider>
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
