import "../styles/globals.css";
import {
  ChakraProvider,
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
} from "@chakra-ui/react";

function MyApp({ Component, pageProps }: any) {
  return (
    <ChakraProvider>
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <Component {...pageProps} />
          <CSSReset />
        </ColorModeProvider>
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
