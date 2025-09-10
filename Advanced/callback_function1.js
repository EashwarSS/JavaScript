function anotherAddEventListener(typeOfEvent, callback) {
    //Detect Event Code....
    var eventThatHappend = {
        eventType: "keypress",
        key: "p",
        durationOfKeypress: 2
    }
    if(eventThatHappend.eventType === typeOfEvent) {
        callback(eventThatHappend);
    }
}

// anotherAddEventListener("keypress", function(event) {
//     console.log(event);
// });

// document.addEventListener("keypress", function(event) {
//     console.log(event);
// });