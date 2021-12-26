import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/City.module.scss"
import { getData } from "../utils/storyblok"
import RelatedItemGallerySmall from "./RelatedItemGallerySmall"
import RelatedItemGallery from "./RelatedItemGallery"
import InPageSlideshow from "./InPageSlideshow"
import SmallCardList from "./SmallCardList"
import DynamicComponent from './DynamicComponent' //this needs to be imported so that the blocks work
import { FacebookShareButton, FacebookIcon,TwitterShareButton, TwitterIcon, LinkedinShareButton, LinkedinIcon } from 'next-share';


const City = ({ data, level }) => {
  if (level === 'data') {
    var content = data.story.content;
  } else {
    var content = data;
  }

  //returning the HTML
  return (
    <SbEditable content={content} key={content._uid}>
      <main>
        {/* <div className={[styles.movie, styles.test].join(' ')}> */}
        <div className={styles.city}>
          <h1 className={styles.title}>
            {content.title}
          </h1>

          <div className={styles.score}>
            Population: {render(content.population)}
          </div>

          <div className="sharebar">
            <FacebookShareButton url={"http://tripadvisorplus.vercel.app/"+data.story.full_slug} quote={content.short} hashtag={'#imdbplus'}><FacebookIcon size={32} round /></FacebookShareButton>
            <LinkedinShareButton url={"http://tripadvisorplus.vercel.app/"+data.story.full_slug} summary={content.short}><LinkedinIcon size={32} round /></LinkedinShareButton>
            <TwitterShareButton url={"http://tripadvisorplus.vercel.app/"+data.story.full_slug} title={content.title}><TwitterIcon size={32} round /></TwitterShareButton>
          </div>

          <div className={styles.mainpicture} style={{ backgroundImage: `url("${content.mainpicture.filename}")` }}></div>

          <div className={styles.description}>
            {render(content.description)}
          </div>
        </div>

        {content.body ? content.body.map((content) =>
          <DynamicComponent data={content} key={content._uid} />
        ) : null}

      </main>
    </SbEditable>
  )
}

export default City
