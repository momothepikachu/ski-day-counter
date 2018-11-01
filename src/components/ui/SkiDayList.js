import React from 'react'
import {Link } from 'react-router-dom'
import SkiDayRow from './SkiDayRow'
import { MdTerrain } from "react-icons/md";
import { TiWeatherSnow } from "react-icons/ti";
import '../../stylesheets/SkiDayList.scss'

const SkiDayList = ({ days, filter, onRemoveDay=f=>f, match }) => {
    const filteredDays = (!filter || !filter.match(/powder|backcountry/)) ?
        days :
        days.filter(day => day[filter])
        console.log(match)
    return (
        <div className="ski-day-list">
            <table>
                <caption>double click to remove</caption>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Resort</th>
                    <th><TiWeatherSnow /></th>
                    <th><MdTerrain /></th>
                </tr>
                <tr>
                    <td colSpan={4}>
                        <Link to="/list-days">All Days</Link>
                        <Link to='/list-days/powder'>Powder Days</Link>
                        <Link to='/list-days/backcountry'>Backcountry Days</Link>
                    </td>
                </tr>
                </thead>
                <tbody>
                {filteredDays.map((day, i) =>
                    <SkiDayRow key={i} {...day} onRemoveDay={onRemoveDay} />
                )}
                </tbody>
            </table>
            
        </div>
    )
}
 
export default SkiDayList