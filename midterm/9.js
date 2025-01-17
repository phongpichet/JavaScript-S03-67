function digitalClock(seconds) {
    // Calculate hours, minutes, and remaining seconds
    let hours = Math.floor(seconds / 3600) % 24;
    let minutes = Math.floor((seconds % 3600) / 60);
    let remainingSeconds = seconds % 60;

    // Format the result as HH:MM:SS
    return [
        hours.toString().padStart(2, '0'),
        minutes.toString().padStart(2, '0'),
        remainingSeconds.toString().padStart(2, '0')
    ].join(':');
}

// Examples
console.log(digitalClock(5025));   // "01:23:45"
console.log(digitalClock(61201));  // "17:00:01"
console.log(digitalClock(87000));  // "00:10:00"
