import React, { useState } from 'react';
import "./css/QuoraHeader.css";
import "./css/custom-animation.css"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { Modal } from 'react-responsive-modal';
import axios from 'axios';
import ExpandMore from '@mui/icons-material/ExpandMoreRounded';
import CloseIcon from '@mui/icons-material/CloseOutlined';


import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

import HomeIcon from '@mui/icons-material/Home';
import FP from '@mui/icons-material/FilterList';
import AT from '@mui/icons-material/AssignmentIndOutlined';
import PT from '@mui/icons-material/PeopleAltOutlined';
import NT from '@mui/icons-material/NotificationsNoneOutlined';
import PL from '@mui/icons-material/PollOutlined';
//import UA from '@mui/icons-material/Unpublished';
import UA from '@mui/icons-material/ModeEditOutline';
import { Avatar, Box, Button, FormControl, Input, Select } from '@mui/material';
import Sh from '@mui/icons-material/SearchOutlined';
import "react-responsive-modal/styles.css";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { logout, selectUser } from "../feature/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from 'react-router-dom';


import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import CustomNoti from './CustomNoti';




function QuoraHeader() {

  let navigate = useNavigate();

  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  const sports = "Sports";
  const canteen = "Canteen";
  const lab = "Labs";
  const food = "Food near XIE";
  const staff = "Staff & Faculty";
  const events = "Events & Fests";
  const places = "Places nearby";
  const admis = "Admissions";
  const course = "Courses";
  const [isModalOpen, setIsModalOpen] = useState(false);
  //const [searchTitle, setSearchTitle] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  const [question, setQuestion] = useState("");
  const [category, setCategory] = useState("general");
  const Close = <CloseIcon />;
  const dispatch = useDispatch();
  const user = useSelector(selectUser);


  const handleSubmit = async () => {
    if (question !== "") {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = {
        questionName: question,
        questionUrl: inputUrl,
        category: category,
        user: user
      };
      await axios
        .post("/api/questions", body, config)
        .then((res) => {
          console.log(res.data);
          alert(res.data.message);
          


          setIsModalOpen(false);
          navigate("/search");
          window.location.reload(false);

        })
        .catch((e) => {
          console.log(e);
          alert("Error in adding question");

        });

    }
  };
  const handleLogout = () => {
    if (window.confirm("Are you sure to logout ?")) {
      signOut(auth)
        .then(() => {
          dispatch(logout());
          navigate("/");

          console.log("Logged out");
        })
        .catch(() => {
          console.log("error in logout");
        });
    }
  };


  return (
    <div className='qHeader'>
      <div className='qHeader-content'>
        <div className='qHeader__logo'>
          <img
            src="https://video-public.canva.com/VAD8lt3jPyI/v/ec7205f25c.gif"
            alt="logo"
          />
        </div>
        <div className='qHeader__icons'>
          <Link to="/home">

            <div className={`qHeader__icon ${location.pathname === "/home" ? "active" : " "}`}><HomeIcon /></div>
          </Link>
          <Link to="/search">

            <div className={`qHeader__icon ${location.pathname === "/search" ? "active" : " "}`}><Sh /></div>
          </Link>
          <Link to="/filter">

            <div className={`qHeader__icon ${location.pathname === "/filter" ? "active" : " "}`}><FP /></div>
          </Link>
          <Link to="/unanswered">

            <div className={`qHeader__icon ${location.pathname === "/unanswered" ? "active":" "}`}><UA/></div>
          </Link> 

          <Link to="/polls">

            <div className={`qHeader__icon ${location.pathname === "/polls" ? "active" : " "}`}><PL /></div>
          </Link>
          <div className='qHeader__icon'><NT /></div>
        </div>
        {/* <div className='qHeader__input'>
          <Search />
          <input type="text" placeholder='Search Topics' />

        </div> */}
        {/* <div className='qHeader__input'> 
                <Sh />
                <input style={{ width: "55%", height: "30px" }} type="text" placeholder='Search Questions'
                onChange={(e) => setSearchTitle(e.target.value)}
                 />

            </div> */}
        <div className='qHeader__Rem'>
          <span onClick={handleLogout}>
            <Avatar src={user?.photo} />
          </span>
        </div>
        <button className='askBut' onClick={() => setIsModalOpen(true)}>Ask Question</button>
        <Modal
          open={isModalOpen}
          CloseIcon={Close}
          onClose={() => setIsModalOpen(false)}
          closeOnEsc
          center
          closeOnOverlayClick={true}
          styles={{
            overlay: {
              height: "auto",
            },
          }}

        /*classNames={{
          overlayAnimationIn: 'customEnterOverlayAnimation',
          overlayAnimationOut: 'customLeaveOverlayAnimation',
          modalAnimationIn: 'customEnterModalAnimation',
          modalAnimationOut: 'customLeaveModalAnimation',
        }}

      /*styles={{
        overlay: {
          height: "auto",
          

        },
      }}*/
        >
          <div className="modal__title">
            <h5>Add Question</h5>
            <h5>Share Link</h5>
          </div>
          <div className="modal__info">
            <Avatar src={user?.photo} className="avatar" />
            <div className="modal__scope">
              <PT />
              <p>Public</p>
              <ExpandMore />
            </div>
          </div>
          <div className="modal__Field">
            <Input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              type=" text"
              placeholder="Start your question with 'What', 'How', 'Why', etc. "
            />
            {/* <Input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                type=" text"
                placeholder="Choose Category "
              /> */}
            <Box sx={{ minWidth: 300 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-helper-label"></InputLabel>
                <Select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="General">

                  </MenuItem>
                  <MenuItem value={canteen}>Canteen</MenuItem>
                  <MenuItem value={sports}>Sports</MenuItem>
                  <MenuItem value={lab}>Labs in XIE</MenuItem>
                  <MenuItem value={food}>Food near XIE</MenuItem>
                  <MenuItem value={staff}>Staff and Faculty</MenuItem>
                  <MenuItem value={events}>Events and Fests</MenuItem>
                  <MenuItem value={admis}>Admissions</MenuItem>
                  <MenuItem value={course}>Courses</MenuItem>
                  <MenuItem value={places}>Places nearby</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <input
                type="text"
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                style={{
                  margin: "5px 0",
                  border: "1px solid lightgray",
                  padding: "10px",
                  outline: "2px solid #000",
                }}
                placeholder="Optional: inclue a link that gives context"
              />
              {inputUrl !== "" && (
                <img
                  style={{
                    height: "500px",
                    objectFit: "contain",
                  }}
                  src={inputUrl}
                  alt="Couldn't Load"
                />
              )}
            </div>
          </div>
          <div className="modal__buttons">
            <button className="cancle" onClick={() => setIsModalOpen(false)}>
              Cancel
            </button>

            <button onClick={handleSubmit} type="submit" className="add">
              Add Question
            </button>
          </div>
        </Modal>



      </div >

    </div >
  )
}

export default QuoraHeader