import { useState } from "react";
import { Time } from "./Time";
import { formateDate, UTCtoHours, TimeItem } from "./Utilities"

let timer: NodeJS.Timeout;

let currentStart: string;

let idCounter = 0;

export const Timer = () => {

    const [buttonName, setName] = useState<string>("Start");
    const [startTime, setStartTime] = useState<number>(0);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [times, setTimes] = useState<TimeItem[]>([]);
    const [totalTime, setTotalTime] = useState<string>("00:00:00");
    const [len, setLen] = useState<number>(0);

    setInterval(function () { setLen(times.length) }, 250);


    function addTime(startTime: string, endTime: string, lengthTime: number, key: number) {
        setTimes([{ startTime, endTime, lengthTime, key }, ...times]);
        setTotalTime(UTCtoHours(sumTimes(times)));
    }

    return <div>
        <button id="timer-button" onClick={() => {
            if (buttonName === "Start") {
                setStartTime(Date.now());
                setCurrentTime(Date.now());
                timer = setInterval(() => { setCurrentTime(Date.now()) }, 500);
                currentStart = formateDate(new Date());
                setName("Stop");
            } else {
                clearInterval(timer);
                setCurrentTime(Date.now());
                const currentEnd = formateDate(new Date());
                addTime(currentStart, currentEnd, currentTime - startTime, idCounter++);
                setStartTime(Date.now() - 1);
                setName("Start");
            }
        }}>{buttonName}</button>
        <h2>{UTCtoHours(currentTime - startTime)}</h2>
        <Time times={times}></Time>
        <h3>Total Time: {totalTime}</h3>
        <p>{len}</p>
        <p>{times.length}</p>
    </div>
}

function sumTimes(times: TimeItem[]): number {
    let output = 0;
    for (let i = 0; i < times.length; i++) {
        output = output + times[i].lengthTime
        console.log("adding: " + times[i].lengthTime)
    }
    return output;
}