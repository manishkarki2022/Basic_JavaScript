// Write a JavaScript function to check whether an `input` is an array or not.
// function checkArray(array){
//     return Array.isArray(array)

// }
// let input=['1','2','3','4']
// let input2=('w3school')
// console.log(checkArray(input))
// //output: true
// console.log(checkArray(input2))
// //output: false


//Write a JavaScript function to clone an array
// function cloneArray(array){
//     return [...array]
// }
// let orginalArray=['1','2','3','4']
// let ClonedArray=cloneArray(orginalArray)
// console.log(ClonedArray)
//Output: [ '1', '2', '3', '4' ]


//Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.
// function first(arr, n) {
//     if (n === undefined || n < 0) {
//       return [];
//     }
  
//     if (n === 0) {
//       return [];
//     }
  
//     if (n > arr.length) {
//       return arr;
//     }
  
//     return arr.slice(0, n);
//   }
  
//   // Test cases
//   console.log(first([7, 9, 0, -2]));
//   console.log(first([], 3));
//   console.log(first([7, 9, 0, -2], 3));
//   console.log(first([7, 9, 0, -2], 6));
//   console.log(first([7, 9, 0, -2], -3));
//   Output
//   []
// []
// [ 7, 9, 0 ]
// [ 7, 9, 0, -2 ]
// []

//Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.
// function last(arr, n) {
//     if (n === undefined || n < 0) {
//       return [];
//     }
  
//     if (n >= arr.length) {
//       return arr;
//     }
  
//     return arr.slice(-n);
//   }
  
//   // Test cases
//   console.log(last([7, 9, 0, -2]));
//   console.log(last([7, 9, 0, -2], 3));
//   console.log(last([7, 9, 0, -2], 6));
  //Output
//   []
// [ 9, 0, -2 ]
// [ 7, 9, 0, -2 ]



//Write a simple JavaScript program to join all elements of the following array into a string.
// myColor=["Red", "Green", "White", "Black"]
// console.log(typeof myColor)
// console.log( myColor.join('+'))

//Write a JavaScript program to sort the items of an array.
// Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8
// let arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// console.log(arr1.sort(function(a,b){
//     return a-b;
// }))

//Write a JavaScript program to find the most frequent item in an array.

  


