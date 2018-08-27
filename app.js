const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World! \n This is a sample NodeJS application.'))

app.listen(80, () => console.log('Example app listening on port 80!'))
