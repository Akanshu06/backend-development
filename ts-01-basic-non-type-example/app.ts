const num1Input=document.getElementsByTagName('input')[0] as HTMLInputElement;
const num2Input= document.getElementsByTagName('input')[1] as HTMLInputElement;
const buttonToAdd = document.getElementsByTagName('button')[0];

const numResult :Array<number>=[];
const textresult:string[]=[];

type numsTypes=number|string;
type resulttype={val:number,typestamp:Date}



function add(num1:numsTypes, num2:numsTypes) {
  if(typeof num1=== "number" && typeof num2==="number"){
    return num1+num2;
  }else if(typeof num1==="string" && typeof num2==="string"){
    return num1 +" "+ num2;
  }
  return num1+" "+num2;
}

function toPrint(returnObj:resulttype){
  console.log(returnObj.val);
  
}

buttonToAdd.addEventListener('click',()=>{
  const num1= num1Input.value;
  const num2 = num2Input.value;
  const result= add(+num1,+num2);
  numResult.push(result as number);
  
  const stringResult=add(num1,num2);
  textresult.push(stringResult as string);

  toPrint({val:result as number,typestamp:new Date()})
  console.log(numResult,textresult);
  
})

const myPromise=new Promise<string>((resolve,reject)=>{
  setTimeout(() => {
    resolve('it worked');
  }, 1000);
});

myPromise.then((result)=>{
  console.log(result.split('w'));
  
})