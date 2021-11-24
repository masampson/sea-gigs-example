"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const header_module_css_1 = __importDefault(require("../styles/components/header.module.css"));
const navBar_1 = __importDefault(require("./navBar"));
function Header(props) {
    return (<div className={header_module_css_1.default.headerContainer}>
      <div className={header_module_css_1.default.h1Container}>
        <h1 className={header_module_css_1.default.headerHero}>
          <a href="" onClick={() => props.getDisplay("gigs")}>
            SEAGIGS
          </a>
        </h1>
        <h2>- EST. 2021 -</h2>
      </div>
      <navBar_1.default getDisplay={props.getDisplay}></navBar_1.default>
    </div>);
}
exports.default = Header;
