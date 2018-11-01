import {Link} from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { FaRegCalendarPlus } from "react-icons/fa";
import { FaTable } from "react-icons/fa";
import '../../stylesheets/Menu.scss'
import React from 'react'

const Menu = () =>
    <nav className="menu">
        <Link to="/" activeclassname="selected">
            <FaHome />
        </Link>
        <Link to="/add-day" activeclassname="selected">
            <FaRegCalendarPlus />
        </Link>
        <Link to="/list-days" activeclassname="selected">
            <FaTable />
        </Link>
    </nav>

export default Menu