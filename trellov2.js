let myTodos = {
    day:'Monday',
    meetings:0,
    meetDone:0,
}

let addMeeting = function(todo,meet = 0){
todo.meetings = todo.meetings + meet
}

// addMeeting(myTodos,2)

let meetDone = function(todo,meet = 0){
    todo.meetDone = meet - todo.meetDone
}
let resetDay = function(todo){
    todo.meetings = 0
    todo.meetDone = 0
} 

let getSummaryOfDay = function(todo){
    let meetLeft = todo.meetings - todo.meetDone
    return `you have ${meetLeft} meetings today!`
}
addMeeting(myTodos, 4)
addMeeting(myTodos, 2)
meetDone(myTodos,5)
console.log(myTodos);
console.log(getSummaryOfDay(myTodos))