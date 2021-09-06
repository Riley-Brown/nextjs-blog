import { getAllPosts } from 'lib/api';
import Layout from 'components/Layout';
import Posts from 'components/Posts';

export default function Home({ posts }) {
  return (
    <>
      <Layout
        meta={{
          title: 'Riley Brown programming blog',
          description:
            'Blog posts about anything Web Development including React, TypeScript, Node.js etc.'
        }}
      >
        <Posts posts={posts} />
      </Layout>
    </>
  );
}

export async function getStaticProps({ params }) {
  const posts = getAllPosts([
    'slug',
    'date',
    'title',
    'coverImage',
    'truncatedContent'
  ]);

  return {
    props: {
      posts
    }
  };
}
