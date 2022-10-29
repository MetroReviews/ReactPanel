import "../styles/globals.css";

import { SWRConfig } from "swr";

function MyApp({ Component, pageProps }: any) {
  return (
    <>
        <script src="../path/to/flowbite/dist/flowbite.js"></script>
          <SWRConfig
            value={{
              fetcher: (url: string) =>
                fetch(`/api/${url}`).then((res) => res.json()),
            }}
          >
            <Component {...pageProps} />
          </SWRConfig>
          </>
  );
}

export default MyApp;
