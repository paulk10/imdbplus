import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/Bar.module.scss"
import { getData } from "../utils/storyblok"
import RelatedItemGallerySmall from "./RelatedItemGallerySmall"
import RelatedItemGallery from "./RelatedItemGallery"
import InPageSlideshow from "./InPageSlideshow"
import SmallCardList from "./SmallCardList"
import DynamicComponent from './DynamicComponent' //this needs to be imported so that the blocks work
import { FacebookShareButton, FacebookIcon,TwitterShareButton, TwitterIcon, LinkedinShareButton, LinkedinIcon } from 'next-share';

const Bar = ({ data, level }) => {
  if (level === 'data') {
    var content = data.story.content;
  } else {
    var content = data;
  }

  if (content.city) {
    var cities = data.rels.filter(obj => {
      return content.city.includes(obj.uuid);
    });
    }

  //returning the HTML
  return (
    <SbEditable content={content} key={content._uid}>
      <main>
        <div className={styles.bar}>
          <h1 className={styles.title}>
            {content.title}
          </h1>

          <div className="sharebar">
            <FacebookShareButton url={"http://tripadvisorplus.vercel.app/"+data.story.full_slug} quote={content.short} hashtag={'#imdbplus'}><FacebookIcon size={32} round /></FacebookShareButton>
            <LinkedinShareButton url={"http://tripadvisorplus.vercel.app/"+data.story.full_slug} summary={content.short}><LinkedinIcon size={32} round /></LinkedinShareButton>
            <TwitterShareButton url={"http://tripadvisorplus.vercel.app/"+data.story.full_slug} title={content.title}><TwitterIcon size={32} round /></TwitterShareButton>
          </div>

          <div className={styles.mainpicture} style={{ backgroundImage: `url("${content.mainpicture.filename}")` }}></div>

          <div className={styles.description}>
            {render(content.description)}
          </div>

          {cities && cities.length > 0 && <SmallCardList items={cities} title={"This Restaurant is located in"} type="city"></SmallCardList>}

        </div>
      </main>
    </SbEditable>
  )
}

export default Bar
