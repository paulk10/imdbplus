import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/Movie.module.scss"
import { getData } from "../utils/storyblok"
import RelatedItemGallerySmall from "./RelatedItemGallerySmall"
import RelatedItemGallery from "./RelatedItemGallery"
import InPageSlideshow from "./InPageSlideshow"
import SmallCardList from "./SmallCardList"

const resolveDirectors = {
  en: 'Directors',
  nl: 'Regisseurs',
}

const resolveWriters = {
  en: 'Writers',
  nl: 'Schrijvers',
}

const resolveStars = {
  en: 'Stars',
  nl: 'Sterren',
}

const resolveMerchandise = {
  en: 'Merchandise',
  nl: 'Producten',
}

const resolveNews = {
  en: 'News',
  nl: 'Nieuws',
}

const Movie = ({ data, level }) => {
  var locale = 'en';
  //enriching data
  if (level === 'data') {
    locale = data.story.lang;
    var content = data.story.content;
    var directors = data.rels.filter(obj => {
      return content.directors.includes(obj.uuid);
    });
    var stars = data.rels.filter(obj => {
      return content.stars.includes(obj.uuid);
    });
    var writers = data.rels.filter(obj => {
      return content.writers.includes(obj.uuid);
    })
    var studios = data.rels.filter(obj => {
      return content.studios.includes(obj.uuid);
    })
    var genres = data.rels.filter(obj => {
      return content.genres.includes(obj.uuid);
    })
    var ageratings = data.rels.filter(obj => {
      return content.agerating.includes(obj.uuid);
    })
  } else {
    var content = data;
  }

  const [products, setProducts] = useState([]);
  getData(data.story.uuid, locale, content.preview = false, 'product', 'movies').then(
    function (result) {
      setProducts(result.data.stories);
    });

  const [newsitems, setNewsitems] = useState([]);
  getData(data.story.uuid, locale, content.preview = false, 'newsitem', 'movies').then(
    function (result) {
      setNewsitems(result.data.stories);
    });

  var pictures = content.pictures;

  //returning the HTML
  return (
    <SbEditable content={content} key={content._uid}>
      <main>
        {/* <div className={[styles.movie, styles.test].join(' ')}> */}
        <div className={styles.movie}>
          <h1 className={styles.title}>
            {content.title}
          </h1>
          <div className={styles.genrelist}>
            {genres.map((item, index) => (
              <div className={styles.genre}>
                {item.content.title}
              </div>
            ))}
          </div>
          
          <div className={styles.ageratinglist}>
            {ageratings.map((item, index) => (
              <a href={`/${item.full_slug}`}><div className={styles.agerating}>
                {item.content.title}
              </div></a>
            ))}
          </div>
        

          <div className={styles.mainpicture} style={{ backgroundImage: `url("${content.mainpicture.filename}")` }}>
          </div>
          <div className={styles.imagegallery}>
            <InPageSlideshow pictures={pictures}></InPageSlideshow>
          </div>  

          <div className={styles.short}>
            {render(content.short)}
          </div>
          <div className={styles.synopsis}>
            {render(content.synopsis)}
          </div>
          <div className={styles.peoplesegment}>
            <div className={styles.content}>
              {directors && directors.length > 0 && <RelatedItemGallerySmall items={directors} title={resolveDirectors[locale]} type="personality"></RelatedItemGallerySmall>}
              {writers && writers.length > 0 && <RelatedItemGallerySmall items={writers} title={resolveWriters[locale]} type="personality"></RelatedItemGallerySmall>}
              {stars && stars.length > 0 && <RelatedItemGallerySmall items={stars} title={resolveStars[locale]} type="personality"></RelatedItemGallerySmall>}
            </div>

          </div>

          {products && products.length > 0 && <SmallCardList items={products} title={resolveMerchandise[locale]} type="product"></SmallCardList>}
          {newsitems && newsitems.length > 0 && <SmallCardList items={newsitems} title={resolveNews[locale]} type="newsitem"></SmallCardList>}
        </div>
      </main>
    </SbEditable>
  )
}

export default Movie
