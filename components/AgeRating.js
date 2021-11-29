import React from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/AgeRating.module.scss"

const AgeRating = ({ data }) => {
  var content = data.story.content;
  return (
    <SbEditable content={content} key={content._uid}>
      <main>
        {/* <div className={[styles.movie, styles.test].join(' ')}> */}
        <div className={styles.agerating}>
          <h1 className={styles.title}>
            {content.title}
          </h1>
        </div>
        <div className={styles.description}>
          {render(content.description)}
        </div>
      </main>
    </SbEditable>
  )
}

export default AgeRating
