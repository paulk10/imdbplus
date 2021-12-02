import React, { useState } from "react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/SmallCardList.module.scss"
import SmallCard from "./SmallCard"



const SmallCardList = ({ items, title, type }) => {

  return (
    // <div className={styles.itemgallery}>
    //   <div className={styles.title}>{title}</div>
    //   <div className={styles.relateditems}>
    //     {items.map((item, index) => (
    //       const lang = item.lang === "default" ? "/en" : `/${item.lang}`;
    //       return(
    //       <div>
    //         {type=="product" && <SmallCard title={item.content.title} picture={item.content.mainpicture.filename} url={item.full_slug} type={type} price={item.content.price} />}
    //         {type!="product" && <SmallCard title={item.content.title} picture={item.content.mainpicture.filename} url={item.full_slug} type={type} />}
    //       </div>
    //       );
    //     ))}
    //   </div>
    // </div>


    <div className={styles.itemgallery}>
      {title&&title!=""&&<div className={styles.title}>{title}</div>}
      <div className={styles.gallerycontent}>
      {items.map((item) => {
        const lang = item.lang === "default" ? "/en" : `/${item.lang}`;
        return (
          <div className={styles.smallcardwrapper}>
            {type == "product" && <SmallCard lang={lang} title={item.content.title} picture={item.content.mainpicture.filename} url={item.full_slug} type={type} price={item.content.price} />}
            {type != "product" && <SmallCard lang={lang} title={item.content.title}  url={item.full_slug} type={type} />}
          </div>
        );
      })}
      </div>
      
    </div>

  )
}

export default SmallCardList
