import React from 'react'
import styles from '../../styles/styles.module.css'

import NavigationBar from '../../components/NavigationBar'

import Home from '../../components/Home'

function Portuguese() {
  return (
    <div className={styles.container_home}>

      <NavigationBar />
      <Home />
    </div>
  )
}

export default Portuguese