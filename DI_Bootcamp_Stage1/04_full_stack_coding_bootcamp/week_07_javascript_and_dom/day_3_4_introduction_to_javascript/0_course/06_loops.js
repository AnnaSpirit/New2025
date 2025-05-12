// LOOPS


// type 1 loop (working with a range)

for (let i = 1; i < 11; i++){
    console.log('the current num is ' + i)
}

// type 2 (looping through a sequence)

let colors = ['blue', 'yellow', 'red']

//  for in 
for (let i in colors) {
    console.log(i)
    // here i is the index number
}

// for of
for (let i of colors) {
    console.log(i)
    // here i is the elements of the array (the colors)
}

// while loop

let number = 0
while (number < 5){
    console.log(number)
    number ++
}