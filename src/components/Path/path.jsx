import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import P from './path.module.css'

const Links = () => {   
    return (
        <div>
            <a href="https://github.com/AzizChiderov" target="_blank">Github</a>
            <div className={P.line}></div>
        </div>
    )
}
export default Links