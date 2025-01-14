import React from 'react'
import styles from '../styles/styles.module.css'

const Language = ({ isOpen, onClose }) => {
    if (!isOpen) return null

  return (
    <div className={styles.container_language}>
      <div className={styles.options2}>
        <h1>Idioma</h1>
      </div>

        <div className={styles.options}>
            <h1 id={styles.option_lang}>Português</h1>
            <h1 id={styles.option_lang}>Inglês</h1>
        </div>

        <button className={styles.button_close_modal} onClick={onClose}>X</button>
    </div>
  )
}

export default Language