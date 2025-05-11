import React from 'react'
import Buttons from './Buttons'
import '../../../styles/EventBlocks.css'

function FilterBy({ price,setFilterBy,filterBy }) { 
    
    
    return (
        <div>
            <div className='event-block-filters'>
                <span className="material-symbols-outlined" style={{ color: '#d3d3d3', marginBottom: '6px' }}>
                    filter_list
                </span><p>Filters stands By</p>
                {price?.map((price, index) => (
                    <Buttons
                        key={index}
                        buttonSize={'btns--small'}
                        buttonStyle={`${filterBy === price ? 'btns--outline--bg' : 'btns--outline'}`}
                        type={'button'}
                        onClick={() => setFilterBy(price)}>
                        ₹ {price}
                    </Buttons>))}
                    <Buttons
                        buttonSize={'btns--small'}
                        buttonStyle={`${filterBy === price ? 'btns--outline--bg' : 'btns--outline'}`}
                        type={'button'}
                        onClick={() => setFilterBy()}>
                        Clear
                    </Buttons>

            </div>
        </div>
    )
}

export default FilterBy