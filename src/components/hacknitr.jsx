import React,{useState} from 'react'
import "./hacknitr.css"
import UploadFile from './uploadfile'
import Dappicn from './Dappicn.png'
import Docket from './Docket.png'
import Grid2 from './Grid2.png'
import Settings from './Settings.png'
import hero from './hero.png'


  
const Hacknitr = () => {
  const [visible, setVisible] = useState(true);
  const [showNav, setShowNav] = useState(true);
  const[ShowUploadOptions, setShowUploadOptions] =useState(false);
  const [show, setShow] = useState();
  function showuploadoptions(){
    setShowUploadOptions(!ShowUploadOptions)
  }
  function toggleShow() {
  setShow(!show);
  setVisible(false)
}
  return (
    <div>
    <form >
      <input className='input'/>
      {/*<button type="submit">Submit</button>*/}
      
    </form>
    <div className="navdivs"></div>
    <div className="navdivs"></div>
    <div className="navdivs"></div>
    {/*Navbar*/}
    {showNav && <div>
    <div className="sidebar close">
    <img className="navicons" src={Dappicn}/>
    <img className="navicons" src={Docket}/>
    <img className="navicons" src={Grid2}/>
    <img className="navicons" src={Settings}/>
  </div>
  </div>}
    <img className="heroimg" src={hero}/>
    {visible && <div><button onClick={toggleShow} className="signinbtn">SignIn</button>
    <button className="Loginbtn" onClick={toggleShow}>LogIn</button></div>}
    {show && <div><button onClick={showuploadoptions} className="signinbtn">Upload</button></div>}
    {ShowUploadOptions && <UploadFile/>}
    </div>
  )
}

export default Hacknitr;
