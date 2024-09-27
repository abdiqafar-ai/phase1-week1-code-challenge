function checkSpeed(speed) {
    const speedLimit = 70;
    if (speed < speedLimit) {
        return "Ok";
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / 5);
        if (demeritPoints > 12) {
            return "License suspended";
        }
        return `Points: ${demeritPoints}`;
    }
}

const userSpeed = prompt("Enter car speed:");
const speed = parseInt(userSpeed, 10);
const result = checkSpeed(speed);
console.log(result);