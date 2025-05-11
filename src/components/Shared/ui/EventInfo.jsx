import React from 'react'
import '../../../styles/EventViewer.css';

function EventInfo({ item }) {
    return (
        <div style={{ display: 'flex', justifyContent: 'flex-start', width: '95%' }}>
            <div className="event-guide">
                {item.language ? 
                <div class="box-wrapper">
                    <div class="icon">
                        <span class="material-symbols-outlined">
                            translate
                        </span>
                    </div>
                    <div class="text">
                        <small>Language</small>
                        <strong>{item?.language}</strong>
                    </div>
                </div>
                : ''}
                {item.duration ?
                <div class="box-wrapper">
                    <div class="icon">
                        <span class="material-symbols-outlined">
                            schedule
                        </span>
                    </div>
                    <div class="text">
                        <small>Duration</small>
                        <strong>{item?.duration} Hours</strong>
                    </div>
                </div>
                : ''}
                {item.age ?
                <div class="box-wrapper">
                    <div class="icon">
                        <span class="material-symbols-outlined">
                            confirmation_number
                        </span>
                    </div>
                    <div class="text">
                        <small>Tickets Needed For</small>
                        <strong>{item?.age} yrs and above</strong>
                    </div>
                </div>
                : ''}
            </div>
        </div>
    )
}

export default EventInfo