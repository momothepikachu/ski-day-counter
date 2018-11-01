import React from 'react'
import { MdTerrain } from "react-icons/md";
import { TiWeatherSnow } from "react-icons/ti";
import { FaCalendarAlt } from "react-icons/fa"; 
import '../../stylesheets/SkiDayCount.scss'

const SkiDayCount = ({ total=0, powder=0, backcountry=0 }) =>
    <div className="ski-day-count">
        <div className="total-days">
            <span>{total}</span>
            <FaCalendarAlt />
            <span>days</span>
        </div>
        <div className="powder-days">
            <span>{powder}</span>
            <TiWeatherSnow />
            <span>powder</span>
        </div>
        <div className="backcountry-days">
            <span>{backcountry}</span>
            <MdTerrain />
            <span>hiking</span>
        </div>
    </div>
 
export default SkiDayCount