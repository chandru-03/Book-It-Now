import React, { useEffect, useState } from 'react'
import '../../styles/SVG.css'

function YMCASeatMap({ onBlockClick, setPrice, filterBy }) {
  const [zoom, setZoom] = useState(2)
  useEffect(() => {
    const price = [899, 1999, 3999, 4999, 9999];
    setPrice(price);
  }, [setPrice])

  const handleClick = (blockName, price) => {
    onBlockClick(blockName, price);
  };

  const getSectionClass = (price) => {
    if (!filterBy || filterBy === price) {
      return price === 899 ? "yst0" :
        price === 1999 ? "yst0" :
          price === 3999 ? "yst2" :
            price === 4999 ? "yst1" :
              price === 9999 ? "yst4" : "";
    } else {
      return "st-grey";
    }
  };
  const isSectionClickable = (price) => {
    return !filterBy || filterBy === price;
  };

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.25, 5));
  }

  const handleZoomOut = () => {
    setZoom(prev => Math.min(prev - 0.25, 5));
  }

  return (
    <div className='svg-wrapper'>
      <div className="zoom-controls">
        <span className="material-symbols-outlined" onClick={handleZoomOut}>zoom_out</span>
        <p className="zoom-level">{Math.round(zoom * 50)}%</p>
        <span className="material-symbols-outlined" onClick={handleZoomIn}>zoom_in</span>
      </div>
      <div style={{ transform: `scale(${zoom})`, transformOrigin: 'center center', transition: 'transform 0.3s ease' }}>
        <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 2880 1800">

          <g>
            <path
              className={getSectionClass(1999)}
              d="M882.78,576.09c-.86,1.6-2.83,1.3-4.49,1.4-71.48-.46-255.55.88-291.1-.45-.88-.43-1.28-1.29-1.48-3.05-.67-32.12.04-85.77-.21-120.93-.02-3.38,0-6.51.03-9.7-.08-7.5,1.72-6.78,6.53-6.85,38.63.38,258.5-.71,289.56.38,1.88.51,1.79,4.5,1.84,6.58.1,36.15,0,88.72.02,126.03-.05,2.22.08,4.59-.68,6.56l-.02.04Z"
              onClick={() => isSectionClickable(1999) && handleClick('SPOT LINGHT LOUNGE', 1999)}
              style={{ cursor: isSectionClickable(1999) ? 'pointer' : 'defnot-allowed' }}
            />
            <path
              className={getSectionClass(899)}
              d="M2439.78,575.08c-.86,1.61-2.83,1.31-4.49,1.41-71.48-.46-255.55.88-291.1-.46-.88-.43-1.28-1.3-1.48-3.07-.67-31.91.04-85.26-.21-120.18-.02-3.35,0-6.44.04-9.61-.06-7.39,1.81-6.58,6.61-6.67,38.87.37,258.42-.68,289.44.37,1.89.49,1.83,4.36,1.88,6.42.12,35.81.01,88.21.02,125.28-.06,2.2.08,4.52-.68,6.48l-.02.04Z"
              onClick={() => isSectionClickable(899) && handleClick('LOUNGE', 899)}
              style={{ cursor: isSectionClickable(899) ? 'pointer' : 'not-allowed' }}
            />
            <path
              className={getSectionClass(899)}
              d="M882.78,969.08c-.86,1.61-2.83,1.31-4.49,1.41-71.48-.46-255.55.88-291.1-.46-.88-.43-1.28-1.3-1.48-3.07-.67-31.91.04-85.26-.21-120.18-.02-3.35,0-6.44.04-9.61-.13-7.34,1.89-6.6,6.61-6.67,38.87.37,258.42-.68,289.44.37,1.89.49,1.83,4.36,1.88,6.42.12,35.81.01,88.21.02,125.28-.06,2.2.08,4.52-.68,6.48l-.02.04Z"
              onClick={() => isSectionClickable(899) && handleClick('LOUNGE', 899)}
              style={{ cursor: isSectionClickable(899) ? 'pointer' : 'not-allowed' }}
            />
            <text className="txt4" transform="translate(650 507) rotate(0)"><tspan x="0" y="0">SPOTLIGHT </tspan><tspan x="20" y="30">LOUNGE </tspan></text>
            <text className="txt4" transform="translate(2225 520) rotate(0)"><tspan x="0" y="0">LOUNGE</tspan></text>
            <text className="txt4" transform="translate(670 910) rotate(0)"><tspan x="0" y="0">LOUNGE</tspan></text>
          </g>
          <g>
            <path
              className={getSectionClass(4999)}
              d="M1604.68,798.26c5.86-1.9,3.99-11.9,4.31-18.57.04-21.32-.03-49.09,0-71.49-.01-10.14,0-19.63,0-29.36,0-.97,0-1.85.02-2.65.08-7.4.61-7.13,4.01-7.19,12.78.01,24.68-.01,37.97,0,118.53.43,442.9-.81,471.28.44.67.54.69,1.89.71,4.97,0,80.53.01,204.02,0,288.39-.03,5.68-.02,5.67-3.31,5.71-56.86-1.44-502.51,2.78-546.33-1.47-1.06-41.56,0-111.64-.36-154.99.02-5.43-.02-8.64,3.04-10.25,8.62-3.51,19.95-.39,28.55-3.47l.1-.04Z"
              onClick={() => isSectionClickable(4999) && handleClick('PLATINUM EXPERIENCE', 4999)}
              style={{ cursor: isSectionClickable(4999) ? 'pointer' : 'not-allowed' }}
            />
            <path
              className={getSectionClass(4999)}
              d="M1424.81,798.27c-5.8-1.81-4.03-12-4.31-18.57-.04-21.32.03-49.09,0-71.49,0-11.04.03-21.37-.03-32.02-.03-8.2-.92-7.05-5.14-7.19-12.39.02-23.93-.01-36.84,0-118.53.43-442.9-.81-471.28.44-.67.54-.69,1.89-.71,4.97,0,80.53-.01,204.02,0,288.39.03,5.68.02,5.67,3.31,5.71,56.86-1.44,502.51,2.78,546.33-1.47,1.07-40.69,0-110.48.37-153.01-.13-5.01.53-10.8-3.04-12.23-8.62-3.51-19.95-.39-28.55-3.47l-.1-.04Z"
              onClick={() => isSectionClickable(4999) && handleClick('PLATINUM EXPERIENCE', 4999)}
              style={{ cursor: isSectionClickable(4999) ? 'pointer' : 'not-allowed' }}
            />

            <text className="txt4" transform="translate(1000 825) rotate(0)"><tspan x="0" y="0">PLATINUM EXPERIENCE</tspan></text>
            <text className="txt4" transform="translate(1670 825) rotate(0)"><tspan x="0" y="0">PLATINUM EXPERIENCE</tspan></text>
            <use transform="translate(1835 840) scale(.23)" />
            <use transform="translate(1835 840) scale(.23)" />
          </g>
          <g>
            <path
              className={getSectionClass(3999)}
              d="M1577,992.01c-1.22,7.45,1.38,16.24,8.09,20.53,4.99,3.5,11.08,3.42,14.36,6.28,3.4,3.06,2.88,7.67,3.04,12.05-.01,24.47.02,65.58,0,91.96,0,11.47.01,21.29-.01,27.76-.47,6.15.99,9.71-3.92,11.43-37.51,1.02-126.82.68-164.55.12-6.16-1.05-3.98-8.61-4.51-13.37,0-24.76,0-89.49,0-116.87.12-7.69-.37-12.35,6.19-14.86,14.91-2.7,22.99-12.33,20.03-26.74-59.88-10.95-503.25-.1-542.03-3.79-3.33.07-3.05.62-3.19,4.84.46,38.5-.36,281.86,0,374.62,46.65,10.02,1164.77.52,1211.48,3.27,2.02-83.82-.38-319.48.51-377.31.14-6.48-1.03-5.4-7.73-5.43-96.86-.17-408,.12-533.28,0-3.39-.14-3.96,1.38-4.48,5.41v.1Z"
              onClick={() => isSectionClickable(3999) && handleClick('GOLD FAN ZONE', 3999)}
              style={{ cursor: isSectionClickable(3999) ? 'pointer' : 'not-allowed' }}
            />

            <text className="txt4" transform="translate(1390 1250) rotate(0)"><tspan x="0" y="0">GOLD FAN ZONE</tspan></text>
            <use transform="translate(1148 1192) scale(2.5)" />
            <use transform="translate(1148 1192) scale(2.5)" />
          </g>
          <g>
            <path
              className={getSectionClass(899)}
              d="M2277.21,1762.27c-368.5,9.73-1188.55-.14-1523.45,3.19-5.69.67-10.64-3.24-11.27-9.1-3.23-93.88.26-236.89-.97-346.55.98-6.24-1.22-13.82,4.24-14.1,97.19-.49,1449.11-12.17,1533.87,4.44-.47,101.33,5.89,286.89-2.36,362.06l-.06.05Z"
              onClick={() => isSectionClickable(899) && handleClick('SILVER ZONE', 899)}
              style={{ cursor: isSectionClickable(899) ? 'pointer' : 'not-allowed' }}
            />

            <text className="txt4" transform="translate(1420 1600) rotate(0)"><tspan x="0" y="0">SILVER ZONE</tspan></text>
            <use transform="translate(1148 1192) scale(2.5)" />
          </g>
          <g>
            <path
              className={getSectionClass(9999)}
              d="M1422.71,514.74c5.69-3.43,32.1,2.04,33.48-4.83.89-31.09.23-152.85.14-190.79-.52-4.52-4.77-5.63-9.07-5.6-114.39.43-410.95-1.1-447.32.5-1.8.42-7.13,3.38-9.65,5.12-21.11,13.18-53.04,32.98-75,46.77-2.78,1.58-5.96,3.89-6.97,6.1-3.03,28.42.34,193.12-.69,262.05.2,3.98-1.15,17.9,2.26,18.41,45.61-.4,378.16.45,483.1,0,4.99.01,10.75.08,15.3.1,5.11-.16,8.05.51,9.94-1.91,1.28-1.94,1.4-5.84,1.41-8.68.4-34.61-1.2-98.86.22-122.01.16-2.15.66-4.16,2.77-5.18l.1-.05Z"
              onClick={() => isSectionClickable(9999) && handleClick('HSBC STARSTRUCK DIAMOND EXPERIENCE', 9999)}
              style={{ cursor: isSectionClickable(9999) ? 'pointer' : 'not-allowed' }}
            />
            <path
              className={getSectionClass(9999)}
              d="M1606.1,515.03c-5.89-2.07-15.07-1.21-22.6-1.82-7.83-.31-10.44-2.43-9.99-9.23.09-33.28-.11-155.03.03-185.56-.03-3.1.2-5.15,3.36-4.91,111.01-.07,403.84,0,450.8.01,5.28.11,8.69,4.17,15.27,7.66,16.59,10.34,52.51,32.71,68.25,42.53,6.96,4.84,11.03,5.18,11.26,12.21-.21,30.12.44,210.59-.18,275.04-23.02,4.51-170.05,0-305.19,1.55-87.55-.06-138.94.04-202.7,0-4.7.64-3.74-3.9-3.9-10.09,0-10.41-.02-20.5,0-31.35-.03-24.04.02-53.87,0-76.79-.35-6.6,1.72-17.42-4.3-19.19l-.1-.04Z"
              onClick={() => isSectionClickable(9999) && handleClick('HSBC STARSTRUCK DIAMOND EXPERIENCE', 9999)}
              style={{ cursor: isSectionClickable(9999) ? 'pointer' : 'not-allowed' }}
            />

            <text className="txt4" transform="translate(1025 490) rotate(0)"><tspan x="0" y="0">HSBC STARSTRUCK </tspan><tspan x="-40" y="35">DIAMOND EXPERIENCE </tspan></text>
            <text className="txt4" transform="translate(1700 490) rotate(0)"><tspan x="0" y="0">HSBC STARSTRUCK </tspan><tspan x="-40" y="35">DIAMOND EXPERIENCE </tspan></text>
            <use transform="translate(1108 512)" />
            <use transform="translate(1183 504)" />
            <use transform="translate(1116.4 507.16)" />
            <use transform="translate(1183 504)" />
          </g>
          <g>
            <polygon className="yst5" points="2014.5 292.5 2014.5 224.5 1788.5 224.5 1788.5 65.5 1241.5 65.5 1241.5 224.5 1007.5 224.5 1007.5 292.5 1475.5 292.5 1475.5 563.5 1439.5 563.5 1439.5 777.5 1475.5 777.5 1475.5 1053.5 1450.5 1053.5 1450.5 1146.5 1578.5 1146.5 1578.5 1053.5 1551.5 1053.5 1551.5 777.5 1589.5 777.5 1589.5 563.5 1551.5 563.5 1551.5 292.5 2014.5 292.5" />
            <polygon className="yst6" points="2014.5 267.5 2014.5 199.5 1788.5 199.5 1788.5 40.5 1241.5 40.5 1241.5 199.5 1007.5 199.5 1007.5 267.5 1475.5 267.5 1475.5 538.5 1439.5 538.5 1439.5 752.5 1475.5 752.5 1475.5 1028.5 1450.5 1028.5 1450.5 1121.5 1578.5 1121.5 1578.5 1028.5 1551.5 1028.5 1551.5 752.5 1589.5 752.5 1589.5 538.5 1551.5 538.5 1551.5 267.5 2014.5 267.5" />
            <text className="txt4" transform="translate(1455 180) rotate(0)"><tspan x="0" y="0">STAGE</tspan></text>
            <text className="txt4" transform="translate(1500 440) rotate(-270)"><tspan x="0" y="0">RAMP</tspan></text>
            <text className="txt4" transform="translate(1500 980) rotate(-270)"><tspan x="0" y="0">RAMP</tspan></text>
          </g>
        </svg>
      </div>
    </div>
  )
}

export default YMCASeatMap