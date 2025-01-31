import React from 'react'
import styles from '../../styles/styles.module.css'

import NavigationBar from '../../components/NavigationBar'
import Home from '../../components/Home'

function English() {
  const scroolDiv = (id) =>{
    document.getElementById(id)?.scrollIntoView({ behavior:'smooth', block: 'start' })
  }

  return (
    <div className={styles.container_home}>
      <NavigationBar 
        option1="Home"
        option2="About Me"
        option3="Projects"
        option4="Contact"
        option5="Thanks"

        languageTitle="Language"
        optionLang1="Brazilian Portuguese"
        optionLang2="English"

        onNavigate={scroolDiv}
      />

      <Home 
        titleHome="Milena's Portfolio"
        paragraphHome="Hello! Welcome my name is Milena, a professional in constant evolution in the career of systems analysis and development. During this career
        i'm seeking to improve my abilities in programming languages and current frameworks. In this portfolio I share some personal projects that shows my learning
        and effort to create useful and innovative solutions, always searching new challenges and opportunities to grow professionally"
        buttonHome="Explore"

        titleAboutMe="About Me"
        paragraphAboutMe="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo"
        titleAboutMe2="Knowledges"
        p1="Programming Languages"
        p2="Frameworks"
        p3="Styling Languages"
        p4="Other Tools"
        p5="Markup Language"
        p6="Language"
        p7="English (B1) | Brazilian Portuguese(native)"


        onNavigate={scroolDiv}
      />
    </div>
  )
}

export default English