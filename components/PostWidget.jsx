import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

import { grpahCMSImageLoader } from '../util';
import { getSimilarPosts, getRecentPosts } from '../services';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);

  return (
    <div>
      <hr />
        <h3 style={{textAlign: "center", color: "black"}}>{slug ? 'Related Posts' : 'Recent Posts'}</h3>
        <div className='postWidget'>
            {relatedPosts.map((post, index) => (
              <div key={index} className='postWidget2'>
                    <div>
                      <img
                        alt={post.title}
                        className="postWidgetImage"
                        src={post.featuredImage.url}
                      />
                    </div>
                    <div style={{ textAlign: "center"}}>
                      <p style={{ textAlign: "center"}}>{moment(post.createdAt).format('MMM DD, YYYY')}</p>
                      <Link style={{ textAlign: "center"}} href={`/post/${post.slug}`} key={index}>{post.title}</Link>
                    </div>
              </div>
            ))}
        </div>
        
    </div>
  );
};

export default PostWidget;
