import React from 'react';
// import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

import { grpahCMSImageLoader } from '../util';

const PostCard = ({ post }) => (
  // <div className="">
  //   <div className="relative shadow-md inline-block w-full h-60 lg:h-80 mb-6">
  //     <Image
  //       unoptimized
  //       loader={grpahCMSImageLoader}
  //       alt={post.title}
  //       className="shadow-lg rounded-t-lg lg:rounded-lg"
  //       layout="fill"
  //       src={post.featuredImage.url}
  //     />
  //   </div>
  //   <div className="">
  //     <img src={post.featuredImage.url} alt="" className="" />
  //   </div>

  //   <h1 className="">
  //     <Link href={`/post/${post.slug}`}>{post.title}</Link>
  //   </h1>
  //   <div className="">
  //     <div className="">
  //       <Image
  //       fill
  //         unoptimized
  //         loader={grpahCMSImageLoader}
  //         alt={post.author.name}
  //         height="30px"
  //         width="30px"
  //         className="align-middle rounded-full"
  //         src={post.author.photo.url}
  //       />
  //       <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">{post.author.name}</p>
  //     </div>
  //     <div className="font-medium text-gray-700">
  //       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  //       </svg>
  //       <span className="align-middle">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
  //     </div>
  //   </div>
  //   <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">
  //     {post.excerpt}
  //   </p>
  //   <div className="text-center">
  //     <Link href={`/post/${post.slug}`}>
  //       <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">Continue Reading</span>
  //     </Link>
  //   </div>
  // </div>
  <div className='postCardBox'>
    <img className='imgbox' src={post.featuredImage.url} alt={post.title} />
    <h4 style={{textAlign: "center", paddingLeft: "3px", paddingRight: "3px", paddingTop: "0px", paddingBottom: "0px"}}>
      <Link className='postCardTitle'  href={`/post/${post.slug}`}>{post.title}</Link>
    </h4>
    <p className='excerpt' style={{textAlign: "center", paddingLeft: "3px", paddingRight: "3px", paddingTop: "0px"}}>
       {post.excerpt}
    </p>
    <div className='continueReadingMain'>
      <Link  style={{textDecoration: "none"}} href={`/post/${post.slug}`}>
          <h4 style={{}} className='continueReading'>Continue Reading</h4>
      </Link>
    </div>
  </div>
);

export default PostCard;
