import React, { useEffect, useState } from 'react'
import '../../styles/SVG.css'

function VelammalGroundsSeatMap({ onBlockClick, setPrice, filterBy }) {
      const [zoom, setZoom] = useState(2)
      useEffect(() => {
        const price = [599,3999,4999,5999,6999,9999];
        setPrice(price);
      }, [setPrice])

      const handleClick = (blockName, price) => {
        onBlockClick(blockName, price);
      };
      const getSectionClass = (price) => {
        if (!filterBy || filterBy === price) {
          return price === 599 ? "vst1" :
              price === 3999 ? "vst2" :
                price === 4999 ? "vst3" :
                  price === 5999 ? "vst4" : 
                  price === 6999 ? "vst5" : 
                  price === 9999 ? "vst6" : "";
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
                    <path className={getSectionClass(6999)} d="M892.6,560.02c-.86,2.14-2.83,1.75-4.49,1.88-71.48-.61-255.55,1.18-291.1-.61-.88-.57-1.28-1.73-1.48-4.09-.67-42.46.04-113.45-.21-159.93-.02-4.46,0-8.57.04-12.78-.13-9.76,1.89-8.79,6.61-8.88,38.87.49,258.42-.91,289.44.49,1.89.66,1.83,5.8,1.88,8.54.12,47.65.01,117.38.02,166.72-.06,2.93.08,6.02-.68,8.62l-.02.05Z" 
                    onClick={() => handleClick('Lounge Phase 1', 6999)} 
                    style={{ cursor: isSectionClickable(6999) ? 'pointer' : 'not-allowed' }}/>
                    <path class={getSectionClass(5999)} d="M892.16,860.43c-.86,2.14-2.83,1.75-4.49,1.88-71.48-.61-255.55,1.18-291.1-.61-.88-.57-1.28-1.73-1.48-4.09-.67-42.46.04-113.45-.21-159.93-.02-4.46,0-8.57.04-12.78-.13-9.76,1.89-8.79,6.61-8.88,38.87.49,258.42-.91,289.44.49,1.89.66,1.83,5.8,1.88,8.54.12,47.65.01,117.38.02,166.72-.06,2.93.08,6.02-.68,8.62l-.02.05Z" 
                    onClick={() => handleClick('Lounge Phase 2', 5999)}
                    style={{ cursor: isSectionClickable(5999) ? 'pointer' : 'not-allowed' }}/>
                    <path class={getSectionClass(6999)} d="M2443.16,513.95c-.86,1.61-2.83,1.31-4.49,1.41-71.48-.46-255.55.88-291.1-.46-.88-.43-1.28-1.3-1.48-3.07-.67-31.91.04-85.26-.21-120.18-.02-3.35,0-6.44.04-9.61-.06-7.39,1.81-6.58,6.61-6.67,38.87.37,258.42-.68,289.44.37,1.89.49,1.83,4.36,1.88,6.42.12,35.81.01,88.21.02,125.28-.06,2.2.08,4.52-.68,6.48l-.02.04Z" 
                    onClick={() => handleClick('Lounge Phase 3', 6999)}
                    style={{ cursor: isSectionClickable(6999) ? 'pointer' : 'not-allowed' }}/>
                    <path class={getSectionClass(5999)} d="M2443.23,667.39c-.86,1.61-2.83,1.31-4.49,1.41-71.48-.46-255.55.88-291.1-.46-.88-.43-1.28-1.3-1.48-3.07-.67-31.91.04-85.26-.21-120.18-.02-3.35,0-6.44.04-9.61-.06-7.39,1.81-6.58,6.61-6.67,38.87.37,258.42-.68,289.44.37,1.89.49,1.83,4.36,1.88,6.42.12,35.81.01,88.21.02,125.28-.06,2.2.08,4.52-.68,6.48l-.02.04Z" 
                    onClick={() => handleClick('Lounge Phase 4', 5999)}
                    style={{ cursor: isSectionClickable(5999) ? 'pointer' : 'not-allowed' }}/>
                    <path class={getSectionClass(5999)} d="M2442.6,954.02c-.86,2.14-2.83,1.75-4.49,1.88-71.48-.61-255.55,1.18-291.1-.61-.88-.57-1.28-1.73-1.48-4.09-.67-42.46.04-113.45-.21-159.93-.02-4.46,0-8.57.04-12.78-.13-9.76,1.89-8.79,6.61-8.88,38.87.49,258.42-.91,289.44.49,1.89.66,1.83,5.8,1.88,8.54.12,47.65.01,117.38.02,166.72-.06,2.93.08,6.02-.68,8.62l-.02.05Z" 
                    onClick={() => handleClick('Lounge Phase5', 5999)}
                    style={{ cursor: isSectionClickable(5999) ? 'pointer' : 'not-allowed' }}/>
                    <text className="txt4" transform="translate(695 475) rotate(0)"><tspan x="0" y="0" className="txt4">Lounge </tspan><tspan x="40" y="40" className="txt4">L1 </tspan></text>
                    <text className="txt4" transform="translate(695 765) rotate(0)"><tspan x="0" y="0" className="txt4">Lounge </tspan><tspan x="40" y="40" className="txt4">L2 </tspan></text>
                    <text className="txt4" transform="translate(2245 440) rotate(0)"><tspan x="0" y="0" className="txt4">Lounge </tspan><tspan x="40" y="40" className="txt4">L3 </tspan></text>
                    <text className="txt4" transform="translate(2245 590) rotate(0)"><tspan x="0" y="0" className="txt4">Lounge </tspan><tspan x="40" y="40" className="txt4">L4 </tspan></text>
                    <text className="txt4" transform="translate(2245 855) rotate(0)"><tspan x="0" y="0" className="txt4">Lounge </tspan><tspan x="40" y="40" className="txt4">L5 </tspan></text>
                </g>

                <g>
                    <path class={getSectionClass(9999)} d="M1422.71,514.74c5.69-3.43,32.1,2.04,33.48-4.83.89-31.09.23-152.85.14-190.79-.52-4.52-4.77-5.63-9.07-5.6-114.39.43-410.95-1.1-447.32.5-1.8.42-7.13,3.38-9.65,5.12-21.11,13.18-53.04,32.98-75,46.77-2.78,1.58-5.96,3.89-6.97,6.1-3.03,28.42.34,193.12-.69,262.05.2,3.98-1.15,17.9,2.26,18.41,45.61-.4,378.16.45,483.1,0,4.99.01,10.75.08,15.3.1,5.11-.16,8.05.51,9.94-1.91,1.28-1.94,1.4-5.84,1.41-8.68.4-34.61-1.2-98.86.22-122.01.16-2.15.66-4.16,2.77-5.18l.1-.05Z" 
                    onClick={() => handleClick('Diamond Phase 1', 9999)}
                    style={{ cursor: isSectionClickable(9999) ? 'pointer' : 'not-allowed' }}/>
                    <path class={getSectionClass(9999)} d="M1606.1,515.03c-5.89-2.07-15.07-1.21-22.6-1.82-7.83-.31-10.44-2.43-9.99-9.23.09-33.28-.11-155.03.03-185.56-.03-3.1.2-5.15,3.36-4.91,111.01-.07,403.84,0,450.8.01,5.28.11,8.69,4.17,15.27,7.66,16.59,10.34,52.51,32.71,68.25,42.53,6.96,4.84,11.03,5.18,11.26,12.21-.21,30.12.44,210.59-.18,275.04-23.02,4.51-170.05,0-305.19,1.55-87.55-.06-138.94.04-202.7,0-4.7.64-3.74-3.9-3.9-10.09,0-10.41-.02-20.5,0-31.35-.03-24.04.02-53.87,0-76.79-.35-6.6,1.72-17.42-4.3-19.19l-.1-.04Z" 
                    onClick={() => handleClick('Diamond Phase 2', 9999)}
                    style={{ cursor: isSectionClickable(9999) ? 'pointer' : 'not-allowed' }}/>
                    <text className="txt4" transform="translate(1120 480) rotate(0)"><tspan x="0" y="0" className="txt4">DIAMOND </tspan><tspan x="35" y="40" className="txt4">LEFT </tspan></text>
                    <text className="txt4" transform="translate(1790 480) rotate(0)"><tspan x="0" y="0" className="txt4">DIAMOND </tspan><tspan x="35" y="40" className="txt4">RIGHT </tspan></text>
                </g>

                <g>
                    <path class={getSectionClass(4999)} d="M1604.68,798.26c5.86-1.9,3.99-11.9,4.31-18.57.04-21.32-.03-49.09,0-71.49-.01-10.14,0-19.63,0-29.36,0-.97,0-1.85.02-2.65.08-7.4.61-7.13,4.01-7.19,12.78.01,24.68-.01,37.97,0,118.53.43,442.9-.81,471.28.44.67.54.69,1.89.71,4.97,0,80.53.01,204.02,0,288.39-.03,5.68-.02,5.67-3.31,5.71-56.86-1.44-502.51,2.78-546.33-1.47-1.06-41.56,0-111.64-.36-154.99.02-5.43-.02-8.64,3.04-10.25,8.62-3.51,19.95-.39,28.55-3.47l.1-.04Z" 
                    onClick={() => handleClick('Platinum Phase 1', 4999)}
                    style={{ cursor: isSectionClickable(4999) ? 'pointer' : 'not-allowed' }}/>
                    <path class={getSectionClass(4999)} d="M1424.81,798.27c-5.8-1.81-4.03-12-4.31-18.57-.04-21.32.03-49.09,0-71.49,0-11.04.03-21.37-.03-32.02-.03-8.2-.92-7.05-5.14-7.19-12.39.02-23.93-.01-36.84,0-118.53.43-442.9-.81-471.28.44-.67.54-.69,1.89-.71,4.97,0,80.53-.01,204.02,0,288.39.03,5.68.02,5.67,3.31,5.71,56.86-1.44,502.51,2.78,546.33-1.47,1.07-40.69,0-110.48.37-153.01-.13-5.01.53-10.8-3.04-12.23-8.62-3.51-19.95-.39-28.55-3.47l-.1-.04Z" 
                    onClick={() => handleClick('Platinum Phase 2', 4999)}
                    style={{ cursor: isSectionClickable(4999) ? 'pointer' : 'not-allowed' }}/>
                    <text className="txt4" transform="translate(1790 815) rotate(0)"><tspan x="0" y="0" className="txt4">PLATINUM</tspan><tspan x="40" y="40" className="txt4">RIGHT </tspan></text>
                    <text className="txt4" transform="translate(1120 815) rotate(0)"><tspan x="0" y="0" className="txt4">PLATINUM</tspan><tspan x="40" y="40" className="txt4">LEFT </tspan></text>
                </g>

                <g>
                    <path class={getSectionClass(3999)} d="M1577,992.01c-1.22,7.45,1.38,16.24,8.09,20.53,4.99,3.5,11.08,3.42,14.36,6.28,3.4,3.06,2.88,7.67,3.04,12.05-.01,24.47.02,65.58,0,91.96,0,11.47.01,21.29-.01,27.76-.47,6.15.99,9.71-3.92,11.43-37.51,1.02-126.82.68-164.55.12-6.16-1.05-3.98-8.61-4.51-13.37,0-24.76,0-89.49,0-116.87.12-7.69-.37-12.35,6.19-14.86,14.91-2.7,22.99-12.33,20.03-26.74-59.88-10.95-503.25-.1-542.03-3.79-3.33.07-3.05.62-3.19,4.84.46,38.5-.36,281.86,0,374.62,46.65,10.02,1164.77.52,1211.48,3.27,2.02-83.82-.38-319.48.51-377.31.14-6.48-1.03-5.4-7.73-5.43-96.86-.17-408,.12-533.28,0-3.39-.14-3.96,1.38-4.48,5.41v.1Z" 
                    onClick={() => handleClick('Gold', 3999)}
                    style={{ cursor: isSectionClickable(3999) ? 'pointer' : 'not-allowed' }}/>
                    <text className="txt4" transform="translate(1460 1270) rotate(0)">GOLD</text>
                </g>

                <g>
                    <path class={getSectionClass(599)} d="M2277.21,1762.27c-368.5,9.73-1188.55-.14-1523.45,3.19-5.69.67-10.64-3.24-11.27-9.1-3.23-93.88.26-236.89-.97-346.55.98-6.24-1.22-13.82,4.24-14.1,97.19-.49,1449.11-12.17,1533.87,4.44-.47,101.33,5.89,286.89-2.36,362.06l-.06.05Z" 
                    onClick={() => handleClick('Silver', 599)}
                    style={{ cursor: isSectionClickable(599) ? 'pointer' : 'not-allowed' }}/>
                    <text className="txt4" transform="translate(1460 1600) rotate(0)">SILVER</text>
                </g>

                <g>
                    <polygon class="vst0" points="2014.5 292.5 2014.5 224.5 1788.5 224.5 1788.5 65.5 1241.5 65.5 1241.5 224.5 1007.5 224.5 1007.5 292.5 1475.5 292.5 1475.5 563.5 1439.5 563.5 1439.5 777.5 1475.5 777.5 1475.5 1053.5 1450.5 1053.5 1450.5 1146.5 1578.5 1146.5 1578.5 1053.5 1551.5 1053.5 1551.5 777.5 1589.5 777.5 1589.5 563.5 1551.5 563.5 1551.5 292.5 2014.5 292.5" />
                    <polygon class="vst0" points="2014.5 267.5 2014.5 199.5 1788.5 199.5 1788.5 40.5 1241.5 40.5 1241.5 199.5 1007.5 199.5 1007.5 267.5 1475.5 267.5 1475.5 538.5 1439.5 538.5 1439.5 752.5 1475.5 752.5 1475.5 1028.5 1450.5 1028.5 1450.5 1121.5 1578.5 1121.5 1578.5 1028.5 1551.5 1028.5 1551.5 752.5 1589.5 752.5 1589.5 538.5 1551.5 538.5 1551.5 267.5 2014.5 267.5" />
                    <text className="txt4" transform="translate(1465 172) rotate(0)">STAGE</text>
                    <text className="txt4" transform="translate(1505 410) rotate(90)">RAMP</text>
                    <text className="txt4" transform="translate(1505 981) rotate(90)">RAMP</text>
                </g>
            </svg>
            </div>
        </div>
    )
}

export default VelammalGroundsSeatMap;
