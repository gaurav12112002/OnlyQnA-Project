import React from 'react'
import './css/Sidebar.css'
import SidebarOptions from './SidebarOptions'
import { motion } from 'framer-motion'
const Sidebar = () => {
  return (
    <div className="sidebar"
      /*initial={{ opacity: 0 }}
      animate={{ opacity: "100%" }}
      exit={{ y: -1500, transition: { duration: 0.6 } }}*/
    >
      <SidebarOptions />
    </div>
  )
}

export default Sidebar