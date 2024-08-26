
// Alert & Prompt

// let name = prompt("What is your name?");
// let name1 = prompt("What is your Qualification?");
// alert("Hello, " + name + "! How Are You? " + "Your Qualification is "     +
//     name1 );
// a;


// Operators - Arithmetic & Logical
 let a= 10
 let b= 36
 console.log(a*b, a+b);
 
// if class logical operator

let mark =67

if(mark<34){
    console.log("You are is F");
    
}
else{
    console.log("You are is P");
    
}

// Variables & Data Types  

let valName = "jerald"
let valInt ="23"
console.log(`This is dynamic programing language  ${valName}  ${valInt}` );


// Array

// Select the largest number in array?


 let arr =[100,23,11,45,78,38,11]
 let  largest =arr[0]
  for (let i = 0; i < arr.length; i++) {
    if(arr[i]> largest){
        largest =a[i]
    }
   
    
  }
  console.log(largest)
  
///function ie
 function first(){
    console.log("This is first call it");
    function second(){
      console.log("how second fundtion call oustide of function");
      
    }
    return second()
 }

 first()

//  Ternary Operator 


let age =18
let eligible =(age>=18)?"You are eligible for applying in  licence ":"you are not eligible"
console.log(eligible);
