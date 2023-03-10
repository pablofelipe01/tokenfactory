import { SITE_URL } from "./src/constants";

const defaultSeo = {
  title: "Launchpad",
  description:
    "Launchpad enables anyone to launch a token around a person, idea, or collective in minutes",
  openGraph: {
    url: SITE_URL,
    title: "Launchpad",
    description:
      "Launch a token around a person, project, idea, or collective in minutes",
    images: [
      {
        url: `${SITE_URL}/seoDefaultCardImage.jpg`,
        width: 800,
        height: 600,
        alt: "Og Image Alt",
        type: "image/jpeg",
      },
    ],
    site_name: "Launchpad",
  },
  twitter: {
    handle: "@StrataProtocol",
    site: SITE_URL,
    cardType: "summary_large_image",
  },
};

export default defaultSeo;
