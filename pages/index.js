// import { FeaturedPosts } from '../sections/index';
import { PostCard, Categories, PostWidget } from '../components';
import { getPosts } from '../services';

export default function Home({ posts }) {
  return (
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
    
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}

