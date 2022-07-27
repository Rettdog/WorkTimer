import React from "react";
import { formateDate, secToHours, UTCtoHours } from "./Utilities"

interface Props {
    times: { startTime: string; endTime: string; lengthTime: number; }[];
}

export const Time = ({ times }: Props) => {

    // const [times, setTimes] = useState({
    //     startTime: "test",
    //     endTime: "test",
    //     lengthTime: 0,
    // });

    return <div>{times.map((time) => {
        return <p>
            {time.startTime + " - " + time.endTime + " (" + UTCtoHours(time.lengthTime) + ")"}
        </p>
    })}
    </div>;
}