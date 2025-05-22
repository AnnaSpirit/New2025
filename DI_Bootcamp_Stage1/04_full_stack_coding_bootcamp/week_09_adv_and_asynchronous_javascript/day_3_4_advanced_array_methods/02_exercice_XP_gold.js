// analyzing_exercises.js

// ================================
// Exercise 1 : Analyzing the map method
// ================================
function exercise1() {

    [1, 2, 3].map(num => {
        if (typeof num === 'number') return num * 2;
        return;
    });

    // The output should be ===> [2, 4, 6]
}

// ==================================
// Exercise 2 : Analyzing the reduce method
// ==================================
function exercise2() {

    [[0, 1], [2, 3]].reduce(
        (acc, cur) => acc.concat(cur),
        [1, 2]
    );

    // The output should be ===> [1, 2, 0, 1, 2, 3]

    // =================================
    // Exercise 3 : Analyze this code
    // =================================
    function exercise3() {

        const arrayNum = [1, 2, 4, 5, 8, 9];
        const newArray = arrayNum.map((num, i) => {
            console.log(num, i);
            alert(num);
            return num * 2;
        });

        // The value of i should be ===> 0, 1, 2, 3, 4, 5

        // ==========================
        // Exercise 4 : Nested arrays
        // ==========================
        function exercise4() {
            // Flatten the nested array to one level
            const array = [[1], [2], [3], [[[4]]], [[[5]]]];
            const newArray = array.reduce((acc, cur) => {
                return acc.concat(Array.isArray(cur) ? cur.flat(Infinity) : cur);
            }, []);
            console.log(newArray); // Output: [1, 2, 3, 4, 5]

            // Transform nested arrays into strings
            const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
            const modifiedGreeting = greeting.map(subArray => subArray.join(" "));
            console.log(modifiedGreeting); // Output: ["Hello young grasshopper!", "you are", "learning fast!"]

            // Combine all strings into one sentence
            const greetingString = modifiedGreeting.join(" ");
            console.log(greetingString); // Output: "Hello young grasshopper! you are learning fast!"

            // Flatten deeply nested number
            function flattenTrappedNumber() {
                const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
                const flattened = trapped.flat(Infinity);
                console.log(flattened); // Output: [3]
            }

            // Call the flattenTrappedNumber function
            flattenTrappedNumber();
        }

        // ==========================
        // Run all exercises
        // ==========================
        function runAllExercises() {
            console.log('--- Exercise 1 ---'); exercise1();
            console.log('--- Exercise 2 ---'); exercise2();
            console.log('--- Exercise 3 ---'); exercise3();
            console.log('--- Exercise 4 ---'); exercise4();
        }

        // Lancement
        runAllExercises();
