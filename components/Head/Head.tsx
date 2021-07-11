import { FC } from "react";
import NextHead from "next/head";

interface Props {
  title: string;
  description: string;
  keywords: string;
  author: string;
  date: Date;
  url: string;
  image: string;
}

const Head: FC<Props> = ({
  title,
  description,
  keywords,
  author,
  date,
  url,
  image,
}) => {
  return (
    <>
      <NextHead>
        <meta key="charSet" charSet="UTF-8" />
        <meta
          key="viewport"
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <meta key="httpEquiv" httpEquiv="x-ua-compatible" content="ie=edge" />

        {title && <meta key="title" name="title" content={title} />}
        {description && (
          <meta key="description" name="description" content={description} />
        )}
        {keywords && <meta key="keywords" name="keywords" content={keywords} />}
        {author && <meta key="author" name="author" content={author} />}

        {date && (
          <meta
            key="article:published_time"
            property="article:published_time"
            content={new Date(date).toISOString()}
          />
        )}

        <meta key="og:title" property="og:title" content={title} />
        <meta
          key="og:description"
          property="og:description"
          content={description}
        />
        <meta key="og:type" property="og:type" content="website" />
        {url && <meta key="og:url" property="og:url" content={url} />}

        {image && <meta key="og:image" property="og:image" content={image} />}
        {image && <meta key="image" property="image" content={image} />}
        {image && (
          <meta key="og:image:width" property="og:image:width" content="1200" />
        )}
        {image && (
          <meta
            key="og:image:height"
            property="og:image:height"
            content="630"
          />
        )}

        <meta
          key="twitter:card"
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          key="twitter:creator"
          name="twitter:creator"
          content="@timtbdev"
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={title ? `${title}` : "Ger Bar Taproom"}
        />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={description}
        />
        {image && (
          <meta key="twitter:image" name="twitter:image" content={image} />
        )}

        {url && <link key="canonical" rel="canonical" href={url} />}

        <link
          key="apple-touch-icon"
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          key="icon32"
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          key="icon16"
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        <link key="manifest" rel="manifest" href="/site.webmanifest" />
        <link
          key="mask-icon"
          rel="mask-icon"
          href="/safari-pinned-tab.svg"
          color="#667eea"
        />
        <meta
          key="msapplication-TileColor"
          name="msapplication-TileColor"
          content="#667eea"
        />
        <meta key="theme-color" name="theme-color" content="#667eea" />

        <title key="pageTitle">
          {title ? `${title}` : "Tim | Android Developer"}
        </title>

        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" key="site-manifest" />
      </NextHead>
    </>
  );
};
export default Head;
