import React from "react";
import { UTCtoHours, TimeItem } from "./Utilities"

interface Props {
    times: TimeItem[];
    removeTime: (key: number) => void;
}

export const Time = ({ times, removeTime }: Props) => {

    return <div>{times.map((time) => {
        return <h4 className="time-item" onClick={function () { removeTime(time.key) }}>
            {time.startTime + " - " + time.endTime + " (" + UTCtoHours(time.lengthTime) + ")"}
        </h4>
    })}
    </div>;
}