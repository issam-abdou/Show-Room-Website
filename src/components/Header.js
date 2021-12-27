import React from "react"
import "../style/components/header.css"
const Header = ()=>{
    return(
        <header>
            <div className="container">
                <nav>
                    <h3 className="title">AUTOSHOW</h3>
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