import React from 'react'
import styles from '../../styles/styles.module.css'

import NavigationBar from '../../components/NavigationBar'
import Home from '../../components/Home'

function Portuguese() {
  const scroolDiv = (id) =>{
    document.getElementById(id)?.scrollIntoView({ behavior:'smooth', block: 'start' })
  }

  return (
    <div className={styles.container_home}>
      <NavigationBar 
        option1="Home"
        option2="Sobre mim"
        option3="Projetos"
        option4="Contato"
        option5="Agradecimento"
        
        languageTitle="Idioma"
        optionLang1="Português"
        optionLang2="Inglês"

        onNavigate={scroolDiv}
      />

      <Home 
        titleHome="Milena's Portfólio"

        paragraphHome="Olá! Seja bem vindo(a) me chamo Milena, uma profissional em constante evolução na área de desenvolvimento de sistemas. 
        Ao longo da minha trajetória, busco aprimorar minhas habilidades em linguagens de programação e frameworks utilizadas atualmente Neste portfólio, 
        compartilho alguns dos projetos que refletem meu aprendizado e empenho em criar soluções eficientes e inovadoras, sempre em busca de novos desafios 
        e oportunidades para crescer profissionalmente"

        buttonHome="Explorar"
      />
    </div>
  )
}

export default Portuguese