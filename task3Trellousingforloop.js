const todo = []
todo.unshift('MEANSTACK class')
todo.unshift('Tutorials');
todo.unshift('Academic class')
todo.unshift('Getting up')
//console.log(todo);
console.log('Your To-Do list is:')
for (let index = 0; index < todo.length; index++) {
//console.log(todo[index])
console.log(`${index+1}:${todo[index]}`)
    
}
