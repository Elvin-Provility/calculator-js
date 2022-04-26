
var inputValue=document.getElementById('val');
var resultValue=document.getElementById('res');
  
inputValue.innerHTML="";
resultValue.innerHTML="";
function clickAddNum(number)
{    
    inputValue.innerHTML+=number;
}  
function ClickEquResult()
{
    let num=inputValue.innerHTML;
    let total= evalution(num); 
     resultValue.innerHTML+="Ans = "+total;
}

function clickDel(){
    inputValue.innerHTML="";
    resultValue.innerHTML="";
    
}
/**check */

function evalution(myArray) 
{ 
    const inputArrays=myArray.split('');
    const numArray = myArray.split(/[/,*,+,-]/);
    const operatorArray=[];
    const resultArray=[];
    for(let i=0;i<inputArrays.length;i++)
    {
      if(isNaN(inputArrays[i]))
      {
       operatorArray.push(inputArrays[i]);
      }
    }
  for(let i=0;i<numArray.length;i++)
  {
    resultArray.push(numArray[i])
    if(i<operatorArray.length)
    {
      resultArray.push(operatorArray[i])
    }
  }
  var result= calculate(resultArray);
  return result;
}
   function calculate(inputArray) 
  {
    let initialValue = inputArray[0];
    let numValue = parseInt(initialValue);
    let result = numValue;
    for (let i = 2; i < inputArray.length; i = i + 2) {
      initialValue = inputArray[i];
      numValue = parseInt(initialValue);
      let operator = inputArray[i - 1];
      switch(operator)
       {
         case '/':
           result/=numValue;
             break;
         case '*':
         result*=numValue;
             break;
         case '-':
         result-=numValue;
             break;
         case '+':
         result+=numValue;
             break;  
         }
  }
  return result;
  
  }



