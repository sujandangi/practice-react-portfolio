import "./topbar.scss"
import { Person, Mail } from "@mui/icons-material"

export default function Topbar({ menuOpen, setMenuOpen }) {

  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">genius.</a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+123456789</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>abc@mail.com</span>
          </div>
        </div>
       
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(value => !value)} >
            <span className="className1"></span>
            <span className="className2"></span>
            <span className="className3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
