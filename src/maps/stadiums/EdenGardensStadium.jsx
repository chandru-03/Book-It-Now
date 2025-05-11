import React, { useEffect, useState } from 'react'
import '../../styles/Sports.css'
import '../../styles/SVG.css'

function EdenGardensStadium({ setBlockPrice, setBlockName, setPrice, filterBy }) {
    const [zoom, setZoom] = useState(2)

    useEffect(() => {
        const price = [900, 2500, 3000, 3500, 4000, 5000, 10000, 18000];
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
            return price === 900 ? 'st7' :
                price === 2500 ? 'st1' :
                    price === 3000 ? 'st13' :
                        price === 3500 ? 'st2' :
                            price === 4000 ? 'st3' :
                                price === 5000 ? 'st4' :
                                    price === 10000 ? 'st6' :
                                        price === 18000 ? 'st12' : '';
        } else {
            return 'st-grey';
        }
    }

    const isSectionClickable = (price) => {
        return !filterBy || filterBy === price;
    }
    return (
        <div className='svg-wrapper' style={{ padding: '20px' }}>
            <div className="zoom-controls">
                <span className="material-symbols-outlined" onClick={handleZoomOut}>zoom_out</span>
                <p className="zoom-level">{Math.round(zoom * 50)}%</p>
                <span className="material-symbols-outlined" onClick={handleZoomIn}>zoom_in</span>
            </div>
                            
            <div style={{ transform: `scale(${zoom})`, transformOrigin: 'center center', transition: 'transform 0.3s ease' }}>

                <img className='image-eden' src='/Assets/StadiumBlocks/Eden.png' alt="Map" />
                
                <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 2000">

                    <g>
                        <path d="M1705.36,833.03c-55.26.79-110.52,1.59-165.79,2.38-1.38-63.53-12.54-184.73-82.21-315.57-60.6-113.8-139.06-185.32-187.4-223.15,30.13-43.4,60.26-86.81,90.38-130.21,60.62,45.39,161.4,133.2,239.49,275.74,88.75,161.99,103.38,312.88,105.53,390.81Z"
                            className={getSectionClass(3000)}
                            onClick={() => isSectionClickable(3000) && handleBlockClick('D1 BLOCK', 3000)}
                            style={{ cursor: isSectionClickable(3000) ? 'pointer' : 'not-allowed' }} />
                        <path d="M728.68,181.28c-33.8,6.35-76.88,17.7-124.09,38.81-50.02,22.37-88.93,48.66-116.94,70.72l-98.55-149.36c38.14-25.39,87.23-53.58,147.06-78.13,61.64-25.29,117.96-39.86,163.91-48.51,9.53,55.49,19.06,110.98,28.6,166.47Z"
                            className={getSectionClass(3000)}
                            onClick={() => isSectionClickable(3000) && handleBlockClick('G1 BLOCK', 3000)}
                            style={{ cursor: isSectionClickable(3000) ? 'pointer' : 'not-allowed' }} />
                    </g>
                    <g>
                        <path d="M1019.74,187.41c-37.79-9.4-87.69-18.05-146.55-18.38-54.96-.31-102,6.72-138.38,14.81-9.36-56.34-18.72-112.68-28.09-169.02C749.99,6.58,802.99.13,863.49.52c78.72.51,145.62,12.44,196.6,25.53-13.45,53.79-26.89,107.57-40.34,161.36Z"
                            className={getSectionClass(5000)}
                            onClick={() => isSectionClickable(5000) && handleBlockClick('F1 BLOCK', 5000)}
                            style={{ cursor: isSectionClickable(5000) ? 'pointer' : 'not-allowed' }} />
                        <path d="M482.55,294.64c-31.53,23.53-68.23,54.83-105.19,95.49-35.93,39.53-63.05,77.94-83.23,110.81-51.71-32.94-103.43-65.88-155.14-98.82,26.25-40.83,61.83-88.93,109.19-138.11,48.08-49.93,95.53-87.7,135.83-115.66l98.55,146.3Z"
                            className={getSectionClass(5000)}
                            onClick={() => isSectionClickable(5000) && handleBlockClick('H1 BLOCK', 5000)}
                            style={{ cursor: isSectionClickable(5000) ? 'pointer' : 'not-allowed' }} />
                    </g>
                    <g>
                        <path d="M1116.26,442.22c-19.55-12.93-44.08-26.95-73.53-39.32-24.19-10.16-46.72-17.12-66.38-21.96,29.62-117.79,59.23-235.57,88.85-353.36,35.92,9.34,77.18,22.63,121.53,41.87,48.44,21.01,89.32,44.24,122.55,65.87-64.34,102.3-128.68,204.6-193.02,306.89Z"
                            className={getSectionClass(10000)}
                            onClick={() => isSectionClickable(10000) && handleBlockClick('E BLOCK', 10000)}
                            style={{ cursor: isSectionClickable(10000) ? 'pointer' : 'not-allowed' }} />
                        <path d="M644.94,1473.71c-17.9-4.9-39.26-12.24-62.3-23.49-21.74-10.61-39.77-22.16-54.13-32.68,30.64-51.74,61.28-103.49,91.91-155.23,9.93,6.46,21.16,13.06,33.7,19.4,17.6,8.9,34.21,15.5,49.02,20.43-19.4,57.19-38.81,114.38-58.21,171.57Z"
                            className={getSectionClass(10000)}
                            onClick={() => isSectionClickable(10000) && handleBlockClick('L BLOCK', 10000)}
                            style={{ cursor: isSectionClickable(10000) ? 'pointer' : 'not-allowed' }} />
                    </g>
                    <g>
                        <path d="M560.17,1704.52c-67.19-24.88-157.26-66.69-250.21-137.87-68.71-52.61-120.54-107.14-158.3-153.19,37.79-28.26,75.57-56.51,113.36-84.77,30.42,38.32,73.09,84.44,130.72,128.68,79.6,61.11,157.08,95.11,212.94,114.38-16.17,44.26-32.34,88.51-48.51,132.77Z"
                            className={getSectionClass(4000)}
                            onClick={() => isSectionClickable(4000) && handleBlockClick('L1 BLOCK', 4000)}
                            style={{ cursor: isSectionClickable(4000) ? 'pointer' : 'not-allowed' }} />
                        <path d="M1569.19,1385.37c-38.43,49.73-93.34,110.89-168.51,170.04-86.06,67.72-169.15,109.58-232.17,135.49l-41.53-118.13c49.66-16.85,118.39-46.27,190.21-98.55,78.7-57.28,130.68-119.85,162.38-164.68l89.62,75.83Z"
                            className={getSectionClass(4000)}
                            onClick={() => isSectionClickable(4000) && handleBlockClick('B1 BLOCK', 4000)}
                            style={{ cursor: isSectionClickable(4000) ? 'pointer' : 'not-allowed' }} />
                    </g>
                    <g>
                        <path d="M972.77,377.37c-28.27-5.43-61.59-9.88-99.06-11.23-39.39-1.43-74.52.89-104.17,4.6l-32.68-183.32c35.69-7.94,82.07-14.84,136.34-14.3,58.75.58,108.34,9.71,145.53,19.4-15.32,61.62-30.64,123.23-45.96,184.85Z"
                            className={getSectionClass(3500)}
                            onClick={() => isSectionClickable(3500) && handleBlockClick('F BLOCK', 3500)}
                            style={{ cursor: isSectionClickable(3500) ? 'pointer' : 'not-allowed' }} />
                        <path d="M765.96,371.75c-24.72,5.57-52.7,13.52-82.72,25.02-36.84,14.11-68.04,30.24-93.45,45.45-33.19-49.02-66.38-98.04-99.57-147.06,28.98-21.39,67.61-45.98,115.91-67.4,47.62-21.12,91.17-33.19,126.13-40.34,11.23,61.45,22.47,122.89,33.7,184.34Z"
                            className={getSectionClass(3500)}
                            onClick={() => isSectionClickable(3500) && handleBlockClick('G BLOCK', 3500)}
                            style={{ cursor: isSectionClickable(3500) ? 'pointer' : 'not-allowed' }} />
                        <path d="M586.72,449.88c-22.66,14.38-49.92,34.42-77.62,61.79-28.95,28.61-49.97,56.89-64.85,80.17-47.49-29.28-94.98-58.55-142.47-87.83,19.1-32.87,45.71-72.28,82.21-112.85,36.16-40.18,72.2-70.57,102.64-92.94l100.09,151.66Z"
                            className={getSectionClass(3500)}
                            onClick={() => isSectionClickable(3500) && handleBlockClick('H BLOCK', 3500)}
                            style={{ cursor: isSectionClickable(3500) ? 'pointer' : 'not-allowed' }} />
                        <path d="M369.7,859.92H9.7c.35-59.8,6.87-141,32.68-233.36,26.04-93.19,62.99-166.52,93.96-218.04,101.96,63.49,203.91,126.98,305.87,190.47-16.69,28.17-35.31,65.64-49.53,111.83-18.16,58.97-22.69,111.14-22.98,149.11Z"
                            className={getSectionClass(3500)}
                            onClick={() => isSectionClickable(3500) && handleBlockClick('J BLOCK', 3500)}
                            style={{ cursor: isSectionClickable(3500) ? 'pointer' : 'not-allowed' }} />
                        <path d="M263.23,1289.62c-37.19,26.13-74.38,52.26-111.57,78.38-33.7-47.09-75.49-116.12-106.72-206.3C10.51,1062.31,1.8,974.48.51,913.54c42.66-.54,85.33-1.08,127.99-1.61.65,49.26,7.49,123.98,38.99,208.42,28.4,76.13,66.55,132.59,95.74,169.28Z"
                            className={getSectionClass(3500)}
                            onClick={() => isSectionClickable(3500) && handleBlockClick('K1 BLOCK', 3500)}
                            style={{ cursor: isSectionClickable(3500) ? 'pointer' : 'not-allowed' }} />
                        <path d="M1578.38,1364.43c-29.96-22.81-59.91-45.62-89.87-68.43,30.89-43.6,68.64-106.81,96.68-188.94,34.28-100.41,40.33-188.88,39.66-248.17,30.13-1.02,60.26-2.04,90.38-3.06,3.5,65.49,1.11,163.01-30.64,275.4-28.92,102.37-71.95,180.8-106.21,233.19Z"
                            className={getSectionClass(3500)}
                            onClick={() => isSectionClickable(3500) && handleBlockClick('C1 BLOCK', 3500)}
                            style={{ cursor: isSectionClickable(3500) ? 'pointer' : 'not-allowed' }} />
                    </g>
                    <g>
                        <path d="M1157.11,1691.75c-64.93,22.79-159.49,48.06-275.74,52.85-113.01,4.65-206.98-11.69-272.68-28.34,10.98-33.45,21.96-66.89,32.94-100.34,55.78,15.02,139.49,30.82,241.28,25.28,100.75-5.48,181.54-29.82,235.15-50.55,13.02,33.7,26.04,67.4,39.06,101.11Z"
                            className={getSectionClass(2500)}
                            onClick={() => isSectionClickable(2500) && handleBlockClick('CLUB HOUSE UPPER TIER', 2500)}
                            style={{ cursor: isSectionClickable(2500) ? 'pointer' : 'not-allowed' }} />
                        <path d="M1065.7,1445.11c-46.8,14.98-112.43,30.7-192,33.7-80.09,3.02-147.11-7.87-195.06-19.4,12.94-52.43,25.87-104.85,38.81-157.28,40.41,7.13,90.96,12.64,149.11,11.23,58.01-1.41,108.13-9.33,148.09-18.38,17.02,50.04,34.04,100.09,51.06,150.13Z"
                            className={getSectionClass(2500)}
                            onClick={() => isSectionClickable(2500) && handleBlockClick('CLUB HOUSE LOWER TIER', 2500)}
                            style={{ cursor: isSectionClickable(2500) ? 'pointer' : 'not-allowed' }} />
                    </g>
                    <g>
                        <path d="M1528.34,840.52c-62.98,1.19-125.96,2.38-188.94,3.57-1.12-43.63-8.77-120.31-49.53-204.77-44.71-92.64-107.31-149.17-142.47-176.68,37.79-52.43,75.57-104.85,113.36-157.28,47.21,35.34,133.01,109.32,195.57,232.85,64.28,126.93,72.05,243.04,72,302.3Z"
                            className={getSectionClass(5000)}
                            onClick={() => isSectionClickable(5000) && handleBlockClick('D BLOCK', 5000)}
                            style={{ cursor: isSectionClickable(5000) ? 'pointer' : 'not-allowed' }} />
                        <path d="M470.81,1126.47c-43.15,33.96-86.3,67.91-129.45,101.87-25.26-36.85-55.86-89.69-78.89-157.79-20.83-61.58-29.05-116.65-32.17-158.63,54.13-6.1,108.26-12.2,162.38-18.3.45,28.46,4.02,66.57,16.85,109.53,16.59,55.56,42,96.94,61.28,123.32Z"
                            className={getSectionClass(5000)}
                            onClick={() => isSectionClickable(5000) && handleBlockClick('K BLOCK', 5000)}
                            style={{ cursor: isSectionClickable(5000) ? 'pointer' : 'not-allowed' }} />
                        <path d="M524.77,1412.77c-26.58-16.82-56.07-37.85-86.47-64-36.59-31.47-65.87-62.92-88.85-90.89,46.75-38.35,93.5-76.71,140.26-115.06,13.79,17.68,31.07,37.33,52.43,57.19,26.11,24.3,51.65,42.71,73.7,56.51-30.35,52.09-60.71,104.17-91.06,156.26Z"
                            className={getSectionClass(5000)}
                            onClick={() => isSectionClickable(5000) && handleBlockClick('L BLOCK', 5000)}
                            style={{ cursor: isSectionClickable(5000) ? 'pointer' : 'not-allowed' }} />
                        <path d="M1396.85,1252.6c-53.45-41.45-106.89-82.89-160.34-124.34-13.94,18.35-31.6,38.91-53.62,59.74-25.49,24.12-50.43,42.54-72,56.43l77.36,128.17c11.35-6.52,22.7-13.05,34.04-19.57l26.38,35.74c23.76-17.74,49.01-38.25,74.89-61.87,27.96-25.51,52.29-50.64,73.28-74.3Z"
                            className={getSectionClass(5000)}
                            onClick={() => isSectionClickable(5000) && handleBlockClick('B2 BLOCK', 5000)}
                            style={{ cursor: isSectionClickable(5000) ? 'pointer' : 'not-allowed' }} />
                        <path d="M1430.28,1112.89l14.83-33.14c-48.77-16.34-97.53-32.68-146.3-49.02-3.99,12.53-9.73,27.22-18.13,42.89-10.66,19.89-22.46,35.55-32.68,47.23,54.47,38.66,108.94,77.32,163.4,115.98,10.16-15.16,20.69-32.46,30.89-51.89,10.47-19.93,18.89-38.86,25.71-56.21-12.58-5.28-25.15-10.56-37.73-15.84Z"
                            className={getSectionClass(5000)}
                            onClick={() => isSectionClickable(5000) && handleBlockClick('C BLOCK', 5000)}
                            style={{ cursor: isSectionClickable(5000) ? 'pointer' : 'not-allowed' }} />
                    </g>
                    <g>
                        <path d="M1221.45,1359.5c-11.57,5.9-23.15,11.8-34.72,17.7-25.87-43.4-51.74-86.81-77.62-130.21-13.34,7.5-27.55,15.04-42.64,22.47-14.79,7.29-29.16,13.84-42.98,19.74,23.04,60.94,46.07,121.87,69.11,182.81,23.1-8.18,49.39-19.19,77.37-34.13,29.38-15.68,54.17-32.25,74.46-47.58l-22.98-30.81Z"
                            className={getSectionClass(18000)}
                            onClick={() => isSectionClickable(18000) && handleBlockClick('B BLOCK', 18000)}
                            style={{ cursor: isSectionClickable(18000) ? 'pointer' : 'not-allowed' }} />
                        <path d="M1532.17,862.22c-65.53.51-131.06,1.02-196.6,1.53-.59,23.15-2.94,50.67-8.94,81.19-6,30.56-14.24,56.96-22.47,78.64,49.45,16.83,98.91,33.66,148.36,50.49-4.76,12.21-9.51,24.41-14.27,36.62,10.62,4.49,21.24,8.99,31.87,13.48,13.36-31.32,26.61-67.95,37.53-109.53,15.05-57.28,21.82-109.18,24.51-152.43Z"
                            className={getSectionClass(18000)}
                            onClick={() => isSectionClickable(18000) && handleBlockClick('C BLOCK', 18000)}
                            style={{ cursor: isSectionClickable(18000) ? 'pointer' : 'not-allowed' }} />
                    </g>
                    <g>
                        <path d="M733.53,1549.79c-24.88-4.94-49.76-9.87-74.64-14.81,5.84-21.73,11.67-43.46,17.51-65.19,21.42,4.03,42.84,8.06,64.26,12.09-2.38,22.64-4.76,45.28-7.14,67.91Z"
                            className={getSectionClass(900)}
                            onClick={() => isSectionClickable(900) && handleBlockClick('SUITE 14', 900)}
                            style={{ cursor: isSectionClickable(900) ? 'pointer' : 'not-allowed' }} />
                        <path d="M806.05,1554.05c-22.84-1.42-45.68-2.84-68.52-4.26l6.98-67.91c21.16,1.36,42.33,2.72,63.49,4.09-.65,22.7-1.3,45.39-1.95,68.09Z"
                            className={getSectionClass(900)}
                            onClick={() => isSectionClickable(900) && handleBlockClick('SUITE 13', 900)}
                            style={{ cursor: isSectionClickable(900) ? 'pointer' : 'not-allowed' }} />
                        <path d="M868.94,1551.67c-18.84.34-37.67.68-56.51,1.02v-67.06h56.51v66.04Z"
                            className={getSectionClass(900)}
                            onClick={() => isSectionClickable(900) && handleBlockClick('SUITE 12', 900)}
                            style={{ cursor: isSectionClickable(900) ? 'pointer' : 'not-allowed' }} />
                        <path d="M947.57,1545.37c-22.92,1.48-45.84,2.95-68.77,4.43-1.13-20.94-2.27-41.87-3.4-62.81,21.11-1.7,42.21-3.4,63.32-5.11,2.95,21.16,5.9,42.33,8.85,63.49Z"
                            className={getSectionClass(900)}
                            onClick={() => isSectionClickable(900) && handleBlockClick('SUITE 11', 900)}
                            style={{ cursor: isSectionClickable(900) ? 'pointer' : 'not-allowed' }} />
                        <path d="M1017.7,1532.6c-21.56,3.63-43.12,7.26-64.68,10.89-3.06-20.54-6.13-41.08-9.19-61.62l57.19-10.89c5.56,20.54,11.12,41.08,16.68,61.62Z"
                            className={getSectionClass(900)}
                            onClick={() => isSectionClickable(900) && handleBlockClick('SUITE 10', 900)}
                            style={{ cursor: isSectionClickable(900) ? 'pointer' : 'not-allowed' }} />
                        <path d="M1090.21,1507.24c-22.13,7.66-44.26,15.32-66.38,22.98-5.71-19.74-11.42-39.49-17.13-59.23,20.23-6.47,40.47-12.94,60.7-19.4,7.6,18.55,15.21,37.11,22.81,55.66Z"
                            className={getSectionClass(900)}
                            onClick={() => isSectionClickable(900) && handleBlockClick('SUITE 9', 900)}
                            style={{ cursor: isSectionClickable(900) ? 'pointer' : 'not-allowed' }} />
                        <path d="M700.9,1619.15c-18.66-4.22-37.31-8.44-55.97-12.66,4.65-20.37,9.31-40.75,13.96-61.12,17.35,4.26,34.7,8.51,52.05,12.77-3.35,20.34-6.69,40.68-10.04,61.01Z"
                            className={getSectionClass(900)}
                            onClick={() => isSectionClickable(900) && handleBlockClick('SUITE 1', 900)}
                            style={{ cursor: isSectionClickable(900) ? 'pointer' : 'not-allowed' }} />
                        <path d="M767.15,1628.6c-20.09-2.61-40.17-5.22-60.26-7.83,2.72-20.88,5.45-41.76,8.17-62.64,18.38,1.82,36.77,3.63,55.15,5.45-1.02,21.67-2.04,43.35-3.06,65.02Z"
                            className={getSectionClass(900)}
                            onClick={() => isSectionClickable(900) && handleBlockClick('SUITE 2', 900)}
                            style={{ cursor: isSectionClickable(900) ? 'pointer' : 'not-allowed' }} />
                        <path d="M826.67,1630.98c-17.97-.79-35.94-1.59-53.91-2.38.96-21.22,1.93-42.44,2.89-63.66h49.36c.55,22.01,1.1,44.03,1.65,66.04Z"
                            className={getSectionClass(900)}
                            onClick={() => isSectionClickable(900) && handleBlockClick('SUITE 3', 900)}
                            style={{ cursor: isSectionClickable(900) ? 'pointer' : 'not-allowed' }} />
                        <path d="M886.3,1630.98c-17.27.68-34.55,1.36-51.82,2.04-.65-22.7-1.31-45.39-1.96-68.09h50.38c1.13,22.01,2.27,44.03,3.4,66.04Z"
                            className={getSectionClass(900)}
                            onClick={() => isSectionClickable(900) && handleBlockClick('SUITE 4', 900)}
                            style={{ cursor: isSectionClickable(900) ? 'pointer' : 'not-allowed' }} />
                        <path d="M945.87,1625.88c-17.25,1.7-34.5,3.4-51.74,5.11-2.04-22.13-4.09-44.26-6.13-66.38,16.57-1.23,33.13-2.47,49.7-3.7,2.72,21.66,5.45,43.32,8.17,64.98Z"
                            className={getSectionClass(900)}
                            onClick={() => isSectionClickable(900) && handleBlockClick('SUITE 5', 900)}
                            style={{ cursor: isSectionClickable(900) ? 'pointer' : 'not-allowed' }} />
                        <path d="M1006.7,1613.62c-18.57,3.52-37.15,7.04-55.72,10.55-3.12-21.9-6.24-43.8-9.36-65.7,17.99-2.89,35.97-5.79,53.96-8.68,3.71,21.28,7.42,42.55,11.13,63.83Z"
                            className={getSectionClass(900)}
                            onClick={() => isSectionClickable(900) && handleBlockClick('SUITE 6', 900)}
                            style={{ cursor: isSectionClickable(900) ? 'pointer' : 'not-allowed' }} />
                        <path d="M1060.6,1602.39c-15.66,3.74-31.32,7.49-46.98,11.23-4.43-21.28-8.85-42.55-13.28-63.83,14.52-3.35,29.05-6.7,43.57-10.04,5.56,20.88,11.12,41.76,16.68,62.64Z"
                            className={getSectionClass(900)}
                            onClick={() => isSectionClickable(900) && handleBlockClick('SUITE 7', 900)}
                            style={{ cursor: isSectionClickable(900) ? 'pointer' : 'not-allowed' }} />
                        <path d="M1115.06,1584.39c-16,4.89-32,9.79-48,14.68-6.07-20.91-12.14-41.82-18.21-62.72,15.6-4.54,31.21-9.08,46.81-13.62,6.47,20.55,12.94,41.11,19.4,61.66Z"
                            className={getSectionClass(900)}
                            onClick={() => isSectionClickable(900) && handleBlockClick('SUITE 8', 900)}
                            style={{ cursor: isSectionClickable(900) ? 'pointer' : 'not-allowed' }} />
                        <path d="M1173.28,1540.77c-16.96,7.26-33.93,14.52-50.89,21.79-9.65-25.82-19.29-51.63-28.94-77.45,15.55-5.76,31.09-11.53,46.64-17.29,11.06,24.32,22.13,48.63,33.19,72.95Z"
                            className={getSectionClass(900)}
                            onClick={() => isSectionClickable(900) && handleBlockClick('B-1', 900)}
                            style={{ cursor: isSectionClickable(900) ? 'pointer' : 'not-allowed' }} />
                        <path d="M1221.45,1515.24c-14.64,7.94-29.28,15.89-43.91,23.83-10.89-24.57-21.79-49.13-32.68-73.7,13.5-6.52,27.01-13.05,40.51-19.57,12.03,23.15,24.06,46.3,36.09,69.45Z"
                            className={getSectionClass(900)}
                            onClick={() => isSectionClickable(900) && handleBlockClick('B-2', 900)}
                            style={{ cursor: isSectionClickable(900) ? 'pointer' : 'not-allowed' }} />
                        <path d="M1271.32,1486.64c-14.87,9.13-29.73,18.27-44.6,27.4-12.03-23.38-24.06-46.75-36.09-70.13,12.75-7.44,25.51-14.88,38.26-22.32l42.42,65.05Z"
                            className={getSectionClass(900)}
                            onClick={() => isSectionClickable(900) && handleBlockClick('B-3', 900)}
                            style={{ cursor: isSectionClickable(900) ? 'pointer' : 'not-allowed' }} />
                        <path d="M1319.66,1456.69c-14.07,8.74-28.14,17.48-42.21,26.21-14.75-21.5-29.5-43.01-44.26-64.51,12.6-9.42,25.19-18.84,37.79-28.26,16.23,22.18,32.45,44.37,48.68,66.55Z"
                            className={getSectionClass(900)}
                            onClick={() => isSectionClickable(900) && handleBlockClick('B-4', 900)}
                            style={{ cursor: isSectionClickable(900) ? 'pointer' : 'not-allowed' }} />
                        <path d="M1362.04,1419.58c-13.11,10.67-26.21,21.33-39.32,32-16.17-21.33-32.34-42.67-48.51-64,12.14-9.7,24.28-19.4,36.43-29.11,17.13,20.37,34.27,40.74,51.4,61.11Z"
                            className={getSectionClass(900)}
                            onClick={() => isSectionClickable(900) && handleBlockClick('B-5', 900)}
                            style={{ cursor: isSectionClickable(900) ? 'pointer' : 'not-allowed' }} />
                        <path d="M1401.87,1381.45c-11.46,11.57-22.92,23.15-34.38,34.72-17.53-20.26-35.06-40.51-52.6-60.77,10.81-10.21,21.62-20.43,32.43-30.64,18.18,18.89,36.37,37.79,54.55,56.68Z"
                            className={getSectionClass(900)}
                            onClick={() => isSectionClickable(900) && handleBlockClick('B-6', 900)}
                            style={{ cursor: isSectionClickable(900) ? 'pointer' : 'not-allowed' }} />
                        <path d="M1435.86,1346.17c-9.91,10.29-19.82,20.57-29.73,30.86-18.33-19.01-36.65-38.01-54.98-57.02,9.19-9.59,18.38-19.18,27.57-28.77,19.05,18.31,38.09,36.62,57.14,54.93Z"
                            className={getSectionClass(900)}
                            onClick={() => isSectionClickable(900) && handleBlockClick('B-7', 900)}
                            style={{ cursor: isSectionClickable(900) ? 'pointer' : 'not-allowed' }} />
                        <path d="M1440.34,1340.6c-19.35-18.35-38.69-36.71-58.04-55.06,7.6-9.11,15.21-18.21,22.81-27.32,21.67,15.21,43.35,30.41,65.02,45.62-9.93,12.26-19.86,24.51-29.79,36.77Z"
                            className={getSectionClass(900)}
                            onClick={() => isSectionClickable(900) && handleBlockClick('B-8', 900)}
                            style={{ cursor: isSectionClickable(900) ? 'pointer' : 'not-allowed' }} />
                        <path d="M1478.81,1288.35c-20.6-14.24-41.19-28.48-61.79-42.72,6.98-9.93,13.96-19.86,20.94-29.79l63.83,41.36c-7.66,10.38-15.32,20.77-22.98,31.15Z"
                            className={getSectionClass(900)}
                            onClick={() => isSectionClickable(900) && handleBlockClick('C-1', 900)}
                            style={{ cursor: isSectionClickable(900) ? 'pointer' : 'not-allowed' }} />
                        <path d="M1505.19,1254.13c-21.7-13.92-43.4-27.84-65.1-41.75,6.24-10.14,12.49-20.28,18.73-30.42,21.53,12.43,43.05,24.86,64.58,37.28l-18.21,34.89Z"
                            className={getSectionClass(900)}
                            onClick={() => isSectionClickable(900) && handleBlockClick('C-2', 900)}
                            style={{ cursor: isSectionClickable(900) ? 'pointer' : 'not-allowed' }} />
                        <path d="M1526.13,1215.84c-21.79-12.82-43.57-25.65-65.36-38.47,5.79-12.2,11.57-24.4,17.36-36.6,23.15,11.01,46.3,22.01,69.45,33.02-7.15,14.01-14.3,28.03-21.45,42.04Z"
                            className={getSectionClass(900)}
                            onClick={() => isSectionClickable(900) && handleBlockClick('C-3', 900)}
                            style={{ cursor: isSectionClickable(900) ? 'pointer' : 'not-allowed' }} />
                        <path d="M1548.09,1170.9l-67.91-34.72c5.73-12.71,11.46-25.42,17.19-38.13,23.09,9.02,46.18,18.04,69.28,27.06-6.18,15.26-12.37,30.52-18.55,45.79Z"
                            className={getSectionClass(900)}
                            onClick={() => isSectionClickable(900) && handleBlockClick('C-4', 900)}
                            style={{ cursor: isSectionClickable(900) ? 'pointer' : 'not-allowed' }} />
                        <path d="M1569.53,1121.88c-24.06-9.08-48.11-18.16-72.17-27.23,4.99-14.87,9.99-29.73,14.98-44.6,23.72,7.15,47.43,14.3,71.15,21.45l-13.96,50.38Z"
                            className={getSectionClass(900)}
                            onClick={() => isSectionClickable(900) && handleBlockClick('C-5', 900)}
                            style={{ cursor: isSectionClickable(900) ? 'pointer' : 'not-allowed' }} />
                        <path d="M1585.7,1067.58c-23.94-7.55-47.89-15.09-71.83-22.64,3.69-14.35,7.38-28.71,11.06-43.06,24.62,5.33,49.25,10.67,73.87,16-4.37,16.57-8.74,33.13-13.11,49.7Z"
                            className={getSectionClass(900)}
                            onClick={() => isSectionClickable(900) && handleBlockClick('C-6', 900)}
                            style={{ cursor: isSectionClickable(900) ? 'pointer' : 'not-allowed' }} />
                        <path d="M1600,1012.26c-24.68-6.24-49.36-12.48-74.04-18.72,2.55-15.32,5.11-30.64,7.66-45.96,25.3,3.29,50.61,6.58,75.91,9.87-3.18,18.27-6.35,36.54-9.53,54.81Z"
                            className={getSectionClass(900)}
                            onClick={() => isSectionClickable(900) && handleBlockClick('C-7', 900)}
                            style={{ cursor: isSectionClickable(900) ? 'pointer' : 'not-allowed' }} />
                        <path d="M1610.89,951.5l-75.4-9.87,3.4-41.02c25.36,1.7,50.72,3.4,76.09,5.11-1.36,15.26-2.72,30.52-4.09,45.79Z"
                            className={getSectionClass(900)}
                            onClick={() => isSectionClickable(900) && handleBlockClick('C-8', 900)}
                            style={{ cursor: isSectionClickable(900) ? 'pointer' : 'not-allowed' }} />
                        <path d="M1613.96,899.07c-25.02-1.3-50.04-2.61-75.06-3.91.45-11.69.91-23.38,1.36-35.06,25.19-.79,50.38-1.59,75.57-2.38-.62,13.79-1.25,27.57-1.87,41.36Z"
                            className={getSectionClass(900)}
                            onClick={() => isSectionClickable(900) && handleBlockClick('C-9', 900)}
                            style={{ cursor: isSectionClickable(900) ? 'pointer' : 'not-allowed' }} />
                        <path d="M227.23,955.58c-28.37,4.77-56.74,9.53-85.11,14.3-1.13-19.12-2.27-38.24-3.4-57.36,28.31-.74,56.62-1.48,84.94-2.21,1.19,15.09,2.38,30.18,3.57,45.28Z"
                            className={getSectionClass(900)}
                            onClick={() => isSectionClickable(900) && handleBlockClick('K-7', 900)}
                            style={{ cursor: isSectionClickable(900) ? 'pointer' : 'not-allowed' }} />
                        <path d="M235.23,1003.75c-27.29,7.32-54.58,14.64-81.87,21.96-3.4-16.62-6.81-33.25-10.21-49.87,28.6-5.05,57.19-10.1,85.79-15.15,2.1,14.35,4.2,28.71,6.3,43.06Z"
                            className={getSectionClass(900)}
                            onClick={() => isSectionClickable(900) && handleBlockClick('K-6', 900)}
                            style={{ cursor: isSectionClickable(900) ? 'pointer' : 'not-allowed' }} />
                        <path d="M249.36,1055.67c-27.35,10.33-54.7,20.65-82.04,30.98-4.26-18.33-8.51-36.65-12.77-54.98,27.4-7.83,54.81-15.66,82.21-23.49,4.2,15.83,8.4,31.66,12.6,47.49Z"
                            className={getSectionClass(900)}
                            onClick={() => isSectionClickable(900) && handleBlockClick('K-5', 900)}
                            style={{ cursor: isSectionClickable(900) ? 'pointer' : 'not-allowed' }} />
                        <path d="M190.47,1142.81c-6.52-17.25-13.05-34.5-19.57-51.74,26.55-10.44,53.11-20.88,79.66-31.32,5.5,15.32,11.01,30.64,16.51,45.96l-76.6,37.11Z"
                            className={getSectionClass(900)}
                            onClick={() => isSectionClickable(900) && handleBlockClick('K-4', 900)}
                            style={{ cursor: isSectionClickable(900) ? 'pointer' : 'not-allowed' }} />
                        <path d="M213.28,1193.03c-6.87-14.7-13.73-29.39-20.6-44.09,25.08-12.17,50.16-24.34,75.23-36.51,6.07,12.74,12.14,25.48,18.21,38.21-24.28,14.13-48.57,28.26-72.85,42.38Z"
                            className={getSectionClass(900)}
                            onClick={() => isSectionClickable(900) && handleBlockClick('K-3', 900)}
                            style={{ cursor: isSectionClickable(900) ? 'pointer' : 'not-allowed' }} />
                        <path d="M239.83,1239.67c-7.77-13.79-15.55-27.57-23.32-41.36,24.34-14.01,48.68-28.03,73.02-42.04l20.26,36.43c-23.32,15.66-46.64,31.32-69.96,46.98Z"
                            className={getSectionClass(900)}
                            onClick={() => isSectionClickable(900) && handleBlockClick('K-2', 900)}
                            style={{ cursor: isSectionClickable(900) ? 'pointer' : 'not-allowed' }} />
                        <path d="M267.06,1281.71c-7.94-12.09-15.89-24.17-23.83-36.26,23.43-15.94,46.87-31.89,70.3-47.83,7.43,11.18,14.87,22.35,22.3,33.53-22.92,16.85-45.84,33.7-68.77,50.55Z"
                            className={getSectionClass(900)}
                            onClick={() => isSectionClickable(900) && handleBlockClick('K-1', 900)}
                            style={{ cursor: isSectionClickable(900) ? 'pointer' : 'not-allowed' }} />
                        <path d="M303.66,1359.67c-11.06-12.48-22.13-24.96-33.19-37.45,25.25-18.16,50.5-36.31,75.74-54.47,8.28,9.3,16.57,18.61,24.85,27.91-22.47,21.33-44.94,42.67-67.4,64Z"
                            className={getSectionClass(900)}
                            onClick={() => isSectionClickable(900) && handleBlockClick('L-8', 900)}
                            style={{ cursor: isSectionClickable(900) ? 'pointer' : 'not-allowed' }} />
                        <path d="M341.62,1396.26c-11.63-11.29-23.26-22.58-34.89-33.87l66.21-62.13c9.87,9.76,19.74,19.52,29.62,29.28-20.31,22.24-40.62,44.48-60.94,66.72Z"
                            className={getSectionClass(900)}
                            onClick={() => isSectionClickable(900) && handleBlockClick('L-7', 900)}
                            style={{ cursor: isSectionClickable(900) ? 'pointer' : 'not-allowed' }} />
                        <path d="M378.38,1430.3c-10.72-9.42-21.45-18.84-32.17-28.26,19.91-23.26,39.83-46.52,59.74-69.79,9.65,8.91,19.29,17.82,28.94,26.72-18.84,23.77-37.67,47.55-56.51,71.32Z"
                            className={getSectionClass(900)}
                            onClick={() => isSectionClickable(900) && handleBlockClick('L-6', 900)}
                            style={{ cursor: isSectionClickable(900) ? 'pointer' : 'not-allowed' }} />
                        <path d="M418.55,1461.79c-12.54-9.19-25.08-18.38-37.62-27.57,18.84-23.15,37.67-46.3,56.51-69.45,10.72,8.28,21.45,16.57,32.17,24.85-17.02,24.06-34.04,48.11-51.06,72.17Z"
                            className={getSectionClass(900)}
                            onClick={() => isSectionClickable(900) && handleBlockClick('L-5', 900)}
                            style={{ cursor: isSectionClickable(900) ? 'pointer' : 'not-allowed' }} />
                        <path d="M461.11,1492.77c-12.88-8.96-25.76-17.93-38.64-26.89,17.25-24.11,34.5-48.23,51.74-72.34,11.83,7.43,23.66,14.87,35.49,22.3-16.2,25.65-32.4,51.29-48.6,76.94Z"
                            className={getSectionClass(900)}
                            onClick={() => isSectionClickable(900) && handleBlockClick('L-4', 900)}
                            style={{ cursor: isSectionClickable(900) ? 'pointer' : 'not-allowed' }} />
                        <path d="M508.77,1519.33c-13.73-7.55-27.46-15.09-41.19-22.64,15.72-25.48,31.43-50.95,47.15-76.43,11.97,6.87,23.94,13.73,35.91,20.6-13.96,26.16-27.91,52.31-41.87,78.47Z"
                            className={getSectionClass(900)}
                            onClick={() => isSectionClickable(900) && handleBlockClick('L-3', 900)}
                            style={{ cursor: isSectionClickable(900) ? 'pointer' : 'not-allowed' }} />
                        <path d="M561.02,1545.37c-15.43-7.15-30.87-14.3-46.3-21.45,14.13-26.84,28.26-53.67,42.38-80.51,12.84,6.95,25.68,13.91,38.53,20.86-11.54,27.03-23.07,54.06-34.61,81.09Z"
                            className={getSectionClass(900)}
                            onClick={() => isSectionClickable(900) && handleBlockClick('L-2', 900)}
                            style={{ cursor: isSectionClickable(900) ? 'pointer' : 'not-allowed' }} />
                        <path d="M610.55,1566.64c-14.92-6.58-29.84-13.16-44.77-19.74,11.97-27.01,23.94-54.01,35.91-81.02,13.39,5.22,26.78,10.44,40.17,15.66-10.44,28.37-20.88,56.74-31.32,85.11Z"
                            className={getSectionClass(900)}
                            onClick={() => isSectionClickable(900) && handleBlockClick('L-1', 900)}
                            style={{ cursor: isSectionClickable(900) ? 'pointer' : 'not-allowed' }} />
                    </g>
                    <g>
                        <ellipse className='st9' cx="857.36" cy="846.64" rx="442.21" ry="440.17" />
                        <rect className='st10' x="830.81" y="764.94" width="58.21" height="163.91" />
                    </g>
                    <use href='#text-labels' />

                </svg>
            </div>
        </div>
    )
}

export default EdenGardensStadium