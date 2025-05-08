// OBJECTS

let teacher = {
    fullName : 'Albus Dumbledore',
    subject : 'Transfiguration',
    method : function(){}
}

//accessing the object properties
console.log(teacher.fullName)

teacher.subject = 'Potions'

console.log(teacher)

teacher.role = 'Principal'
console.log(teacher)

delete teacher.role
console.log(teacher)

// exercise

let user1 = {
    username : 'john',
    password : '123'
}

let dataBase = [user1]

let newsfeed = [
    {username : 'maria',
        timeline : 'pictures'
    },
    {username : 'luli',
        timeline : 'recipies'
    },
    {username: 'jeorge',
        timeline: 'jobs'
    }
]

console.log(newsfeed[1].username)