import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/Restaurant.module.scss"
import { getData } from "../utils/storyblok"
import RelatedItemGallerySmall from "./RelatedItemGallerySmall"
import RelatedItemGallery from "./RelatedItemGallery"
import InPageSlideshow from "./InPageSlideshow"
import SmallCardList from "./SmallCardList"

const Restaurant = ({ data, level }) => {
  if (level === 'data') {
    var content = data.story.content;
  } else {
    var content = data;
  }
  
  //returning the HTML
  return (
    <SbEditable content={content} key={content._uid}>
      <main>
        <div className={styles.restaurant}>
          <h1 className={styles.title}>
          {content.title}
          </h1>

          <div className={styles.score}>
             Rating: {render(content.rating)}
           </div>

          <div className={styles.mainpicture} style={{ backgroundImage: `url("${content.mainpicture.filename}")` }}></div>
          
          <div className={styles.description}>
             {render(content.description)}
           </div>

           <div className={styles.description}>
            {render(content.adress)}
            </div>

          </div>
      </main>
    </SbEditable>
  )
}

export default Restaurant
