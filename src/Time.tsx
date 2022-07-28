import React from "react";
import { UTCtoHours, TimeItem } from "./Utilities"

interface Props {
    times: TimeItem[];
}

export const Time = ({ times }: Props) => {

    return <div>{times.map((time) => {
        return <h3 className="time-item">
            {time.startTime + " - " + time.endTime + " (" + UTCtoHours(time.lengthTime) + ")"}
        </h3>
    })}
    </div>;
}