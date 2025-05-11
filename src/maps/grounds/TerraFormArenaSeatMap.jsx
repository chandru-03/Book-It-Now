import React, { useEffect, useState } from 'react'
import '../../styles/SVG.css'
function TerraFormArenaSeatMap({ onBlockClick, setPrice, filterBy }) {
  const [zoom, setZoom] = useState(2)
  useEffect(() => {
    const price = [899, 1999, 5999, 11999, 9999];
    setPrice(price);
  }, [setPrice])

  const handleClick = (blockName, price) => {
    onBlockClick(blockName, price);
  };

  const getSectionClass = (price) => {
    if (!filterBy || filterBy === price) {
      return price === 899 ? "tst5" :
        price === 1999 ? "tst4" :
          price === 5999 ? "tst3" :
            price === 11999 ? "tst2" :
              price === 9999 ? "tst1" : "";
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
            <path className={getSectionClass(9999)}
              d="M1547.5,387.99v166.51c0,11.04-8.95,19.99-19.99,19.99h-79.01c-11.04,0-19.99-8.95-19.99-19.99v-166.51c0-11.04-8.95-19.99-19.99-19.99h-707.01c-11.04,0-19.99,8.95-19.99,19.99v268.51c0,11.04,8.95,19.99,19.99,19.99h1577.01c11.04,0,19.99-8.95,19.99-19.99v-268.51c0-11.04-8.95-19.99-19.99-19.99h-711.01c-11.04,0-19.99,8.95-19.99,19.99Z"
              onClick={() => isSectionClickable(9999) && handleClick('FANPIT', 9999)}
              style={{ cursor: isSectionClickable(9999) ? 'pointer' : 'not-allowed' }} />

            <text className="txt4" transform="translate(1000 530) rotate(0)">FANPIT</text>
            <text className="txt4" transform="translate(1850 530) rotate(0)">FANPIT</text>
          </g>

          <g>
            <rect className={getSectionClass(11999)}
              x="683.5" y="708.5" width="284" height="160" rx="19.99" ry="19.99"
              onClick={() => isSectionClickable(11999) && handleClick('MIP : Phase 1', 11999)}
              style={{ cursor: isSectionClickable(11999) ? 'pointer' : 'not-allowed' }} />

            <rect className={getSectionClass(11999)} x="2019.5" y="704.5" width="279" height="164" rx="19.99" ry="19.99"
              onClick={() => isSectionClickable(11999) && handleClick('MIP : Phase 2', 11999)}
              style={{ cursor: isSectionClickable(11999) ? 'pointer' : 'not-allowed' }} />

            <text className="txt4" transform="translate(800 800) rotate(0)">MIP</text>
            <text className="txt4" transform="translate(2130 800) rotate(0)">MIP</text>
          </g>

          <g>
            <path className={getSectionClass(5999)}
              d="M1968.51,708.5h-953.01c-11.04,0-19.99,8.95-19.99,19.99v154.01c0,11.04-8.95,19.99-19.99,19.99h-272.01c-11.04,0-19.99,8.95-19.99,19.99v67.01c0,11.04,8.95,19.99,19.99,19.99h1579.01c11.04,0,19.99-8.95,19.99-19.99v-67.01c0-11.04-8.95-19.99-19.99-19.99h-274.01c-11.04,0-19.99-8.95-19.99-19.99v-154.01c0-11.04-8.95-19.99-19.99-19.99Z"
              onClick={() => isSectionClickable(5999) && handleClick('Platinum', 5999)}
              style={{ cursor: isSectionClickable(5999) ? 'pointer' : 'not-allowed' }} />

            <text className="txt4" transform="translate(1395 880) rotate(0)">PLATINUM</text>
          </g>

          <g>
            <rect className={getSectionClass(1999)}
              x="683.5" y="1041.5" width="1615" height="260" rx="19.99" ry="19.99"
              onClick={() => isSectionClickable(1999) && handleClick('GOLD', 1999)}
              style={{ cursor: isSectionClickable(1999) ? 'pointer' : 'not-allowed' }} />

            <text className="txt4" transform="translate(1420 1190) rotate(0)">GOLD</text>

          </g>

          <g>
            <rect className={getSectionClass(899)}
              x="683.5" y="1337.5" width="1619" height="393" rx="19.99" ry="19.99"
              onClick={() => isSectionClickable(899) && handleClick('SILVER', 899)}
              style={{ cursor: isSectionClickable(899) ? 'pointer' : 'not-allowed' }} />

            <text className="txt4" transform="translate(1420 1550) rotate(0)">SILVER</text>
          </g>

          <g>
            <path class=" tst0" d="M1807.51,120.5h-632.01c-11.04,0-19.99,8.95-19.99,19.99v181.01c0,11.04,8.95,19.99,19.99,19.99h264.01c11.04,0,19.99,8.95,19.99,19.99v164.01c0,11.04,8.95,19.99,19.99,19.99h23.01c11.04,0,19.99-8.95,19.99-19.99v-164.01c0-11.04,8.95-19.99,19.99-19.99h265.01c11.04,0,19.99-8.95,19.99-19.99v-181.01c0-11.04-8.95-19.99-19.99-19.99Z" />
            <text className="txt4" transform="translate(1420 240) rotate(0)">STAGE</text>
          </g>
        </svg>
      </div>
    </div>
  )
}

export default TerraFormArenaSeatMap