import React, { useEffect,useState } from 'react'
import '../../styles/SVG.css'

function SuratSeatMap({ onBlockClick, setPrice, filterBy }) {
    const [zoom, setZoom] = useState(2)
    useEffect(() => {
        const price = [749, 799, 1499, 2499, 3999, 9999];
        setPrice(price);
    }, [setPrice])

    const handleClick = (blockName, price) => {
        onBlockClick(blockName, price);
    };

    const getSectionClass = (price) => {
        if (!filterBy || filterBy === price) {
            return price === 749 ? "cls-2" :
                price === 799 ? "cls-3" :
                    price === 1499 ? "cls-4" :
                        price === 2499 ? "cls-6" :
                            price === 3999 ? "cls-1" :
                                price === 9999 ? "cls-7" : "";
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
        <div className='svg-wrapper' style={{ padding: "50px 250px 150px 250px" }}>
              <div className="zoom-controls">
                <span className="material-symbols-outlined" onClick={handleZoomOut}>zoom_out</span>
                <p className="zoom-level">{Math.round(zoom * 50)}%</p>
                <span className="material-symbols-outlined" onClick={handleZoomIn}>zoom_in</span>
            </div>

            <div style={{ transform: `scale(${zoom})`, transformOrigin: 'center center', transition: 'transform 0.3s ease' }}>
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1616 1650">

                <g>
                    <rect className={getSectionClass(9999)}
                        x="159.94" y="256.88" width="139.44" height="320.13" rx="10.5" ry="10.5" transform="translate(-129.07 104.06) rotate(-20.06)"
                        onClick={() => isSectionClickable(9999) && handleClick('FANPIT', 9999)}
                        style={{ cursor: isSectionClickable(9999) ? 'pointer' : 'not-allowed' }} />
                    <text className="txt4" transform="translate(210 410) rotate(72)">VIP</text>
                </g>
                <g>
                    <rect className={getSectionClass(749)}
                        x="367.5" y="1478.5" width="848" height="171" rx="10.5" ry="10.5"
                        onClick={() => isSectionClickable(749) && handleClick('FANPIT', 749)}
                        style={{ cursor: isSectionClickable(749) ? 'pointer' : 'not-allowed' }} />
                    <text className="txt4" transform="translate(725 1575) rotate(0)">GENERAL</text>
                </g>
                <g>
                    <rect className={getSectionClass(799)}
                        x="367.5" y="1231.5" width="848" height="228" rx="10.5" ry="10.5"
                        onClick={() => isSectionClickable(799) && handleClick('FANPIT', 799)}
                        style={{ cursor: isSectionClickable(799) ? 'pointer' : 'not-allowed' }} />
                    <text className="txt4" transform="translate(725 1360) rotate(0)">BRONZE</text>
                </g>
                <g>
                    <rect className={getSectionClass(1499)}
                        x="367.5" y="983.5" width="848" height="227" rx="10.5" ry="10.5"
                        onClick={() => isSectionClickable(1499) && handleClick('FANPIT', 1499)}
                        style={{ cursor: isSectionClickable(1499) ? 'pointer' : 'not-allowed' }} />
                    <text className="txt4" transform="translate(725 1110) rotate(0)">FANPIT 3</text>
                </g>

                <g>
                    <rect className={getSectionClass(2499)}
                        x="367.5" y="695.5" width="848" height="267" rx="10.5" ry="10.5"
                        onClick={() => isSectionClickable(2499) && handleClick('FANPIT', 2499)}
                        style={{ cursor: isSectionClickable(2499) ? 'pointer' : 'not-allowed' }} />
                    <text className="txt4" transform="translate(725 840) rotate(0)">FANPIT 2</text>
                </g>
                <g>
                    <path className={getSectionClass(3999)}
                        d="M727,636.5h-40c-5.8,0-10.5-4.7-10.5-10.5v-117c0-5.8,4.7-10.5,10.5-10.5h40c5.8,0,10.5-4.7,10.5-10.5v-190c0-5.8-4.7-10.5-10.5-10.5h-40c-5.8,0-10.5-4.7-10.5-10.5v-92c0-5.8,4.7-10.5,10.5-10.5h40c5.8,0,10.5-4.7,10.5-10.5h0c0-5.8-4.7-10.5-10.5-10.5h-349c-5.8,0-10.5,4.7-10.5,10.5v500c0,5.8,4.7,10.5,10.5,10.5h349c5.8,0,10.5-4.7,10.5-10.5v-17c0-5.8-4.7-10.5-10.5-10.5Z"
                        onClick={() => isSectionClickable(3999) && handleClick('FANPIT', 3999)}
                        style={{ cursor: isSectionClickable(3999) ? 'pointer' : 'not-allowed' }} />
                    <path className={getSectionClass(3999)}
                        d="M845.5,164h0c0,5.8,4.7,10.5,10.5,10.5h41c5.8,0,10.5,4.7,10.5,10.5v92c0,5.8-4.7,10.5-10.5,10.5h-41c-5.8,0-10.5,4.7-10.5,10.5v190c0,5.8,4.7,10.5,10.5,10.5h41c5.8,0,10.5,4.7,10.5,10.5v117c0,5.8-4.7,10.5-10.5,10.5h-41c-5.8,0-10.5,4.7-10.5,10.5v17c0,5.8,4.7,10.5,10.5,10.5h352c5.8,0,10.5-4.7,10.5-10.5V164c0-5.8-4.7-10.5-10.5-10.5h-352c-5.8,0-10.5,4.7-10.5,10.5Z"
                        onClick={() => isSectionClickable(3999) && handleClick('FANPIT', 3999)}
                        style={{ cursor: isSectionClickable(3999) ? 'pointer' : 'not-allowed' }} />
                    <text className="txt4" transform="translate(495 425) rotate(0)">FANPIT 1</text>
                    <text className="txt4" transform="translate(950 425) rotate(0)">FANPIT 1</text>
                </g>
                <g>
                    <path class="cls-8" d="M1038.5,126V11c0-5.8-4.7-10.5-10.5-10.5h-474c-5.8,0-10.5,4.7-10.5,10.5v115c0,5.8,4.7,10.5,10.5,10.5h192c5.8,0,10.5,4.7,10.5,10.5v38c0,5.8-4.7,10.5-10.5,10.5h-40c-5.8,0-10.5,4.7-10.5,10.5v51c0,5.8,4.7,10.5,10.5,10.5h40c5.8,0,10.5,4.7,10.5,10.5v232c0,5.8-4.7,10.5-10.5,10.5h-40c-5.8,0-10.5,4.7-10.5,10.5v74c0,5.8,4.7,10.5,10.5,10.5h40c5.8,0,10.5,4.7,10.5,10.5v44c0,5.8,4.7,10.5,10.5,10.5h49c5.8,0,10.5-4.7,10.5-10.5v-44c0-5.8,4.7-10.5,10.5-10.5h40c5.8,0,10.5-4.7,10.5-10.5v-74c0-5.8-4.7-10.5-10.5-10.5h-40c-5.8,0-10.5-4.7-10.5-10.5v-232c0-5.8,4.7-10.5,10.5-10.5h40c5.8,0,10.5-4.7,10.5-10.5v-51c0-5.8-4.7-10.5-10.5-10.5h-40c-5.8,0-10.5-4.7-10.5-10.5v-38c0-5.8,4.7-10.5,10.5-10.5h191c5.8,0,10.5-4.7,10.5-10.5Z" />
                    <text className="txt4" transform="translate(745 90) rotate(0)">STAGE</text>
                </g>
            </svg>
            </div>
        </div>
    )
}

export default SuratSeatMap