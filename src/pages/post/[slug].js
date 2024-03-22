import React from 'react';
import { useRouter } from 'next/router';


import { getPosts, getPostDetails } from '../../../services';
import { AdjacentPosts } from '@/sections';
import PostWidget from '@/components/PostWidget';
import Categories from '@/components/Categories';
import PostDetail from '@/components/PostDetail';
import Author from '@/components/Author';
import Loader from '@/components/Loader';

const PostDetails = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <>
      <div className="container mx-auto px-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
            <PostDetail post={post} />
            <Author author={post.author} />
            <AdjacentPosts slug={post.slug} createdAt={post.createdAt} />
          </div>
     <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8382537736577233"
        crossorigin="anonymous"></script>
  <ins class="adsbygoogle"
     style="display:block"
     data-ad-format="fluid"
     data-ad-layout-key="+5p+ps+3c-i4+il"
     data-ad-client="ca-pub-8382537736577233"
     data-ad-slot="8034913784"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-8">
              <PostWidget slug={post.slug} categories={post.categories.map((category) => category.slug)} />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PostDetails;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  return {
    props: {
      post: data,
    },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}
