import React from 'react'
import styles from '../styles/styles.module.css'

import Me from '../svg/Me.svg'
import Pc1 from '../svg/Pc1.svg'
import Pc2 from '../svg/Pc2.svg'
import Pc3 from '../svg/Pc3.svg'

const Home = ( { titleHome, paragraphHome, buttonHome, titleAboutMe, paragraphAboutMe, titleAboutMe2, p1, p2, p3, p4, p5, p6, p7, onNavigate} ) => {
  return (
    <div className={styles.container_home}>
      {/*HOME COMPONENT*/}
      <div className={styles.container_home_comp}>
        <div className={styles.img_me} id='home'>
            <img src={Me} alt='' width={685}></img>
        </div>

        <div className={styles.texts_home}>
            <div className={styles.line_home}></div>

            <h1 className={styles.text_inter} id={styles.text_inter}>{titleHome}</h1>

            <p className={styles.text_openSans} id={styles.text_openSans}>{paragraphHome}</p>

            <button className={styles.text_inter} id={styles.button_home} onClick={() => onNavigate("aboutMe")}>{buttonHome}</button>
        </div>
      </div>

      <div className={styles.line_divis} id='aboutMe'>
        <div className={styles.line_div}></div>
      </div>

      {/*ABOUT ME COMPONENT*/}
      <div className={styles.container_about_me}>
        <div className={styles.images}>
          <img src={Pc1} alt='' id={styles.img1}></img>
          <img src={Pc2} alt='' id={styles.img2}></img>
          <img src={Pc3} alt='' id={styles.img3}></img>
        </div>

        <div className={styles.about_me_text}>
          <h1 className={styles.text_inter} id={styles.title_about_me}>{titleAboutMe}</h1>
          <div className={styles.line_about_me}></div>
          <p className={styles.text_openSans}>{paragraphAboutMe}</p>
        </div>

        <div className={styles.about_me_text2}>
          <h1 className={styles.text_inter} id={styles.title_about_me2}>{titleAboutMe2}</h1>
          <div className={styles.paragraph_group_about_me}>
            <div className={styles.text_openSans} id={styles.group_pargr}>
              <p>{p1}</p>
              <ul className={styles.ul}>
                <li>JavaScript</li>
                <li>C</li>
                <li>Node.JS</li>
                <li>SQL</li>
              </ul>
            </div>

            <div className={styles.text_openSans} id={styles.group_pargr}>
              <p>{p3}</p>
              <ul className={styles.ul}>
                <li>CSS</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>

            <div className={styles.text_openSans} id={styles.group_pargr}>
              <p>{p2}</p>
              <ul className={styles.ul}>
                <li>ReactJs</li>
                <li>Angular</li>
              </ul>
            </div>

            <div className={styles.text_openSans} id={styles.group_pargr}>
              <p>{p5}</p>
              <ul className={styles.ul}>
                <li>HTML</li>
              </ul>
            </div>

            <div className={styles.text_openSans} id={styles.group_pargr}>
              <p>{p4}</p>
              <ul className={styles.ul}>
                <li>Power BI</li>
                <li>Figma</li>
                <li>Arduino</li>
              </ul>
            </div>

            <div className={styles.text_openSans} id={styles.group_pargr}>
              <p>{p6}</p>
              <ul className={styles.ul}>
                <li>{p7}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.line_divis} id='aboutMe'>
        <div className={styles.line_div}></div>
      </div>

      {/*PROJECTS COMPONENT*/}

    </div>
  )
}

export default Home