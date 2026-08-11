import type { AppProps } from "next/app";
import localFont from "next/font/local";

import "@/styles/globals.css";

/**
 * Inter is shipped with the challenge as a variable font, so it is self-hosted
 * and preloaded by next/font instead of being pulled from Google Fonts.
 */
const inter = localFont({
  src: "../../public/assets/fonts/inter/inter-variable.ttf",
  weight: "100 900",
  style: "normal",
  display: "swap",
  variable: "--font-inter",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} app`}>
      <Component {...pageProps} />
    </div>
  );
}
