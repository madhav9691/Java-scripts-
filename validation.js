// alert('working')
function myValidation(){
    let myValue = document.querySelector('#myform').value

    if(isNaN(myValue) || myValue<1 || myValue >20){
        const val = document.querySelector('#idone')
        val.textContent ='The input is wrong'          

    }
    else{
        const val = document.querySelector('#idone')
        val.textContent ='The input is crrct'    
       // console.log('This input is crrct');
        
    }
}