import React, { useState } from 'react';
import styles from '../styles/styles.module.css';

import IconOption from '../svg/IconOption.svg';

import Language from './Language';

const NavigationBar = ( { option1, option2, option3, option4, option5, languageTitle, optionLang1, optionLang2, onNavigate } ) => {
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
            <h1 onClick={() => onNavigate("home")}>{option1}</h1>
            <h1 onClick={() => onNavigate("aboutMe")}>{option2}</h1>
            <h1>{option3}</h1>
            <h1>{option4}</h1>
            <h1>{option5}</h1>
        </div>

        <img className={styles.icon_option} src={IconOption} alt='option' onClick={openModal}/>

        {isModalOpen && (
                <Language 
                    isOpen={setIsModalOpen} 
                    onClose={closeModal}
                    titleHeader={languageTitle}
                    option1Lang={optionLang1}
                    option2Lang={optionLang2}
                />
            )
        }
    </div>
  )
}

export default NavigationBar