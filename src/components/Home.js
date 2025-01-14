import React from 'react'
import styles from '../styles/styles.module.css'

import Me from '../svg/Me.svg'

function Home() {
  return (
    <div className={styles.container_home_comp}>
        <div className={styles.img_me}>
            <img src={Me} alt='' width={685}></img>
        </div>

        <div className={styles.texts_home}>
            <div className={styles.line_home}></div>

            <h1 className={styles.text_inter} id={styles.text_inter}>Milena's Portfólio</h1>

            <p className={styles.text_openSans} id={styles.text_openSans}>
                Olá! Seja bem vindo(a) me chamo Milena, uma profissional em constante evolução na área de desenvolvimento de sistemas. 
                Ao longo da minha trajetória, busco aprimorar minhas habilidades em linguagens de programação e frameworks utilizadas atualmente Neste portfólio, 
                compartilho alguns dos projetos que refletem meu aprendizado e empenho em criar soluções eficientes e inovadoras, sempre em busca de novos desafios 
                e oportunidades para crescer profissionalmente
            </p>
        </div>
    </div>
  )
}

export default Home