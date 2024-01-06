export function formatDate (date: string) {
    if (new Date(date).toDateString() === new Date().toDateString()) {
        // AM or PM
        let hours = new Date(date).getHours();
        let minutes = new Date(date).getMinutes();
        let ampm = hours >= 12 ? 'PM' : 'AM';
        // 12 hour clock
        hours = hours % 12;
        hours = hours ? hours : 12;
        // minutes
        minutes = minutes < 10 ? 0 + minutes : minutes;
        // return
        return hours + ':' + minutes + ' ' + ampm;
    }
    else if (new Date(date).toDateString() === new Date(new Date().setDate(new Date().getDate() - 1)).toDateString()) {
        // AM or PM
        let hours = new Date(date).getHours();
        let minutes = new Date(date).getMinutes();
        let ampm = hours >= 12 ? 'PM' : 'AM';
        // 12 hour clock
        hours = hours % 12;
        hours = hours ? hours : 12;
        // minutes
        minutes = minutes < 10 ? 0 + minutes : minutes;
        // return
        return 'Yesterday at ' + hours + ':' + minutes + ' ' + ampm;
    }
    else if (new Date(date).getDay() >= new Date(new Date().setDate(new Date().getDate() - 7)).getDay()) {
        // return day
        return new Date(date).toLocaleString('default', { weekday: 'long' });
    }
    else if (new Date(date).getFullYear() === new Date().getFullYear()) {
        // return month day
        return new Date(date).toLocaleString('default', { month: 'long', day: 'numeric' });
    }
    else {
        // return year month day
        return new Date(date).toLocaleString('default', { year: 'numeric', month: 'long', day: 'numeric' });
    }

}