import React from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"

const BlogPost = ({ blok }) => {
  return (
    <SbEditable content={blok} key={blok._uid}>
      <div className="">
        <div className="">
          <h1 className="">
            {blok.title}
          </h1>
          <p className="">{blok.intro}</p>
          <img className="" src={blok.image} />
        </div>
      </div>
      <div className="">
        <div className="">
          {render(blok.long_text)}
        </div>
      </div>
    </SbEditable>
  )
}

export default BlogPost
// hello