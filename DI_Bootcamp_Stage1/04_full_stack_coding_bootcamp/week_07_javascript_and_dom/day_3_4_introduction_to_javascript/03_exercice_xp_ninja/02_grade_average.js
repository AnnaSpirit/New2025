// Hint: This Exercise is trickier then the others. You have to think about its structure before you start coding. You must use functions to complete this exercise, to do so take a look at tomorrow’s lesson.

// In this exercise we will be creating a function which takes an array of grades as an argument and will console.log the average.

//1.Create a function called findAvg(gradesList) that takes an argument called gradesList.
    
const findAvg = function(gradesList) {

//2.Your function must calculate and console.log the average.

    let sum = 0;
    for (let i = 0; i < gradesList.length; i++) {
        sum += gradesList[i];
    }
    
    //3.If the average is above 65 let the user know they passed

    const average = sum / gradesList.length;
    if (average >= 65) {
        console.log("You passed with an average of " + average);
    } else {
        console.log("You failed with an average of " + average);
    }
    
    //4.If the average is below 65 let the user know they failed and must repeat the course.

    if (average < 65) {
        console.log("You must repeat the course with an average of " + average);
    }


//5.Bonus Try and split parts 1, 2 and 3, 4 of this exercise to two separate functions.     Hint One function must call the other.
    
    const calculateAverage = function(gradesList) {
        let sum = 0;
        for (let i = 0; i < gradesList.length; i++) {
            sum += gradesList[i];
        }
        return sum / gradesList.length;
    }

    const checkPassFail = function(average) {
        if (average >= 65) {
            console.log("You passed with an average of " + average);
        } else {
            console.log("You failed with an average of " + average);
        }
    }

    const average = calculateAverage(gradesList);
    checkPassFail(average);
}

