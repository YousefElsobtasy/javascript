// h1 = document.querySelector("h1")

// h1.style.color = "red"
// h1.style.fontSize = "80px"
// h1.style.fontWeight = "bold"
// h1.style.textAlign = "center"
// h1.style.fontFamily = "Arial"

// window.alert(10 + 20)
// window.alert("10 + 20")

// document.write("<h2>Elzero</h2>")
// console.log("Hello From JS File")

// console.error("error massage")
// console.error( 50 + 50 )

// osama = "osama"

// console.table( [1, 2, 3, 4 ])
// console.table( ["1", "2", "3", "4"] )
// console.table( [osama, "mohamed", "yousef", "ayman"] )

// console.log("%cElzero %cweb %cschool", "color: red; font-size: 40px;", "color: green; foont-size:boldl;  font-size: 40px;", "color: blue; font-size: 40px;" )

// console.group("Group 1")
// console.log("Massage One")
// console.log("Massage Two")
// console.group("Child Group")
// console.log("Massage One")
// console.log("Massage Two")
// console.group("Grand Child Group")
// console.log("Massage One")
// console.log("Massage Two")
// console.groupEnd()
// console.groupEnd()
// console.groupEnd()
// console.group("Group 2")
// console.log("Massage One")
// console.log("Massage Two")
// console.groupEnd()


// console.table([ "Elzero", "Ahmad", "Samah", "Gamal", "Aya"])

// console.log("Osama Mohamed")    //string
// console.log(typeof ("Osama Mohamed"))   //string
// console.log(typeof "Osama Mohamed")     //string
// console.log(typeof 5000)    //number
// console.log(typeof 5000.99) //number
// console.log(typeof [1, 2, 3, 4, 5])     //array => object
// console.log(typeof { name: 'osama', age: 30, state: 'married' })    //object
// console.log(typeof true)    //boolean
// console.log(typeof false)   //boolean
// console.log(typeof undefined)   //undefined
// console.log(typeof null)    //object


// let a = 'We Love'
// let b = 'Javascript'
// let c = 'and'
// let d = 'Python'

// console.log(a + ' ' + b + " " + c + " " + a + " " + d)
// console.log(`${a} ${b} ${c} ${a} ${d}`)
// console.log(a + ' ' + b + " " + c + "\n" + a + " " + d)
// console.log(`${a} "" '' / \\ ${b} ${c}\n${a} ${d}`)

// console.log(1_000_000)
// let number = "1e6"
// console.log(1e6)
// console.log(+number)
// console.log(10 ** 6)

// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Number.MIN_SAFE_INTEGER)
// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)

// console.log(20..toString())
// console.log(100.55455.toFixed(2))
// console.log(Number("100 Osama"))
// console.log(+"100 Osama")
// console.log(parseInt("Osama 100.500 Osama"))
// console.log(parseInt("100.500 Osama"))
// console.log(parseFloat("100.500 Osama"))

// console.log(Number.isInteger("100"))
// console.log(Number.isInteger(100))
// console.log(Number.isInteger(100.500))
// console.log(Number.isInteger("Osama"))
// console.log(Number.isNaN("Osama"))
// console.log(Number.isNaN("Osama" / 2))

// let j = "Osama" * 2
// console.log(Number.isNaN(j))
// let k = "Osama"
// console.log(Number.isNaN(k))

// console.log(Math.round(1.5))
// console.log(Math.floor(1.5))
// console.log(Math.ceil(1.5))
// console.log(2 ** 2)
// console.log(Math.pow(2,2))
// console.log(parseInt(Math.random() * 100)) #Random Number Between 1 and 100
// console.log(parseInt(Math.random([]) * 100))
// console.log(Math.trunc(Math.random([]) * 100))

// document.getElementById('title').innerHTML = "relod to get a new number"
// document.getElementById("number").innerHTML = (parseInt(Math.random() * 100))

// document.getElementById('title').innerHTML = "relod to get a new number"
// document.getElementById("number").innerHTML = (Math.trunc(Math.random([13]) * 100))


// let TheName = "  Ahmed  "

// console.log(TheName[1])
// console.log(TheName[5])
// console.log(TheName.charAt(1))
// console.log(TheName.charAt(5))
// console.log(TheName.length)
// console.log(TheName.trim())
// console.log(TheName.toUpperCase())
// console.log(TheName.toLowerCase())

// let a = "Elzero Web School"
// console.log(a.indexOf("o", 1))
// console.log(a.lastIndexOf("o"))

// console.log(a.slice(1, 5))
// console.log(a.slice(-10, -9))

// console.log(a.split("", 6))

// a = "Elzero Web School"
// // subString == start then end
// console.log(a.substring(2, 6))
// console.log(a.substring(6, 2))
// console.log(a.substring(-10, 6))
// // substr == start then how-many
// console.log(a.substr(1, 2))
// // start >= a.length == nothing
// console.log(a.substr(a.length ))
// console.log(a.substr(-3))
// console.log(a.substr(-5, 2))

// console.log(a.includes("Web"))
// console.log(a.includes("Web", 8))

// console.log(a.startsWith('E'))
// console.log(a.startsWith('E', 1))

// a.endWith() search for it and it work with length

// // == Compare Between Values Only
// console.log(10 == "10")
// // === Identical Mean Compare Between Values and Types
// console.log(10 === 10)
// console.log(10 === "10")

// or then and

/*
Logical Or ||
    Null or Undefined or Any Falsy Value
Nullish Coalescing Operator ??
    Null or Undefined
*/
// let price
// console.log(`The Price Is ${price || "Free"}`)
// console.log(`The Price Is ${price ?? "Free"}`)

/*
  Arrays Methods [Adding And Removing]
  - unshift("", "") Add Element To The First and make change to array
  - push("", "") Add Element To The End and make change to array
  - shift() Remove First Element From Array and make change to array
  - pop() Remove Last Element From Array and make change to array
  - sort()
  - reverse() make change to array
  - slice()
  - splice(0, 0, "add") make change to array
  - concat() Usefull for Arrays
  - join(what between) From Arrays to String
*/


/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/

// Search For Arrow Function Syntax 











/*
  Function Arrow Challenges
*/

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

// Answer :

// let names = function (...names) {
//   // Parameter ?
//   return `String [${names.join("], [")}] => Done !`;
// };

// let names = (...names) => { return `String [${names.join("], [")}] => Done !` }
// console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

/* ================================= */

// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output

let myNumbers = [20, 50, 10, 60];

let calc = (one, two, ...nums) => { return one + two + nums.shift() };

console.log(calc(10, myNumbers.shift(), myNumbers.shift())); // 80
