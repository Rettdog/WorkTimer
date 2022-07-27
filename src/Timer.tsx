import { useState } from "react";

export const Timer = () => {

    const [time, setTime] = useState<number>(0);
    const [buttonName, setName] = useState<string>("Start");

    let startTime = 0;

    return <div>
        <button id="timer-button" onClick={() => {
            setTime(time + 0.1);
            if (buttonName == "Start") {
                startTime = Date.now();
                setName("Stop");
            } else {
                setName("Start");
            }
        }}>{buttonName}</button>
        <h2>{Math.round(time * 100) / 100}</h2>
        <p>{Date.now() - startTime}</p>
    </div>
}