import "../styles/globals.css";

import { DEBUG } from "../constants";

function MyApp({ Component, pageProps }) {
  if (DEBUG) {
    
  }
  return <Component {...pageProps} />;
}

export default MyApp;
