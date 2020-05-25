// alert('working')


const signup = document.querySelector('.signup').addEventListener('submit',(event)=>{
event.preventDefault();
console.log(event.target.uname.value);
console.log(event.target.mail.value);
 const a = event.target.password.value
console.log(a);
   const b = event.target.password1.value
console.log(b);
if (a === b){
    console.log('crrct password');
    
}
else{
    const para = document.createElement('p')
    para.textContent = 'Incorrect password';
    document.querySelector('body').appendChild(para);

}
event.target.uname.value = '';
event.target.mail.value = '';
event.target.password.value = '';
event.target.password1.value = '';



})