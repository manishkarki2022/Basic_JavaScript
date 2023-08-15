// // There are two type of Object:-
// 1. SingleTone
// which is Create By
// Object.create// this is called contructer method 

//object literals
const mySmb = Symbol("key1")
const jsUser={
    name:"Manish",
    [mySmb]:"mykey1",
    age:18,
    location:"Kathmandu",
    email:"manish@google.com",

    isLogedIn:false,
    lastLogedDays:["Sumday","Monday"]
}
// There are different Way to access the value of Object

// console.log(jsUser.name)
// output:Manish

 // The best way to access object value
// console.log(jsUser["name"])
// // output:Manish
// console.log(jsUser.name)
// console.log(jsUser['email'])
// console.log(typeof jsUser[mySmb])
jsUser.email="karki@google.com"
// console.log(jsUser)
Object.freeze(jsUser.email)
jsUser.name ="Hero Manish"
// console.log(jsUser)
jsUser.greeting = function(){
    console.log("Hello JS users")
}
jsUser.greetingTwo=function(){
    console.log(`Hello JS User ${this.name}`)

}
console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())
