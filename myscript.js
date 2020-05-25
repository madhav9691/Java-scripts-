//alert('File is attached');
// document.title = 'I got changed'
// console.log(document.getElementById('idone'));

// console.log(document.getElementsByClassName('classOne'))

// const myElement = document.querySelectorAll('.classOne')
// console.log(myElement);

// const myPElements = document.querySelector('p')
// myPElements.textContent = 'I am being changed using javascript'

const myPElements = document.querySelectorAll('p')
myPElements.forEach((p)=>p.textContent = 'I am changed using loop in js')


const myNewPara = document.createElement('p')
myNewPara.textContent = 'This is added in p tag by js'

document.querySelector('body').appendChild(myNewPara)


document.querySelector('button').addEventListener('click',(event)=>{
    event.target.textContent = 'I was clicked';
    
    
})