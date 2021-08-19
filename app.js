function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if (pinString.length == 4 ){
        return pin;
    }
    else{
        return getPin();
        
    }
}
   function generatePin(){
   const pin = getPin();
   document.getElementById("display-pin").value=pin;
 }

 document.getElementById('key-pad').addEventListener('click',function(event){
    const number =event.target.innerText;

    let calcInput = document.getElementById('typed-numbers');
    if(isNaN(number)){
        if(number == 'C'){
            calcInput.value ='';
        }
        else if(number == "<"){
            console.log('clicked')
            calcInput.value = calcInput.value.substring(0, calcInput.value.length -1)
    
        }
    }
    
    else{
        const calcInput = document.getElementById('typed-numbers');
        const previousCalc = calcInput.value;
        const newNumber = previousCalc + number;
        calcInput.value =newNumber;
    }
  
 }) 
 function verifyPin(){
     const pin =document.getElementById('display-pin').value;
     const typeNumbers =document.getElementById('typed-numbers').value;
    //  error
    const successMessage = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');

     if(pin == typeNumbers){
        successMessage.style.display='block';
        failError.style.display='none';
     }
     else{
        successMessage.style.display='none';
        failError.style.display='block';
     }

 } 
