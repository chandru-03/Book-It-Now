import React, { useEffect, useState } from 'react'
import '../../styles/Sports.css'
import '../../styles/SVG.css'

function HPCAStadium({ setBlockPrice, setBlockName, setPrice, filterBy }) {
    const [zoom, setZoom] = useState(2)

    useEffect(() => {
        const price = [1000,2750,3000,4000, 4500, 5000, 7000,12000];
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
                    price === 2750 ? 'st2' :
                        price === 4000 ? 'st3' :
                            price === 4500 ? 'st4' :
                                price === 5000 ? 'st5' :
                                    price === 7000 ? 'st6' :
                                    price === 12000 ? 'st8' :
                                         '';
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

                <img className='image-himachal' src='/Assets/StadiumBlocks/Hpcas.png' alt="Map" />

                <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1371.91 1600.02">
                    
                    <g>
                        <path  d="M1311.06,1345.69c-46.1,45.24-259.45,244.75-597.06,253.53-327.23,8.51-546.11-168-597.06-211.4,39.06-45.96,78.13-91.91,117.19-137.87,44.26,35.9,219.44,169.42,477.96,162.38,264.05-7.19,433.93-156.07,474.89-194.08l124.09,127.44Z"
                            className={getSectionClass(7000)}
                            onClick={() => isSectionClickable(7000) && handleBlockClick('DREAM 11 CLUB LOUNGE MAIN PAVILION', 7000)}
                            style={{ cursor: isSectionClickable(7000) ? 'pointer' : 'not-allowed' }} />

                        <path  d="M1188.33,1184.67c-33.76-33.59-67.52-67.18-101.28-100.77,28.8-28.6,65.91-71.72,97.7-131.06,26.64-49.73,41.46-95.77,50.04-131.4l136.51,30.64c-10.15,45.76-28.78,107.26-64.68,173.96-38.72,71.94-83.67,124.16-118.3,158.64Z"
                            className={getSectionClass(7000)}
                            onClick={() => isSectionClickable(7000) && handleBlockClick('CORPORATE BOXES', 7000)}
                            style={{ cursor: isSectionClickable(7000) ? 'pointer' : 'not-allowed' }} />

                        <path  d="M230.55,1211.9c-43.28-39.79-98.23-99.59-145-182.81-27.75-49.37-46.44-95.98-59.25-135.83,43.57-15.66,87.15-31.32,130.72-46.98,9.35,34.21,25,77.91,52.09,124.6,37.05,63.87,80.74,107.85,112.85,135.32-30.47,35.23-60.94,70.47-91.4,105.7Z"
                            className={getSectionClass(7000)}
                            onClick={() => isSectionClickable(7000) && handleBlockClick('CORPORATE BOXES', 7000)}
                            style={{ cursor: isSectionClickable(7000) ? 'pointer' : 'not-allowed' }} />
                    </g>
                    <g>
                        <path  d="M1052.16,1074.54c-29.39,27.97-148.89,135.17-336.26,143.23-197.82,8.52-330.95-99.5-360.09-124.34,42.21-50.84,84.43-101.67,126.64-152.51,19.5,16.72,96.42,78.71,212,78.47,123.8-.26,203.91-71.74,221.36-88.09,45.45,47.74,90.89,95.49,136.34,143.23Z"
                            className={getSectionClass(3000)}
                            onClick={() => isSectionClickable(3000) && handleBlockClick('DREAM 11 PAVILION TERRACE', 3000)}
                            style={{ cursor: isSectionClickable(3000) ? 'pointer' : 'not-allowed' }} />
                        <path  d="M745.78,453.09c-12.41-4.44-32.09-9.82-56.68-9.7-23.81.11-42.92,5.33-55.15,9.7-23.32-87.15-46.64-174.3-69.96-261.45,32.65-7.46,74.61-14.01,123.57-14.3,46.56-.27,86.75,5.2,118.47,11.74-20.09,88-40.17,176-60.26,264Z"
                            className={getSectionClass(3000)}
                            onClick={() => isSectionClickable(3000) && handleBlockClick('JIO NORTH PAVILION STAND', 3000)}
                            style={{ cursor: isSectionClickable(3000) ? 'pointer' : 'not-allowed' }} />
                    </g>
                    <g>
                        <path  d="M521.61,879.48c-58.21,66.89-116.43,133.79-174.64,200.68-27.51-25.32-62.18-62.36-93.96-112.85-31.05-49.32-49.28-95.51-60.26-130.72,85.79-24.34,171.57-48.68,257.36-73.02,5.43,16.32,13.59,36.1,26.04,57.19,15.09,25.56,31.69,44.92,45.45,58.72Z"
                            className={getSectionClass(2750)}
                            onClick={() => isSectionClickable(2750) && handleBlockClick('DREAM 11 WEST STAND 1', 2750)}
                            style={{ cursor: isSectionClickable(2750) ? 'pointer' : 'not-allowed' }} />
                        <path  d="M1200.76,812.92c-8.38,35.98-23.9,85.17-54.13,138.21-27.39,48.07-58.06,83.85-82.72,108.6-62.13-63.89-124.26-127.77-186.38-191.66,13.38-14.71,29.6-35.64,43.4-63.32,9.55-19.16,15.7-37.02,19.74-52.09,86.7,20.09,173.39,40.17,260.09,60.26Z"
                            className={getSectionClass(2750)}
                            onClick={() => isSectionClickable(2750) && handleBlockClick('BKT TIRES EAST STAND 3', 2750)}
                            style={{ cursor: isSectionClickable(2750) ? 'pointer' : 'not-allowed' }} />
                        <path  d="M452.67,622.63c-85.96-22.3-171.91-44.6-257.87-66.89,7.94-27.74,20.02-61.32,38.81-97.53,19.71-37.99,41.35-68.36,60.26-91.4,68.26,57.36,136.51,114.72,204.77,172.09-8.42,9.74-18.11,22.62-27.06,38.81-9.26,16.75-15.11,32.31-18.89,44.94Z"
                            className={getSectionClass(2750)}
                            onClick={() => isSectionClickable(2750) && handleBlockClick('KENT WEST STAND 3', 2750)}
                            style={{ cursor: isSectionClickable(2750) ? 'pointer' : 'not-allowed' }} />
                    </g>
                    <g>
                        <path  d="M1207.4,798.29c-89.19-18.67-178.38-37.33-267.57-56,2.35-15.42,4.13-32.95,4.6-52.26.42-17.13-.27-32.88-1.53-46.98,85.79-21.11,171.57-42.21,257.36-63.32,5.22,31.43,9.33,67.42,10.72,107.23,1.44,41.28-.33,78.7-3.57,111.32Z"
                            className={getSectionClass(1000)}
                            onClick={() => isSectionClickable(1000) && handleBlockClick('BKT TIRES EAST STAND 2', 1000)}
                            style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />
                        <path  d="M861.19,505.69c-11.17-10.66-28.69-24.91-53.11-36.26-19.84-9.22-37.95-13.62-51.57-15.83l58.72-261.96c29.04,6.38,64.66,16.99,103.15,35.23,55.59,26.35,96.39,58.77,123.57,84.26-60.26,64.85-120.51,129.7-180.77,194.55Z"
                            className={getSectionClass(1000)}
                            onClick={() => isSectionClickable(1000) && handleBlockClick('ALL SEASONS NORTH STAND 2', 1000)}
                            style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />
                        <path  d="M450.12,753.86c-86.64,23.83-173.28,47.66-259.91,71.49-8.35-33.42-16.14-78.4-15.83-131.74.29-50.51,7.75-93.3,15.83-125.62,86.64,23.15,173.28,46.3,259.91,69.45-3.85,13.32-7.55,31.04-8.17,52.09-.78,26.83,3.74,49.01,8.17,64.34Z"
                            className={getSectionClass(1000)}
                            onClick={() => isSectionClickable(1000) && handleBlockClick('KENT WEST STAND 2', 1000)}
                            style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />
                    </g>
                    <g>
                        <path  d="M514.46,846.29c-8.69-10.21-18.05-22.59-27.06-37.28-6.84-11.14-12.37-21.81-16.86-31.59,7.66-9.04,15.33-18.09,22.99-27.13,9.28,13.29,18.7,27.59,28.09,42.89,10.03,16.37,19.02,32.26,27.06,47.49-11.4,1.87-22.81,3.74-34.21,5.62Z"
                            className='st9'/>
                        <path  d="M922.8,767.82c-4.81,11.74-10.98,24.82-18.89,38.64-7.85,13.7-15.95,25.55-23.57,35.57-10.64-1.99-21.28-3.97-31.91-5.96,5.23-13.91,11.94-29.33,20.6-45.62,9.96-18.75,20.45-34.79,30.3-48.17,7.83,8.51,15.66,17.02,23.49,25.53Z"
                            className='st9'/>
                    </g>
                    <g>
                        <path  d="M1116.5,1248.41c-47.41,36.27-196.28,140.52-413.62,143.23-205.68,2.57-351.05-87.33-401.36-121.79,30.38-37.28,60.77-74.55,91.15-111.83,41.88,26.91,155.74,92.25,314.81,89.62,160.24-2.65,272.48-72.74,313.28-101.11,31.91,33.96,63.83,67.91,95.74,101.87Z"
                            className={getSectionClass(12000)}
                            onClick={() => isSectionClickable(10200) && handleBlockClick('DREAM 11 VVIP LOUNGE', 12000)}
                            style={{ cursor: isSectionClickable(12000) ? 'pointer' : 'not-allowed' }} />
                        <path  d="M157.02,835.05c-45.62,13.62-91.23,27.23-136.85,40.85-14.81-62.63-33.02-176.29-5.11-313.53,31.48-154.79,105.65-261.07,147.06-312.51,35.06,31.32,70.13,62.64,105.19,93.96-31.52,39.25-86.67,118.56-112.34,233.87-25.41,114.16-9.65,208.5,2.04,257.36Z"
                            className={getSectionClass(4500)}
                            onClick={() => isSectionClickable(4500) && handleBlockClick('FREEMANS NORTH WEST STAND', 4500)}
                            style={{ cursor: isSectionClickable(4500) ? 'pointer' : 'not-allowed' }} />
                    </g>
                    <path  d="M812.67,148.75c-34.41-5.4-76.77-9.27-125.11-7.66-50.06,1.67-93.4,8.78-128.17,16.85-13.45-44.26-26.89-88.51-40.34-132.77,40.44-11.55,95.6-23,161.62-24.51,65.56-1.5,120.84,7.27,161.62,16.85-9.87,43.74-19.74,87.49-29.62,131.23Z"
                            className='st9' />
                    <g>
                        <path  d="M544.59,161.01c-39.45,10.97-95.26,31.29-154.21,70.47-52.04,34.58-89.17,72.32-113.87,101.62-35.06-30.98-70.13-61.96-105.19-92.94,30.73-36.88,78.73-86.25,147.57-130.72,71.86-46.43,139.47-70.11,186.89-82.72,12.94,44.77,25.87,89.53,38.81,134.3Z"
                            className={getSectionClass(5000)}
                            onClick={() => isSectionClickable(5000) && handleBlockClick('JIO NORTH STAND (LEVEL 2)', 5000)}
                            style={{ cursor: isSectionClickable(5000) ? 'pointer' : 'not-allowed' }} />
                        <path  d="M1068.5,289.18c-26.68-26.47-67.69-61.14-124.6-89.87-45.14-22.79-86.76-35.02-118.98-41.87,11.4-45.79,22.81-91.57,34.21-137.36,40.82,9.09,92.79,24.82,149.11,53.11,70.26,35.3,121.82,77.35,156.26,110.3l-96,105.7Z"
                            className={getSectionClass(5000)}
                            onClick={() => isSectionClickable(5000) && handleBlockClick('ALL SEASONS NORTH STAND 2 (LEVEL 1)', 5000)}
                            style={{ cursor: isSectionClickable(5000) ? 'pointer' : 'not-allowed' }} />
                    </g>
                    <g>
                        <path  d="M624.76,455.14c-18.26,5.49-42.62,14.94-68.43,31.66-21.25,13.77-37.38,28.52-49.02,40.85-67.57-58.04-135.15-116.09-202.72-174.13,24.75-27.46,60.58-61.72,109.28-93.45,52.12-33.96,101.16-53.41,137.87-64.85,24.34,86.64,48.68,173.28,73.02,259.91Z"
                            className={getSectionClass(4000)}
                            onClick={() => isSectionClickable(4000) && handleBlockClick('JIO NORTH STAND 1', 4000)}
                            style={{ cursor: isSectionClickable(4000) ? 'pointer' : 'not-allowed' }} />
                        <path  d="M1195.14,567.48c-85.11,21.28-170.21,42.55-255.32,63.83-6.54-17.68-15.82-38.55-29.11-60.77-12.46-20.84-25.51-37.96-37.28-51.57l181.28-197.36c24.82,23.81,55.85,58.47,83.74,105.45,32.04,53.95,48.15,104.28,56.68,140.43Z"
                            className={getSectionClass(4000)}
                            onClick={() => isSectionClickable(4000) && handleBlockClick('VALVOLINE EAST STAND 1', 4000)}
                            style={{ cursor: isSectionClickable(4000) ? 'pointer' : 'not-allowed' }} />
                    </g>
                    <g>
                        <ellipse class="st9" cx="694.25" cy="694.24" rx="181.32" ry="180.38" />
                        <rect className="st10" x="678.55" y="638.29" width="33.02" height="150.44" />
                    </g>
                </svg>
            </div>
        </div>
    )
}

export default HPCAStadium