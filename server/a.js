let obj = {
    name: 'akash',
    age: null,
    designation: 'Software engineer',
    address: '' 
}; 
let newObj={}; 
for(let keys in obj) { 
    const data = obj[keys]; 
    console.log(data);  
    if(obj[keys] ) {
        console.log(keys);  
    }
}
console.log(newObj); 

// var a = undefined;  
// for(var i = 0; i <= 20; i++) { 
//     if(i%3==0) {  
//         console.log(a);//undefined
//         let number;        
//     }
//     console.log(number);//error
// }
// console.log(i);//21 
