import React, { useEffect, useState } from 'react'
import '../../styles/Sports.css'
import '../../styles/SVG.css'

function RGICStadium({ setBlockPrice, setBlockName, setPrice, filterBy }) {
    const [zoom, setZoom] = useState(2)

    useEffect(() => {
        const price = [749, 1000, 2250, 3000, 6500, 15000];
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
                price === 2250 ? 'st1' :
                    price === 749 ? 'st8' :
                        price === 3000 ? 'st13' :
                            price === 6500 ? 'st2' :
                                price === 8000 ? 'st3' :
                                    price === 15000 ? 'st5' :
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
            <div style={{ transform: `scale(${zoom})`, transformOrigin: 'center center', transition: 'transform 0.3s ease' }}>

                <img className='image-rajiv' src='/Assets/StadiumBlocks/RajivGandhi.png' alt="Map" />

                <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1763.51 1751.53">
                    <g>
                        <path d="M933.58,1749.52c-80.69,4.76-278.79,5.47-485.7-112.94-165.56-94.74-258.88-221.18-302.04-289.11,20.88-13.05,41.76-26.1,62.64-39.15,41.77,63.09,125.1,170.41,266.63,253.96,191.96,113.32,377.69,116.02,455.4,112.68,1.03,24.85,2.05,49.7,3.08,74.55Z"
                            className={getSectionClass(6500)}
                            onClick={() => isSectionClickable(6500) && handleBlockClick('WEST TERRACE - 2', 6500)}
                            style={{ cursor: isSectionClickable(6500) ? 'pointer' : 'not-allowed' }} />
                        <path d="M930.51,1659.09c-73.25,4.33-256.22,5.14-445.09-106-141.83-83.46-223.05-192.42-262.1-253.65,21.75-12.9,43.5-25.79,65.25-38.69,35.81,55.3,112.47,157.21,247.15,233.62,166.91,94.69,326.07,95.28,392.43,91.74.79,24.32,1.58,48.65,2.37,72.97Z"
                            className={getSectionClass(6500)}
                            onClick={() => isSectionClickable(6500) && handleBlockClick('WEST TERRACE - 1', 6500)}
                            style={{ cursor: isSectionClickable(6500) ? 'pointer' : 'not-allowed' }} />
                        <path d="M951,1750.66c79.02-5.56,222.32-26.3,374.49-114.14,190.13-109.75,287.63-262.77,327.07-333.97-22.13-11.46-44.26-22.92-66.38-34.38-36.69,64.34-123.32,195.94-287.92,294.06-142.51,84.95-277.26,105.35-349.67,111.07.8,25.79,1.61,51.57,2.41,77.36Z"
                            className={getSectionClass(6500)}
                            onClick={() => isSectionClickable(6500) && handleBlockClick('EAST TERRACE - 2', 6500)}
                            style={{ cursor: isSectionClickable(6500) ? 'pointer' : 'not-allowed' }} />
                        <path d="M946.92,1660.08c70.24-5.13,201.95-24.22,341.03-107.05,164.62-98.03,249.05-231.44,283.59-294.32-21.53-12.38-43.06-24.77-64.6-37.15-32.62,58.51-113.05,183.86-269.3,272.75-118.78,67.58-230.33,85.05-294.44,90.14,1.24,25.21,2.48,50.42,3.72,75.62Z"
                            className={getSectionClass(6500)}
                            onClick={() => isSectionClickable(6500) && handleBlockClick('EAST TERRACE - 1', 6500)}
                            style={{ cursor: isSectionClickable(6500) ? 'pointer' : 'not-allowed' }} />
                        <path d="M1380.69,243.82c-54.07-42.43-228.38-168.1-483.96-171.32-282.04-3.55-472.25,144.43-521.79,185.57-17.15-18.71-34.3-37.41-51.44-56.12C380.05,155.76,584.01.66,886.63.5c285.29-.15,481.17,137.49,541.3,183.45-15.74,19.96-31.49,39.91-47.23,59.87Z"
                            className={getSectionClass(6500)}
                            onClick={() => isSectionClickable(6500) && handleBlockClick('NORTH TERRACE - 2', 6500)}
                            style={{ cursor: isSectionClickable(6500) ? 'pointer' : 'not-allowed' }} />
                        <path d="M1323.03,313.95c-46.38-36.52-204.92-152.01-437.79-151.83-245.58.19-409.84,128.91-453.45,165.45-16.85-18.89-33.7-37.79-50.55-56.68,50.75-41.34,234.15-180.43,505.88-180,255.42.41,430.64,123.85,484.59,165.19-16.23,19.29-32.45,38.58-48.68,57.87Z"
                            className={getSectionClass(6500)}
                            onClick={() => isSectionClickable(6500) && handleBlockClick('NORTH TERRACE - 1', 6500)}
                            style={{ cursor: isSectionClickable(6500) ? 'pointer' : 'not-allowed' }} />
                    </g>
                    <g>
                        <path d="M388.9,1174.2l-258.89,161.36C15.12,1135.39-18.69,939.57,10.35,751.39c28.92-187.39,134.47-396.26,293.53-542.55,65.45,76.85,130.89,153.7,196.34,230.55-95.32,86.98-167.35,217.34-184.17,328.34-20.29,133.93-11.4,259.91,72.85,406.47Z"
                            className={getSectionClass(2250)}
                            onClick={() => isSectionClickable(2250) && handleBlockClick('WEST STAND FIRST FLOOR', 2250)}
                            style={{ cursor: isSectionClickable(2250) ? 'pointer' : 'not-allowed' }} />
                        <path d="M1391.54,1145.61c89.11,47.21,178.21,94.43,267.32,141.64,41.22-78.8,100.17-217.82,104-397.73.24-11.16,1.39-77.74-9.89-149.97-41.6-266.35-229.66-464.39-311.64-542.22-62.59,76.93-125.19,153.85-187.78,230.78,34.83,32.15,82.38,82.93,123.98,155.02,18.35,31.8,51.09,89.6,69.16,173.37,7.02,32.54,21.11,111.99,4.6,212.17-12.65,76.73-38.5,136.83-59.74,176.94Z"
                            className={getSectionClass(2250)}
                            onClick={() => isSectionClickable(2250) && handleBlockClick('EAST STAND FIRST FLOOR', 2250)}
                            style={{ cursor: isSectionClickable(2250) ? 'pointer' : 'not-allowed' }} />
                    </g>
                    
                    <g>
                        <path d="M637.75,1017.61l-232.39,148.85c-22.7-37.54-110.55-192.57-72.38-395.4,33.53-178.22,143.83-284.26,180-316.34,59.97,73.13,119.94,146.27,179.91,219.4-19.29,18.36-65.15,66.98-82.64,145.19-22.09,98.82,16.25,177.15,27.49,198.3Z"
                            className={getSectionClass(1000)}
                            onClick={() => isSectionClickable(1000) && handleBlockClick('WEST STAND GROUND FLOOR', 1000)}
                            style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />
                        <path d="M1128.05,1000.07c83.23,43.52,166.47,87.04,249.7,130.55,21.12-38.81,90.8-178.07,56.68-358.81-35.87-190.05-162.1-296.67-195.32-323.06-58.38,72.17-116.77,144.34-175.15,216.51,17.07,14.42,73.35,65.54,90.98,154.04,18.13,90.99-16.55,161.44-26.89,180.77Z"
                            className={getSectionClass(1000)}
                            onClick={() => isSectionClickable(1000) && handleBlockClick('EAST STAND GROUND FLOOR', 1000)}
                            style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />
                    </g>

                    <g>
                        <path d="M630.43,499.65c-10.81,8.09-21.62,16.17-32.43,24.26-22.72-26.64-45.45-53.28-68.17-79.91,14.38-10.89,28.77-21.79,43.15-32.68,19.15,29.45,38.3,58.89,57.45,88.34Z"
                            className={getSectionClass(749)}
                            onClick={() => isSectionClickable(749) && handleBlockClick('S25', 749)}
                            style={{ cursor: isSectionClickable(749) ? 'pointer' : 'not-allowed' }} />
                        <path d="M680.08,470.56c-11.79,6.57-23.59,13.13-35.38,19.7-18.95-29.44-37.91-58.88-56.86-88.32,15.71-8.87,31.42-17.74,47.13-26.61,15.04,31.74,30.07,63.49,45.11,95.23Z"
                            className={getSectionClass(749)}
                            onClick={() => isSectionClickable(749) && handleBlockClick('S26', 749)}
                            style={{ cursor: isSectionClickable(749) ? 'pointer' : 'not-allowed' }} />
                        <path d="M726.49,449.66c-12.05,4.86-24.1,9.72-36.15,14.58-15-31.64-30.01-63.28-45.01-94.91,15.65-6.42,31.3-12.84,46.95-19.26,11.41,33.2,22.81,66.4,34.22,99.59Z"
                            className={getSectionClass(749)}
                            onClick={() => isSectionClickable(749) && handleBlockClick('S27', 749)}
                            style={{ cursor: isSectionClickable(749) ? 'pointer' : 'not-allowed' }} />
                        <path d="M772.73,434.63l-34.02,10.65c-11.33-33.13-22.65-66.27-33.98-99.4,15.43-4.37,30.86-8.73,46.29-13.1,7.24,33.95,14.47,67.9,21.71,101.84Z"
                            className={getSectionClass(749)}
                            onClick={() => isSectionClickable(749) && handleBlockClick('S28', 749)}
                            style={{ cursor: isSectionClickable(749) ? 'pointer' : 'not-allowed' }} />
                        <path d="M1128.2,493.25c10.82,8.07,21.63,16.15,32.45,24.22,22.69-26.66,45.39-53.33,68.08-79.99-14.4-10.88-28.79-21.76-43.19-32.63-19.12,29.47-38.23,58.94-57.35,88.4Z"
                            className={getSectionClass(749)}
                            onClick={() => isSectionClickable(749) && handleBlockClick('S32', 749)}
                            style={{ cursor: isSectionClickable(749) ? 'pointer' : 'not-allowed' }} />
                        <path d="M1081.4,466.84c11.8,6.55,23.6,13.11,35.4,19.66,18.92-29.46,37.84-58.92,56.76-88.38-15.72-8.85-31.44-17.71-47.16-26.56-15,31.76-30,63.52-45,95.28Z"
                            className={getSectionClass(749)}
                            onClick={() => isSectionClickable(749) && handleBlockClick('S31', 749)}
                            style={{ cursor: isSectionClickable(749) ? 'pointer' : 'not-allowed' }} />
                        <path d="M1031.4,447.4c12.06,4.85,24.11,9.69,36.17,14.54,14.97-31.65,29.94-63.31,44.91-94.96-15.66-6.4-31.31-12.8-46.97-19.2-11.37,33.21-22.74,66.42-34.11,99.63Z"
                            className={getSectionClass(749)}
                            onClick={() => isSectionClickable(749) && handleBlockClick('S30', 749)}
                            style={{ cursor: isSectionClickable(749) ? 'pointer' : 'not-allowed' }} />
                        <path d="M985.14,434.5c11.34,3.54,22.69,7.08,34.03,10.62,11.29-33.15,22.58-66.29,33.87-99.44-15.43-4.35-30.87-8.7-46.3-13.05-7.2,33.96-14.4,67.91-21.59,101.87Z"
                            className={getSectionClass(749)}
                            onClick={() => isSectionClickable(749) && handleBlockClick('S29', 749)}
                            style={{ cursor: isSectionClickable(749) ? 'pointer' : 'not-allowed' }} />
                        <path d="M534.57,1309.93l-18.95-15.96c23.42-26.48,46.84-52.95,70.26-79.43,4.9,4.48,9.81,8.96,14.71,13.45-22.01,27.31-44.01,54.63-66.02,81.94Z"
                            className={getSectionClass(749)}
                            onClick={() => isSectionClickable(749) && handleBlockClick('F1', 749)}
                            style={{ cursor: isSectionClickable(749) ? 'pointer' : 'not-allowed' }} />
                        <path d="M563.81,1332.04l-19.74-14.97c21.41-27.31,42.83-54.62,64.24-81.93,5.72,4.14,11.43,8.28,17.15,12.43-20.55,28.16-41.1,56.32-61.65,84.48Z"
                            className={getSectionClass(749)}
                            onClick={() => isSectionClickable(749) && handleBlockClick('F2', 749)}
                            style={{ cursor: isSectionClickable(749) ? 'pointer' : 'not-allowed' }} />
                        <path d="M593.19,1352.17l-20.9-13.31c19.27-28.96,38.53-57.91,57.8-86.87,6.7,4.6,13.39,9.19,20.09,13.79-19,28.8-37.99,57.59-56.99,86.39Z"
                            className={getSectionClass(749)}
                            onClick={() => isSectionClickable(749) && handleBlockClick('F3', 749)}
                            style={{ cursor: isSectionClickable(749) ? 'pointer' : 'not-allowed' }} />
                        <path d="M628.29,1373.16l-21.93-11.53c16.85-30.26,33.71-60.51,50.56-90.77,6.32,3.3,12.64,6.59,18.96,9.89-15.86,30.8-31.73,61.6-47.59,92.4Z"
                            className={getSectionClass(749)}
                            onClick={() => isSectionClickable(749) && handleBlockClick('F4', 749)}
                            style={{ cursor: isSectionClickable(749) ? 'pointer' : 'not-allowed' }} />
                        <path d="M663.52,1388.37l-22.95-9.34c13.84-31.78,27.68-63.57,41.52-95.35,7.24,3.34,14.47,6.67,21.71,10.01-13.43,31.56-26.85,63.12-40.28,94.68Z"
                            className={getSectionClass(749)}
                            onClick={() => isSectionClickable(749) && handleBlockClick('F5', 749)}
                            style={{ cursor: isSectionClickable(749) ? 'pointer' : 'not-allowed' }} />
                        <path d="M694.97,1401.25l-24.53-9.56c13.4-31.92,26.8-63.84,40.2-95.76l18.05,6.7c-11.24,32.87-22.48,65.75-33.72,98.62Z"
                            className={getSectionClass(749)}
                            onClick={() => isSectionClickable(749) && handleBlockClick('F6', 749)}
                            style={{ cursor: isSectionClickable(749) ? 'pointer' : 'not-allowed' }} />
                        <path d="M726.52,1411.14c-8.23-1.75-16.46-3.5-24.69-5.25,11.47-33.73,22.93-67.45,34.4-101.18,6.44,1.69,12.88,3.38,19.31,5.07l-29.02,101.36Z"
                            className={getSectionClass(749)}
                            onClick={() => isSectionClickable(749) && handleBlockClick('F7', 749)}
                            style={{ cursor: isSectionClickable(749) ? 'pointer' : 'not-allowed' }} />
                        <path d="M760.99,1418.54c-8.99-1.28-17.99-2.55-26.98-3.83,9.65-34.13,19.29-68.26,28.94-102.38,6.75,1.11,13.51,2.23,20.26,3.34-7.41,34.29-14.81,68.58-22.22,102.87Z"
                            className={getSectionClass(749)}
                            onClick={() => isSectionClickable(749) && handleBlockClick('F8', 749)}
                            style={{ cursor: isSectionClickable(749) ? 'pointer' : 'not-allowed' }} />
                        <path d="M1264.19,1287.25l21.05-19.6c-24.96-24.47-49.92-48.94-74.89-73.4-5.73,4.88-11.46,9.76-17.18,14.63l71.02,78.37Z"
                            className={getSectionClass(749)}
                            onClick={() => isSectionClickable(749) && handleBlockClick('F9', 749)}
                            style={{ cursor: isSectionClickable(749) ? 'pointer' : 'not-allowed' }} />
                        <path d="M1238.75,1309.88l18.95-15.96c-23.42-26.47-46.85-52.95-70.27-79.42-4.9,4.48-9.81,8.97-14.71,13.45,22.01,27.31,44.02,54.62,66.03,81.93Z"
                            className={getSectionClass(749)}
                            onClick={() => isSectionClickable(749) && handleBlockClick('F16', 749)}
                            style={{ cursor: isSectionClickable(749) ? 'pointer' : 'not-allowed' }} />
                        <path d="M1209.52,1331.99l19.74-14.97c-21.42-27.31-42.84-54.62-64.25-81.92-5.71,4.14-11.43,8.29-17.14,12.43,20.55,28.16,41.11,56.31,61.66,84.47Z"
                            className={getSectionClass(749)}
                            onClick={() => isSectionClickable(749) && handleBlockClick('F15', 749)}
                            style={{ cursor: isSectionClickable(749) ? 'pointer' : 'not-allowed' }} />
                        <path d="M1180.14,1352.12l20.89-13.31c-19.27-28.95-38.54-57.9-57.82-86.86-6.69,4.6-13.39,9.19-20.08,13.79,19,28.79,38,57.59,57,86.38Z"
                            className={getSectionClass(749)}
                            onClick={() => isSectionClickable(749) && handleBlockClick('F14', 749)}
                            style={{ cursor: isSectionClickable(749) ? 'pointer' : 'not-allowed' }} />
                        <path d="M1145.05,1373.12l21.93-11.53c-16.86-30.25-33.72-60.51-50.58-90.76-6.32,3.3-12.64,6.6-18.96,9.89,15.87,30.8,31.74,61.6,47.61,92.4Z"
                            className={getSectionClass(749)}
                            onClick={() => isSectionClickable(749) && handleBlockClick('F13', 749)}
                            style={{ cursor: isSectionClickable(749) ? 'pointer' : 'not-allowed' }} />
                        <path d="M1109.82,1388.33l22.95-9.34c-13.85-31.78-27.69-63.56-41.54-95.34-7.24,3.34-14.47,6.67-21.71,10.01,13.43,31.56,26.86,63.11,40.3,94.67Z"
                            className={getSectionClass(749)}
                            onClick={() => isSectionClickable(749) && handleBlockClick('F12', 749)}
                            style={{ cursor: isSectionClickable(749) ? 'pointer' : 'not-allowed' }} />
                        <path d="M1078.37,1401.22l24.53-9.57c-13.41-31.92-26.81-63.84-40.22-95.75l-18.05,6.7c11.25,32.87,22.49,65.75,33.74,98.62Z"
                            className={getSectionClass(749)}
                            onClick={() => isSectionClickable(749) && handleBlockClick('F11', 749)}
                            style={{ cursor: isSectionClickable(749) ? 'pointer' : 'not-allowed' }} />
                        <path d="M1046.82,1411.11c8.23-1.75,16.46-3.5,24.69-5.25-11.47-33.72-22.94-67.45-34.41-101.17-6.44,1.69-12.88,3.38-19.31,5.07,9.68,33.79,19.36,67.57,29.04,101.36Z"
                            className={getSectionClass(749)}
                            onClick={() => isSectionClickable(749) && handleBlockClick('F10', 749)}
                            style={{ cursor: isSectionClickable(749) ? 'pointer' : 'not-allowed' }} />
                        <path d="M1012.36,1418.52c8.99-1.28,17.99-2.56,26.98-3.83-9.65-34.13-19.3-68.25-28.95-102.38-6.75,1.11-13.51,2.23-20.26,3.34,7.41,34.29,14.82,68.58,22.23,102.87Z"
                            className={getSectionClass(749)}
                            onClick={() => isSectionClickable(749) && handleBlockClick('F9', 749)}
                            style={{ cursor: isSectionClickable(749) ? 'pointer' : 'not-allowed' }} />
                        <path d="M1288.94,1263.36c7.22-7.54,14.45-15.07,21.67-22.61-25.87-21.27-51.74-42.55-77.62-63.82l-19.91,14.13c25.29,24.1,50.58,48.2,75.86,72.31Z"
                            className={getSectionClass(749)}
                            onClick={() => isSectionClickable(749) && handleBlockClick('F18', 749)}
                            style={{ cursor: isSectionClickable(749) ? 'pointer' : 'not-allowed' }} />
                        <path d="M1314.86,1235.48c6.39-7.46,12.77-14.91,19.16-22.37-27.27-21.65-54.53-43.3-81.8-64.95-4.82,8.06-9.65,16.11-14.47,24.17,25.7,21.05,51.4,42.1,77.11,63.15Z"
                            className={getSectionClass(749)}
                            onClick={() => isSectionClickable(749) && handleBlockClick('F19', 749)}
                            style={{ cursor: isSectionClickable(749) ? 'pointer' : 'not-allowed' }} />
                        <path d="M1337.13,1205.37c5.97-7.86,11.93-15.71,17.9-23.57-29.84-19.61-59.69-39.22-89.53-58.83-3.91,5.96-7.83,11.91-11.74,17.87,27.79,21.51,55.58,43.02,83.37,64.53Z"
                            className={getSectionClass(749)}
                            onClick={() => isSectionClickable(749) && handleBlockClick('F20', 749)}
                            style={{ cursor: isSectionClickable(749) ? 'pointer' : 'not-allowed' }} />
                        <path d="M1359.97,1174.37c4.37-7.89,8.74-15.77,13.11-23.66-31.21-16.74-62.41-33.48-93.62-50.21-2.95,5.5-5.9,11.01-8.85,16.51,29.79,19.12,59.57,38.24,89.36,57.36Z"
                            className={getSectionClass(749)}
                            onClick={() => isSectionClickable(749) && handleBlockClick('F21', 749)}
                            style={{ cursor: isSectionClickable(749) ? 'pointer' : 'not-allowed' }} />
                    </g>
                    <g>
                        {/* <path d="M565.24,396.33c-15.43,11.91-30.87,23.83-46.3,35.74-25.73-31.43-51.46-62.87-77.19-94.3,18.58-13.62,37.16-27.23,55.74-40.85,22.58,33.13,45.16,66.27,67.74,99.4Z"
                            className={getSectionClass(3000)}
                            onClick={() => isSectionClickable(3000) && handleBlockClick('F22', 3000)}
                            style={{ cursor: isSectionClickable(3000) ? 'pointer' : 'not-allowed' }} />
                        <path d="M625.84,362.3c-17.02,9.5-34.05,19-51.07,28.5-20.8-34.89-41.6-69.78-62.4-104.68,20.39-10.72,40.78-21.44,61.17-32.16,17.43,36.11,34.87,72.22,52.3,108.33Z"
                            className={getSectionClass(3000)}
                            onClick={() => isSectionClickable(3000) && handleBlockClick('F23', 3000)}
                            style={{ cursor: isSectionClickable(3000) ? 'pointer' : 'not-allowed' }} />
                        <path d="M684.82,337.52c-15.14,5.85-30.28,11.7-45.42,17.56-16.93-36.92-33.86-73.85-50.79-110.77,18.37-7.4,36.74-14.79,55.11-22.19,13.7,38.47,27.4,76.94,41.11,115.4Z"
                            className={getSectionClass(3000)}
                            onClick={() => isSectionClickable(3000) && handleBlockClick('F24', 3000)}
                            style={{ cursor: isSectionClickable(3000) ? 'pointer' : 'not-allowed' }} /> */}
                        {/* <path d="M746.52,318.2c-16.76,4.32-33.51,8.64-50.27,12.96-12.66-38.6-25.31-77.2-37.97-115.8,19.79-5.8,39.59-11.61,59.39-17.41,9.62,40.09,19.23,80.17,28.85,120.26Z"
                            className={getSectionClass(3000)}
                            onClick={() => isSectionClickable(3000) && handleBlockClick('F25', 3000)}
                            style={{ cursor: isSectionClickable(3000) ? 'pointer' : 'not-allowed' }} /> */}
                        {/* <path d="M803.8,308.42c-15.61,1.88-31.23,3.76-46.84,5.65-8.18-39.79-16.36-79.58-24.53-119.37,18.77-3.11,37.54-6.23,56.31-9.34,5.02,41.02,10.04,82.04,15.06,123.06Z"
                            className={getSectionClass(3000)}
                            onClick={() => isSectionClickable(3000) && handleBlockClick('F26', 3000)}
                            style={{ cursor: isSectionClickable(3000) ? 'pointer' : 'not-allowed' }} /> */}
                        {/* <path d="M866.18,302.71c-16.22.36-32.44.73-48.66,1.09-5.24-40.28-10.49-80.56-15.73-120.84,20.56-1.56,41.11-3.13,61.67-4.69.91,41.48,1.82,82.96,2.72,124.44Z"
                            className={getSectionClass(3000)}
                            onClick={() => isSectionClickable(3000) && handleBlockClick('F27', 3000)}
                            style={{ cursor: isSectionClickable(3000) ? 'pointer' : 'not-allowed' }} /> */}
                        {/* <path d="M1201.36,396.17c11.34,8.74,22.69,17.48,34.03,26.22,25.7-31.46,51.39-62.92,77.09-94.38-14.97-10.94-29.93-21.89-44.9-32.83-22.07,33.67-44.15,67.33-66.22,101Z"
                            className={getSectionClass(3000)}
                            onClick={() => isSectionClickable(3000) && handleBlockClick('F34', 3000)}
                            style={{ cursor: isSectionClickable(3000) ? 'pointer' : 'not-allowed' }} /> */}
                        {/* <path d="M1151.8,365.69c13.39,7.73,26.78,15.46,40.17,23.19,20.53-33.52,41.05-67.03,61.58-100.55l-48.48-28.35c-17.76,35.24-35.52,70.48-53.27,105.72Z"
                            className={getSectionClass(3000)}
                            onClick={() => isSectionClickable(3000) && handleBlockClick('F33', 3000)}
                            style={{ cursor: isSectionClickable(3000) ? 'pointer' : 'not-allowed' }} />
                        <path d="M1098.14,342.47c13.8,5.92,27.6,11.85,41.4,17.77,18.61-35.86,37.22-71.72,55.83-107.57-17.59-7.94-35.18-15.87-52.77-23.81-14.82,37.87-29.64,75.74-44.46,113.61Z"
                            className={getSectionClass(3000)}
                            onClick={() => isSectionClickable(3000) && handleBlockClick('F32', 3000)}
                            style={{ cursor: isSectionClickable(3000) ? 'pointer' : 'not-allowed' }} /> */}
                        {/* <path d="M1045.24,325.86c13.83,2.95,27.65,5.9,41.48,8.85l41.48-110.3c-17.31-6.01-34.61-12.03-51.92-18.04-10.35,39.83-20.69,79.66-31.04,119.49Z"
                            className={getSectionClass(3000)}
                            onClick={() => isSectionClickable(3000) && handleBlockClick('F31', 3000)}
                            style={{ cursor: isSectionClickable(3000) ? 'pointer' : 'not-allowed' }} /> */}
                        {/* <path d="M993.23,312.83c12.72,2.19,25.45,4.38,38.17,6.57,10.63-39.04,21.26-78.07,31.88-117.11-17.93-3.06-35.86-6.13-53.79-9.19-5.42,39.91-10.84,79.82-16.26,119.73Z"
                            className={getSectionClass(3000)}
                            onClick={() => isSectionClickable(3000) && handleBlockClick('F30', 3000)}
                            style={{ cursor: isSectionClickable(3000) ? 'pointer' : 'not-allowed' }} /> */}
                        {/* <path d="M881.16,302.03h40.51c2.72-40.17,5.45-80.34,8.17-120.51l-53.36-2.04c1.56,40.85,3.12,81.7,4.68,122.55Z"
                            className={getSectionClass(3000)}
                            onClick={() => isSectionClickable(3000) && handleBlockClick('F28', 3000)}
                            style={{ cursor: isSectionClickable(3000) ? 'pointer' : 'not-allowed' }} /> */}
                        {/* <path d="M935.97,305.44c14.18.57,28.37,1.13,42.55,1.7,6.01-39.72,12.03-79.43,18.04-119.15l-52.09-5.79c-2.84,41.08-5.67,82.16-8.51,123.23Z"
                            className={getSectionClass(3000)}
                            onClick={() => isSectionClickable(3000) && handleBlockClick('F29', 3000)}
                            style={{ cursor: isSectionClickable(3000) ? 'pointer' : 'not-allowed' }} /> */}
                        <path d="M402.69,1187.48c-34.85,21.66-69.7,43.31-103.09,63.99l21.63,33.93c32.25-23.2,65.96-47.37,99.67-71.54-6.07-8.79-12.14-17.59-18.21-26.38Z"
                            className={getSectionClass(3000)}
                            onClick={() => isSectionClickable(3000) && handleBlockClick('S1', 3000)}
                            style={{ cursor: isSectionClickable(3000) ? 'pointer' : 'not-allowed' }} />
                        <path d="M424.94,1220.13c-33.13,24.2-66.27,48.4-98.02,71.52l24.11,32.22c30.43-25.54,62.23-52.17,94.04-78.79-6.71-8.32-13.42-16.63-20.13-24.95Z"
                            className={getSectionClass(3000)}
                            onClick={() => isSectionClickable(3000) && handleBlockClick('S2', 3000)}
                            style={{ cursor: isSectionClickable(3000) ? 'pointer' : 'not-allowed' }} />
                        <path d="M450.48,1251.22c-31.14,26.72-62.27,53.44-92.12,78.97l26.56,30.23c28.33-27.85,57.96-56.88,87.59-85.91-7.34-7.77-14.68-15.53-22.02-23.3Z"
                            className={getSectionClass(3000)}
                            onClick={() => isSectionClickable(3000) && handleBlockClick('S3', 3000)}
                            style={{ cursor: isSectionClickable(3000) ? 'pointer' : 'not-allowed' }} />
                        <path d="M477.21,1279.22c-29.6,28.42-59.19,56.84-87.56,84l28.2,28.7c26.73-29.39,54.69-60.03,82.65-90.67-7.76-7.34-15.53-14.69-23.29-22.03Z"
                            className={getSectionClass(3000)}
                            onClick={() => isSectionClickable(3000) && handleBlockClick('S4', 3000)}
                            style={{ cursor: isSectionClickable(3000) ? 'pointer' : 'not-allowed' }} />
                        <path d="M503.68,1304.19c-27.66,30.31-55.32,60.61-81.84,89.58l30.03,26.78c24.74-31.08,50.62-63.5,76.5-95.92-8.23-6.82-16.46-13.63-24.69-20.45Z"
                            className={getSectionClass(3000)}
                            onClick={() => isSectionClickable(3000) && handleBlockClick('S5', 3000)}
                            style={{ cursor: isSectionClickable(3000) ? 'pointer' : 'not-allowed' }} />
                        <path d="M531.61,1328.69c-25.33,32.28-50.67,64.55-74.96,95.41l31.94,24.48c22.36-32.83,45.77-67.08,69.17-101.33-8.71-6.19-17.43-12.37-26.14-18.56Z"
                            className={getSectionClass(3000)}
                            onClick={() => isSectionClickable(3000) && handleBlockClick('S6', 3000)}
                            style={{ cursor: isSectionClickable(3000) ? 'pointer' : 'not-allowed' }} />
                        <path d="M561.42,1351.28c-23.23,33.82-46.45,67.65-68.73,99.99l33.43,22.39c20.23-34.19,41.4-69.86,62.57-105.53-9.09-5.62-18.18-11.24-27.27-16.85Z"
                            className={getSectionClass(3000)}
                            onClick={() => isSectionClickable(3000) && handleBlockClick('S7', 3000)}
                            style={{ cursor: isSectionClickable(3000) ? 'pointer' : 'not-allowed' }} />
                        <path d="M594.16,1371.87c-20.21,35.71-40.41,71.42-59.8,105.57l35.25,19.41c17.19-35.82,35.19-73.19,53.19-110.56-9.54-4.81-19.09-9.62-28.63-14.43Z"
                            className={getSectionClass(3000)}
                            onClick={() => isSectionClickable(3000) && handleBlockClick('S8', 3000)}
                            style={{ cursor: isSectionClickable(3000) ? 'pointer' : 'not-allowed' }} />
                        <path d="M627.5,1390.04c-17.78,36.98-35.55,73.96-52.62,109.33l36.46,17.01c14.76-36.88,30.22-75.37,45.68-113.86-9.84-4.16-19.69-8.32-29.53-12.48Z"
                            className={getSectionClass(3000)}
                            onClick={() => isSectionClickable(3000) && handleBlockClick('S9', 3000)}
                            style={{ cursor: isSectionClickable(3000) ? 'pointer' : 'not-allowed' }} />
                        <path d="M660.75,1404.62c-15.39,38.03-30.78,76.07-45.57,112.45l34.25,13.44c12.6-37.67,25.81-76.98,39.01-116.29-9.23-3.2-18.47-6.41-27.7-9.61Z"
                            className={getSectionClass(3000)}
                            onClick={() => isSectionClickable(3000) && handleBlockClick('S10', 3000)}
                            style={{ cursor: isSectionClickable(3000) ? 'pointer' : 'not-allowed' }} />
                        <path d="M694.69,1417.67c-13.24,38.83-26.48,77.67-39.21,114.83l35.26,11.6c10.45-38.32,21.42-78.31,32.39-118.31-9.48-2.71-18.96-5.42-28.44-8.12Z"
                            className={getSectionClass(3000)}
                            onClick={() => isSectionClickable(3000) && handleBlockClick('S11', 3000)}
                            style={{ cursor: isSectionClickable(3000) ? 'pointer' : 'not-allowed' }} />
                        <path d="M727.87,1428.38c-10.67,39.62-21.33,79.24-31.6,117.15l35.64,9.19c7.94-38.91,16.28-79.54,24.63-120.16-9.56-2.06-19.11-4.12-28.67-6.18Z"
                            className={getSectionClass(3000)}
                            onClick={() => isSectionClickable(3000) && handleBlockClick('S12', 3000)}
                            style={{ cursor: isSectionClickable(3000) ? 'pointer' : 'not-allowed' }} />
                        <path d="M1370.62,1187.4c34.85,21.65,69.71,43.3,103.1,63.98l-21.63,33.93c-32.25-23.19-65.97-47.36-99.68-71.52,6.07-8.8,12.14-17.59,18.21-26.39Z"
                            className={getSectionClass(3000)}
                            onClick={() => isSectionClickable(3000) && handleBlockClick('S23', 3000)}
                            style={{ cursor: isSectionClickable(3000) ? 'pointer' : 'not-allowed' }} />
                        <path d="M1348.37,1220.06c33.14,24.2,66.27,48.39,98.03,71.51l-24.1,32.22c-30.43-25.54-62.24-52.16-94.05-78.78,6.71-8.32,13.42-16.63,20.13-24.95Z"
                            className={getSectionClass(3000)}
                            onClick={() => isSectionClickable(3000) && handleBlockClick('S22', 3000)}
                            style={{ cursor: isSectionClickable(3000) ? 'pointer' : 'not-allowed' }} />
                        <path d="M1322.84,1251.15c31.14,26.72,62.28,53.43,92.13,78.96l-26.55,30.23c-28.34-27.84-57.97-56.87-87.6-85.89,7.34-7.77,14.68-15.53,22.02-23.3Z"
                            className={getSectionClass(3000)}
                            onClick={() => isSectionClickable(3000) && handleBlockClick('S21', 3000)}
                            style={{ cursor: isSectionClickable(3000) ? 'pointer' : 'not-allowed' }} />
                        <path d="M1296.11,1279.15c29.6,28.41,59.2,56.83,87.57,83.98l-28.2,28.7c-26.74-29.38-54.7-60.02-82.66-90.66,7.76-7.34,15.53-14.69,23.29-22.03Z"
                            className={getSectionClass(3000)}
                            onClick={() => isSectionClickable(3000) && handleBlockClick('S20', 3000)}
                            style={{ cursor: isSectionClickable(3000) ? 'pointer' : 'not-allowed' }} />
                        <path d="M1269.65,1304.13c27.66,30.3,55.33,60.6,81.85,89.57l-30.03,26.78c-24.74-31.08-50.63-63.49-76.51-95.9,8.23-6.82,16.46-13.63,24.69-20.45Z"
                            className={getSectionClass(3000)}
                            onClick={() => isSectionClickable(3000) && handleBlockClick('S19', 3000)}
                            style={{ cursor: isSectionClickable(3000) ? 'pointer' : 'not-allowed' }} />
                        <path d="M1241.72,1328.64c25.34,32.27,50.68,64.54,74.98,95.4l-31.93,24.48c-22.37-32.83-45.78-67.07-69.18-101.32,8.71-6.19,17.43-12.37,26.14-18.56Z"
                            className={getSectionClass(3000)}
                            onClick={() => isSectionClickable(3000) && handleBlockClick('S18', 3000)}
                            style={{ cursor: isSectionClickable(3000) ? 'pointer' : 'not-allowed' }} />
                        <path d="M1211.92,1351.23c23.23,33.82,46.46,67.64,68.75,99.98l-33.43,22.4c-20.23-34.19-41.41-69.85-62.59-105.52,9.09-5.62,18.18-11.24,27.27-16.86Z"
                            className={getSectionClass(3000)}
                            onClick={() => isSectionClickable(3000) && handleBlockClick('S17', 3000)}
                            style={{ cursor: isSectionClickable(3000) ? 'pointer' : 'not-allowed' }} />
                        <path d="M1179.17,1371.83c20.21,35.71,40.42,71.41,59.82,105.57l-35.24,19.41c-17.19-35.81-35.2-73.18-53.2-110.55,9.54-4.81,19.08-9.62,28.63-14.43Z"
                            className={getSectionClass(3000)}
                            onClick={() => isSectionClickable(3000) && handleBlockClick('S16', 3000)}
                            style={{ cursor: isSectionClickable(3000) ? 'pointer' : 'not-allowed' }} />
                        <path d="M1145.84,1390c17.78,36.98,35.56,73.95,52.64,109.33l-36.46,17.02c-14.76-36.88-30.23-75.37-45.7-113.86,9.84-4.16,19.68-8.32,29.53-12.49Z"
                            className={getSectionClass(3000)}
                            onClick={() => isSectionClickable(3000) && handleBlockClick('S15', 3000)}
                            style={{ cursor: isSectionClickable(3000) ? 'pointer' : 'not-allowed' }} />
                        <path d="M1112.59,1404.59c15.4,38.03,30.79,76.06,45.58,112.45l-34.25,13.45c-12.6-37.66-25.82-76.97-39.03-116.28,9.23-3.2,18.47-6.41,27.7-9.61Z"
                            className={getSectionClass(3000)}
                            onClick={() => isSectionClickable(3000) && handleBlockClick('S14', 3000)}
                            style={{ cursor: isSectionClickable(3000) ? 'pointer' : 'not-allowed' }} />
                        <path d="M1078.65,1417.64c13.25,38.83,26.49,77.67,39.22,114.82l-35.26,11.61c-10.46-38.32-21.43-78.31-32.41-118.3,9.48-2.71,18.96-5.42,28.44-8.13Z"
                            className={getSectionClass(3000)}
                            onClick={() => isSectionClickable(3000) && handleBlockClick('S13', 3000)}
                            style={{ cursor: isSectionClickable(3000) ? 'pointer' : 'not-allowed' }} />
                        <path d="M1387.32,1159.73l104.9,57.36c-5.28,10.27-10.55,20.54-15.83,30.81-34.16-21.33-68.31-42.67-102.47-64l13.39-24.17Z"
                            className={getSectionClass(3000)}
                            onClick={() => isSectionClickable(3000) && handleBlockClick('S24', 3000)}
                            style={{ cursor: isSectionClickable(3000) ? 'pointer' : 'not-allowed' }} />
                    </g>
                    <g>
                        <path d="M907.03,1314.29c-41.53,1.87-143.52.76-248-62.3-75.7-45.69-119.81-104.05-141.79-138.21,8.51-5.5,17.02-11.01,25.53-16.51,19.85,31.19,63.92,91.07,142.81,135.15,94.65,52.89,184.5,52.34,221.45,50.04v31.84Z"
                            className={getSectionClass(6500)}
                            onClick={() => isSectionClickable(6500) && handleBlockClick('SOUTH WEST FIRST FLOOR', 6500)}
                            style={{ cursor: isSectionClickable(6500) ? 'pointer' : 'not-allowed' }} />
                        <path d="M923.03,1312.33c39.65-3.77,114.52-16.19,193.28-64.94,84.6-52.35,130.36-119.79,150.72-154.55-8.79-5.56-17.59-11.12-26.38-16.68-19.53,33.93-65.72,103.38-153.19,153.53-65.94,37.81-127.86,48.9-164.73,52.58.1,10.02.2,20.04.3,30.06Z"
                            className={getSectionClass(6500)}
                            onClick={() => isSectionClickable(6500) && handleBlockClick('SOUTH EAST FIRST FLOOR', 6500)}
                            style={{ cursor: isSectionClickable(6500) ? 'pointer' : 'not-allowed' }} />
                        <path d="M1081.7,485.17c-36.05-19.42-69.53-31.11-96.38-38.36l-14,54.49c-25.25-3.87-55.63-6.67-89.98-6.07-34.18.6-64.29,4.42-89.3,9.13-4.79-18.53-9.57-37.07-14.36-55.6-26.85,7.28-60.32,19.01-96.34,38.47-29.97,16.19-54.28,33.71-73.19,49.36,17.25,19.63,34.5,39.26,51.74,58.89,14.6-13.26,35.11-29.31,61.96-43.57,28.73-15.26,55.21-23.43,75.23-28,22.33-4.97,50.2-9.26,82.38-9.96,33.99-.73,63.43,2.75,86.77,7.13,20.25,4.97,46.55,13.52,75.03,28.82,26.58,14.28,47.12,30.17,62.01,43.51,17.23-19.65,34.45-39.3,51.68-58.95-18.93-15.63-43.26-33.13-73.25-49.28Z"
                            className={getSectionClass(6500)}
                            onClick={() => isSectionClickable(6500) && handleBlockClick('NORTH STAND FIRST FLOOR', 6500)}
                            style={{ cursor: isSectionClickable(6500) ? 'pointer' : 'not-allowed' }} />
                    </g>
                    <g>
                        <path d="M959.29,490.97c-21.44-4.63-48.96-8.58-81.02-8.34-29.55.22-55.1,3.96-75.4,8.34-3.91-15.23-7.83-30.46-11.74-45.69,23.22-4.98,51.34-9.2,83.4-10.31,35.7-1.24,66.94,1.71,92.26,5.79-2.5,16.74-4.99,33.48-7.49,50.21Z"
                            className='st9' />
                        <path d="M971.88,424.24c-26.97-2.8-58.05-4.39-92.43-3.23-33.85,1.13-64.31,4.7-90.72,9.19-8.28-34.33-16.57-68.65-24.85-102.98,31.76-5.58,69.29-9.97,111.49-10.72,44.38-.79,83.81,2.63,116.94,7.49-6.81,33.42-13.62,66.84-20.43,100.26Z"
                            className='st9' />
                    </g>
                    <g>
                        <path d="M1035.37,1243.65c28.02-10.11,69.6-28.88,111.84-63.87,46.02-38.13,73.31-79.36,88.33-106.34-37.47-19.29-74.93-38.58-112.4-57.87-11.23,18.2-29.23,42.95-56.62,66.95-27.49,24.08-54.48,38.7-74.04,47.43,14.3,37.9,28.6,75.8,42.89,113.7Z"
                            className={getSectionClass(15000)}
                            onClick={() => isSectionClickable(15000) && handleBlockClick('SOUTH EAST GROUND FLOOR', 15000)}
                            style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />
                        <path d="M843.63,604.33c-16.9,1.74-40.7,6.07-67.15,17.36-28.58,12.2-49.32,27.87-62.55,39.57-15.23-17.79-30.47-35.57-45.7-53.36,17.04-14.38,41.8-32.21,74.55-46.98,37.14-16.74,70.75-23.31,94.47-26.04,2.13,23.15,4.26,46.3,6.38,69.45Z"
                            className={getSectionClass(15000)}
                            onClick={() => isSectionClickable(15000) && handleBlockClick('NORTH WEST GROUND FLOOR', 15000)}
                            style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />
                        <path d="M918.43,603.31c16.6.85,41.59,4.08,69.62,15.54,29.31,11.98,50.05,28.1,62.6,39.5,14.76-18.63,29.53-37.26,44.29-55.89-16.9-13.76-41.26-30.64-73.26-44.42-38.16-16.43-72.56-22.14-96.44-24.18-2.27,23.15-4.54,46.3-6.81,69.45Z"
                            className={getSectionClass(15000)}
                            onClick={() => isSectionClickable(15000) && handleBlockClick('NORTH EAST GROUND FLOOR', 15000)}
                            style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />
                        <path d="M724.14,1239.56c-25.72-10.76-61.43-29.02-98.04-59.74-36.43-30.57-60.53-62.4-75.57-85.79,35.06-22.3,70.13-44.6,105.19-66.89,11.01,15.72,27.5,35.86,51.06,55.4,25.07,20.79,49.43,33.68,67.66,41.62-16.77,38.47-33.53,76.94-50.3,115.4Z"
                            className={getSectionClass(15000)}
                            onClick={() => isSectionClickable(15000) && handleBlockClick('SOUTH EAST GROUND FLOOR', 15000)}
                            style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />
                    </g>
                    <g>
                        <path d="M509.13,1287.31c-16.91-15.1-35.33-33.45-53.84-55.4-15.79-18.73-28.94-36.89-39.86-53.62,29.54-19.06,59.08-38.13,88.62-57.19,8.51,14.1,19.68,30.29,34.18,47.04,14.59,16.86,29.11,30.3,41.9,40.79l-71.01,78.38Z"
                            className='st9' />
                        <path d="M830.86,1428.38c-21.11-2.43-42.21-4.86-63.32-7.29,7.06-34.38,14.13-68.77,21.19-103.15l49.28,7.91c-2.38,34.17-4.77,68.35-7.15,102.52Z"
                            className='st9' />
                        <path d="M916.9,1434.32c-23.57-1.34-47.15-2.69-70.72-4.03,2.13-34.13,4.26-68.26,6.38-102.38h57.19c2.38,35.47,4.77,70.94,7.15,106.41Z"
                            className='st9' />
                        <path d="M1076.9,1552.42c-43.44,12.1-101.57,23.86-170.72,25.87-68.58,1.99-126.87-6.22-170.72-15.66,9.08-42.1,18.16-84.2,27.23-126.3,37.78,7.3,86.63,13.21,143.49,11.23,53.28-1.86,98.9-10.13,134.64-19.18,12.03,41.34,24.06,82.69,36.09,124.03Z"
                            className='st9' />
                        <path d="M931.2,1432.59c24.87-3.84,49.73-7.67,74.6-11.51-7.07-34.38-14.14-68.76-21.21-103.15-20.07,3.32-40.14,6.65-60.2,9.97,2.27,34.89,4.54,69.79,6.81,104.68Z"
                            className='st9' />
                        <path d="M831.97,1269.35c-16.72-1.95-36.24-5.46-57.53-11.74-16.16-4.77-30.49-10.29-42.89-15.83,16.62-37.05,33.25-74.1,49.87-111.15,8.03,3.46,17.74,6.95,28.98,9.68,13.61,3.3,25.85,4.59,35.87,4.96-4.77,41.36-9.53,82.72-14.3,124.09Z"
                            className='st9' />
                        <path d="M942.43,1269.35c-33.02.88-66.04,1.76-99.06,2.64l14.04-123.83h64.6c6.81,40.4,13.62,80.79,20.43,121.19Z"
                            className='st9' />
                        <path d="M950.65,1268.54c13.46-1.45,30.04-4.52,48.24-10.95,11.2-3.96,21-8.47,29.34-12.92l-44.6-109.28c-6.79,1.67-13.7,3.31-20.72,4.9-9.47,2.15-18.8,4.14-27.96,5.99,5.23,40.75,10.47,81.5,15.7,122.25Z"
                            className='st9' />
                        <path d="M903.12,601.14c-6.79-.74-14.32-1.24-22.47-1.28-8.95-.04-17.17.47-24.51,1.28-2.67-23.01-5.33-46.02-8-69.03,9.14-1.08,19.21-1.86,30.09-2.07,12.02-.23,23.1.26,33.06,1.15l-8.17,69.96Z"
                            className='st9' />
                    </g>

                    <g>
                        <ellipse className='st9' cx="886.78" cy="875.61" rx="180.77" ry="181.91" />
                        <rect className='st10' x="867.54" y="792.24" width="37.45" height="147.32" />
                    </g>
                </svg>
            </div>
        </div>
    )
}

export default RGICStadium