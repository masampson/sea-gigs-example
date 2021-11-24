"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const navBar_module_css_1 = __importDefault(require("../styles/components/navBar.module.css"));
const react_ionicons_1 = require("react-ionicons");
function NavBar(props) {
    function showMenu() {
        let nav = document.getElementById("navMenu");
        if (nav.style.display === "none") {
            nav.style.display = "block";
        }
        else {
            nav.style.display = "none";
        }
    }
    return (<div className={navBar_module_css_1.default.navContainer}>
      <div onClick={showMenu} role="button" className={navBar_module_css_1.default.mobileNav}>
        <react_ionicons_1.Menu cssClasses={navBar_module_css_1.default.mobileNavIcon} color="#ef7e56"></react_ionicons_1.Menu>
      </div>
      <nav>
        <ul id="navMenu">
          <li onClick={() => props.getDisplay("gigs")}>
            <a href="">GIGS</a>
          </li>
          <li onClick={() => props.getDisplay("about")}>ABOUT</li>
          <li onClick={() => props.getDisplay("submit")}>SUBMIT</li>
        </ul>
      </nav>
    </div>);
}
exports.default = NavBar;
