import React from 'react'
import '../../styles/EventViewer.css'

function EventGuide({ item, close }) {
    return (
        <div>
            <div className="event-guide-wrapper">
                <div className="event-guide-header">
                    <h3>Event Guide</h3>
                    <i class="fa fa-close fa-xl" aria-hidden="true" onClick={close}></i>
                </div>
                <span className='hr-line' style={{ width: "100%", height: '1px', background: '#bcbcbc', margin: '0', padding: '0' }} />
                <div className="event-guides">
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
                    {item.entry ?
                    <div class="box-wrapper">
                        <div class="icon">
                            <span class="material-symbols-outlined">
                                info
                            </span>
                        </div>
                        <div class="text">
                            <small>Entry Allowed For</small>
                            <strong>{item?.entry}</strong>
                        </div>
                    </div>
                    : ''}
                    {item.layout ?
                    <div class="box-wrapper">
                        <div class="icon">
                            <span class="material-symbols-outlined">
                                stack_group
                            </span>
                        </div>
                        <div class="text">
                            <small>Layout</small>
                            <strong>{item?.layout}</strong>
                        </div>
                    </div>
                    : ''}
                    {item.seatings ?
                    <div class="box-wrapper">
                        <div class="icon">
                            <span class="material-symbols-outlined">
                                chair
                            </span>
                        </div>
                        <div class="text">
                            <small>Seating Arrangements</small>
                            <strong>{item?.seatings}</strong>
                        </div>
                    </div>
                    : ''}
                    {item.kids ?
                    <div class="box-wrapper">
                        <div class="icon">
                            <span class="material-symbols-outlined">
                                child_care
                            </span>
                        </div>
                        <div class="text">
                            <small>Kids Allowed?</small>
                            <strong>{item?.kids}</strong>
                        </div>
                    </div>
                    : ''}
                    {item.pets ?
                    <div class="box-wrapper">
                        <div class="icon">
                            <span class="material-symbols-outlined">
                                pets
                            </span>
                        </div>
                        <div class="text">
                            <small>Pets Allowed?</small>
                            <strong>{item?.pets}</strong>
                        </div>
                    </div>
                    : ''}
                </div>
            </div>
        </div>
    )
}

export default EventGuide