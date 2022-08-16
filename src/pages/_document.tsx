import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="dark:bg-black/70 dark:text-neutral-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
