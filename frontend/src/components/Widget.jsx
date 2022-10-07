import React from 'react'
import WidgetContent from './WidgetContent'
import './css/Widget.css'

import { motion } from 'framer-motion'
export const Widget = () => {
    return (
        <div className="widget"
        /* initial={{ opacity: 0 }}
       animate={{ opacity: "100%" }}
       exit={{ y: -1000, transition: { duration: 0.9 } }}*/
        >
            <div className="widget__header">
                <h5>Quotes</h5>
            </div>
            <div className="widget__contents">
                <WidgetContent />

            </div>

        </div>
    )
}
