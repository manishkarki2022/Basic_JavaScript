
// function myFunction(){
//     let a = 10;
//     const b = 20
    
// }
// console.log(a)// a cannot be printed due to local Scope
// console.log(b)// b cannot be printed due to local Scope

// let a=10
// const b=20;
// function myFunction(){
//     return a+b

// }
// console.log(myFunction())
// Output: 30 // So a and b can be use in inside the function 
//So it is called Gobal Scope, which is accessable through any were


// function one(){
//     const username="Manish"
//     function two(){
//         const website="youtube"
//         console.log(username)
//     }
//     two()
    
    
// }
// one()
if(true){
    const username = 'manish'
    if(username=='manish'){
        const website = " youtube"
        console.log(username + website) 
    }
    //console.log(website)
}
// console.log(username)
