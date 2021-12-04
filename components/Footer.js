import styles from "../styles/Footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footerwrapper}>
      <div className={styles.footer}>

        <div className="">
          <img
            src="https://a.storyblok.com/f/136715/500x500/348ac65501/trip-advisor.png"
            alt="IMDBPlus Logo"
            className=""
          />
        </div>
        <p>Tripadvisor Plus is every bit as good as Tripadvisor. Plus!</p>
      </div>
    </footer>



  )
}

export default Footer
