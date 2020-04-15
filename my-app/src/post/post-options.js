import React from "react";
import "./post-options.css";

const PostOptions = ({postData,id,likeFunc,commentFunc,shareFunc})=>{
  const {comments,sharing,likes} = postData;
  return (
      <div className="post-options">
        <div className="post-option-comments">
            <i className="far fa-comment-alt icon"  style={ postData.commented? {color : 'white'}:null} onClick={()=>commentFunc(id)}></i>
            <span>{comments}</span>
        </div>
          <div className="post-option-sharing">
              <i className="fas fa-retweet icon" style={ postData.shared? {color : 'white'}:null} onClick={()=>shareFunc(id)}></i>
              <span>{sharing}</span>
          </div>
          <div className="post-option-like">
              <i className="far fa-heart icon"  style={ postData.liked? {color : 'red'}:null}onClick={()=>likeFunc(id)}></i>
              <span>{likes}</span>
          </div>
          <div className="post-option-upload">
              <i className="fas fa-upload icon"></i>
          </div>
      </div>
  )
};
export default PostOptions;