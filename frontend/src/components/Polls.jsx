import React from 'react'
import QuoraHeader from './QuoraHeader';
import './css/Polls.css'
import PL from '@mui/icons-material/PollOutlined';
import {motion} from 'framer-motion';

function Polls() {
    return (
        <div className="Poll">
            <QuoraHeader />
            <div className="pollbody"
                /*initial={{ opacity: 0 }}
                animate={{ opacity: "100%"}}
                exit={{opacity: 0}}*/
            >
                <h1>Upcoming Feature...</h1>
                <h2>Polls</h2>
                <PL />
            </div>
        </div>
    )
}

export default Polls