import React from 'react'
import styles from '../styles/styles.module.css'

import { Link } from "react-router-dom";

const Language = ({ isOpen, onClose, titleHeader, option1Lang, option2Lang }) => {
    if (!isOpen) return null

  return (
    <div className={styles.container_language}>
      <div className={styles.modal_header}>
        <h1>{titleHeader}</h1>
      </div>

      <div className={styles.modal_options}>
          <Link to={"/"} className={styles.option_lang}>{option1Lang}</Link>
          <Link to={"/english"} className={styles.option_lang}>{option2Lang}</Link>
      </div>

      <button className={styles.button_close_modal} onClick={onClose}>X</button>
    </div>
  )
}

export default Language