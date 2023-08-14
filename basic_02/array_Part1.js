//array
const myArr=[4,5,6,7,8,9]
const myHeros=["SuperMan","SpiderMan","IronMan"]

const myArr2= new Array(3,4,5,6,7)
//console.log(myArr[2])
//console.log(myArr2)

// Array Method

//myArr.push(11,12)// add new Element at end.
//console.log(myArr)
//output: [4, 5,  6,  7, 8, 9, 11, 12]


//myArr.pop()// delete last Element of Array
//console.log(myArr)
//output: [ 4, 5,  6, 7, 8, 9, 11] 


//myArr.unshift(1) // add new Element at First 
//console.log(myArr)
//output: [ 1, 4, 5, 6, 7, 8, 9]


//myArr.shift()
//console.log(myArr)
//output: [ 5, 6, 7, 8, 9 ]


//console.log(myArr.includes(5))//check value exits or not if exits output will true
//output: true

//console.log(myArr.includes(10))//check value exits or not if dont exits output will false
//output: false

//console.log(myArr.indexOf(7))//indexOf will give index of value
//output : 3

//console.log(myArr.indexOf(100))//if value is not exist in array indexOf return -1
//output  -1

//console.log(myArr.slice(1,3))//slice copy of original array portion and dont include the last range
//output: [ 5, 6 ]// still there is no change in orginal arry
//console.log(myArr)
//original array:[ 4, 5, 6, 7, 8, 9 ]


//console.log(myArr)
//orginal array ouput: [ 4, 5, 6, 7, 8, 9 ]
//console.log(myArr.splice(1,3))// After Splice it take value from orginal 
//ouput: [ 5, 6, 7 ]
//console.log(myArr) after splice applied the original value takes
//output: [ 4, 8, 9 ]// output after splice applied









