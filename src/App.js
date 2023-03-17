import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UpNavbar from './component/UpNavbar';
import Main from './component/Main';
import About from './component/About';
import Skills from './component/Skills';
import Project from './component/Project';
import Activity from './component/Activity';
import Achievement from './component/Achievement';
import Reviews from './component/Reviews';
import "./component/Style.css"

const App = () => {
  return (
    <div className='MainBackGround'>
      <BrowserRouter>
      <UpNavbar />
      <Main />
      <Routes>
          
          
          <Route path="/" element={<About />}> about</Route>
          <Route path="Skills" element={<Skills />}></Route>
          <Route path="Project" element={<Project />}></Route>
          <Route path="Activity" element={<Activity />}></Route>
          <Route path="Achievement" element={<Achievement />}></Route>
          <Route path="Reviews" element={<Reviews />}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App





