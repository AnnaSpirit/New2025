const fs = require('fs');

// console.log('before');
// try {
//     const data = fs.readFileSync('users','utf-8');
//     console.log(data);
// } catch (error) {
//     console.log(error);
// }

// fs.readFile("user", "utf-8", (err, data) => {
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(data);
// })
// console.log('after');

// const users = [
//     {id: 1, name:'aaa'},
//     {id: 2, name:'bbb'},
// ]

// fs.writeFile("users.json", JSON.stringify(users), 'utf-8', (err) => {
//     if(err) console.log(err);
// })

fs.appendFile("users", "\tdan", 'utf-8', (err)=>{
    if(err) console.log(err);
})

fs.copyFile("users", 'users_copy',(err)=>{})