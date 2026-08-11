import Head from "next/head";
import { useRouter } from "next/router";

export default function GridHead() {
  // basePath is empty on `main` (Vercel, served at the root) and
  // "/GridLandingPage" on `deploy`, so the favicon resolves on both.
  const { basePath } = useRouter();

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Bridge Collective funds schools, trains teachers and measures what works, so every child reached today becomes a graduate tomorrow."
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${basePath}/assets/images/favicon-32x32.png`}
      />
      <title>Frontend Mentor | Grid landing page</title>
    </Head>
  );
}
