import React from 'react';

import moment from 'moment';

const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
    }

    switch (type) {
      case 'heading-three':
        return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'paragraph':
        return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'image':
        return (
          <img
            fill={true}
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (    
      <div className='singleDetail'>
        <div>
          <div className='authorImage'>
            <div className='authorImage2'><img alt={post.author.name} src={post.author.photo.url} /></div>
            <span className='authorName' style={{color: "blue", paddingRight: "12px"}}>
              {post.author.name}
            </span>
            <span>{moment(post.createdAt).format('MMM DD, YYYY')}</span>
          </div>
         
          
          <div className='singlePostImageDiv'>
            <img src={post.featuredImage.url} alt={post.name} />
          </div>
          <div>
            <h3 className='postDetailTitle'>{post.title}</h3>
          </div>
          <div className='postDetailContent'>
            {post.content.raw.children.map((typeObj, index) => {
                const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));
                return getContentFragment(index, children, typeObj, typeObj.type);
            })}
          </div>
        </div>

        <div>

        </div>
        
      </div>
  );
};

export default PostDetail;
