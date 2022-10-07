//import logo from './logo.svg';
import React, { useEffect } from 'react';
import { BrowserRouter as Router,Route, } from "react-router-dom";
import './App.css';
import Quora from './components/Quora';
import { useDispatch, useSelector } from 'react-redux';
import { login } from "./feature/userSlice";
import { selectUser } from './feature/userSlice';
import Login from './auth/Login';
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import Filter from './components/Filter';
import Search from './components/Search';
import FilterPost from './components/FilterPost';
import { Switch } from '@mui/material';
import ModalP from "./components/ModalP"
import Home from '@mui/icons-material/Home';
import HomePage from './components/HomePage';
import AnimationRoutes from './components/AnimationRoutes';
import QuoraHeader from './components/QuoraHeader';
import { useLocation} from 'react-router-dom';

function App() {
  
  
  
  const user = useSelector(selectUser)
  const dispatch = useDispatch();
  

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch(
          login({
            userName: authUser.displayName,
            photo: authUser.photoURL,
            email: authUser.email,
            uid: authUser.uid,
          })
        );
        console.log("AuthUser", authUser);
      }
    });
  }, [dispatch]);
  
  



  /*fetch('/api/questions')
  .then((response) => response.json())
  .then((json) => console.log(json));*/
  return (

    

    //<BrowserRouter>

    <div className="App">

      <Router>
      
        <AnimationRoutes/>
      </Router>


      {/* <BrowserRouter>
        <Routes>
          <Route  exact path='/' element={<Quora/>} />
          <Route path='/' element={<Login/>} />

        </Routes>
      </BrowserRouter> */}
      
      
       {/* <Route  exact path='/' element={user?(<HomePage/>) : (<Login/>)}/>  */}
                  
          {/* <Route exact path='/' element={<HomePage/>}/>
          <Route path='/home' element={<Quora/>}  />
          <Route path='/login' element={<Login/>}  /> */}
          {/* <Route  exact path='/' element={user?(<HomePage/>) : (<Login/>)}/> */}
        
          
          {/* <Route exact path='/' element={<Login/>}  />
          <Route path='/home' element={<HomePage/>}  />  
          <Route path='/search' element={<Quora/>}  />  
          <Route path='/filter' element={<FilterPost/>} /> */}
          

        
      
    </div>
   // </BrowserRouter> 



  );
}

export default App;
