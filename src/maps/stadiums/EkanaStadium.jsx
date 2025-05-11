import React, { useEffect, useState } from 'react'
import '../../styles/Sports.css'
import '../../styles/SVG.css'

function EkanaStadium({ setBlockPrice, setBlockName, setPrice, filterBy }) {
    const [zoom, setZoom] = useState(2)

    useEffect(() => {
        const price = [1000, 8000, 10000, 12000, 17000,20000];
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
                        price === 10000 ? 'st3' :
                        price === 12000 ? 'st5' :
                            price === 17000 ? 'st4' :
                            price === 8000 ? 'st12' :
                            price === 20000 ? 'st8' : '';
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
                <img className='image-ekana' src='/Assets/StadiumBlocks/Ekana.png' alt="Map" />
                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1751.55 1749.02">
                    <g>
                        <path  d="M1042.28,201.74c-47.46-10-108.18-18.36-178.72-17.36-60.41.86-113.06,8.36-155.74,17.36-15.66-58.89-31.32-117.79-46.98-176.68,55.33-12.62,126.02-23.7,208.34-24.51,86.81-.86,161.14,9.95,218.55,22.47-15.15,59.57-30.3,119.15-45.45,178.72Z"                           
                            className={getSectionClass(12000)}
                            onClick={() => isSectionClickable(12000) && handleBlockClick('EAST STAND GROUND FLOOR', 12000)}
                            style={{ cursor: isSectionClickable(12000) ? 'pointer' : 'not-allowed' }} />
                        <path  d="M698.62,205.31c-33.55,9.13-72.26,22.11-113.87,40.85-39.83,17.94-73.89,37.37-102.13,55.66-35.06-49.02-70.13-98.04-105.19-147.06,34.26-23.25,75.79-48.04,124.6-70.98,55.94-26.29,107.91-43.79,152.17-55.66,14.81,59.06,29.62,118.13,44.43,177.19Z"                           
                            className={getSectionClass(12000)}
                            onClick={() => isSectionClickable(12000) && handleBlockClick('EAST STAND GROUND FLOOR', 12000)}
                            style={{ cursor: isSectionClickable(12000) ? 'pointer' : 'not-allowed' }} />
                        <path  d="M1055.24,204.18c33.52,9.24,72.18,22.35,113.73,41.24,39.77,18.08,73.77,37.63,101.94,56.01,35.23-48.9,70.47-97.8,105.7-146.7-34.18-23.37-75.62-48.3-124.35-71.41-55.85-26.48-107.76-44.16-151.98-56.18-15.01,59.01-30.02,118.02-45.04,177.04Z"                           
                            className={getSectionClass(12000)}
                            onClick={() => isSectionClickable(12000) && handleBlockClick('EAST STAND GROUND FLOOR', 12000)}
                            style={{ cursor: isSectionClickable(12000) ? 'pointer' : 'not-allowed' }} />
                    </g>
                    <g>
                        <path  d="M708.83,1098.93c-59.06,83.91-118.13,167.83-177.19,251.74-25.94-17.86-57.38-42.92-88.85-77.11-29.88-32.46-51.5-64.13-66.89-90.38,86.3-53.28,172.6-106.55,258.89-159.83,7.86,11.45,17.76,24.22,30.13,37.28,15.38,16.24,30.64,28.79,43.91,38.3Z"                           
                            className={getSectionClass(1000)}
                            onClick={() => isSectionClickable(1000) && handleBlockClick('EAST STAND GROUND FLOOR', 1000)}
                            style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />
                        <path  d="M629.68,1012.63c-86.98,53.79-173.96,107.57-260.94,161.36-15.17-23.59-32.32-54.84-46.47-93.45-14.91-40.7-22.04-77.41-25.53-106.21l303.32-52.09c2.38,12.51,5.66,26.24,10.21,40.85,5.87,18.86,12.67,35.41,19.4,49.53Z"                           
                            className={getSectionClass(1000)}
                            onClick={() => isSectionClickable(1000) && handleBlockClick('EAST STAND GROUND FLOOR', 1000)}
                            style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />
                        <path  d="M599.04,912.55c-102.3,16.34-204.6,32.68-306.89,49.02-4.53-30.61-7.6-68.32-5.62-111.32,1.8-39.14,7.37-73.4,13.79-101.62l298.72,67.91c-1.38,12.7-2.33,26.53-2.55,41.36-.3,20,.78,38.32,2.55,54.64Z"                           
                            className={getSectionClass(1000)}
                            onClick={() => isSectionClickable(1000) && handleBlockClick('EAST STAND GROUND FLOOR', 1000)}
                            style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />
                        <path  d="M602.11,810.42c-99.06-24.68-198.13-49.36-297.19-74.04,4.95-22.82,12.08-48.55,22.47-76.09,15.07-39.94,32.98-73.01,49.53-99.06,86.3,55.49,172.6,110.98,258.89,166.47-6.74,10.95-13.97,24.42-20.43,40.34-6.33,15.61-10.49,30.02-13.28,42.38Z"                           
                            className={getSectionClass(1000)}
                            onClick={() => isSectionClickable(1000) && handleBlockClick('EAST STAND GROUND FLOOR', 1000)}
                            style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />
                        <path  d="M712.91,649.57c-11.71,7.26-25.91,17.5-40.34,31.66-13.69,13.43-23.82,26.69-31.15,37.79-85.79-54.98-171.57-109.96-257.36-164.94,14.77-24.22,34.85-52.64,61.79-81.7,32.13-34.67,64.36-59.84,90.89-77.62,58.72,84.94,117.45,169.87,176.17,254.81Z"                           
                            className={getSectionClass(1000)}
                            onClick={() => isSectionClickable(1000) && handleBlockClick('EAST STAND GROUND FLOOR', 1000)}
                            style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />
                        <path  d="M1041.95,1097.75c58.77,84.12,117.55,168.24,176.32,252.35,26-17.77,57.53-42.72,89.12-76.8,29.99-32.35,51.72-63.95,67.2-90.15-86.11-53.57-172.23-107.15-258.34-160.72-7.9,11.43-17.85,24.16-30.26,37.17-15.44,16.19-30.74,28.68-44.05,38.15Z"                           
                            className={getSectionClass(1000)}
                            onClick={() => isSectionClickable(1000) && handleBlockClick('EAST STAND GROUND FLOOR', 1000)}
                            style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />
                        <path  d="M1121.4,1011.73c86.79,54.09,173.59,108.17,260.38,162.26,15.25-23.54,32.51-54.72,46.79-93.29,15.05-40.64,22.31-77.33,25.9-106.12-101.05-17.71-202.09-35.42-303.14-53.13-2.43,12.5-5.76,26.22-10.35,40.82-5.93,18.84-12.79,35.37-19.57,49.46Z"                           
                            className={getSectionClass(1000)}
                            onClick={() => isSectionClickable(1000) && handleBlockClick('EAST STAND GROUND FLOOR', 1000)}
                            style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />
                        <path  d="M1152.38,911.75c102.24,16.69,204.48,33.39,306.72,50.08,4.63-30.59,7.84-68.29,6-111.3-1.67-39.14-7.12-73.43-13.44-101.66-99.65,22.29-199.3,44.59-298.96,66.88,1.34,12.7,2.24,26.54,2.41,41.37.23,20-.91,38.32-2.74,54.63Z"                           
                            className={getSectionClass(1000)}
                            onClick={() => isSectionClickable(1000) && handleBlockClick('EAST STAND GROUND FLOOR', 1000)}
                            style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />
                        <path  d="M1149.67,809.61c99.15-24.34,198.3-48.68,297.45-73.02-4.87-22.84-11.91-48.59-22.21-76.16-14.93-40-32.72-73.13-49.19-99.23-86.49,55.19-172.98,110.38-259.47,165.57,6.71,10.97,13.88,24.47,20.29,40.41,6.28,15.63,10.39,30.06,13.13,42.43Z"                           
                            className={getSectionClass(1000)}
                            onClick={() => isSectionClickable(1000) && handleBlockClick('EAST STAND GROUND FLOOR', 1000)}
                            style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />
                        <path  d="M1039.41,648.38c11.68,7.3,25.85,17.59,40.23,31.8,13.64,13.48,23.72,26.77,31.02,37.89,85.98-54.68,171.95-109.37,257.93-164.05-14.69-24.27-34.67-52.76-61.51-81.91-32.01-34.78-64.15-60.06-90.63-77.93-59.02,84.73-118.03,169.47-177.05,254.2Z"                           
                            className={getSectionClass(1000)}
                            onClick={() => isSectionClickable(1000) && handleBlockClick('EAST STAND GROUND FLOOR', 1000)}
                            style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />
                    </g>
                    <g>
                        <path  d="M871.57,1305.23c-31.51.32-78.28-2.86-131.6-20.43-48.85-16.1-85.8-38.55-110.3-56.17,29.62-40.85,59.23-81.7,88.85-122.55,17.1,10.94,41.62,24.14,73.02,33.7,32.92,10.02,61.88,12.54,82.72,12.77-.9,50.89-1.8,101.79-2.7,152.68Z"                           
                            className={getSectionClass(10000)}
                            onClick={() => isSectionClickable(10000) && handleBlockClick('EAST STAND GROUND FLOOR', 10000)}
                            style={{ cursor: isSectionClickable(10000) ? 'pointer' : 'not-allowed' }} />
                        <path  d="M871.57,598.51c-20.85-.61-51.56.92-86.66,11.74-29.84,9.21-52.97,22.09-68.94,32.68-46.64-67.91-93.28-135.83-139.91-203.74,30.23-21.33,75.05-48.03,133.79-67.4,65.29-21.53,122.66-25.73,161.72-25.53v252.26Z"                           
                            className={getSectionClass(10000)}
                            onClick={() => isSectionClickable(10000) && handleBlockClick('EAST STAND GROUND FLOOR', 10000)}
                            style={{ cursor: isSectionClickable(10000) ? 'pointer' : 'not-allowed' }} />
                        <path  d="M878.49,1303.49c31.51.43,78.29-2.59,131.67-19.97,48.91-15.93,85.93-38.26,110.49-55.79-29.48-40.95-58.95-81.91-88.43-122.86-17.14,10.88-41.7,24-73.14,33.45-32.95,9.91-61.92,12.33-82.77,12.48.73,50.9,1.45,101.79,2.18,152.69Z"                           
                            className={getSectionClass(10000)}
                            onClick={() => isSectionClickable(10000) && handleBlockClick('EAST STAND GROUND FLOOR', 10000)}
                            style={{ cursor: isSectionClickable(10000) ? 'pointer' : 'not-allowed' }} />
                        <path  d="M880.93,596.77c20.85-.54,51.56,1.09,86.62,12.04,29.81,9.31,52.89,22.27,68.82,32.92,46.87-67.75,93.74-135.51,140.62-203.26-30.16-21.44-74.88-48.29-133.55-67.87-65.22-21.76-122.58-26.15-161.63-26.09l-.87,252.25Z"                           
                            className={getSectionClass(10000)}
                            onClick={() => isSectionClickable(10000) && handleBlockClick('EAST STAND GROUND FLOOR', 10000)}
                            style={{ cursor: isSectionClickable(10000) ? 'pointer' : 'not-allowed' }} />
                    </g>
                    <g>
                        <path  d="M1277.17,1475.27c-53.87,35.71-200.27,122.54-406.47,122.04-209.57-.5-357.35-90.91-410.55-127.15l74.55-102.64c45.56,29.92,167.15,101.13,338.04,101.11,168.01-.02,288.03-68.89,333.96-98.55,23.49,35.06,46.98,70.13,70.47,105.19Z"                           
                            className={getSectionClass(12000)}
                            onClick={() => isSectionClickable(12000) && handleBlockClick('EAST STAND GROUND FLOOR', 12000)}
                            style={{ cursor: isSectionClickable(12000) ? 'pointer' : 'not-allowed' }} />
                        <path  d="M1367.04,1597.32c-63.26,42.96-244.51,153.96-500.94,151.15-250.32-2.75-425.95-112.35-489.19-156.26,26.04-38.64,52.09-77.28,78.13-115.91,52.19,36.56,201.14,130.74,414.13,132.26,212.76,1.52,362.92-90.33,415.66-126.13,27.4,38.3,54.81,76.6,82.21,114.89Z"                           
                            className={getSectionClass(12000)}
                            onClick={() => isSectionClickable(12000) && handleBlockClick('EAST STAND GROUND FLOOR', 12000)}
                            style={{ cursor: isSectionClickable(12000) ? 'pointer' : 'not-allowed' }} />
                        <path  d="M1010.11,313.57c-34.22-9.25-82.65-18.47-140.94-17.36-55.36,1.06-101.3,11.09-134.3,20.94-5.96-19.91-11.91-39.83-17.87-59.74,38.19-9.94,88.79-19.22,148.6-19.91,67.44-.78,123.91,9.61,164.94,20.43-6.81,18.55-13.62,37.11-20.43,55.66Z"                           
                            className={getSectionClass(20000)}
                            onClick={() => isSectionClickable(20000) && handleBlockClick('EAST STAND GROUND FLOOR', 20000)}
                            style={{ cursor: isSectionClickable(20000) ? 'pointer' : 'not-allowed' }} />
                        <path  d="M979.47,1449.74c-29.74,4.14-64.06,7.1-102.13,7.15-38.91.05-73.93-2.94-104.17-7.15,6.98-46.64,13.96-93.28,20.94-139.91,23,3.4,50.98,5.73,82.72,4.6,29.08-1.04,54.72-4.75,76.09-9.17l26.55,144.49Z"                           
                            className={getSectionClass(20000)}
                            onClick={() => isSectionClickable(20000) && handleBlockClick('EAST STAND GROUND FLOOR', 20000)}
                            style={{ cursor: isSectionClickable(20000) ? 'pointer' : 'not-allowed' }} />
                        <path  d="M765,1447.7c-33.68-5.56-76.52-15.87-123.57-35.74-41.35-17.47-74.9-37.67-100.6-55.66,27.74-39.49,55.49-78.98,83.23-118.47,20.58,13.29,45.62,27.44,75.06,40.34,33.17,14.53,63.85,23.92,89.87,30.13-8,46.47-16,92.94-24,139.4Z"                           
                            className={getSectionClass(12000)}
                            onClick={() => isSectionClickable(12000) && handleBlockClick('EAST STAND GROUND FLOOR', 12000)}
                            style={{ cursor: isSectionClickable(12000) ? 'pointer' : 'not-allowed' }} />
                        <path  d="M984.58,1446.32c33.7-5.44,76.58-15.6,123.7-35.32,41.41-17.33,75.03-37.41,100.79-55.31-27.61-39.58-55.22-79.17-82.83-118.75-20.62,13.22-45.71,27.29-75.2,40.08-33.22,14.41-63.94,23.7-89.98,29.82,7.84,46.5,15.68,92.99,23.52,139.49Z"                           
                            className={getSectionClass(12000)}
                            onClick={() => isSectionClickable(12000) && handleBlockClick('EAST STAND GROUND FLOOR', 12000)}
                            style={{ cursor: isSectionClickable(12000) ? 'pointer' : 'not-allowed' }} />
                        <path  d="M868.66,195.1c-192.7,1.3-328.17,85-376.85,118.47,26.89,37.45,53.79,74.89,80.68,112.34,40.55-26.61,153.82-93.27,312.26-89.87,148.3,3.18,253.34,65.98,294.13,93.45,23.49-39.83,46.98-79.66,70.47-119.49-48.89-32.93-186.35-116.2-380.68-114.89ZM1018.53,325.31c-34.41-10.36-83.17-21.1-142.21-21.7-61.9-.63-112.94,10.1-148.34,20.43-6.64-23.66-13.28-47.32-19.91-70.98,41.12-11.22,97.8-22.25,165.7-22.47,68.45-.22,125.61,10.62,166.98,21.7-7.4,24.34-14.81,48.68-22.21,73.02Z"                           
                            className={getSectionClass(8000)}
                            onClick={() => isSectionClickable(8000) && handleBlockClick('EAST STAND GROUND FLOOR', 8000)}
                            style={{ cursor: isSectionClickable(8000) ? 'pointer' : 'not-allowed' }} />
                    </g>
                    <g>
                        <circle className='st9'  cx="871.71" cy="872.73" r="249.69" />
                        <rect className='st10'  x="849.77" y="777.23" width="51.06" height="194.04" />
                    </g>
                    <g>
                        <path  d="M285.51,963.1c-91.74,14.3-183.49,28.6-275.23,42.89-6.77-45.35-11.48-100.81-9.19-163.91,2.21-60.88,10.39-114.12,19.91-157.79,89.36,20.43,178.72,40.85,268.09,61.28-5.62,28.87-10.19,63.27-11.23,102.13-1.19,44.38,2.52,83.41,7.66,115.4Z"                           
                            className={getSectionClass(17000)}
                            onClick={() => isSectionClickable(17000) && handleBlockClick('EAST STAND GROUND FLOOR', 17000)}
                            style={{ cursor: isSectionClickable(17000) ? 'pointer' : 'not-allowed' }} />
                        <path  d="M360.57,1179.1l-240,145.53c-22.31-40.22-45.73-88.85-66.38-145.53-21.49-58.98-35.11-113.28-43.91-159.83,92.43-15.32,184.85-30.64,277.28-45.96,5.06,29.19,12.97,62.96,25.53,99.57,14.43,42.06,31.46,77.57,47.49,106.21Z"                           
                            className={getSectionClass(17000)}
                            onClick={() => isSectionClickable(17000) && handleBlockClick('EAST STAND GROUND FLOOR', 17000)}
                            style={{ cursor: isSectionClickable(17000) ? 'pointer' : 'not-allowed' }} />
                        <path  d="M527.04,1358.85c-53.62,75.4-107.23,150.81-160.85,226.21-39.99-28.29-87.2-66.65-134.81-117.45-45.74-48.8-79.97-96.42-105.19-136.85,79.66-47.49,159.32-94.98,238.98-142.47,18.95,26.68,42.04,55.86,69.96,85.79,31.93,34.23,63.43,62.2,91.91,84.77Z"                           
                            className={getSectionClass(17000)}
                            onClick={() => isSectionClickable(17000) && handleBlockClick('EAST STAND GROUND FLOOR', 17000)}
                            style={{ cursor: isSectionClickable(17000) ? 'pointer' : 'not-allowed' }} />
                        <path  d="M528.57,387.1c-25.89,19.25-55.36,44.09-85.28,75.57-28.77,30.28-51.39,59.8-68.94,85.79-77.11-50.04-154.21-100.09-231.32-150.13,25.46-39.51,59.9-85.92,105.7-133.28,42.42-43.86,84.23-77.83,120.51-103.66l159.32,225.7Z"                           
                            className={getSectionClass(17000)}
                            onClick={() => isSectionClickable(17000) && handleBlockClick('EAST STAND GROUND FLOOR', 17000)}
                            style={{ cursor: isSectionClickable(17000) ? 'pointer' : 'not-allowed' }} />
                        <path  d="M294.7,736.38c-91.06-20.43-182.13-40.85-273.19-61.28,10.12-41.1,24.67-88.42,45.96-139.4,20.53-49.16,43.01-91.43,64.34-126.64,79.49,49.19,158.98,98.38,238.47,147.57-14.94,22.39-31.4,50.85-45.96,85.28-14.92,35.29-23.97,67.67-29.62,94.47Z"                           
                            className={getSectionClass(17000)}
                            onClick={() => isSectionClickable(17000) && handleBlockClick('EAST STAND GROUND FLOOR', 17000)}
                            style={{ cursor: isSectionClickable(17000) ? 'pointer' : 'not-allowed' }} />
                        <path  d="M1465.73,963.38c91.69,14.61,183.39,29.23,275.08,43.84,6.93-45.32,11.83-100.77,9.76-163.88-2-60.89-9.99-114.16-19.37-157.85-89.43,20.12-178.86,40.23-268.29,60.35,5.52,28.89,9.97,63.3,10.88,102.17,1.04,44.39-2.81,83.4-8.06,115.38Z"                           
                            className={getSectionClass(17000)}
                            onClick={() => isSectionClickable(17000) && handleBlockClick('EAST STAND GROUND FLOOR', 17000)}
                            style={{ cursor: isSectionClickable(17000) ? 'pointer' : 'not-allowed' }} />
                        <path  d="M1389.93,1179.12c79.83,48.79,159.66,97.57,239.5,146.36,22.45-40.14,46.03-88.69,66.88-145.3,21.7-58.9,35.5-113.15,44.47-159.68-92.37-15.64-184.74-31.28-277.12-46.91-5.16,29.17-13.19,62.91-25.88,99.49-14.57,42.01-31.72,77.46-47.86,106.05Z"                           
                            className={getSectionClass(17000)}
                            onClick={() => isSectionClickable(17000) && handleBlockClick('EAST STAND GROUND FLOOR', 17000)}
                            style={{ cursor: isSectionClickable(17000) ? 'pointer' : 'not-allowed' }} />
                        <path  d="M1222.84,1358.29c53.36,75.59,106.71,151.18,160.07,226.77,40.09-28.15,87.43-66.35,135.21-116.98,45.9-48.65,80.3-96.14,105.66-136.49-79.5-47.76-158.99-95.53-238.49-143.29-19.04,26.61-42.23,55.71-70.25,85.55-32.05,34.12-63.64,61.99-92.21,84.45Z"                           
                            className={getSectionClass(17000)}
                            onClick={() => isSectionClickable(17000) && handleBlockClick('EAST STAND GROUND FLOOR', 17000)}
                            style={{ cursor: isSectionClickable(17000) ? 'pointer' : 'not-allowed' }} />
                        <path  d="M1224.66,386.55c25.82,19.34,55.21,44.28,85.02,75.87,28.67,30.38,51.18,59.98,68.64,86.02,77.28-49.78,154.56-99.55,231.84-149.33-25.33-39.6-59.6-86.13-105.24-133.64-42.27-44.01-83.96-78.12-120.15-104.07-53.37,75.05-106.73,150.1-160.1,225.15Z"                           
                            className={getSectionClass(17000)}
                            onClick={() => isSectionClickable(17000) && handleBlockClick('EAST STAND GROUND FLOOR', 17000)}
                            style={{ cursor: isSectionClickable(17000) ? 'pointer' : 'not-allowed' }} />
                        <path  d="M1457.32,736.63c91.13-20.11,182.27-40.22,273.4-60.33-9.98-41.13-24.37-88.5-45.48-139.56-20.36-49.23-42.7-91.57-63.9-126.86-79.66,48.92-159.32,97.83-238.98,146.75,14.87,22.44,31.22,50.96,45.66,85.43,14.8,35.34,23.74,67.75,29.29,94.57Z"                           
                            className={getSectionClass(17000)}
                            onClick={() => isSectionClickable(17000) && handleBlockClick('EAST STAND GROUND FLOOR', 17000)}
                            style={{ cursor: isSectionClickable(17000) ? 'pointer' : 'not-allowed' }} />
                    </g>
                </svg>
            </div>
        </div>
    )
}

export default EkanaStadium