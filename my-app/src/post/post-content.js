import React from "react";
import "./post-content.css"

const PostContent = ({contentData})=>{
    const {text,image} = contentData;
    return (
        <div className="post-content">
            <p className= "post-content-text">{text}</p>
            <img className="post-content-img" src={image} alt=""/>
        </div>
    )
};

export default PostContent;