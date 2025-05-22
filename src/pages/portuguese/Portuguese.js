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
        
        languageTitle="Language"
        optionLang1="Brazilian Portuguese"
        optionLang2="English"

        onNavigate={scroolDiv}
      />

      <Home 
        titleHome="Milena's Portfólio"
        paragraphHome="Olá! Seja bem vindo(a) me chamo Milena, uma profissional em constante evolução na área de desenvolvimento de sistemas. 
        Ao longo da minha trajetória, busco aprimorar minhas habilidades em linguagens de programação e frameworks utilizadas atualmente Neste portfólio, 
        compartilho alguns dos projetos que refletem meu aprendizado e empenho em criar soluções eficientes e inovadoras, sempre em busca de novos desafios 
        e oportunidades para crescer profissionalmente"
        buttonHome="Explorar"


        titleAboutMe="Sobre Mim"
        paragraphAboutMe="Profissional em Análise e Desenvolvimento de Sistemas com experiência no desenvolvimento de aplicações web fullstack, visualização 
        e modelagem de bancos de dados. Entusiasta de tecnologia, resolução de problemas e otimização de processos, em busca de aprendizado contínuo."
        titleAboutMe2="Conhecimentos"
        p1="Linguagem de Programação"
        p2="Frameworks"
        p3="Linguagem de Estilização"
        p4="Outras Ferramentas"
        p5="Linguagem de Marcação"
        p6="Idiomas"
        p7="Inglês (B1)"


        titleProjects="Projetos"
        acess="Acessar:"
        titlePrj1="1. Relatório de Crimes Ambientais no Amazonas"
        pProject1="Projeto freelancer de finalização de curso utilizando Power BI e FrontEnd para demonstrar a importância da denúncia de crimes ambientais e
        o monitoramento desses dados sendo mostrado dados estatísticos reais do estado do Amazonas para visualização e comparação. Não responsivo para celulares."


        titleContact="Contato"
        paragraphContact="Gostou ou tem alguma dúvida? Fique à vontade para entrar em contato! Estou disponível para novas oportunidades e colaborações. 
        Você pode me encontrar pelos seguintes canais"


        titleThanks="Agradecimento"
        paragraphThanks="Agradeço a visita! A tecnologia é uma força poderosa que conecta pessoas e transforma ideias em realidade, podendo-se explorar 
        suas infinitas possibilidades e aplicar o conhecimento para criar soluções que façam a diferença. Cada projeto compartilhado representa não apenas 
        aprendizado, mas também o impacto que a tecnologia pode ter no mundo. Fico grata pelo seu interesse e feedbacks serão bem vindos."

        onNavigate={scroolDiv}
      />
    </div>
  )
}

export default Portuguese