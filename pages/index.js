import { NextSeo } from "next-seo";
import Layout from "../components/Layout";

export default function Index({ posts }) {
  const title = 'Home'
  return (
    <>
      <NextSeo title={title} />
      <Layout title="Hello there! 👋" subtitle="I'm Dave Roverts, 24 years old and from the Netherlands 🇳🇱. Web developer 🖥 by day, and flight simmer ✈️ in the evening.">
        <div className="py-5">
          {/* <h3 className="text-2xl font-bold">Latest posts</h3>
          <div className="grid space-x-2 lg:grid-cols-2">

          </div> */}
        </div>
      </Layout>
    </>
  );
}