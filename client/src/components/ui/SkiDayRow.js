import React from 'react'
import { MdTerrain } from "react-icons/md";
import { TiWeatherSnow } from "react-icons/ti";

const SkiDayRow = ({ resort, date, powder, backcountry, onRemoveDay=f=>f }) =>
    <tr onDoubleClick={() => onRemoveDay(date)}>
        <td>
            {date}
        </td>
        <td>
            {resort}
        </td>
        <td>
            {(powder) ? <TiWeatherSnow /> : null }
        </td>
        <td>
            {(backcountry) ? <MdTerrain /> : null }
        </td>
    </tr>
 

export default SkiDayRow