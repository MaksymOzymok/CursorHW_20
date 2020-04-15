import React from "react";
import "./user.css"

const User = ({userData})=>{
    const {photo,name,nickname, verified = false} = userData;
    const verifiedIconStyle = {
        display : !verified ? "none" : "inline"
    };
    return (
        <div className="user">
            <img src={photo}  className="user-photo" alt="userPhoto"/>
            <span className="user-name">{name}</span>
            <i style={verifiedIconStyle} className="fas fa-certificate verified-icon"></i>
            <span className="user-nickname">{nickname}</span>
        </div>
    )
};
export default User;