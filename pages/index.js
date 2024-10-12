// import { FeaturedPosts } from '../sections/index';
import { PostCard, Categories, PostWidget } from '../components';
import { getPosts } from '../services';
import Head from "next/head";


export default function Home({ posts }) {
  const head = () => (
    <Head>
      <title>FARMING SPIRIT</title>
      <meta
        name="description"
        content="Together we can make farming practices easy"
      />
      <meta
        property="og:description"
        content="Together we can make farming practices easy"
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="FARMING SPIRIT" />
      <meta property="og:url" content="https://farmingspirit.com.ng" />
      <meta
        property="og:image:secure_url"
        content="https://farmingspirit.com.ng/images/everything.jpg"
      />
    </Head>
  );
  return (
    <>
      {head()}
      <div className='containerr'>
        <div className='indexpage'>
          <div className="indexpage2">
            {posts.map((post, index) => (
              <PostCard key={index} post={post.node} />
           ))}
         </div>
         <div>
          {/* <FeaturedPosts /> */}
         </div>
        </div>
        <div>
          {/* <PostWidget /> */}
        </div>
        

      </div>
    </>
      
    
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}

