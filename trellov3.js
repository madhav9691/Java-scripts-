let myTodos = {
    day:'Monday',
    meetings:0,
    meetDone:0,
    
    addMeeting:function(num = 0){
       this.meetings = this.meetings + num
    },
    getMeetDone:function(meet = 0){//Assignment
         this.meetDone = meet - this.meetDone

    },
    resetDay:function(){//Assignment
        this.meetings = 0
        this.meetDone = 0
    },
    summary:function(){
        let meetLeft = this.meetings - this.meetDone
        return  `you have ${meetLeft} meetings left today`
    },
    
}
myTodos.addMeeting(4)
console.log(myTodos);
myTodos.getMeetDone(3)
console.log(myTodos);

console.log(myTodos.summary())
//Assignment
//Handle meeting done  ----->Done
//Create a function that can reset entire day ---->Done