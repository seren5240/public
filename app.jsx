import "../styles/globals.css";

import { DEBUG } from "../constants";

function MyApp({ Component, pageProps }) {
  if (DEBUG) {
    logger.log("debug");
  }
  return <Component {...pageProps} />;
}

export default MyApp;
