import React from 'react'
import styles from '../styles/styles.module.css'

import Me from '../svg/Me.svg'
import Pc1 from '../svg/Pc1.svg'
import Pc2 from '../svg/Pc2.svg'
import Pc3 from '../svg/Pc3.svg'
import ImageProj from '../svg/ImageProj1.svg'
import ImageProj2 from '../svg/ImageProj2.svg'

import IconElipsis from '../svg/IconEllipsis.svg'

const Home = ( { titleHome, paragraphHome, buttonHome, titleAboutMe, paragraphAboutMe, titleAboutMe2, p1, p2, p3, p4, p5, p6, p7, titleProjects, onNavigate} ) => {
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

      <div className={styles.line_divis} id='projects'>
        <div className={styles.line_div}></div>
      </div>

      {/*PROJECTS COMPONENT*/}
      <div className={styles.container_project}>
        <div className={styles.div_proj}>
          <h1 className={styles.text_inter} id={styles.title_projects}>{titleProjects}</h1>
          <div className={styles.line_projects}></div>
          <img src={ImageProj} alt='' className={styles.img_proj1}></img>
          <img src={ImageProj2} alt='' className={styles.img_proj2}></img>

          <div className={styles.texts_project}>
            <h1 className={styles.text_inter} id={styles.title_projects1}>1. power bi</h1>
            <div className={styles.line_projects_p}></div>
            <p className={styles.text_openSans} id={styles.paragraph_projects1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            </p>
          </div>

          <img src={IconElipsis} alt='' className={styles.icon_projects}></img>

          <div className={styles.texts_project} id={styles.texts_project2}>
            <h1 className={styles.text_inter} id={styles.title_projects1}>2. power bi</h1>
            <div className={styles.line_projects_p} id={styles.line_projects3}></div>
            <p className={styles.text_openSans} id={styles.paragraph_projects1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            </p>
          </div>
          <img src={ImageProj} alt='' className={styles.img_proj2} id={styles.img_proj3}></img>
          <img src={ImageProj2} alt='' className={styles.img_proj1} id={styles.img_proj4}></img>
            
          <img src={IconElipsis} alt='' className={styles.icon_projects} id={styles.icon_projects2}></img>
        
          <div className={styles.texts_project} id={styles.texts_project3}>
            <h1 className={styles.text_inter} id={styles.title_projects1}>3. power bi</h1>
            <div className={styles.line_projects_p}></div>
            <p className={styles.text_openSans} id={styles.paragraph_projects1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            </p>
          </div>
          <img src={ImageProj2} alt='' className={styles.img_proj2} id={styles.img_proj5}></img>
          <img src={ImageProj} alt='' className={styles.img_proj1} id={styles.img_proj6}></img>


        </div>
      </div>
    </div>
  )
}

export default Home