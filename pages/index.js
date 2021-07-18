import { NextSeo } from "next-seo";
import Layout from "../components/Layout";
import Image from 'next/image'
import security_advice from 'public/static/images/index/security_advice.png'

export default function Index({ posts }) {
  const title = 'Home'
  return (
    <>
      <NextSeo title={title} />
      <Layout title="Handjes! Handjes! Bloemetjesgordijn!">
        <div className="py-5 text-center">
          <Image src={security_advice} alt="Security advice" />
          {/* <h3 className="text-2xl font-bold">Latest posts</h3>
          <div className="grid space-x-2 lg:grid-cols-2">

          </div> */}
        </div>
      </Layout>
    </>
  );
}