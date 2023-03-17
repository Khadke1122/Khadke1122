import React from 'react'

import SideNavbar from './SideNavbar';
import MiddleDiv from './MiddleDiv';
import "./Style.css"
import RightDiv from './RightDiv';

function Main() {
  return (
    <div className='MainContent'>

<div style={{width:"15%", border:"2px solid black"}} > <SideNavbar /> </div>
<div style={{width:"60%" , border:"2px solid black"}}> <MiddleDiv /> </div>
<div style={{width:"25%" , border:"2px solid black"}}> <RightDiv /> </div>
   
    </div>
  )
}

export default Main





