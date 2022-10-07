import React from 'react'
import './css/Quora.css'
import { Feed } from './Feed'
import QuoraHeader from './QuoraHeader'
import Sidebar from './Sidebar'
import { Widget } from './Widget'
import { motion } from 'framer-motion'

const Quora = () => {
  return (
    <div className="Quora">
      <QuoraHeader/> 
    <div className="quora"
    /*initial={{ opacity: 0}}
        animate={{ opacity: "100%"}}
        exit={{  opacity:0}}*/
    >
        
        <div className="quora__contents">
          <div className="quora__content">
            <Sidebar/>
            <Feed/>
            <Widget/>
          </div>
        </div>

    </div>
    </div>
  )
}

export default Quora