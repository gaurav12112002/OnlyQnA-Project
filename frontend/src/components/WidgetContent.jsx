import React from 'react'
import { useSelector } from 'react-redux';
import { Avatar, Button } from '@mui/material';
import './css/WidgetContent.css'
import { selectUser } from "../feature/userSlice";
import ReactTimeAgo from 'react-time-ago';
import { motion } from "framer-motion";
import Quotes from '../Quotes.json';
import { Carousel } from 'react-responsive-carousel';
function LastSeen({ date }) {
  return (
    <div>
      <ReactTimeAgo date={date} locale="en-US" timeStyle="round" />
    </div>
  )
}

const WidgetContent = ({ post }) => {
  const user = useSelector(selectUser);
  return (
    <div className=" widgetContents"
    /*initial={{ opacity: 0 }}
    animate={{ opacity: "100%", transition: { duration: 1.5 } }}
    exit={{ opacity: 0 }}*/
    >
      <div className="widgetContent">

        {/* <div className="widget__contentTitle">
          <h4 className='profileU'>{user?.userName}</h4>


          <img className='profileImg' src={user?.photo} alt="" />




        </div> */}
        {/* {
          Quotes.reduce((val)=>{
            return(
              <div>
                <p>{val.quote}</p>
              </div>
              
            )
          })
        }
        <button className='butH'>
                Next
                </button> */}

        <Carousel interval={7000} autoPlay={true} showIndicators={false}  showStatus={false} showThumbs={false} infiniteLoop={true}>
          <div>

            <p className='QuotesP'>"The uncreative mind can spot wrong answers, but it takes a very creative mind to spot wrong questions."</p>
          </div>
          <div>
            <p className='QuotesP'>"The wrong answers are stopping the right ones from emerging."</p>

          </div>
          <div>
            <p className='QuotesP'>"Right answers to difficult questions are better than wrong answers to difficult questions."</p>

          </div>
          <div>
            <p className='QuotesP'>"The best way to get the right answer on the Internet is not to ask a question, it's to post the wrong answer."</p>

          </div>
          {/* <div>
          <p className='QuotesP'></p>
          </div> */}

        </Carousel>
      </div>
    </div>
  )
}

export default WidgetContent