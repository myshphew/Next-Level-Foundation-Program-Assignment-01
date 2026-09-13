//Question No. 1
const describeValue = (value) => {
    const typeOfValue = typeof(value)
    let truthyValue
    if(value) {truthyValue="truthy"} else {truthyValue="falsy"}
    const stringValue = "" + typeOfValue + " | " + truthyValue
    return stringValue
}

//Question No. 2
const getDayType = (day) => {
    day = day.toUpperCase();
    switch(day){
        case "SUNDAY":
        case "MONDAY":
        case "TUESDAY":
        case "WEDNESDAY":
        case "THURSDAY":
            return "Working Day"
        case "FRIDAY":
        case "SATURDAY":
            return "Weekend"
        default:
            return "Invalid Day"
    }
}

//Question No. 3
const validateUsername = (text) => {
    if (text.length<4){
        return "Too Short"
    } else if (text.includes(" ")){
        return "No Space Allowed"
    } else if (text.toUpperCase().includes("ADMIN")){
        return "Reserved Word"
    } else {
        return "Available"
    }
}

//Question No. 4
const getCngFare = (distance, isNight=false, waitingMinutes=0) => {
    let extraDistance = 0
    if (distance>2){
        extraDistance = distance-2
    }
    let fare = 50 + (extraDistance*15) + (waitingMinutes*2)
    if (isNight){
        fare = fare*1.2
    }
    return fare
}

//Question No. 5
const getChaseVerdict = (target, scored, ballsLeft) => {
    let runsNeeded = target - scored
    if (runsNeeded<=0) return "Won"
    if (ballsLeft<=0) return "Lost"
    let requiredRate = (runsNeeded / ballsLeft) * 6
    let verdict;
    if (requiredRate<=6){
        verdict = "Comfortable"
    } else if (requiredRate<=12){
        verdict = "Tough"
    } else {
        verdict = "Almost Impossible"
    }
    return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`
}