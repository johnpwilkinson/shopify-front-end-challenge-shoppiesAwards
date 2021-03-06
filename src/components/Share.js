import React from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  RedditShareButton,
  TumblrShareButton,
  TwitterShareButton,
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  PinterestIcon,
  RedditIcon,
  TumblrIcon,
  TwitterIcon,
} from "react-share";
import { CopyToClipboard } from "react-copy-to-clipboard";
function Share(props) {
  return (
    <div>
      <CopyToClipboard text={props.url} onCopy={props.handleCopy}>
        <div class="fa-stack fa-1x ">
          <i class="fas fa-circle fa-stack-2x"></i>
          <i class="far fa-copy fa-stack-1x"></i>
        </div>
      </CopyToClipboard >
      <TwitterShareButton url={props.url} title={props.title + ' ' + props.tags} hashtags={props.hashtags}>
        <TwitterIcon size="2.5rem" round={true} />
      </TwitterShareButton>
      <FacebookShareButton url={props.url} quote={props.title} hashtag={"#Shopify #ShopifyFrontEndInternship2021 #ShopifyInternship #ShoppieAwardsShoppies"}>
        <FacebookIcon size="2.5rem" round={true} />
      </FacebookShareButton>
      <EmailShareButton url={props.url} subject={props.title} body={props.title}>
        <EmailIcon size="2.5rem" round={true} />
      </EmailShareButton>
      <LinkedinShareButton url={props.url} title={props.title} summary={props.title + ' ' + props.tags} source={props.url}>
        <LinkedinIcon size="2.5rem" round={true} />
      </LinkedinShareButton>
      <PinterestShareButton url={props.url} title={props.title}>
        <PinterestIcon size="2.5rem" round={true} />
      </PinterestShareButton>
      <RedditShareButton url={props.url} title={props.title}>
        <RedditIcon size="2.5rem" round={true} />
      </RedditShareButton>
      <TumblrShareButton url={props.url} title={props.title}>
        <TumblrIcon size="2.5rem" round={true} />
      </TumblrShareButton>
    </div>
  );
}
export default Share;
