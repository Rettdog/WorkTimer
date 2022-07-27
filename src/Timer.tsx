import { useState } from "react";
import { Time } from "./Time";
import { formateDate, secToHours, UTCtoHours } from "./Utilities"

let timer: NodeJS.Timeout;

let currentStart: string;

export const Timer = () => {

    const [buttonName, setName] = useState<string>("Start");
    const [startTime, setStartTime] = useState<number>(0);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [times, setTimes] = useState<{ startTime: string; endTime: string; lengthTime: number; }[]>([]);


    function addTime(startTime: string, endTime: string, lengthTime: number) {
        setTimes([{ startTime, endTime, lengthTime }, ...times])
    }

    return <div>
        <button id="timer-button" onClick={() => {
            if (buttonName === "Start") {
                console.log("Start: " + buttonName);
                setStartTime(Date.now());
                setCurrentTime(Date.now());
                timer = setInterval(() => { setCurrentTime(Date.now()) }, 500);
                const date = new Date()
                currentStart = formateDate(new Date());
                setName("Stop");
            } else {
                console.log("Stop: " + buttonName);
                clearInterval(timer);
                setCurrentTime(Date.now());
                setName("Start");

                const currentEnd = formateDate(new Date());
                addTime(currentStart, currentEnd, currentTime - startTime);
            }
        }}>{buttonName}</button>
        <h2>{UTCtoHours(currentTime - startTime)}</h2>
        <Time times={times}></Time>
        <h3>Get sum:</h3>
    </div>
}