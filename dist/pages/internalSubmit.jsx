"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Home_module_css_1 = __importDefault(require("../styles/pages/Home.module.css"));
const head_1 = __importDefault(require("next/head"));
const form_1 = __importDefault(require("../components/form"));
function SeaGigsInternal() {
    function addEvt(evt) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch("/api/sea-gigs-internal", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ evt }),
            });
        });
    }
    return (<div>
      <head_1.default>
        <meta charSet="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

        <title>SEAGIGS</title>
      </head_1.default>

      <section className={Home_module_css_1.default.bodyContainer}>
        <form_1.default addEvt={addEvt}></form_1.default>
      </section>
    </div>);
}
exports.default = SeaGigsInternal;
