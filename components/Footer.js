import styles from "../styles/Footer.module.scss"
import Image from "next/image"


const Footer = () => {
  return (
<footer className={styles.footerwrapper}>
      <div className={styles.footer}>

      <div className="">
      <Image src="/trip-advisor-+-logo .png" alt="IMDBPlus Logo" width="150" height="150" />
        </div>
        
        <p>TripAdvisorPlus is every bit as good as TripAdvisor. Plus!</p>
      </div>
    </footer>



  )
}

export default Footer
