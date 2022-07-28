export type TimeItem = {
    startTime: string;
    endTime: string;
    lengthTime: number;
    key: number;
}

export function formateDate(date: Date): string {
    let hour = date.getHours();
    let symbol = hour > 11 ? "PM" : "AM";
    hour = hour > 12 ? hour - 12 : hour;
    hour = hour === 0 ? hour = 12 : hour;
    let minute: string | number = date.getMinutes();
    minute = minute < 10 ? "0" + minute : minute;
    return hour + ":" + minute + " " + symbol;
}

export function secToHours(time: number): string {
    let seconds = Math.floor(time % 60);
    let minutes = Math.floor((time % 3600 - seconds) / 60);
    let hours = Math.floor((time - minutes) / 3600);
    return (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds)
}

export function UTCtoHours(time: number): string {

    time = Math.floor(time / 1000);

    return secToHours(time)
}