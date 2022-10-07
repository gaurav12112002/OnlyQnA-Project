import React from 'react'
import './css/SidebarOptions.css'
import AddIcon from '@mui/icons-material/Add';
import { motion } from 'framer-motion';
import EP from '@mui/icons-material/Explore';

const SidebarOptions = () => {
  return (
    <div className="sidebarOptions"
      /*initial={{ opacity: 0 }}
      animate={{ opacity: "100%", transition: { duration: 1.5 } }}
      exit={{ opacity: 0 }}*/


    >

      <div className="sidebarOption">
        <EP/>
        <p className="text">Discover Spaces</p>
      </div>
      <div className="sidebarOption">
        <img
          src="https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?w=2000"
          alt=""
        />
        <p>Sports</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-858-100-VnZbEVtOIGkEHXlnYId9slumV59IPgkA.jpeg"
          alt=""
        />

        <p>Staff & Faculty</p>
      </div>
      <div className="sidebarOption">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-1913-100-B8JrwaVauFzsaTSqXDqoWLCXzQb2mTE9.jpeg"
          alt=""
        />
        <p>Labs</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-877-100-e7jKHEQr0HExAIA9rlsyHlV6HJyRruEo.jpeg"
          alt=""
        />
        <p>Food near XIE</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-801-100-Sf8h894FXbQZQit0TeqDrrqS6xw6dwCQ.jpeg"
          alt=""
        />
        <p>Events & Fests</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://images.unsplash.com/photo-1567521464027-f127ff144326?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FudGVlbnxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt=""
        />
        <p>Canteen</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-1140-100-24q3tiv4WhPssc5TGwf0mvCM5aiqGVXW.jpeg"
          alt=""
        />
        <p>Places Nearby</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-843-100-W7FzODceTO2aQmp8D7E4rKZ8YgSv21eR.jpeg"
          alt=""
        />
        <p>Admissions</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-2177-100-JiR07D1TQSfeQzRvWXomVaY4Poj2f8Yb.jpeg"
          alt=""
        />
        <p>Technology</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-996-100-bfZBQjeEenKKl8fcNY4tVv0FyArtB0Mb.jpeg"
          alt=""
        />
        <p>Courses</p>
      </div>
      {/* <div className="sidebarOption">
        <AddIcon />
        <p className="text">Discover Spaces</p>
      </div> */}
    </div>
  )
}

export default SidebarOptions