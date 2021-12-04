import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/Restaurant.module.scss"
import { getData } from "../utils/storyblok"
import RelatedItemGallerySmall from "./RelatedItemGallerySmall"
import RelatedItemGallery from "./RelatedItemGallery"
import InPageSlideshow from "./InPageSlideshow"
import SmallCardList from "./SmallCardList"

// const resolveDirectors = {
//   en: 'Directors',
//   nl: 'Regisseurs',
// }

const Restaurant = ({ data, level }) => {
  var locale = 'en';
  //enriching data
  if (level === 'data') {
    locale = data.story.lang;
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

          <div className={styles.rating}>
            Rating: {render(content.rating)}
          </div>

          <div className={styles.rating}>
            Price: {render(content.price)}
          </div>

          

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
