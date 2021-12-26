import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/TopMovies.module.scss"
import SmallCardList from "./SmallCardList"
import { getData, getFPSData } from "../utils/storyblok"
import { createPortal } from "react-dom"



const TopRestaurants = ({ data, level, locale }) => {


  var content = data;

  const [restaurant, setRestaurant] = useState([]);
  getFPSData(content._uid, locale, content.preview = false, 'restaurant').then(
    function (result) {
      setRestaurant(result.data.stories);
  });
  //returning the HTML
  return (
    <SbEditable content={content} key={content._uid}>
      <main>
        {/* <div className={[styles.movie, styles.test].join(' ')}> */}
        <div className={styles.newsitem}>
          <h1 className={styles.title}>
            {content.title}
          </h1>

          {content.short&& <div className={styles.short}>
            {render(content.short)}
          </div>}

          {restaurant && restaurant.length > 0 && <SmallCardList items={restaurant} title="" type="restaurant"></SmallCardList>}

        </div>
      </main>
    </SbEditable>
  )
}

export default TopRestaurants
