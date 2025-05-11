import React, { useEffect, useState } from 'react'
import '../../styles/Sports.css'
import '../../styles/SVG.css'


function ArunJaitleyStadium({ setBlockPrice, setBlockName, setPrice, filterBy }) {

    const [zoom, setZoom] = useState(2)

    useEffect(() => {
        const price = [1000, 3000, 5000, 6000, 7000, 8000, 10000, 12000, 13000, 14000, 14500];
        setPrice(price);
    }, [setPrice])

    const handleBlockClick = (blockName, price) => {
        setBlockName(blockName);
        setBlockPrice(price)
    }

    const handleZoomIn = () => {
        setZoom(prev => Math.min(prev + 0.25, 5));
    }

    const handleZoomOut = () => {
        setZoom(prev => Math.min(prev - 0.25, 5));
    }

    const getSectionClass = (price) => {
        if (!filterBy || filterBy === price) {
            return price === 1000 ? 'st0' :
                price === 3000 ? 'st1' :
                    price === 5000 ? 'st2' :
                        price === 6000 ? 'st3' :
                            price === 7000 ? 'st4' :
                                price === 8000 ? 'st5' :
                                    price === 10000 ? 'st6' :
                                        price === 12000 ? 'st7' :
                                            price === 13000 ? 'st8' :
                                                price === 14000 ? 'st12' :
                                                    price === 14500 ? 'st13' : '';
        } else {
            return 'st-grey';
        }
    }

    const isSectionClickable = (price) => {
        return !filterBy || filterBy === price;
    }

    return (
        <div className='svg-wrapper'>

            <div className="zoom-controls">
                <span className="material-symbols-outlined" onClick={handleZoomOut}>zoom_out</span>
                <p className="zoom-level">{Math.round(zoom * 50)}%</p>
                <span className="material-symbols-outlined" onClick={handleZoomIn}>zoom_in</span>
            </div>

                <div style={{ transform: `scale(${zoom})`, transformOrigin: 'center center', transition: 'transform 0.3s ease'}}>
                    <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1280 1024">
                        {/* EAST STAND */}
                        <g>
                            <path className={getSectionClass(12000)} d="M927.89,670.84c-36.17-21.4-72.35-42.81-108.52-64.21,8.22-16.23,24.67-54.16,21.34-104.42-3.15-47.55-22.38-81.53-32.31-96.77,33.27-23.95,66.54-47.91,99.8-71.86,16.77,24.81,49.98,81.15,55.9,160.64,6.37,85.6-22.48,150.08-36.22,176.62Z"
                                onClick={() => isSectionClickable(12000) && handleBlockClick('EAST STAND GROUND FLOOR', 12000)}
                                style={{ cursor: isSectionClickable(12000) ? 'pointer' : 'not-allowed' }} />

                            <path className={getSectionClass(12000)} d="M995.22,708.11l-60.44-34.67c13.8-26.38,42.73-90.26,37.33-175.56-5.34-84.43-41.38-143.7-58.3-168.22,19.8-14.44,39.61-28.89,59.41-43.33,20.62,30.95,64.54,105.89,69.11,211.56,4.38,101.39-29.8,177.25-47.11,210.22Z"
                                onClick={() => isSectionClickable(12000) && handleBlockClick('EAST STAND FIRST FLOOR', 12000)}
                                style={{ cursor: isSectionClickable(12000) ? 'pointer' : 'not-allowed' }} />

                            <path className={getSectionClass(12000)} d="M1083.4,762.84c-24.35-14.84-48.71-29.67-73.06-44.51,17.82-38.93,49.27-121.48,42.22-229.11-6.63-101.38-44.19-175.61-65.9-212.12,23.84-17.17,47.69-34.34,71.53-51.51,26.16,36.53,82.71,125.92,91.54,254.02,9.72,140.9-44.06,244.97-66.33,283.23Z"
                                onClick={() => isSectionClickable(12000) && handleBlockClick('EAST STAND SECOND FLOOR', 12000)}
                                style={{ cursor: isSectionClickable(12000) ? 'pointer' : 'not-allowed' }} />

                            <text className="txt2" transform="translate(1013.71 504.37) rotate(90)"><tspan x="0" y="0">EAST</tspan><tspan x="-54.27" y="20.4">STAND FIRST FLOOR</tspan></text>
                            <text className="txt2" transform="translate(907.9 494.21) rotate(90)"><tspan x="0" y="0">EAST</tspan><tspan x="-67.79" y="20.4">STAND GROUND FLOOR</tspan></text>
                            <text className="txt2" transform="translate(1114.87 499.87) rotate(90)"><tspan x="0" y="0">EAST</tspan><tspan x="-65.53" y="20.4">STAND SECOND FLOOR</tspan></text>
                        </g>
                        {/* HILL A */}
                        <g>
                            <path className={getSectionClass(14000)} d="M987.89,718.78c-16.36,25.36-41.24,58.16-77.56,90.22-40.8,36.03-81.05,57.91-110.43,71.04-19.78-66.54-39.56-133.09-59.34-199.63,11.44-5.61,25.94-14.08,40.89-26.74,15.91-13.48,27.12-27.28,34.67-38.15,57.26,34.42,114.52,68.84,171.78,103.26Z"
                                onClick={() => isSectionClickable(14000) && handleBlockClick('HILL A SUPER HOSPITALITY', 14000)}
                                style={{ cursor: isSectionClickable(14000) ? 'pointer' : 'not-allowed' }} />

                            <path className={getSectionClass(6000)} d="M1076.95,773.62c-10.09,15.96-22.54,33.57-37.83,51.78-16.35,19.48-32.61,35.68-47.45,48.94-22.89-21.33-45.78-42.67-68.67-64,11.79-9.12,25.46-21.22,39.11-36.89,15.33-17.59,26.27-34.67,34.01-48.82,26.94,16.33,53.89,32.66,80.83,49Z"
                                onClick={() => isSectionClickable(6000) && handleBlockClick('HILL A PREMIUM', 6000)}
                                style={{ cursor: isSectionClickable(6000) ? 'pointer' : 'not-allowed' }} />

                            <path className={getSectionClass(6000)} d="M987.26,879.75c-11.48,10.45-24.49,21.36-39.09,32.29-13.1,9.81-25.81,18.39-37.83,25.86-14.66-26.64-29.32-53.29-43.98-79.93,8.43-3.88,19.11-9.8,30.19-18.75,10.17-8.22,17.72-16.62,23.11-23.56l67.59,64.08Z"
                                onClick={() => isSectionClickable(6000) && handleBlockClick('GMR LOUNGE', 6000)}
                                style={{ cursor: isSectionClickable(6000) ? 'pointer' : 'not-allowed' }} />

                            <path className={getSectionClass(7000)} d="M904.45,940.45c-10.3,6.97-22.18,14.23-35.67,21.22-14.06,7.29-27.37,13-39.41,17.5-8.79-29.59-17.59-59.17-26.38-88.76,8.13-2.02,18.01-5.21,28.69-10.36,12.42-5.99,22.16-12.83,29.33-18.69,14.48,26.36,28.97,52.73,43.45,79.09Z"
                                onClick={() => isSectionClickable(7000) && handleBlockClick('JSW LOUNGE', 7000)}
                                style={{ cursor: isSectionClickable(7000) ? 'pointer' : 'not-allowed' }} />

                            <text className="txt2" transform="translate(807.97 731.27) rotate(-45)"><tspan x="0" y="0">HILL A</tspan><tspan x="-58.03" y="20.4">SUPER HOSPITATALITY</tspan></text>
                            <text className="txt2" transform="translate(978.08 814.11) rotate(-50)"><tspan x="0" y="0">HILL A </tspan><tspan x="-11.87" y="20.4">PREMIUM </tspan></text>
                            <text className="txt2" transform="translate(907.14 878.6) rotate(-35)"><tspan x="0" y="0">GMR </tspan><tspan x="-13.74" y="20.4">LOUNGE</tspan></text>
                            <text className="txt2" transform="translate(833.75 919.02) rotate(-18)"><tspan x="0" y="0">JSW </tspan><tspan x="-16.11" y="20.4">LOUNGE</tspan></text>
                        </g>
                        {/* NORTH CENTRAL */}
                        <g>
                            <path className={getSectionClass(10000)} d="M727.22,89.38c-22.62-2.58-48.07-4.27-75.89-4.16-25.8.1-49.51,1.74-70.78,4.16V20.11c19.27-4.32,44.2-8.13,73.33-8.13s54.06,3.8,73.33,8.13v69.27Z"
                                onClick={() => isSectionClickable(10000) && handleBlockClick('NORTH CENTRAL THIRD FLOOR', 10000)}
                                style={{ cursor: isSectionClickable(10000) ? 'pointer' : 'not-allowed' }} />

                            <path className={getSectionClass(10000)} d="M727.22,164.56c-22-2.41-46.58-4-73.33-4s-51.33,1.59-73.33,4v-68.44c21.45-2.27,45.72-3.66,72.33-3.22,27.48.45,52.42,2.76,74.33,5.89v65.78Z"
                                onClick={() => isSectionClickable(10000) && handleBlockClick('NORTH CENTRAL SECOND FLOOR', 10000)}
                                style={{ cursor: isSectionClickable(10000) ? 'pointer' : 'not-allowed' }} />

                            <text className="txt2" transform="translate(593.59 119.05)"><tspan x="0" y="0">NORTH CENTRAL </tspan><tspan x="3.65" y="20.4">SECOND FLOOR</tspan></text>
                            <text className="txt2" transform="translate(631.52 46.39)"><tspan x="-40" y="0">NORTH CENTRAL</tspan><tspan x="-30.76" y="20.4">THIRD FLOOR</tspan></text>
                        </g>


                        {/* WEST STAND */}
                        <g>
                            <path className={getSectionClass(1000)} d="M479.67,604.56l-56.74,31.7c-3.36-4.35-7.63-10.86-10.93-19.48-3.17-8.31-4.34-15.74-4.78-21.11,20.85-7.29,41.7-14.57,62.54-21.86l9.9,30.75Z"
                                onClick={() => isSectionClickable(1000) && handleBlockClick('WS GROUND FLOOR', 1000)}
                                style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />

                            <path className={getSectionClass(14000)} d="M300.93,712.11l-83.02,50.29c-12.98-25.45-26.51-56.21-38.13-91.97-11.6-35.68-18.75-68.45-23.22-96.62,31.51-3.58,63.02-7.16,94.53-10.73.19,20.3,2.88,50.5,15.26,84.59,10.22,28.14,23.67,49.66,34.59,64.44Z"
                                onClick={() => isSectionClickable(14000) && handleBlockClick('DC LOUNGE', 14000)}
                                style={{ cursor: isSectionClickable(14000) ? 'pointer' : 'not-allowed' }} />

                            <path className={getSectionClass(14500)} d="M410.02,646.55l-101.04,60.93c-17.7-32.31-59.46-118.88-47.53-233.15,9.18-87.96,45.87-151.05,66.71-181.75,33.71,24.95,67.42,49.9,101.13,74.85-13.75,18.74-45.22,66.87-50.07,136.67-4.85,69.91,19.76,122,30.8,142.44Z"
                                onClick={() => isSectionClickable(14500) && handleBlockClick('WEST SIDE CORPORATE BOXES', 14500)}
                                style={{ cursor: isSectionClickable(14500) ? 'pointer' : 'not-allowed' }} />

                            <path className={getSectionClass(14500)} d="M251.07,553l-94.53,7.11c-4.39-38.1-6.63-98.17,10.95-168.49,19.28-77.12,53.97-132.8,77.5-164.85,24.16,19.21,48.31,38.42,72.47,57.63-19.31,31.33-44.28,80.3-57.8,144.59-10.35,49.22-10.77,92.16-8.59,124Z"
                                onClick={() => isSectionClickable(14500) && handleBlockClick('WEST STAND THIRD FLOOR', 14500)}
                                style={{ cursor: isSectionClickable(14500) ? 'pointer' : 'not-allowed' }} />

                            <path className={getSectionClass(3000)} d="M463.6,532.53l-70.01,7.72c-1.72-20.48-1.92-51.23,6.96-87.04,9.02-36.36,23.92-63.77,35.16-81.15,18.5,13.2,37,26.39,55.51,39.59-8.04,14.58-17.72,35.95-23.33,63.16-4.7,22.78-5.11,42.69-4.29,57.71Z"
                                onClick={() => isSectionClickable(3000) && handleBlockClick('WS GROUND FLOOR PREMIUM', 3000)}
                                style={{ cursor: isSectionClickable(3000) ? 'pointer' : 'not-allowed' }} />

                            <path className={getSectionClass(1000)} d="M468.59,569.11c-21.62,7.83-42.97,14.07-64.59,21.89-2.71-4.77-4.86-10.3-7.11-18.22-2.59-9.13-8.5-26.33-2.56-27,33.04-3.74,46.25-4.65,69.59-8.44l4.67,31.77Z"
                                onClick={() => isSectionClickable(1000) && handleBlockClick('WS GROUND FLOOR', 1000)}
                                style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />

                            <text className="txt3" transform="translate(420 514) rotate(-80)"><tspan x="0" y="0">WEST STAND </tspan><tspan x="13.79" y="20.4">GROUND </tspan><tspan x="11" y="37">PREMIUM</tspan></text>
                            <text className="txt3" transform="translate(330 645) rotate(-87)"><tspan x="0" y="0">WEST SIDE CORPORATE BOXES</tspan></text>
                            <text className="txt3" transform="translate(207 457) rotate(-78)"><tspan x="0" y="0">WEST STAND </tspan><tspan x="-1.81" y="20.4">THIRD FLOOR</tspan></text>
                            <text className="txt3" transform="translate(220.43 664.02) rotate(-110)"><tspan x="0" y="0">DC </tspan><tspan x="-20.04" y="20.4">LOUNGE</tspan></text>
                            <text className="txt1" transform="translate(424.7 615.12) rotate(-110)"><tspan x="0" y="0">W.S</tspan><tspan x="-9.19" y="9.6">GROUND </tspan><tspan x="-5.32" y="19.2">FLOOR</tspan></text>
                            <text className="txt1" transform="translate(412.92 571.21) rotate(-100)"><tspan x="0" y="0">W.S</tspan><tspan x="-10.34" y="10.8">GROUND </tspan><tspan x="-5.98" y="21.6">FLOOR</tspan></text>
                        </g>
                        {/* NORTH WEST */}
                        <g>
                            <path className={getSectionClass(13000)} d="M566.21,91.67c-34.43,7.78-85.47,23.55-139.87,57.55-57.41,35.88-95.18,77.46-117.36,106-19.66-14.08-39.31-28.16-58.97-42.24,24.65-32.86,67.4-81.51,133.44-123.31,72.17-45.69,140.43-63.11,182.29-70.46.16,24.15.31,48.31.47,72.46Z"
                                onClick={() => isSectionClickable(13000) && handleBlockClick('NORTH WEST THIRD FLOOR', 13000)}
                                style={{ cursor: isSectionClickable(13000) ? 'pointer' : 'not-allowed' }} />

                            <path className={getSectionClass(13000)} d="M566.21,169.19c-30.8,11.77-76.24,30.76-116.54,57.37-39.12,25.83-60.43,50.94-83.04,74.06-18.39-13.8-36.79-27.59-55.18-41.39,23.1-28.81,61.19-69.41,117.78-104.89,52.8-33.1,102.32-49.59,136.98-58.22.55,24.15-.55,48.93,0,73.08Z"
                                onClick={() => isSectionClickable(13000) && handleBlockClick('NORTH WEST SECOND FLOOR', 13000)}
                                style={{ cursor: isSectionClickable(13000) ? 'pointer' : 'not-allowed' }} />

                            <path className={getSectionClass(13000)} d="M567.26,253c-21.6,11.77-46.08,27.01-71.59,46.67-23.62,18.2-43.31,36.46-59.42,53.16-21.08-15.05-42.16-30.1-63.24-45.16,20-20.34,53.71-53.76,89.34-76.22,42.35-26.69,73.48-36.81,103.87-46,.35,22.52.7,45.04,1.05,67.56Z"
                                onClick={() => isSectionClickable(13000) && handleBlockClick('NORTH WEST FIRST FLOOR', 13000)}
                                style={{ cursor: isSectionClickable(13000) ? 'pointer' : 'not-allowed' }} />

                            <path className={getSectionClass(1000)} d="M567.82,342.55c-4.32,2.24-8.81,4.74-13.42,7.52-6.72,4.06-12.8,8.2-18.25,12.23-13.25-17.37-26.5-34.75-39.75-52.12,7.84-8.08,20-18.16,34.37-26.37,13.48-7.7,25.75-12.11,35.59-15.93.49,24.89.97,49.77,1.46,74.66Z"
                                onClick={() => isSectionClickable(1000) && handleBlockClick('NW GROUND FLOOR', 1000)}
                                style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />

                            <path className={getSectionClass(1000)} d="M532.07,367.37c-5.16,4.23-10.64,9.14-16.24,14.8-6.29,6.36-11.64,12.59-16.17,18.39-19.09-14.52-38.17-29.04-57.26-43.56,7.62-8.58,16.52-17.69,26.81-26.89,7.55-6.74,14.94-12.72,22-18,13.62,18.42,27.23,36.84,40.85,55.26Z"
                                onClick={() => isSectionClickable(1000) && handleBlockClick('NW GROUND FLOOR', 1000)}
                                style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />

                            <text className="txt1" transform="translate(478 358) rotate(-45)"><tspan x="0" y="0">N.W </tspan><tspan x="-12.44" y="12">GROUND </tspan><tspan x="-13.5" y="24">FLOOR</tspan></text>
                            <text className="txt1" transform="translate(530 312) rotate(-30)"><tspan x="0" y="0">N.W </tspan><tspan x="-12.44" y="12">GROUND </tspan><tspan x="-13.5" y="24">FLOOR</tspan></text>
                            <text className="txt3" transform="translate(433.27 292.97) rotate(-36)"><tspan x="0" y="0">NORTH WEST </tspan><tspan x="1.98" y="20.4">FIRST FLOOR</tspan></text>
                            <text className="txt3" transform="translate(397.75 213.58) rotate(-34)"><tspan x="0" y="0">NORTH WEST</tspan><tspan x="-9.27" y="20.4">SECOND FLOOR</tspan></text>
                            <text className="txt3" transform="translate(360.91 144.8) rotate(-35)"><tspan x="0" y="0">NORT WEST</tspan><tspan x="-6.43" y="20.4">THIRD FLOOR</tspan></text>
                        </g>
                        {/* OLD CLUB HOUSE */}
                        <g>
                            <path className={getSectionClass(7000)} d="M748.46,761.09c-23.11,8.19-60.03,18.15-106.13,17.47-42.84-.63-77.24-10.21-99.54-18.33,6.27-25.22,12.53-50.45,18.8-75.67,15.04,7.85,43.59,20.22,81.48,21.63,41.9,1.56,73.87-11.09,89.48-18.52l15.91,73.42Z"
                                onClick={() => handleBlockClick('OLD CLUB HOUSE FIRST FLOOR', 7000)}
                                style={{ cursor: isSectionClickable(7000) ? 'pointer' : 'not-allowed' }} />

                            <path className={getSectionClass(7000)} d="M781.75,888.36c-32.3,9.77-80.69,20.4-139.86,18.86-54.6-1.42-99.19-12.69-129.89-23.03,3.85-12.71,24.82-100.82,28.67-113.53,4.63-6.1,31.84,13.02,108.33,13.89,74.33.85,97.15-22.37,102.12-15.83,3.61,14.1,27.02,105.54,30.63,119.64Z"
                                onClick={() => handleBlockClick('OLD CLUB HOUSE FIRST FLOOR', 7000)}
                                style={{ cursor: isSectionClickable(7000) ? 'pointer' : 'not-allowed' }} />

                            <path className={getSectionClass(8000)} d="M807.03,987.1c-37.02,11.97-94.07,25.66-164.48,24.12-66.28-1.44-119.85-15.84-155.5-28.44,7.08-27.91,14.16-55.82,21.25-83.73,32.22,10.39,78.59,21.51,135.14,22.62,60.12,1.18,109.45-9.4,142.97-19.33,6.87,28.26,13.74,56.51,20.62,84.77Z"
                                onClick={() => handleBlockClick('OLD CLUB HOUSE CORPORATE BOXES', 8000)}
                                style={{ cursor: isSectionClickable(8000) ? 'pointer' : 'not-allowed' }} />

                            <text className="txt3" transform="translate(565 845) "><tspan x="0" y="0">OLD CLUB HOUSE</tspan><tspan x="20" y="20">FIRST FLOOR</tspan></text>
                            <text className="txt3" transform="translate(565 960) "><tspan x="0" y="0">OLD CLUB HOUSE</tspan><tspan x="-10" y="20">  CORPORATE BOXES</tspan></text>
                        </g>
                        {/* HILL B */}
                        <g>
                            <path className={getSectionClass(10000)} d="M473.16,979.53c-39.07-14.96-96.87-42.61-154.32-93.6-44-39.05-73.69-79.29-92.99-110.3,87.42-53.47,174.84-106.94,262.26-160.41,7.51,9.91,16.75,20.84,28,32,10.52,10.44,20.82,19.1,30.22,26.22-24.39,102.03-48.78,204.06-73.17,306.09Z"
                                onClick={() => handleBlockClick('HILL B SOUTH WEST', 10000)}
                                style={{ cursor: isSectionClickable(10000) ? 'pointer' : 'not-allowed' }} />

                            <text className="txt3" transform="translate(427.06 735.88) rotate(45)"><tspan x="0" y="0">HILL B </tspan><tspan x="-24.9" y="20.4">SOUTH WEST</tspan></text>
                        </g>
                        {/* NORTH EAST */}
                        <g>
                            <path className={getSectionClass(5000)} d="M991.67,252.67c-22.56-28.76-62-71.63-122.67-107-49.68-28.97-96.02-42.66-128.69-49.56.7-24.47,1.39-48.93,2.09-73.4,42.25,8.33,109.75,27.16,180.59,73.63,60.72,39.82,101.12,85,125.57,117.1-18.96,13.07-37.93,26.15-56.89,39.22Z"
                                onClick={() => handleBlockClick('NORTH EAST THIRD FLOOR', 5000)}
                                style={{ cursor: isSectionClickable(5000) ? 'pointer' : 'not-allowed' }} />

                            <path className={getSectionClass(5000)} d="M929.9,298.08c-20.67-21.84-50.82-49.22-91.79-73.97-36.65-22.14-70.92-35.51-97.8-43.78v-72.22c32.02,5.92,83.88,19.65,138.69,54.67,51.09,32.64,85.98,71.36,104.86,96.81-17.33,13.1-36.64,25.39-53.97,38.49Z"
                                onClick={() => handleBlockClick('NORTH EAST SECOND FLOOR', 5000)}
                                style={{ cursor: isSectionClickable(5000) ? 'pointer' : 'not-allowed' }} />

                            <path className={getSectionClass(8000)} d="M862.68,346.02c-15.53-15.93-35.57-34-60.65-51.54-22.19-15.52-43.33-27.14-61.73-35.85v-71.41c27.07,9.1,61.17,23.34,97.58,46,37.4,23.27,65.81,48.31,86.16,69.03-20.46,14.59-40.91,29.18-61.37,43.77Z"
                                onClick={() => handleBlockClick('NORTH EAST FIRST FLOOR PREMIUM', 8000)}
                                style={{ cursor: isSectionClickable(8000) ? 'pointer' : 'not-allowed' }} />

                            <path className={getSectionClass(1000)} d="M762.33,360.56c-8.53-5.87-15.21-11.01-23.73-16.89l1.71-74.22c11.16,4.83,23.71,11.14,36.91,19.44,10.14,6.38,19.01,12.9,26.67,19.11-12.58,16.43-28.11,35.33-41.56,52.56Z"
                                onClick={() => handleBlockClick('NE GROUND PREMIUM', 1000)}
                                style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />

                            <path className={getSectionClass(1000)} d="M797.44,392.56c-4.39-4.94-9.33-10.11-14.86-15.36-5.38-5.11-10.64-9.67-15.66-13.71,13.09-17.03,28.39-35.23,41.48-52.25,7.99,6.11,16.66,13.5,25.48,22.36,6.6,6.63,12.35,13.14,17.33,19.31-17.93,13.22-35.85,26.44-53.78,39.67Z"
                                onClick={() => handleBlockClick('NE GROUND PREMIUM', 1000)}
                                style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />

                            <text className="txt1" transform="translate(809.41 341.66) rotate(45)"><tspan x="0" y="0">N.E </tspan><tspan x="-12.44" y="12">GROUND </tspan><tspan x="-13.5" y="24">PREMIUM</tspan></text>
                            <text className="txt1" transform="translate(766.93 306.49) rotate(40)"><tspan x="0" y="0">N.E </tspan><tspan x="-12.44" y="12">GROUND </tspan><tspan x="-13.5" y="24">PREMIUM</tspan></text>
                            <text className="txt2" transform="translate(743.77 212.28) rotate(34)"><tspan x="0" y="0">NORTH EAST FIRST FLOOR </tspan><tspan x="62.69" y="20.4">PEMIUM</tspan></text>
                            <text className="txt2" transform="translate(768.26 147.63) rotate(32)"><tspan x="0" y="0">NORTH EAST SECOND FLOOR</tspan></text>
                            <text className="txt2" transform="translate(790 65) rotate(30)"><tspan x="0" y="0">NORTH EAST THIRD FLOOR</tspan></text>
                        </g>

                        {/* Gound */}
                        <g>
                            <ellipse className="st9" cx="649.67" cy="515.22" rx="160.22" ry="158.22" />
                            <rect className="st10" x="637" y="456.11" width="28.89" height="123.11" />
                        </g>

                    </svg>
                </div>
            </div>
    )
}

export default ArunJaitleyStadium