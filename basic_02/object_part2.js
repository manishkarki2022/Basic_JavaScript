// How to create Singleton object
// const tinderUser = new Object()
// console.log(tinderUser)
// output: {}


//another way to create object
// const tinderUser={}
// tinderUser.id="123abc"
// tinderUser.name="Jack"
// tinderUser.isLoggedIn=false
// console.log(tinderUser)
// // output: { id: '123abc', name: 'Jack', isLoggedIn: false }

// const regularUser = {
//     email:"some@gmail.com",
//     fullName:{
//         userFullName:{
//             firstname:"some",
//             lastname:"body"
//         }
//     }
// }
// console.log(regularUser.fullName.userFullName.firstname)


// Add Two  or more Object
const obj1={1:'a', 2:'b'}
const obj2={3:'c', 4:'d'}
const obj3={5:'e', 6:'f'}

// const obj4= Object.assign(obj1,obj2)
// console.log(obj4)
// output: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//  const obj4= Object.assign({},obj1,obj2,obj3)
// console.log(obj4)
// output: { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

//The best way to add two or more object use spread operater

// const obj4={...obj1,...obj2,...obj3}
// console.log(obj4)
// output: { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }


// const tinderUser={}
// tinderUser.id="123abc"
// tinderUser.name="Jack"
// tinderUser.isLoggedIn=false
// // console.log(tinderUser)

// // To access only Key of the Object 
// console.log(Object.keys(tinderUser))
// //output: [ 'id', 'name', 'isLoggedIn' ]

// To access only value of the Object
// console.log(Object.values(tinderUser))
// //output: [ '123abc', 'Jack', false ]


// // To check if the Properties is exist or not
// console.log(tinderUser.hasOwnProperty("id"))
// //output : true
// //if Properties is not exist 
// console.log(tinderUser.hasOwnProperty("check"))
//output: false


//Object De-Structure
const course ={
    coursename:"JavaScript",
    prie:"999",
    courseInstructor:"hitesh"
}
// If we want to access the value of courseInstructor 
// Old way
console.log(course.courseInstructor)

//To access the courseInstructor value in New Way
//This is called Obecjed De-Structure

const{courseInstructor}=course
//We can access the value just like normal variable
console.log(typeof courseInstructor)



 