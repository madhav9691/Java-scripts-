// const days = ['Mon','Tue','Wed','Thu','Fri','Sat']
// console.log(days[0]);


// let  sayHello = function(name){
//     console.log(`Greeting message for ${name}`);

//   }
// days.forEach(function(name,index){//always 1st parameter will be the name of the each item in an array and 2nd parameter will be the index(position of that item in for each loop)
//     console.log(`starts with ${index + 1}------- ${name}`);

//   })

// console.log(days.length);
// for (let index = days.length - 1; index >= 0; index--) {
//     console.log(days[index])
// }
// for(let i=days.length - 1;i >= 0;i--){
//     console.log(days[i]);
    
// }



const myTodos = []

myTodos.push('Getting up')
myTodos.push('Attending academic classes')
myTodos.push('Tutorials')
myTodos.push('MEAN STACK Class')

console.log('Your To-Do list is:');

myTodos.forEach(function(todo,index){
console.log(`${index + 1}:${todo}`);

})



