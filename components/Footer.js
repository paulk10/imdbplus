import styles from "../styles/Footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footerwrapper}>
      <div className={styles.footer}>

      <div className={styles.navlogo}>
          <a href="/">
            <img
              src="https://a.storyblok.com/f/136715/372x373/e6af83683f/trip-advisor-photoroom.png"
              alt="IMDBPlus Logo"
              className=""
            />
          </a>
        </div>
        <p>Tripadvisor Plus is every bit as good as Tripadvisor. Plus!</p>
      </div>
    </footer>



  )
}

export default Footer
