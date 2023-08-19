// const coding = ['js','ruby','java','python','cpp']

// const values = coding.forEach((item)=>{
//     console.log(item)
//     //outputjs
//     // ruby
//     // java
//     // python
//     // cpp
// })
// console.log(values)
//output : undefined






// const values = coding.map((item)=>{
//     console.log(item)
//     //outputjs
//     // ruby
//     // java
//     // python
//     // cpp
// })
// console.log(values)
  //output : [ undefined, undefined, undefined, undefined, undefined ]

//   const values = coding.map((item)=>{
//     return item;
//   })
//   console.log(values)
//   //output: When we return value we get in map : [ 'js', 'ruby', 'java', 'python', 'cpp' ]
//   // but in forEach we dont get any return value 

const myNums=[1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((num)=>{
//     if(num<4){
//         return num;
//     }
  
// })
// console.log(newNums)
//Chaning Method// Use more then one method, in same method
const newNums=myNums.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>80)
console.log(newNums)
