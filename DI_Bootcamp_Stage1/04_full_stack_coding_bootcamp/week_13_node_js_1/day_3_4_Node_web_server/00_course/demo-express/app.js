const express = require('express')
const app = express()

app.listen(5000, () => {
    console.log('server is listening on port 5000')
})

app.get('/api/products', (req, res) => {
    res.json([
        { name: 'iPhone', price: 800 },
        { name: 'iPad', price: 650 },
        { name: 'iWatch', price: 750 }
    ])
});

/*
$ npx nodemon app.js
[nodemon] 3.1.10
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node app.js`
server is listening on port 5000
[nodemon] restarting due to changes...
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
server is listening on port 5000

GO ON http://localhost:5000/api/products 

*/
