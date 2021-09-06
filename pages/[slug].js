import React from 'react';
import markdownToHtml from 'lib/markdownToHtml';
import { getPostBySlug, getAllPosts } from 'lib/api';
import markdownStyles from 'styles/markdown-styles.module.css';
import Layout from 'components/Layout';
import Image from 'next/image';

import classes from 'styles/Post.module.css';

import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

export default function Post({ post }) {
  return (
    <>
      <Layout meta={{ title: post.title }}>
        <h1 className={classes.title}>{post.title}</h1>
        <Image
          alt={post.title}
          className={classes.img}
          src={post.coverImage}
          objectFit="cover"
          layout="responsive"
          width={350}
          height={200}
        />
        <div
          className={`line-numbers ${markdownStyles['markdown']}`}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </Layout>
    </>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage'
  ]);

  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content
      }
    }
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug
        }
      };
    }),
    fallback: false
  };
}
