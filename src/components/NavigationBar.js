import React, { useState } from 'react';
import styles from '../styles/styles.module.css';

import IconOption from '../svg/IconOption.svg';

import Language from './Language';

function NavigationBar() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () =>{
        setIsModalOpen(true);
    };

    const closeModal = () =>{
        setIsModalOpen(false)
    }

  return (
    <div className={styles.container_nav}>
        <h1 className={styles.name}>MILENA MEDEIROS</h1>

        <div className={styles.navigation}>
            <h1>Home</h1>
            <h1>Sobre mim</h1>
            <h1>Projetos</h1>
            <h1>Contato</h1>
            <h1>Agradecimento</h1>
        </div>

        <img className={styles.icon_option} src={IconOption} alt='option' onClick={openModal}/>

        {isModalOpen && (
                <Language isOpen={setIsModalOpen} onClose={closeModal} />
            )
        }
    </div>
  )
}

export default NavigationBar