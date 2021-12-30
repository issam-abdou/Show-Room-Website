import React from "react"
import "../style/components/header.css"
import {Link} from "react-router-dom"

const Header = ()=>{
    return(
        <header>
            <div className="container">
                <nav>
                    <Link to="/"><h3 className="title">AUTOSHOW</h3></Link>
                    <select name="languages" id="languages">
                        <option value="english">English</option>
                        <option value="arabic">Arabic</option>
                    </select>
                </nav>
                </div>
        </header>
    )
}

export default Header