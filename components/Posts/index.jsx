import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './Posts.module.css';

export default function Posts({ posts }) {
  return (
    <>
      <div className={styles.posts}>
        {posts.map((post) => (
          <div key={post.slug} className={styles.post}>
            {post.coverImage && (
              <Link href={`/${post.slug}`} passHref>
                <a>
                  <Image
                    // placeholder="blur"
                    layout="responsive"
                    objectFit="cover"
                    src={post.coverImage}
                    width={350}
                    height={250}
                    alt={post.title}
                  />
                </a>
              </Link>
            )}
            <h1>{post.title}</h1>
            <small>{post.date}</small>
            <p>{post.truncatedContent}</p>
          </div>
        ))}
      </div>
    </>
  );
}
