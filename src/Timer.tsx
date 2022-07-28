import { useEffect, useState } from "react";
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


    useEffect(() => {
        setTotalTime(UTCtoHours(sumTimes(times) + currentTime - startTime));
    });

    function addTime(startTime: string, endTime: string, lengthTime: number, key: number) {
        setTimes([{ startTime, endTime, lengthTime, key }, ...times]);
    }

    function removeTime(key: number) {
        //setTimes(times.filter((time) => { time.key !== key }));
        setTimes(times.filter(time => time.key !== key));
        console.log(key);
    }

    return <div>
        <button id="timer-button" onClick={() => {
            if (buttonName === "Start") {
                setStartTime(Date.now());
                setCurrentTime(Date.now());
                timer = setInterval(() => { setCurrentTime(Date.now()) }, 250);
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
        <Time times={times} removeTime={removeTime}></Time>
        <h3>Total Time: {totalTime}</h3>
    </div>
}

function sumTimes(times: TimeItem[]): number {
    let output = 0;
    for (let i = 0; i < times.length; i++) {
        output = output + Math.floor(times[i].lengthTime / 1000) * 1000;
    }
    return output;
}