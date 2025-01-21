import React from 'react'
import styles from '../styles/styles.module.css'

import Me from '../svg/Me.svg'

const Home = ( { titleHome, paragraphHome } ) => {
  return (
    <div className={styles.container_home_comp}>
        <div className={styles.img_me}>
            <img src={Me} alt='' width={685}></img>
        </div>

        <div className={styles.texts_home}>
            <div className={styles.line_home}></div>

            <h1 className={styles.text_inter} id={styles.text_inter}>{titleHome}</h1>

            <p className={styles.text_openSans} id={styles.text_openSans}>{paragraphHome}</p>
        </div>
    </div>
  )
}

export default Home