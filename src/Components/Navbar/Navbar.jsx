import './Navbar.css'
import Theme_Pattren from '../../asserts/assets/theme_pattern.svg'
import {useState } from 'react'
import underline from '../../asserts/assets/nav_underline.svg'
import menu_open from '../../asserts/assets/menu_open.svg'
import menu_close from '../../asserts/assets/menu_close.svg'
import Heading from '../SecHeading/Heading'
const Navbar = () => {
  const [menu,setmenu] =useState('home')
const[mobile,setmobile] =useState(false)
  return (
  <>
  <nav className="navbar">
  <div className="heading-title">
    <h1>SR</h1>
    <img src={Theme_Pattren} alt="" />
    </div>
    <div className={setmobile==false ? 'none':'menu-open' }>
    <img src={menu_open} alt="" className={`pre ${mobile ? 'hide' :'show'}` }  onClick={()=>setmobile(true)} />
    </div>
    <ul className={`nav-menu ${mobile ? 'nav-menu-click': ''}`}>
    <div className="menu-close">
    <img src={menu_close} alt=""  className={`pre ${mobile ? 'show' :'hide'}`}  onClick={()=> setmobile(false)}/>
    </div>
      <li onClick={()=>setmenu('home')}><span><a href="#page-1"> Home</a></span>{menu==='home' ? <img src={underline}/> : <></>}</li>
      <li onClick={()=>setmenu('about')}><span><a href="#page-2">About Me</a></span>{menu==='about' ? <img src={underline}/> : <></>}</li>
      <li onClick={()=>setmenu('services')}><span><a href="#page-3">Services</a></span>{menu==='services' ? <img src={underline}/> : <></>}</li>
      <li onClick={()=>setmenu('potfolio')}><span><a href="#page-4"> Potfolio</a></span>{menu==='potfolio' ? <img src={underline}/> : <></>}</li>
      <li onClick={()=>setmenu('contact')}><span><a href="#page-5">Contact</a></span>{menu==='contact' ? <img src={underline}/> : <></>}</li>
    </ul>

    <div>
      <button  className="nav-btn"><a href="#page-5">Talk With Me</a></button>
    </div>
  </nav>
  </>
  )
}

export default Navbar