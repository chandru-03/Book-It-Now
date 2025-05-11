import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CountDown({ countdownTime = 6, fontSize = "20px",color = "white" }) {
    const [timer, setTimer] = useState("00:00");
    const [showAlert, setShowAlert] = useState(false);
    const Ref = useRef(null);
    const navigate = useNavigate();

    const getRemainingTime = (endTime) => {
        const total = Date.parse(endTime) - Date.now();
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const seconds = Math.floor((total / 1000) % 60);
        return { total, minutes, seconds };
    };

    const startTimer = (endTime) => {
        const { total, minutes, seconds } = getRemainingTime(endTime);

        if (total >= 0) {
            setTimer(
                `${minutes > 9 ? minutes : "0" + minutes}:${
                    seconds > 9 ? seconds : "0" + seconds
                }`
            );
        } else {
            clearInterval(Ref.current);
            setShowAlert(true);
            navigate(-1);
        }
    };

    const initializeTimer = () => {
        const endTime = new Date();
        endTime.setMinutes(endTime.getMinutes() + countdownTime);
        return endTime;
    };

    useEffect(() => {
        const endTime = initializeTimer();
        Ref.current = setInterval(() => startTimer(endTime), 1000);

        return () => clearInterval(Ref.current); // cleanup
    }, []);

    return (
        <>
        {showAlert ? (
            <span style={{ color, fontSize }}>Time expired. Redirecting...</span>
        ) : (
            <span style={{ color, fontSize }}>{timer}</span>
        )}</>
    );
}

export default CountDown;
