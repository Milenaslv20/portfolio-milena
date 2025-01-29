import React from 'react'
import styles from '../styles/styles.module.css'

import Me from '../svg/Me.svg'
import Pc1 from '../svg/Pc1.svg'
import Pc2 from '../svg/Pc2.svg'
import Pc3 from '../svg/Pc3.svg'

const Home = ( { titleHome, paragraphHome, buttonHome } ) => {
  return (
    <div className={styles.container_home}>
      <div className={styles.container_home_comp}>
        <div className={styles.img_me} id='home'>
            <img src={Me} alt='' width={685}></img>
        </div>

        <div className={styles.texts_home}>
            <div className={styles.line_home}></div>

            <h1 className={styles.text_inter} id={styles.text_inter}>{titleHome}</h1>

            <p className={styles.text_openSans} id={styles.text_openSans}>{paragraphHome}</p>

            <button className={styles.text_inter} id={styles.button_home}>{buttonHome}</button>
        </div>
      </div>

      <div className={styles.line_divis} id='aboutMe'>
        <div className={styles.line_div}></div>
      </div>

      <div className={styles.container_about_me}>
        <div className={styles.images}>
          <img src={Pc1} alt='' id={styles.img1}></img>
          <img src={Pc2} alt='' width={674} id={styles.img2}></img>
          <img src={Pc3} alt='' width={348} id={styles.img3}></img>
        </div>
      </div>
    </div>
  )
}

export default Home