import { ThemeProvider } from "next-themes";
import { MDXProvider } from "@mdx-js/react";
import Link from "next/link";

import "styles/globals.css";

const MarkdownLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props} />
      </Link>
    );
  }
  return <a {...props} />;
};

const components = {
  a: MarkdownLink,
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  );
}

export default MyApp;
