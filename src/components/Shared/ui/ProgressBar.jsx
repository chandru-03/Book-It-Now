import React, { useEffect } from 'react'
import '../../../styles/ProgressBar.css'

function ProgressBar({ message, navigateTo,style,timeOut }) {

    useEffect(() => {
        const timer = setTimeout(() => {
            navigateTo();
        }, (timeOut || 3000));

        return () => clearTimeout(timer);
    }, [navigateTo]);

    return (
        <div>
            <div className='spinner-container' style={style}>
                <div className="spinner"></div>
                <p>{message}</p>
            </div> 
        </div>
    )
}

export default ProgressBar
