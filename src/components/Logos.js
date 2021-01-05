import React from 'react'
import {
    EmailIcon,
    FacebookIcon,
    LinkedinIcon,
    PinterestIcon,
    RedditIcon,
    TumblrIcon,
    TwitterIcon,
  } from "react-share";

function Logos(props){
    return (
        <div>
            <TwitterIcon size="2.5rem" round={true} />
            <FacebookIcon size="2.5rem" round={true} />
            <EmailIcon size="2.5rem" round={true} />
            <LinkedinIcon size="2.5rem" round={true} />
            <PinterestIcon size="2.5rem" round={true} />
            <RedditIcon size="2.5rem" round={true} />
            <TumblrIcon size="2.5rem" round={true} />
        </div>
    )
}

export default Logos