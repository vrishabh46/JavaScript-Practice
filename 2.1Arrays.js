const myarray = [1,2,3,4,5,6]
// const myhero = ["ironman", "thor", 'captain']

// console.log(myarray[0])
// console.log(myhero). //type 1 of declaring arrays in js.


// const myarray2 = new Array(2,3,4,5,6,7)
// console.log(myarray2[4]).    //type 2 of declaring arrays in js.

// Array menthods
// console.log(myarray.push(7));   // and it adds at last position, adds the element in the array

// console.log(myarray.pop(7))        // pops out element from the array

// console.log(myarray.unshift(9));   //adds element at the 0th position and sequence dont matter

// console.log(myarray.shift())       // removes the 0th element from the array  
// console.log(myarray)            

// const newArr = myarray.join()          // in join we concat the array together and save it as a sting using join function.

// console.log(myarray);
// console.log( newArr);

// slice and splice 
console.log("A ", myarray);

const myn1 = myarray.slice(1, 3)

console.log(myn1);
console.log("B ", myarray);


const myn2 = myarray.splice(1, 3)
console.log("C ", myarray);
console.log(myn2);

// the main difference between slice and splice is that in splice the declared portion is actually removed out 
// and displayed as shown in the above result/
// but in slice the actual values are intact just a range is printed as the output.