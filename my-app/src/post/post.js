import React from "react";
import "./post.css"
import User from "./user";
import PostDate from "./post-date";
import PostContent from "./post-content";
import PostOptions from "./post-options";

export default class Post extends React.Component{

    render() {
        //console.log(this.props.data);
        const {userData, contentData, postData} = this.props.data;
        return (
            <div className="post">
                <div className="top-panel">
                    <User userData={userData}/>
                    <PostDate date={contentData.date}/>
                </div>
                <PostContent contentData={contentData}/>
                <PostOptions postData={postData}
                             id={this.props.id}
                             likeFunc={this.props.likeFunc}
                             commentFunc={this.props.commentFunc}
                             shareFunc={this.props.shareFunc}
                />
            </div>
        )
    }
};