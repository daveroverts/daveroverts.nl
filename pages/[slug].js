import { format, parseISO } from "date-fns";
import { enGB } from "date-fns/locale";
import { MDXRemote } from "next-mdx-remote";
import Layout from "components/Layout";
import { getFileBySlug, getFiles } from "lib/mdx";
import { NextSeo } from "next-seo";


export default function Page({ mdxSource, frontMatter }) {
  return (
    <>
      <NextSeo
        title={frontMatter.title}
      />
      <Layout title={frontMatter.title} subtitle={frontMatter.date ? format(parseISO(frontMatter.date), "P", { locale: enGB }) : undefined}>
        <div>
          {frontMatter.description && (
            <p className="py-5">{frontMatter.description}</p>
          )}
          <article className="prose lg:prose-xl max-w-none dark:prose-invert">
            <MDXRemote {...mdxSource} />
          </article>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const pages = await getFiles("pages");

  return {
    paths: pages.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ""),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug("pages", params.slug);

  return { props: post };
}
