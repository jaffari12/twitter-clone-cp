import React from 'react';
import  './Post.css';
import {Avatar} from "@material-ui/core";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

function Post({displayName, username, verified, text, image, avatar
}) {
    return (
        <div className="post">
        <div className="post__avatar">
           <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"/>
        </div> 
        <div className="post__body">
            <div className="post__header">
                <div className="post__headerText">
                    <h3>
                        Kauser Jaffari {" "} <span>
                        <VerifiedUserIcon className="post__badge"/>
                        </span>
                    </h3>
                </div>
                <div className= "post__headerDescription">
                    <p> I challenge you to build a Twitter Clone with React</p>
                </div>
            </div>
            <img></img>

        </div> 
        </div>
    )
}

export default Post
