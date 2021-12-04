import styles from "../styles/Navigation.module.scss"
import Image from "next/image"

const Navigation = ({ locale, locales }) => {
  const resolveMovies = {
    en: 'Movies',
    nl: 'Films',
  }
  const resolveCities = {
    en: 'Cities',
    nl: 'Steden',
  }
  const resolveRestaurants = {
    en: 'Restaurants',
    nl: 'Resto',
  }
  const resolveBars = {
    en: 'Bars',
    nl: 'Bars',
  }
  const resolvePeople = {
    en: 'People',
    nl: 'Mensen',
  }
  const resolveNews = {
    en: 'News',
    nl: 'Nieuws',
  }
  const resolveMerchandise = {
    en: 'Shop',
    nl: 'Winkel',
  }
  let homeurl = "/";
  if (locale != 'default') {
    homeurl = "/" + locale;
  }

  const defaultLocale = locale === 'en' ? '/' : `/${locale}/`
  return (
    <header className={styles.navigationwrapper}>
      <nav className={styles.navigation} role="navigation">

      <div className={styles.navlogo}>
          <a href="/">
            <img
              src="https://a.storyblok.com/f/136715/372x373/e6af83683f/trip-advisor-photoroom.png"
              alt="TripAdvisorPlus Logo"
              className=""
            />
          </a>
        </div>
        
        <div className={styles.navlinkswrapper}>
          <div className={styles.navlinks}>
          <div className={styles.navlink}>
              <a href={`${defaultLocale}pages/cities`} className={styles.movie}>{resolveCities[locale]}</a>
            </div>
            <div className={styles.navlink}>
              <a href={`${defaultLocale}pages/restaurants`} className={styles.newsitem}>{resolveRestaurants[locale]}</a>
            </div>
            <div className={styles.navlink}>
              <a href={`${defaultLocale}pages/bars`} className={styles.newsitem}>{resolveBars[locale]}</a>
            </div>
            <div className={styles.navlink}>
              <a href={`${defaultLocale}pages/shop`} className={styles.product}>{resolveMerchandise[locale]}</a>
            </div>
       
          </div>
          <div className={styles.navlocales}>
            {
              locales.map(loc => {
                return (<div className={styles.navlocale} key={loc}>
                  <a href={`/${loc}`} className={`${locale === loc ? "selected" : ""}`}>{loc}</a>
                </div>)
              })
            }
          </div>
        </div>

      </nav>
    </header>
  )
}

export default Navigation