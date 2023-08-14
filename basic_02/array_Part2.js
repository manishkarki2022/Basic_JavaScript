const marvel_heros=["Thor", "SpiderMan","IroMan"];
const dc_heros = ["SuperMan","Flash","Batman"]

// marvel_heros.push(dc_heros)
// console.log(typeof(marvel_heros))
// output : ['SuperMan','SpiderMan','IroMan',  [ 'SuperMan', 'Flash', 'Batman' ]]



//When to array need in one Array(Concat is use)
// ++++++++++++++++++++++++++++++++++++++++++++
// const all_heros=marvel_heros.concat(dc_heros)
// console.log(all_heros)
// output: [ 'Thor', 'SpiderMan', 'IroMan', 'SuperMan', 'Flash', 'Batman' ]

//Another easy way to make both array in one Array(Spread)
// const all_heros=[...marvel_heros,...dc_heros]
// console.log(all_heros)
//output :[ 'Thor', 'SpiderMan', 'IroMan', 'SuperMan', 'Flash', 'Batman' ]



// const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_another_array=another_array.flat(Infinity)
// console.log(real_another_array)
// output: [1, 2, 3, 4, 5,6, 7, 6, 7, 4,5]

// Check is this Array
// console.log(Array.isArray("Manish"))
// output : false

// Covert into Array
// console.log(Array.from("Manish"))
// output : [ 'M', 'a', 'n', 'i', 's', 'h' ]

// if we want to make object as an Array
// console.log(Array.from({name:"Manish"}))
// output: [] // it return empty array

// console.log(Array.of("Manish"))//When of is used 
// output: [ 'Manish' ]












