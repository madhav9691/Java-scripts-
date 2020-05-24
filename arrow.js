//  const sayHello = function(name){
//      return "hey there " + name + "!"
//  }
//  console.log(sayHello('sahi'));

// const sayHello = (name) =>`hey there ${name} !`

// console.log(sayHello('sahi'));


// const todos = [{
//     title:'Buy Bread',
//     isDone:true,
// },{
//     title:'Go to College',
//     isDone:true,
// },{
//     title:'Record You tube videos',
//     isDone:false,
// }]

// const thingsDone = todos.filter((todo)=> todo.isDone ===true)
// console.log(thingsDone);


//Assignment
// const assignTodos = [{
//     title:'Buy phone',
//     isDone:false,
// },{
//     title:'Preparing for exams',
//     isDone:true,
// },{
//     title:'building a simple project',
//     isDone:true,
// },{
//     title:'fight with your bestie',
//     isDone:false,
// },{
//     title:'Finished javascript course',
//     isDone:false,
// },{
//     title:'using your sunday productively',
//     isDone:true,
// }]

// const thingsNotDone = assignTodos.filter((todo)=>todo.isDone===false);
// thingsNotDone.forEach((todos) =>console.log(todos.title));





//const ThingsNotDone = todo.filter((todos) => todos.done === false);
//ThingsNotDone.forEach((things) => console.log(things.title));



const camera = {
price:600,
weight:2000,
myDes:function(){
    return `This canon camera is of ${this.price}`
}
}
console.log(camera.myDes());

//To return a key value pairs in redux using arrow functions
const func = ()=>({key:'value'});


