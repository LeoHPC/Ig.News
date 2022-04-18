import * as prismic from '@prismicio/client';

export function getPrismicClient() {
  const client = prismic.createClient(
    process.env.PRISMIC_END_POINT,
    {
      accessToken: process.env.PRISMIC_ACCESS_TOKEN
    }
  )

  return client;
}