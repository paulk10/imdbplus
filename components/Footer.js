import styles from "../styles/Footer.module.scss"

const Footer = () => {
  return (
<footer className={styles.footerwrapper}>
      <div className={styles.footer}>

        <div className="">
          <img
            src="https://a.storyblok.com/f/136715/167x167/71e8c9a784/trip-advisor-photoroom_small.jpg"
            alt="TripAdvisorPlus Logo"
            className=""
          />
        </div>
        <p>TripAdvisorPlus is every bit as good as TripAdvisor. Plus!</p>
      </div>
    </footer>



  )
}

export default Footer
