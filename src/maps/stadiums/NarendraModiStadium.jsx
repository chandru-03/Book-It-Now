import React, { useEffect, useState } from 'react'
import '../../styles/Sports.css'
import '../../styles/SVG.css'

function NarendraModiStadium({ setBlockPrice, setBlockName, setPrice, filterBy }) {
    const [zoom, setZoom] = useState(2)

    useEffect(() => {
        const price = [499, 1000, 2000, 6000, 15000,];
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
            return price === 499 ? 'st5' :
                price === 1000 ? 'st3' :
                    price === 2000 ? 'st2' :
                        price === 6000 ? 'st7' :
                            price === 15000 ? 'st1' :
                                price === 18000 ? 'st4' : ''
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

                <img className='image-narendra' src='/Assets/StadiumBlocks/NarendraModi.png' alt="Map" />


                <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1326.51 1345.61">
                    <g>
                        <g>
                            <polygon points="589 919.33 606.02 923.63 581.67 1049.66 553.59 1042.23 589 919.33"
                                className={getSectionClass(2000)}
                                onClick={() => isSectionClickable(2000) && handleBlockClick('SOUTH PREMIUM WEST 1', 2000)}
                                style={{ cursor: isSectionClickable(2000) ? 'pointer' : 'not-allowed' }} />


                            <polygon points="565.11 911.22 582.54 917.58 545.5 1039.67 518.23 1029.57 565.11 911.22"
                                className={getSectionClass(2000)}
                                onClick={() => isSectionClickable(2000) && handleBlockClick('SOUTH PREMIUM WEST 2', 2000)}
                                style={{ cursor: isSectionClickable(2000) ? 'pointer' : 'not-allowed' }} />


                            <polygon points="539.58 901.27 556.65 908.32 507.21 1026.12 481.99 1012.4 539.58 901.27"
                                className={getSectionClass(2000)}
                                onClick={() => isSectionClickable(2000) && handleBlockClick('SOUTH PREMIUM WEST 3', 2000)}
                                style={{ cursor: isSectionClickable(2000) ? 'pointer' : 'not-allowed' }} />


                            <polygon points="519.92 888.35 534.33 896.82 486.53 982.77 467.12 971.83 519.92 888.35"
                                className={getSectionClass(2000)}
                                onClick={() => isSectionClickable(2000) && handleBlockClick('SOUTH PREMIUM WEST 4', 2000)}
                                style={{ cursor: isSectionClickable(2000) ? 'pointer' : 'not-allowed' }} />
                        </g>

                        <g>
                            <polygon points="639.14 988.63 662.01 990.68 660.4 1059.23 630.02 1056.76 639.14 988.63"
                                className={getSectionClass(2000)}
                                onClick={() => isSectionClickable(2000) && handleBlockClick('SOUTH PREMIUM CENTRE - 3', 2000)}
                                style={{ cursor: isSectionClickable(2000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="670.45 989.91 692.06 988.63 698.47 1058.45 667.13 1058.45 670.45 989.91"
                                className={getSectionClass(2000)}
                                onClick={() => isSectionClickable(2000) && handleBlockClick('SOUTH PREMIUM CENTRE - 2', 2000)}
                                style={{ cursor: isSectionClickable(2000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="609.65 985.75 628.05 987.4 621.04 1056.06 595.07 1051.7 609.65 985.75"
                                className={getSectionClass(2000)}
                                onClick={() => isSectionClickable(2000) && handleBlockClick('SOUTH PREMIUM CENTRE - 4', 2000)}
                                style={{ cursor: isSectionClickable(2000) ? 'pointer' : 'not-allowed' }} />

                        </g>
                        <polygon points="720.91 984.49 701.02 989.32 711.38 1057.53 737.35 1053.17 720.91 984.49"
                            className={getSectionClass(2000)}
                            onClick={() => isSectionClickable(2000) && handleBlockClick('SOUTH PREMIUM CENTRE - 1', 2000)}
                            style={{ cursor: isSectionClickable(2000) ? 'pointer' : 'not-allowed' }} />


                        <g>


                            <polygon points="788.96 901.34 771.88 908.39 821.32 1026.19 846.54 1012.47 788.96 901.34"
                                className={getSectionClass(2000)}
                                onClick={() => isSectionClickable(2000) && handleBlockClick('EAST STAND GROUND FLOOR', 2000)}
                                style={{ cursor: isSectionClickable(2000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="763.42 911.29 745.99 917.66 783.03 1039.74 810.3 1029.65 763.42 911.29"
                                className={getSectionClass(2000)}
                                onClick={() => isSectionClickable(2000) && handleBlockClick('EAST STAND GROUND FLOOR', 2000)}
                                style={{ cursor: isSectionClickable(2000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="739.53 919.4 722.51 923.7 746.86 1049.73 774.94 1042.3 739.53 919.4"
                                className={getSectionClass(2000)}
                                onClick={() => isSectionClickable(2000) && handleBlockClick('EAST STAND GROUND FLOOR', 2000)}
                                style={{ cursor: isSectionClickable(2000) ? 'pointer' : 'not-allowed' }} />

                        </g>






                        <g>
                            <path d="M884.48,381.87c-20.86-15.36-51.04-34.19-90.38-48.68-33.65-12.39-63.98-17.92-87.46-20.43v-39.49c25.99.67,66.97,4.92,112.95,23.91,41.95,17.34,71.98,40.32,90.59,57-8.56,9.23-17.13,18.45-25.69,27.68Z"
                                className={getSectionClass(2000)}
                                onClick={() => isSectionClickable(2000) && handleBlockClick('NORTH CORPORATE BOX', 2000)}
                                style={{ cursor: isSectionClickable(2000) ? 'pointer' : 'not-allowed' }} />

                        </g>
                    </g>

                    <g>
                        <g>
                            <path d="M625.42,215.06c-6.14-70.14-12.05-141.31-18.19-211.44,8.27-1.22,17.36-2.2,27.18-2.71,10.14-.53,19.57-.5,28.15-.12v213.25c-12.3,0-24.83,1.03-37.13,1.03Z"
                                className={getSectionClass(499)}
                                onClick={() => isSectionClickable(499) && handleBlockClick('BLOCK N - 1', 499)}
                                style={{ cursor: isSectionClickable(499) ? 'pointer' : 'not-allowed' }} />


                            <path d="M704.74,215.06c-5.51-.58-28.27-2.41-33.08-1.89-.34-70.41-.68-141.94-1.02-212.35,8.34-.53,17.48.37,27.31.66,10.15.3,19.54,1.12,28.06,2.2-6.39,70.29-14.87,141.08-21.26,211.37Z"
                                className={getSectionClass(499)}
                                onClick={() => isSectionClickable(499) && handleBlockClick('BLOCK N - 2', 499)}
                                style={{ cursor: isSectionClickable(499) ? 'pointer' : 'not-allowed' }} />


                            <path d="M748.17,221.84c-5.43-1.08-29.9-5-34.75-4.92,6.12-70.14,14.52-142.19,20.64-212.33,8.36.23,44.41,5.85,53.06,7.74-12.81,69.41-26.14,140.1-38.96,209.51Z"
                                className={getSectionClass(499)}
                                onClick={() => isSectionClickable(499) && handleBlockClick('BLOCK N - 3', 499)}
                                style={{ cursor: isSectionClickable(499) ? 'pointer' : 'not-allowed' }} />


                            <path d="M790.2,231.93c-5.31-1.57-27.92-8.04-32.75-8.41,12.52-69.28,26.11-139.89,38.63-209.18,8.3,1,44.87,10.52,53.05,13.15-19.12,67.94-39.82,136.5-58.94,204.44Z"
                                className={getSectionClass(499)}
                                onClick={() => isSectionClickable(499) && handleBlockClick('BLOCK N - 4', 499)}
                                style={{ cursor: isSectionClickable(499) ? 'pointer' : 'not-allowed' }} />


                            <path d="M830.77,245.95c-5.16-2-27.98-10.9-32.76-11.66,18.16-68.03,41.97-135.83,60.13-203.85,8.19,1.68,44.1,15.42,52.04,18.7-24.62,66.14-54.79,130.66-79.41,196.81Z"
                                className={getSectionClass(499)}
                                onClick={() => isSectionClickable(499) && handleBlockClick('BLOCK N - 5', 499)}
                                style={{ cursor: isSectionClickable(499) ? 'pointer' : 'not-allowed' }} />

                            <path d="M870.37,264.99c-4.91-2.56-26.6-13.93-31.27-15.21,25.58-65.6,53.27-131.75,78.85-197.35,7.96,2.57,43.43,19.26,50.96,23.4-31.8,63.01-66.74,126.15-98.54,189.16Z"
                                className={getSectionClass(499)}
                                onClick={() => isSectionClickable(499) && handleBlockClick('BLOCK N - 6', 499)}
                                style={{ cursor: isSectionClickable(499) ? 'pointer' : 'not-allowed' }} />


                            <path d="M901.93,282.18c-4.66-3-20.98-13.16-25.51-14.87,31.48-62.98,67.21-124.32,98.69-187.3,7.69,3.29,30.13,17.06,37.25,21.88-37.43,59.83-72.99,120.46-110.43,180.29Z"
                                className={getSectionClass(499)}
                                onClick={() => isSectionClickable(499) && handleBlockClick('BLOCK N - 7', 499)}
                                style={{ cursor: isSectionClickable(499) ? 'pointer' : 'not-allowed' }} />

                        </g>

                        <g>
                            <path d="M423.97,284.12c-40.62-57.51-77.11-119.7-117.73-177.21,6.53-5.22,13.37-7.66,21.59-13.05,8.49-5.56,20.45-12.32,28.06-16.31,34.82,62.08,64.27,126.17,99.09,188.25-9.66,5.53-21.35,12.79-31.01,18.33Z"
                                className={getSectionClass(499)}
                                onClick={() => isSectionClickable(499) && handleBlockClick('BLOCK M - 1', 499)}
                                style={{ cursor: isSectionClickable(499) ? 'pointer' : 'not-allowed' }} />


                            <path d="M461.67,262.54c-34.01-61.65-65.37-126.71-99.37-188.36,7.07-4.46,14.99-6.82,23.75-11.26,9.05-4.59,17.69-8.37,25.69-11.5,27.74,65.55,55.26,130.3,83,195.84-10.22,4.43-22.86,10.86-33.08,15.29Z"
                                className={getSectionClass(499)}
                                onClick={() => isSectionClickable(499) && handleBlockClick('BLOCK M - 2', 499)}
                                style={{ cursor: isSectionClickable(499) ? 'pointer' : 'not-allowed' }} />



                            <path d="M501.36,243.61c-27.07-65-54.13-129.99-81.2-194.99,7.51-3.66,15.88-7.34,25.08-10.8,9.5-3.57,18.5-6.39,26.8-8.63,20.41,68.18,43.38,134.71,63.79,202.89-10.64,3.29-23.83,8.24-34.47,11.53Z"
                                className={getSectionClass(499)}
                                onClick={() => isSectionClickable(499) && handleBlockClick('BLOCK M - 3', 499)}
                                style={{ cursor: isSectionClickable(499) ? 'pointer' : 'not-allowed' }} />


                            <path d="M541.26,229.77c-20.26-67.43-40.52-134.86-60.78-202.29,7.85-2.87,16.55-5.68,26.06-8.18,9.82-2.58,19.06-4.46,27.54-5.83,13.32,69.92,29.34,138.45,42.66,208.37-10.92,2.18-24.55,5.75-35.47,7.93Z"
                                className={getSectionClass(499)}
                                onClick={() => isSectionClickable(499) && handleBlockClick('BLOCK M - 4', 499)}
                                style={{ cursor: isSectionClickable(499) ? 'pointer' : 'not-allowed' }} />


                            <path d="M613.85,217.44c-5.53.27-9.39.61-16,1.7-5.63.93-7.58,1.44-12.26,2.7-11.14-69.52-31.52-140.46-42.67-209.97,8.16-1.81,46.84-7.66,55.43-7.89,4.47,70.44,11.02,143.03,15.49,213.47Z"
                                className={getSectionClass(499)}
                                onClick={() => isSectionClickable(499) && handleBlockClick('BLOCK M - 5', 499)}
                                style={{ cursor: isSectionClickable(499) ? 'pointer' : 'not-allowed' }} />

                        </g>

                        <g>
                            <path d="M366.21,991.3c-48.37,51.16-108.58,124.82-156.95,175.98-6.4-5.37-34.8-35.31-40.22-41.98,53.99-46.38,118.61-111.39,172.6-157.77,7.33,8.38,17.24,15.39,24.57,23.77Z"
                                className={getSectionClass(499)}
                                onClick={() => isSectionClickable(499) && handleBlockClick('BLOCK J - 1', 499)}
                                style={{ cursor: isSectionClickable(499) ? 'pointer' : 'not-allowed' }} />

                            <path d="M335.25,960.71c-54.32,44.8-117.81,112.96-172.12,157.76-5.69-6.12-29.78-36.36-34.33-43.65,59.3-39.36,126.09-100.99,185.39-140.35,6.24,9.22,14.82,17.02,21.06,26.25Z"
                                className={getSectionClass(499)}
                                onClick={() => isSectionClickable(499) && handleBlockClick('BLOCK J - 2', 499)}
                                style={{ cursor: isSectionClickable(499) ? 'pointer' : 'not-allowed' }} />

                            <path d="M307.41,927.29c-54.32,44.8-129.8,95-184.11,139.8-5.69-6.12-25.51-39.06-30.06-46.35,59.3-39.36,135.17-82.44,194.47-121.8,6.24,9.22,13.46,19.12,19.7,28.35Z"
                                className={getSectionClass(499)}
                                onClick={() => isSectionClickable(499) && handleBlockClick('BLOCK J - 3', 499)}
                                style={{ cursor: isSectionClickable(499) ? 'pointer' : 'not-allowed' }} />
                            <path d="M283.29,891.83c-59.95,36.92-133.67,85.28-193.62,122.2-4.8-6.85-23.23-44.11-26.74-51.96,64.14-30.85,139-70.1,203.14-100.95,4.92,9.99,12.31,20.72,17.22,30.71Z"
                                className={getSectionClass(499)}
                                onClick={() => isSectionClickable(499) && handleBlockClick('BLOCK J - 4', 499)}
                                style={{ cursor: isSectionClickable(499) ? 'pointer' : 'not-allowed' }} />

                            <path d="M262.36,853.78c-59.96,36.91-142.42,64.9-202.38,101.81-4.8-6.85-14.59-36.65-18.09-44.5,64.15-30.83,143.05-56.76,207.2-87.59,4.91,9.99,8.36,20.29,13.27,30.28Z"
                                className={getSectionClass(499)}
                                onClick={() => isSectionClickable(499) && handleBlockClick('BLOCK J - 5', 499)}
                                style={{ cursor: isSectionClickable(499) ? 'pointer' : 'not-allowed' }} />
                        </g>

                        <g>
                            <path d="M942.45,310.65c-4.34-3.44-23.5-18.69-27.84-20.84,37.48-59.6,77.58-117,115.06-176.6,7.33,4.03,37.06,26.74,43.67,32.23-43.11,55.89-87.79,109.31-130.9,165.2Z"
                                className={getSectionClass(499)}
                                onClick={() => isSectionClickable(499) && handleBlockClick('BLOCK P - 1', 499)}
                                style={{ cursor: isSectionClickable(499) ? 'pointer' : 'not-allowed' }} />


                            <path d="M972.33,336.84c-3.98-3.85-19.82-18.61-23.94-21.17,43.16-55.63,89.77-109.01,132.93-164.64,6.9,4.73,34.4,29.99,40.44,36.11-48.38,51.38-101.05,98.32-149.43,149.7Z"
                                className={getSectionClass(499)}
                                onClick={() => isSectionClickable(499) && handleBlockClick('BLOCK P - 2', 499)}
                                style={{ cursor: isSectionClickable(499) ? 'pointer' : 'not-allowed' }} />


                            <path d="M1003.55,369.44c-3.55-4.25-19.13-21.56-22.95-24.54,48.82-50.73,100.3-98.7,149.12-149.43,6.36,5.43,31.12,34.84,36.48,41.56-53.57,45.96-109.08,86.46-162.65,132.41Z"
                                className={getSectionClass(499)}
                                onClick={() => isSectionClickable(499) && handleBlockClick('BLOCK P - 3', 499)}
                                style={{ cursor: isSectionClickable(499) ? 'pointer' : 'not-allowed' }} />


                            <path d="M1030.15,403.8c-2.96-4.69-18.09-25.35-21.48-28.81,55.1-43.84,107.23-89.29,162.33-133.13,5.58,6.22,27.07,34.71,31.49,42.08-59.17,38.47-113.17,81.39-172.34,119.86Z"
                                className={getSectionClass(499)}
                                onClick={() => isSectionClickable(499) && handleBlockClick('BLOCK P - 4', 499)}
                                style={{ cursor: isSectionClickable(499) ? 'pointer' : 'not-allowed' }} />


                            <path d="M1049.2,433.26c-2.49-4.95-11.18-18.68-14.22-22.45,59.08-38.3,114.28-80.88,173.36-119.17,4.95,6.73,24.55,37.45,28.24,45.21-62.62,32.57-124.77,63.85-187.39,96.41Z"
                                className={getSectionClass(499)}
                                onClick={() => isSectionClickable(499) && handleBlockClick('BLOCK P - 5', 499)}
                                style={{ cursor: isSectionClickable(499) ? 'pointer' : 'not-allowed' }} />

                        </g>

                        <g>

                            <path d="M1072.29,477.81c-2.06-5.14-12.36-26.4-15.06-30.41,62.13-33.12,122.47-68.08,184.61-101.19,4.36,7.13,22.29,42.88,25.31,50.93-65.17,27.1-129.68,53.57-194.85,80.67Z"
                                className={getSectionClass(499)}
                                onClick={() => isSectionClickable(499) && handleBlockClick('BLOCk Q - 1', 499)}
                                style={{ cursor: isSectionClickable(499) ? 'pointer' : 'not-allowed' }} />


                            <path d="M1087.74,517.02c-1.63-5.29-9.81-27.52-12.18-31.74,64.63-27.93,129.88-53.54,194.51-81.48,3.76,7.47,16.72,40.98,19.07,49.25-67.16,21.69-134.23,42.27-201.39,63.97Z"
                                className={getSectionClass(499)}
                                onClick={() => isSectionClickable(499) && handleBlockClick('BLOCK Q - 2', 499)}
                                style={{ cursor: isSectionClickable(499) ? 'pointer' : 'not-allowed' }} />


                            <path d="M1099.94,560.51c-1.18-5.41-6.77-29.06-8.78-33.47,66.73-22.45,134.39-42.12,201.12-64.56,3.13,7.75,12.27,43.74,13.92,52.18-68.74,16.02-137.52,29.84-206.26,45.86Z"
                                className={getSectionClass(499)}
                                onClick={() => isSectionClickable(499) && handleBlockClick('BLOCK Q - 3', 499)}
                                style={{ cursor: isSectionClickable(499) ? 'pointer' : 'not-allowed' }} />


                            <path d="M1107.44,602.84c-.73-5.49-4.1-29.66-5.74-34.22,68.38-16.79,139.34-28.18,207.72-44.97,2.47,7.99,8.38,43.01,9.31,51.56-69.84,10.21-141.46,17.42-211.29,27.63Z"
                                className={getSectionClass(499)}
                                onClick={() => isSectionClickable(499) && handleBlockClick('BLOCK Q - 4', 499)}
                                style={{ cursor: isSectionClickable(499) ? 'pointer' : 'not-allowed' }} />


                            <path d="M1110.79,644.83c-.16-5.54-1.23-29.15-2.39-33.85,69.73-9.74,142.86-15.04,212.59-24.78,1.64,8.2,4.1,46.06,4.16,54.66-70.51,3.05-143.85.92-214.36,3.97Z"
                                className={getSectionClass(499)}
                                onClick={() => isSectionClickable(499) && handleBlockClick('BLOCK Q - 5', 499)}
                                style={{ cursor: isSectionClickable(499) ? 'pointer' : 'not-allowed' }} />


                            <path d="M1109.92,687.95c.36-5.53,1.99-29.96,1.28-34.75,70.34-3.11,143.98-.76,214.32-3.87.86,8.32.48,46.52-.27,55.09-70.49-3.62-144.84-12.85-215.33-16.47Z"
                                className={getSectionClass(499)}
                                onClick={() => isSectionClickable(499) && handleBlockClick('BLOCK Q - 6', 499)}
                                style={{ cursor: isSectionClickable(499) ? 'pointer' : 'not-allowed' }} />


                            <path d="M1105.3,733.83c.75-5.49,4.12-29.74,3.75-34.57,70.38,1.89,145.73,9.15,216.11,11.05.27,8.36-3.94,49.13-5.29,57.62-70.05-8.62-144.51-25.47-214.56-34.09Z"
                                className={getSectionClass(499)}
                                onClick={() => isSectionClickable(499) && handleBlockClick('BLOCK Q - 7', 499)}
                                style={{ cursor: isSectionClickable(499) ? 'pointer' : 'not-allowed' }} />


                            <path d="M1096.14,774.22c1.39-5.36,7.41-29.13,7.61-33.97,69.68,10.11,145.23,26.1,214.91,36.21-.71,8.33-7.76,45.36-10.1,53.63-68.56-16.75-143.86-39.13-212.42-55.88Z"
                                className={getSectionClass(499)}
                                onClick={() => isSectionClickable(499) && handleBlockClick('BLOCK Q - 8', 499)}
                                style={{ cursor: isSectionClickable(499) ? 'pointer' : 'not-allowed' }} />


                            <path d="M1084.08,812.49c1.81-5.23,9.7-26.98,10.28-31.79,68.65,15.65,143.47,42.53,212.11,58.18-1.37,8.25-8.08,31.96-11.07,40.01-67-22.18-144.32-44.23-211.32-66.41Z"
                                className={getSectionClass(499)}
                                onClick={() => isSectionClickable(499) && handleBlockClick('BLOCK Q - 9', 499)}
                                style={{ cursor: isSectionClickable(499) ? 'pointer' : 'not-allowed' }} />

                        </g>

                        <g>
                            <path d="M277.05,437.91c-63.87-29.63-123.39-71.63-187.25-101.27,3.07-7.78,25.03-39.75,29.63-47,61.12,36.48,115.52,81.64,176.63,118.11-5.62,9.61-13.39,20.54-19.01,30.15Z"
                                className={getSectionClass(499)}
                                onClick={() => isSectionClickable(499) && handleBlockClick('BLOCK L - 1', 499)}
                                style={{ cursor: isSectionClickable(499) ? 'pointer' : 'not-allowed' }} />

                            <path d="M299.85,402.35c-58.05-39.85-117.39-80.02-175.43-119.87,4.32-7.16,27.89-37.4,33.64-43.79,54.19,46.14,108.78,90.01,162.97,136.15-7.14,8.54-14.03,18.96-21.18,27.51Z"
                                className={getSectionClass(499)}
                                onClick={() => isSectionClickable(499) && handleBlockClick('BLOCK L - 2', 499)}
                                style={{ cursor: isSectionClickable(499) ? 'pointer' : 'not-allowed' }} />

                            <path d="M327.78,365.87c-55.09-43.85-110.17-87.69-165.26-131.54,4.81-6.84,10.36-14.1,16.75-21.57,6.59-7.72,13.11-14.53,19.3-20.49,50.8,49.85,103.04,97.02,153.84,146.87-7.73,8.02-16.89,18.72-24.62,26.74Z"
                                className={getSectionClass(499)}
                                onClick={() => isSectionClickable(499) && handleBlockClick('BLOCK L - 3', 499)}
                                style={{ cursor: isSectionClickable(499) ? 'pointer' : 'not-allowed' }} />


                            <path d="M355.72,336.65c-50.35-49.22-96.9-102.33-147.25-151.55,5.48-6.31,34.45-31.6,41.21-36.9,45.47,54.76,87.78,109.6,133.25,164.35-8.5,7.19-18.71,16.91-27.21,24.1Z"
                                className={getSectionClass(499)}
                                onClick={() => isSectionClickable(499) && handleBlockClick('BLOCK L - 4', 499)}
                                style={{ cursor: isSectionClickable(499) ? 'pointer' : 'not-allowed' }} />

                            <path d="M389.92,308.19c-46.61-52.77-86.57-112.19-133.18-164.96,5.93-5.89,29.94-23.22,37.07-28.01,41.34,57.94,78.92,117.48,120.26,175.42-9.01,6.55-15.14,11-24.15,17.55Z"
                                className={getSectionClass(499)}
                                onClick={() => isSectionClickable(499) && handleBlockClick('BLOCK L - 5', 499)}
                                style={{ cursor: isSectionClickable(499) ? 'pointer' : 'not-allowed' }} />
                        </g>

                        <g>
                            <path d="M246.22,816.08c-65.66,25.42-143.47,56.05-209.13,81.48-3.47-7.6-14.64-48.34-16.67-56.69,68.68-18.69,145.88-40.14,214.56-58.83,3.02,10.72,8.22,23.33,11.24,34.05Z"
                                className={getSectionClass(499)}
                                onClick={() => isSectionClickable(499) && handleBlockClick('BLOCK K - 1', 499)}
                                style={{ cursor: isSectionClickable(499) ? 'pointer' : 'not-allowed' }} />

                            <path d="M232.69,773.69c-68.14,17.71-145.51,43.74-213.65,61.45-2.58-7.95-10.26-50.33-11.31-58.86,70.37-10.68,147.08-25.55,217.45-36.23,1.77,11,5.74,22.64,7.51,33.64Z"
                                className={getSectionClass(499)}
                                onClick={() => isSectionClickable(499) && handleBlockClick('BLOCK K - 2', 499)}
                                style={{ cursor: isSectionClickable(499) ? 'pointer' : 'not-allowed' }} />

                            <path d="M223.8,730.72c-68.94,14.32-148.38,22.35-217.32,36.67-2.18-8.07-4.47-46.22-5.1-54.79,70.81-7.18,148.04-8.4,218.85-15.58,1.22,11.07,2.35,22.63,3.57,33.7Z"
                                className={getSectionClass(499)}
                                onClick={() => isSectionClickable(499) && handleBlockClick('BLOCK K - 3', 499)}
                                style={{ cursor: isSectionClickable(499) ? 'pointer' : 'not-allowed' }} />

                            <path d="M218.84,688.26c-70.34,3.11-147.23,11.44-217.57,14.55-.86-8.32-1.05-46.84-.3-55.4,71.05,4.23,145.96,1.45,217.01,5.68-.56,11.12,1.42,24.04.86,35.16Z"
                                className={getSectionClass(499)}
                                onClick={() => isSectionClickable(499) && handleBlockClick('BLOCK K - 4', 499)}
                                style={{ cursor: isSectionClickable(499) ? 'pointer' : 'not-allowed' }} />

                            <path d="M217.57,644.81c-70.41.19-145.85-5.15-216.26-4.96-.52-8.34,3.86-46.9,4.96-55.42,70.81,7.17,143.63,18.07,214.44,25.24-1.02,11.09-2.11,24.05-3.14,35.14Z"
                                className={getSectionClass(499)}
                                onClick={() => isSectionClickable(499) && handleBlockClick('BLOCK K - 5', 499)}
                                style={{ cursor: isSectionClickable(499) ? 'pointer' : 'not-allowed' }} />

                            <path d="M221.67,601.71c-69.62-10.52-144.38-15.97-213.99-26.49.76-8.33,7.81-45.99,10.2-54.25,68.9,17.87,140.78,28.38,209.67,46.24-2.7,10.8-3.18,23.7-5.88,34.5Z"
                                className={getSectionClass(499)}
                                onClick={() => isSectionClickable(499) && handleBlockClick('BLOCK K - 6', 499)}
                                style={{ cursor: isSectionClickable(499) ? 'pointer' : 'not-allowed' }} />
                            <path d="M228.94,560.89c-68.56-16-140.34-32.97-208.91-48.97,1.42-8.24,13.47-44.45,16.51-52.49,67.26,23.26,134.68,43.49,201.94,66.75-3.55,10.56-5.99,24.16-9.54,34.71Z"
                                className={getSectionClass(499)}
                                onClick={() => isSectionClickable(499) && handleBlockClick('BLOCK K - 7', 499)}
                                style={{ cursor: isSectionClickable(499) ? 'pointer' : 'not-allowed' }} />
                            <path d="M240.92,518.13c-66.23-23.89-136.73-43.16-202.95-67.06,2.37-8.02,7.62-18.46,11.27-27.59,3.78-9.42,4.93-16.1,8.88-23.73,64.09,30.95,131.52,54.91,195.61,85.86-4.75,10.07-8.06,22.44-12.81,32.51Z"
                                className={getSectionClass(499)}
                                onClick={() => isSectionClickable(499) && handleBlockClick('BLOCK K - 8', 499)}
                                style={{ cursor: isSectionClickable(499) ? 'pointer' : 'not-allowed' }} />

                            <path d="M257.06,476.96c-64.6-28.01-130.58-57.6-195.18-85.6,2.87-7.85,17.18-35.79,21.61-43.16,62.02,34.92,126.17,63.95,188.19,98.87-5.38,9.75-9.25,20.14-14.62,29.89Z"
                                className={getSectionClass(499)}
                                onClick={() => isSectionClickable(499) && handleBlockClick('BLOCK K - 9', 499)}
                                style={{ cursor: isSectionClickable(499) ? 'pointer' : 'not-allowed' }} />
                        </g>


                        <g>
                            <path d="M1067.66,854.82c2.25-5.06,10.97-24.6,11.95-29.34,67.08,21.38,140.51,52.62,207.59,74-2.06,8.1-16.18,46.24-19.84,54.02-64.89-27.75-134.81-70.93-199.7-98.69Z"
                                className={getSectionClass(499)}
                                onClick={() => isSectionClickable(499) && handleBlockClick('BLOCK R - 1', 499)}
                                style={{ cursor: isSectionClickable(499) ? 'pointer' : 'not-allowed' }} />

                            <path d="M1046.96,890.61c3-4.66,13.67-23.84,15.37-28.37,63.03,31.38,138.59,67.47,201.61,98.85-3.28,7.69-21.68,44.57-26.48,51.69-59.89-37.34-130.61-84.83-190.5-122.18Z"
                                className={getSectionClass(499)}
                                onClick={() => isSectionClickable(499) && handleBlockClick('BLOCK R - 2', 499)}
                                style={{ cursor: isSectionClickable(499) ? 'pointer' : 'not-allowed' }} />


                            <path d="M1021.19,927.78c3.46-4.33,18.45-25.33,20.6-29.67,59.5,37.64,132.41,83.56,191.92,121.19-4.04,7.32-24.96,41.02-30.47,47.62-55.78-43.25-126.27-95.89-182.05-139.14Z"
                                className={getSectionClass(499)}
                                onClick={() => isSectionClickable(499) && handleBlockClick('BLOCK R - 3', 499)}
                                style={{ cursor: isSectionClickable(499) ? 'pointer' : 'not-allowed' }} />

                            <path d="M994.97,959.34c3.84-3.99,19.54-22.06,22.08-26.18,55.79,42.94,126.48,96.34,182.27,139.28-4.7,6.91-29.23,39.12-35.32,45.19-51.57-48.19-117.47-110.1-169.04-158.29Z"
                                className={getSectionClass(499)}
                                onClick={() => isSectionClickable(499) && handleBlockClick('BLOCK R - 4', 499)}
                                style={{ cursor: isSectionClickable(499) ? 'pointer' : 'not-allowed' }} />

                            <path d="M962.42,991.6c4.1-3.73,22.84-20.92,25.66-24.86,52.75,46.63,118.56,109.63,171.31,156.26-5.16,6.58-33.11,36.1-39.59,41.74-48.18-51.57-109.19-121.57-157.37-173.14Z"
                                className={getSectionClass(499)}
                                onClick={() => isSectionClickable(499) && handleBlockClick('Block R - 5', 499)}
                                style={{ cursor: isSectionClickable(499) ? 'pointer' : 'not-allowed' }} />
                        </g>
                    </g>

                    <g>
                        <g>
                            <polygon points="899.26 793.47 890.59 807.02 992.95 877.14 1007.28 852.5 899.26 793.47"
                                className={getSectionClass(1000)}
                                onClick={() => isSectionClickable(1000) && handleBlockClick('block M - 1', 1000)}
                                style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="887.18 813.99 875.54 828.92 972.57 905.62 988.09 883.54 887.18 813.99"
                                className={getSectionClass(1000)}
                                onClick={() => isSectionClickable(1000) && handleBlockClick('BLOCK M - 2', 1000)}
                                style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="870.8 834.42 858.34 848.07 947.02 935.63 965.29 914.75 870.8 834.42"
                                className={getSectionClass(1000)}
                                onClick={() => isSectionClickable(1000) && handleBlockClick('BLOCK M - 3', 1000)}
                                style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="851.82 854.57 838.28 868.03 919.75 961.71 938.65 943.38 851.82 854.57"
                                className={getSectionClass(1000)}
                                onClick={() => isSectionClickable(1000) && handleBlockClick('BLOCK M - 4', 1000)}
                                style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="834.18 870.12 819.16 882.09 890.8 983.49 910.99 969.15 834.18 870.12"
                                className={getSectionClass(1000)}
                                onClick={() => isSectionClickable(1000) && handleBlockClick('BLOCK M - 5', 1000)}
                                style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />
                        </g>

                        <g>


                            <polygon points="457.73 834.35 470.19 848 381.52 935.56 363.24 914.67 457.73 834.35"
                                className={getSectionClass(1000)}
                                onClick={() => isSectionClickable(1000) && handleBlockClick('BLOCK A - 3', 1000)}
                                style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="476.71 854.49 490.25 867.96 408.78 961.64 389.88 943.31 476.71 854.49"
                                className={getSectionClass(1000)}
                                onClick={() => isSectionClickable(1000) && handleBlockClick('BLOCK A - 2', 1000)}
                                style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />


                            <polygon points="441.35 813.92 452.99 828.85 355.96 905.55 340.44 883.47 441.35 813.92"
                                className={getSectionClass(1000)}
                                onClick={() => isSectionClickable(1000) && handleBlockClick('BLOCK A  - 4', 1000)}
                                style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="494.35 870.05 509.37 882.02 437.73 983.42 417.54 969.08 494.35 870.05"
                                className={getSectionClass(1000)}
                                onClick={() => isSectionClickable(1000) && handleBlockClick('BLOCK A - 1', 1000)}
                                style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="429.27 793.4 437.94 806.95 335.58 877.07 321.26 852.43 429.27 793.4"
                                className={getSectionClass(1000)}
                                onClick={() => isSectionClickable(1000) && handleBlockClick('BLOCK A - 5', 1000)}
                                style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />
                        </g>

                        <g>
                            <path d="M624.4,314.93l-7.68-45.74-20.84,3.48,9.24,63.83c12.56-2.19,27.15-3.94,43.4-4.47,16.39-.54,31.16.27,43.91,1.66l.13-18.64c-9.77-2.3-22.75-4.33-38.04-3.96-11.74.29-21.92,1.93-30.13,3.83Z"
                                className={getSectionClass(1000)}
                                onClick={() => isSectionClickable(1000) && handleBlockClick('BLOCK E - 1', 1000)}
                                style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="706.57 392.04 726.27 395.74 736.36 323.61 705.94 319.97 706.57 392.04"
                                className={getSectionClass(1000)}
                                onClick={() => isSectionClickable(1000) && handleBlockClick('BLOCK E - 2', 1000)}
                                style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />
                            <polygon points="730.25 397.43 753.99 403.91 776.94 334.22 745.02 326.75 730.25 397.43"
                                className={getSectionClass(1000)}
                                onClick={() => isSectionClickable(1000) && handleBlockClick('BLOCK E - 3', 1000)}
                                style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="759.6 406.52 782.38 415.82 813.57 349.41 782.79 338.14 759.6 406.52"
                                className={getSectionClass(1000)}
                                onClick={() => isSectionClickable(1000) && handleBlockClick('BLOCK E - 4', 1000)}
                                style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="786.93 418.07 808.49 429.94 847.12 367.55 817.84 352.81 786.93 418.07"
                                className={getSectionClass(1000)}
                                onClick={() => isSectionClickable(1000) && handleBlockClick('BLOCK E - 5', 1000)}
                                style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="814.6 435.03 834.91 448.92 879.38 390.55 851.65 373.06 814.6 435.03"
                                className={getSectionClass(1000)}
                                onClick={() => isSectionClickable(1000) && handleBlockClick('BLOCK E - 6', 1000)}
                                style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="836.82 457.27 849.02 468.02 936.31 378.87 916.39 360.63 836.82 457.27"
                                className={getSectionClass(1000)}
                                onClick={() => isSectionClickable(1000) && handleBlockClick('BLOCK E - 7', 1000)}
                                style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />
                        </g>

                        <g>
                            <polygon points="426 537.35 419.78 550.08 307.11 501.33 317.64 479.46 426 537.35"
                                className={getSectionClass(1000)}
                                onClick={() => isSectionClickable(1000) && handleBlockClick('BLOCK C - 1', 1000)}
                                style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="439.88 514.52 430.93 528.65 321.93 471.43 336.84 446.5 439.88 514.52"
                                className={getSectionClass(1000)}
                                onClick={() => isSectionClickable(1000) && handleBlockClick('bLOCK C - 2', 1000)}
                                style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />


                            <polygon points="456.19 492.69 445.17 506.93 341.96 438.76 359.55 414.55 456.19 492.69"
                                className={getSectionClass(1000)}
                                onClick={() => isSectionClickable(1000) && handleBlockClick('BLOCK C - 3', 1000)}
                                style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="474.05 473.2 461.33 487.06 364.86 408.47 385.18 385.88 474.05 473.2"
                                className={getSectionClass(1000)}
                                onClick={() => isSectionClickable(1000) && handleBlockClick('BLOCK C - 4', 1000)}
                                style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />


                            <polygon points="491.72 457.2 479.51 467.95 392.22 378.79 412.14 360.56 491.72 457.2"
                                className={getSectionClass(1000)}
                                onClick={() => isSectionClickable(1000) && handleBlockClick('BLOCK C - 5', 1000)}
                                style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />
                        </g>

                        <g>
                            <polygon points="515.92 439.33 501.08 449.78 421.72 351.93 443.38 336.85 515.92 439.33"
                                className={getSectionClass(1000)}
                                onClick={() => isSectionClickable(1000) && handleBlockClick('BLOCK D - 1', 1000)}
                                style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="536.5 427.1 520.37 436.47 451.46 330.94 475.46 315.89 536.5 427.1"
                                className={getSectionClass(1000)}
                                onClick={() => isSectionClickable(1000) && handleBlockClick('BLOCK D - 2', 1000)}
                                style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="561.72 415.4 544.43 423.02 482.68 312.33 510.65 298.59 561.72 415.4"
                                className={getSectionClass(1000)}
                                onClick={() => isSectionClickable(1000) && handleBlockClick('BLOCK D - 3', 1000)}
                                style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="584.32 407.16 566.57 413.49 518.82 294.63 546.1 285.23 584.32 407.16"
                                className={getSectionClass(1000)}
                                onClick={() => isSectionClickable(1000) && handleBlockClick('BLOCK D  - 4', 1000)}
                                style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />
                            <polygon transform='translate(38 -20) rotate(1)' points="584.32 407.16 566.57 413.49 518.82 294.63 546.1 285.23 584.32 407.16"
                                className={getSectionClass(1000)}
                                onClick={() => isSectionClickable(1000) && handleBlockClick('BLOCK D  - 5', 1000)}
                                style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />
                        </g>

                        <g>
                            <polygon points="854.48 473.27 867.2 487.13 963.67 408.54 943.36 385.95 854.48 473.27"
                                className={getSectionClass(1000)}
                                onClick={() => isSectionClickable(1000) && handleBlockClick('BLOCK F - 1', 1000)}
                                style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="872.34 492.76 883.36 507 986.57 438.83 968.98 414.62 872.34 492.76"
                                className={getSectionClass(1000)}
                                onClick={() => isSectionClickable(1000) && handleBlockClick('BLOCK F - 2', 1000)}
                                style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="888.65 514.59 897.6 528.72 1006.6 471.5 991.69 446.58 888.65 514.59"
                                className={getSectionClass(1000)}
                                onClick={() => isSectionClickable(1000) && handleBlockClick('BLOCK F - 3', 1000)}
                                style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="902.53 537.42 908.75 550.15 1021.42 501.41 1010.89 479.54 902.53 537.42"
                                className={getSectionClass(1000)}
                                onClick={() => isSectionClickable(1000) && handleBlockClick('BLOCK F - 4', 1000)}
                                style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />
                        </g>

                         <g>
                        <polygon points="416.72 768.21 423.5 781.75 315.11 840.68 304.06 815.52 416.72 768.21"
                            className={getSectionClass(1000)}
                            onClick={() => isSectionClickable(1000) && handleBlockClick('BLOCK B - 1', 1000)}
                            style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />

                        <polygon points="407.88 743.25 413.59 760.83 300.31 807.23 289.59 778 407.88 743.25"
                            className={getSectionClass(1000)}
                            onClick={() => isSectionClickable(1000) && handleBlockClick('BLOCK B - 2', 1000)}
                            style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />

                        <polygon points="400.74 716.32 404.82 734.55 287.53 769.56 281.35 743.97 400.74 716.32"
                            className={getSectionClass(1000)}
                            onClick={() => isSectionClickable(1000) && handleBlockClick('BLOCK B - 3', 1000)}
                            style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />

                        <polygon points="396.35 690.81 398.99 709.04 278.96 731.04 274.27 703.06 396.35 690.81"
                            className={getSectionClass(1000)}
                            onClick={() => isSectionClickable(1000) && handleBlockClick('BLOCK B - 4', 1000)}
                            style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />


                        <polygon points="330.44 665.78 339.12 688.25 274.27 693.56 273.08 664.42 330.44 665.78"
                            className={getSectionClass(1000)}
                            onClick={() => isSectionClickable(1000) && handleBlockClick('BLOCK B - 5', 1000)}
                            style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />

                        <polygon points="336.68 633.44 330.61 655.74 273.08 656.47 274.3 626.99 336.68 633.44"
                            className={getSectionClass(1000)}
                            onClick={() => isSectionClickable(1000) && handleBlockClick('BLOCK B - 6', 1000)}
                            style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />

                        <polygon points="399.22 613.85 397.55 629.53 276.26 616.56 278.92 590.44 399.22 613.85"
                            className={getSectionClass(1000)}
                            onClick={() => isSectionClickable(1000) && handleBlockClick('BLOCK B - 7', 1000)}
                            style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />

                        <polygon points="406.19 585.61 401.25 603.31 281.08 578.97 287.85 550.08 406.19 585.61"
                            className={getSectionClass(1000)}
                            onClick={() => isSectionClickable(1000) && handleBlockClick('BLOCK B - 8', 1000)}
                            style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />

                        <polygon points="414.67 562.4 408.99 578.97 291.18 543.59 301.94 514.52 414.67 562.4"
                            className={getSectionClass(1000)}
                            onClick={() => isSectionClickable(1000) && handleBlockClick('BLOCK B - 9', 1000)}
                            style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />

                    </g>

                    <g>
                        <polygon points="913.86 562.47 919.54 579.04 1037.35 543.66 1026.6 514.59 913.86 562.47"
                            className={getSectionClass(1000)}
                            onClick={() => isSectionClickable(1000) && handleBlockClick('BLOCK G - 1', 1000)}
                            style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />

                        <polygon points="922.35 585.68 927.28 603.39 1047.45 579.04 1040.68 550.15 922.35 585.68"
                            className={getSectionClass(1000)}
                            onClick={() => isSectionClickable(1000) && handleBlockClick('BLOCK G - 2', 1000)}
                            style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />
                        <polygon points="929.32 613.92 930.98 629.6 1052.27 616.63 1049.61 590.52 929.32 613.92"
                            className={getSectionClass(1000)}
                            onClick={() => isSectionClickable(1000) && handleBlockClick('BLOCK G - 3', 1000)}
                            style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />

                        <polygon points="991.86 633.51 997.92 655.81 1055.45 656.54 1054.23 627.06 991.86 633.51"
                            className={getSectionClass(1000)}
                            onClick={() => isSectionClickable(1000) && handleBlockClick('BLOCK G - 4', 1000)}
                            style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />

                        <polygon points="998.09 665.85 989.41 688.32 1054.26 693.63 1055.45 664.49 998.09 665.85"
                            className={getSectionClass(1000)}
                            onClick={() => isSectionClickable(1000) && handleBlockClick('BLOCK G - 5', 1000)}
                            style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />

                        <polygon points="932.18 690.88 929.55 709.11 1049.58 731.12 1054.26 703.13 932.18 690.88"
                            className={getSectionClass(1000)}
                            onClick={() => isSectionClickable(1000) && handleBlockClick('BLOCK G - 6', 1000)}
                            style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />

                        <polygon points="927.79 716.39 923.71 734.62 1041 769.63 1047.18 744.04 927.79 716.39"
                            className={getSectionClass(1000)}
                            onClick={() => isSectionClickable(1000) && handleBlockClick('BLOCK G - 7', 1000)}
                            style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />

                        <polygon points="920.65 743.33 914.94 760.9 1028.22 807.3 1038.94 778.07 920.65 743.33"
                            className={getSectionClass(1000)}
                            onClick={() => isSectionClickable(1000) && handleBlockClick('BLOCK G - 8', 1000)}
                            style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />

                        <polygon points="911.81 768.28 905.03 781.82 1013.42 840.75 1024.47 815.6 911.81 768.28"
                            className={getSectionClass(1000)}
                            onClick={() => isSectionClickable(1000) && handleBlockClick('BLOCK G - 9', 1000)}
                            style={{ cursor: isSectionClickable(1000) ? 'pointer' : 'not-allowed' }} />
                    </g>


                    </g>

                    <g>
                        <polygon points="808.61 888.42 794.2 896.89 842.01 982.84 861.41 971.9 808.61 888.42"
                            className={getSectionClass(2000)}
                            onClick={() => isSectionClickable(2000) && handleBlockClick('SOUTH PREMIUM EAST - 1', 2000)}
                            style={{ cursor: isSectionClickable(2000) ? 'pointer' : 'not-allowed' }} />


                    </g>

                    <g>

                        <g>

                            <polygon points="283.01 1146.68 248.04 1192.99 235.04 1181.56 269.49 1135.93 283.01 1146.68"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PREMIUM SUITES 4TH FLOOR - 401', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="302.36 1162.77 266.9 1209.74 253.68 1198.6 289.18 1151.59 302.36 1162.77"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PREMIUM SUITES 4TH FLOOR - 402', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="321.57 1177.02 287.27 1225.57 273.56 1215.09 307.73 1166.72 321.57 1177.02"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PREMIUM SUITES 4TH FLOOR - 403', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="340.62 1189.37 308.4 1240.33 294.18 1230.59 326.27 1179.81 340.62 1189.37"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PREMIUM SUITES 4TH FLOOR - 404', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="360.8 1203.72 329.22 1253.76 314.74 1244.43 346.45 1194.18 360.8 1203.72"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PREMIUM SUITES 4TH FLOOR - 405', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="381.23 1215.37 351.85 1266.81 336.98 1258.15 366.48 1206.5 381.23 1215.37"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PREMIUM SUITES 4TH FLOOR - 406', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="401.73 1225.95 374.28 1278.5 359.1 1270.42 386.66 1217.66 401.73 1225.95"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PREMIUM SUITES 4TH FLOOR - 407', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="422.33 1235.86 397.33 1289.68 381.8 1282.35 406.9 1228.3 422.33 1235.86"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PREMIUM SUITES 4TH FLOOR - 408', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="443.49 1245.01 420.93 1298.81 404.71 1292.34 427.98 1237.61 443.49 1245.01"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PREMIUM SUITES 4TH FLOOR - 409', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="466.29 1252.62 445.04 1308.12 429.04 1301.92 450.38 1246.2 466.29 1252.62"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PREMIUM SUITES 4TH FLOOR - 410', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="486.64 1259.1 469.3 1316.01 452.91 1311 470.32 1253.86 486.64 1259.1"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PREMIUM SUITES 4TH FLOOR - 411', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="508.75 1265.36 492.59 1322.63 476.1 1317.98 492.33 1260.47 508.75 1265.36"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PREMIUM SUITES 4TH FLOOR - 412', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="530.57 1270.54 516.91 1328.5 500.23 1324.61 513.95 1266.42 530.57 1270.54"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PREMIUM SUITES 4TH FLOOR - 413', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="552.79 1275.47 540.69 1333.79 523.91 1330.37 536.07 1271.81 552.79 1275.47"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PREMIUM SUITES 4TH FLOOR - 414', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="573.94 1278.49 565.04 1337.41 548.1 1334.97 557.04 1275.8 573.94 1278.49"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PREMIUM SUITES 4TH FLOOR - 415', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="596.96 1281.83 589.09 1340.9 572.12 1338.77 580.02 1279.45 596.96 1281.83"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PREMIUM SUITES 4TH FLOOR - 416', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="619.89 1284.04 613.91 1343.35 596.88 1341.79 602.88 1282.24 619.89 1284.04"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PREMIUM SUITES 4TH FLOOR - 417', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="641.95 1285.05 638.58 1344.57 621.5 1343.8 624.88 1284.03 641.95 1285.05"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PREMIUM SUITES 4TH FLOOR - 418', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="664.72 1285.5 663.34 1345.1 646.25 1344.93 647.63 1285.08 664.72 1285.5"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PREMIUM SUITES 4TH FLOOR - 419', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="687.68 1285.16 687.68 1344.78 670.58 1345.03 670.58 1285.16 687.68 1285.16"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PREMIUM SUITES 4TH FLOOR - 420', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="709.71 1284.01 711.19 1343.62 694.11 1344.31 692.61 1284.46 709.71 1284.01"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PREMIUM SUITES 4TH FLOOR - 421', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="732.94 1282.3 735.7 1341.86 718.63 1342.93 715.86 1283.13 732.94 1282.3"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PREMIUM SUITES 4TH FLOOR - 422', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="754.31 1279.55 759.75 1338.91 742.75 1340.8 737.29 1281.19 754.31 1279.55"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PREMIUM SUITES 4TH FLOOR - 423', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="776.83 1275.84 784.64 1334.92 767.73 1337.52 759.89 1278.2 776.83 1275.84"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PREMIUM SUITES 4TH FLOOR - 424', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="799.01 1271.59 808.6 1330.39 791.78 1333.53 782.15 1274.49 799.01 1271.59"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PREMIUM SUITES 4TH FLOOR - 425', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="820.66 1266.31 833.36 1324.5 816.73 1328.57 803.98 1270.15 820.66 1266.31"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PREMIUM SUITES 4TH FLOOR - 426', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="843.1 1260.09 857.78 1317.78 841.3 1322.46 826.56 1264.53 843.1 1260.09"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PREMIUM SUITES 4TH FLOOR - 427', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="864.87 1253.12 881.51 1310.25 865.2 1315.51 848.49 1258.15 864.87 1253.12"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PREMIUM SUITES 4TH FLOOR - 428', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="885.59 1245.54 904.51 1301.91 888.42 1307.86 869.42 1251.25 885.59 1245.54"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PREMIUM SUITES 4TH FLOOR - 49', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="905.33 1237.45 926.42 1293.01 910.57 1299.61 889.4 1243.82 905.33 1237.45"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PREMIUM SUITES 4TH FLOOR - 430', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="927.79 1227 950.91 1281.69 935.32 1288.91 912.11 1233.98 927.79 1227"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PREMIUM SUITES 4TH FLOOR - 431', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="948.14 1216.81 973.52 1270.45 958.25 1278.34 932.77 1224.48 948.14 1216.81"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PREMIUM SUITES 4TH FLOOR - 432', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="967.48 1205.38 995.27 1257.74 980.37 1266.35 952.47 1213.78 967.48 1205.38"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PREMIUM SUITES 4TH FLOOR - 433', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="986.87 1193.72 1017.35 1244.47 1002.92 1253.89 972.32 1202.93 986.87 1193.72"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PREMIUM SUITES 4TH FLOOR - 434', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="1005.98 1180.62 1038.02 1230.36 1023.89 1240.24 991.72 1190.3 1005.98 1180.62"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PREMIUM SUITES 4TH FLOOR - 435', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="1025.15 1166.15 1059.4 1214.32 1045.73 1224.86 1011.34 1176.5 1025.15 1166.15"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PREMIUM SUITES 4TH FLOOR - 436', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="1043.2 1150.95 1079.92 1197.15 1066.82 1208.43 1029.95 1162.05 1043.2 1150.95"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PREMIUM SUITES 4TH FLOOR - 437', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="1060.71 1134.74 1099.23 1179.38 1086.59 1191.2 1047.91 1146.38 1060.71 1134.74"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PREMIUM SUITES 4TH FLOOR - 438', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                        </g>

                        <g>
                            <polygon points="333.56 1084.05 296.86 1125.32 283.44 1114.99 319.6 1074.32 333.56 1084.05"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PRESIDENTIAL  SUITES 4TH FLOOR - 301', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="351.66 1095.67 316.38 1138.82 302.28 1129.23 337.6 1086.04 351.66 1095.67"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PRESIDENTIAL  SUITES 4TH FLOOR - 302', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="369.48 1106.54 334.62 1150.56 320.2 1141.36 354.94 1097.51 369.48 1106.54"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PRESIDENTIAL  SUITES 4TH FLOOR - 303', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="388.91 1117.51 355.96 1163.49 341.09 1154.89 373.91 1109.07 388.91 1117.51"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PRESIDENTIAL  SUITES 4TH FLOOR - 304', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="408.37 1127.83 376.29 1174.29 361.25 1165.91 393.22 1119.62 408.37 1127.83"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PRESIDENTIAL  SUITES 4TH FLOOR - 305', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="426.92 1136.69 396.24 1183.89 380.95 1175.87 411.52 1128.84 426.92 1136.69"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PRESIDENTIAL  SUITES 4TH FLOOR - 306', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="446.81 1145.6 417.56 1193.51 402.04 1185.85 431.19 1138.11 446.81 1145.6"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PRESIDENTIAL  SUITES 4TH FLOOR - 307', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="467.24 1153.72 438.98 1202.1 423.31 1194.69 451.46 1146.49 467.24 1153.72"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PRESIDENTIAL  SUITES 4TH FLOOR - 308', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="486.36 1160.1 461.81 1210.04 445.61 1203.58 470.07 1153.82 486.36 1160.1"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PRESIDENTIAL  SUITES 4TH FLOOR - 309', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="505.28 1165.3 486.16 1217.06 469.35 1211.98 488.39 1160.4 505.28 1165.3"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PRESIDENTIAL  SUITES 4TH FLOOR - 310', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="525.6 1170.81 507.24 1222.79 490.36 1217.9 508.65 1166.11 525.6 1170.81"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PRESIDENTIAL  SUITES 4TH FLOOR - 311', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="546.64 1175.8 529.51 1228.11 512.52 1223.53 529.58 1171.41 546.64 1175.8"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PRESIDENTIAL  SUITES 4TH FLOOR - 312', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="566.99 1179.09 553.51 1232.23 536.22 1228.58 549.66 1175.64 566.99 1179.09"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PRESIDENTIAL  SUITES 4TH FLOOR - 313', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="587.42 1182.52 575.63 1235.98 558.24 1232.77 569.99 1179.51 587.42 1182.52"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PRESIDENTIAL  SUITES 4TH FLOOR - 314', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="608.04 1184.49 600.77 1238.57 583.16 1236.52 590.4 1182.63 608.04 1184.49"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PRESIDENTIAL  SUITES 4TH FLOOR - 315', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="629.65 1186.42 623.21 1240.59 605.57 1238.74 611.99 1184.77 629.65 1186.42"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PRESIDENTIAL  SUITES 4TH FLOOR - 316', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="649.49 1187.57 646.58 1241.98 628.85 1241.03 631.74 1186.83 649.49 1187.57"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PRESIDENTIAL  SUITES 4TH FLOOR - 317', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="693.86 1186.91 696.77 1241.31 714.5 1240.37 711.61 1186.16 693.86 1186.91"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PRESIDENTIAL  SUITES 4TH FLOOR - 318', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="713.69 1185.76 720.13 1239.92 737.78 1238.08 731.36 1184.11 713.69 1185.76"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PRESIDENTIAL  SUITES 4TH FLOOR - 319', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="735.31 1183.82 742.57 1237.91 760.19 1235.85 752.95 1181.96 735.31 1183.82"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PRESIDENTIAL  SUITES 4TH FLOOR - 320', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="755.93 1181.86 767.72 1235.31 785.11 1232.1 773.36 1178.84 755.93 1181.86"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PRESIDENTIAL  SUITES 4TH FLOOR - 321', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="776.36 1178.42 789.84 1231.56 807.13 1227.92 793.69 1174.97 776.36 1178.42"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PRESIDENTIAL  SUITES 4TH FLOOR - 322', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="796.71 1175.13 813.83 1227.44 830.83 1222.87 813.77 1170.75 796.71 1175.13"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PRESIDENTIAL  SUITES 4TH FLOOR - 323', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="817.75 1170.15 836.11 1222.13 852.99 1217.24 834.7 1165.45 817.75 1170.15"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PRESIDENTIAL  SUITES 4TH FLOOR - 324', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="838.07 1164.63 857.19 1216.4 874 1211.32 854.95 1159.74 838.07 1164.63"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PRESIDENTIAL  SUITES 4TH FLOOR - 325', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="856.99 1159.44 881.54 1209.38 897.74 1202.91 873.28 1153.16 856.99 1159.44"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PRESIDENTIAL  SUITES 4TH FLOOR - 326', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="876.11 1153.06 904.37 1201.43 920.04 1194.02 891.89 1145.83 876.11 1153.06"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PRESIDENTIAL  SUITES 4TH FLOOR - 327', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="896.53 1144.94 925.79 1192.84 941.31 1185.18 912.16 1137.45 896.53 1144.94"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PRESIDENTIAL  SUITES 4TH FLOOR - 328', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="916.43 1136.03 947.11 1183.23 962.39 1175.2 931.82 1128.17 916.43 1136.03"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PRESIDENTIAL  SUITES 4TH FLOOR - 329', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="934.98 1127.16 967.06 1173.63 982.1 1165.25 950.13 1118.95 934.98 1127.16"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PRESIDENTIAL  SUITES 4TH FLOOR - 330', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="954.44 1116.84 987.38 1162.83 1002.26 1154.23 969.43 1108.41 954.44 1116.84"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PRESIDENTIAL  SUITES 4TH FLOOR - 331', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="973.87 1105.88 1008.73 1149.9 1023.14 1140.7 988.41 1096.84 973.87 1105.88"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PRESIDENTIAL  SUITES 4TH FLOOR - 332', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="991.68 1095 1026.97 1138.15 1041.06 1128.57 1005.75 1085.37 991.68 1095"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PRESIDENTIAL  SUITES 4TH FLOOR - 333', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="1009.79 1083.39 1046.49 1124.66 1059.91 1114.32 1023.74 1073.65 1009.79 1083.39"
                                className={getSectionClass(15000)}
                                onClick={() => isSectionClickable(15000) && handleBlockClick('PRESIDENTIAL  SUITES 4TH FLOOR - 334', 15000)}
                                style={{ cursor: isSectionClickable(15000) ? 'pointer' : 'not-allowed' }} />

                            <polygon points="691.16 1187.88 691.16 1242.35 652.75 1242.15 652.75 1187.88 691.16 1187.88"
                                className='st9' />
                        </g>

                    </g>


                    <g>
                        <polygon points="399.91 1065.16 350.59 1026.63 370.89 996.67 420.21 1035.19 399.91 1065.16"
                            className={getSectionClass(18000)}
                            onClick={() => isSectionClickable(18000) && handleBlockClick('SOUTH PREMIUM CORPORATE BOX - 1', 18000)}
                            style={{ cursor: isSectionClickable(18000) ? 'pointer' : 'not-allowed' }} />

                        <polygon points="461.44 1102.35 407.65 1071.48 425.67 1039.77 475.28 1067.29 461.44 1102.35"
                            className={getSectionClass(6000)}
                            onClick={() => isSectionClickable(6000) && handleBlockClick('BAY 8', 6000)}
                            style={{ cursor: isSectionClickable(6000) ? 'pointer' : 'not-allowed' }} />

                        <polygon points="525.35 1126.29 470.36 1105.53 481.81 1070.57 536.8 1091.33 525.35 1126.29"
                            className={getSectionClass(6000)}
                            onClick={() => isSectionClickable(6000) && handleBlockClick('BAY 7', 6000)}
                            style={{ cursor: isSectionClickable(6000) ? 'pointer' : 'not-allowed' }} />

                        <polygon points="592.94 1142.62 533.56 1129.43 543.5 1093.64 597.17 1106.71 592.94 1142.62"
                            className={getSectionClass(6000)}
                            onClick={() => isSectionClickable(6000) && handleBlockClick('BAY 6', 6000)}
                            style={{ cursor: isSectionClickable(6000) ? 'pointer' : 'not-allowed' }} />

                        <polygon points="660.28 1148.2 600.31 1143.83 604.79 1108.17 659.97 1110.61 660.28 1148.2"
                            className={getSectionClass(6000)}
                            onClick={() => isSectionClickable(6000) && handleBlockClick('BAY 5', 6000)}
                            style={{ cursor: isSectionClickable(6000) ? 'pointer' : 'not-allowed' }} />

                        <polygon points="726.89 1144.31 666.14 1148.04 667.5 1110.82 722.64 1107.53 726.89 1144.31"
                            className={getSectionClass(6000)}
                            onClick={() => isSectionClickable(6000) && handleBlockClick('BAY 4', 6000)}
                            style={{ cursor: isSectionClickable(6000) ? 'pointer' : 'not-allowed' }} />

                        <polygon points="927.8 1065.95 976.36 1026.59 956.45 999.42 910.36 1035.94 927.8 1065.95"
                            className={getSectionClass(18000)}
                            onClick={() => isSectionClickable(18000) && handleBlockClick('SOUTH PREMIUM CORPORATE BOX - 2', 18000)}
                            style={{ cursor: isSectionClickable(18000) ? 'pointer' : 'not-allowed' }} />

                        <polygon points="868.27 1101.06 919.44 1071.08 902.92 1038.55 851.75 1068.54 868.27 1101.06"
                            className={getSectionClass(6000)}
                            onClick={() => isSectionClickable(6000) && handleBlockClick('BAY 1', 6000)}
                            style={{ cursor: isSectionClickable(6000) ? 'pointer' : 'not-allowed' }} />

                        <polygon points="802.32 1126.88 859.35 1104.76 844.77 1070.86 793.38 1091.98 802.32 1126.88"
                            className={getSectionClass(6000)}
                            onClick={() => isSectionClickable(6000) && handleBlockClick('BAY 2', 6000)}
                            style={{ cursor: isSectionClickable(6000) ? 'pointer' : 'not-allowed' }} />

                        <polygon points="736.06 1142.51 794.72 1129.18 784 1095.09 730.26 1108.77 736.06 1142.51"
                            className={getSectionClass(6000)}
                            onClick={() => isSectionClickable(6000) && handleBlockClick('BAY 3', 600)}
                            style={{ cursor: isSectionClickable(6000) ? 'pointer' : 'not-allowed' }} />

                    </g>
                    <g>
                        <circle className='st9' cx="664.39" cy="660.71" r="257.95" />
                        <rect className='st10' x="652.65" y="604.51" width="26.89" height="113.29" />

                    </g>
                </svg>
            </div>

        </div>
    )
}

export default NarendraModiStadium