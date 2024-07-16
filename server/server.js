const express = require('express')
const app = express()
const { MongoClient } = require('mongodb')


app.listen(8080, () => {
    console.log('http://localhost:8080 에서 서버 실행중')
})


let db
const url = 'mongodb+srv://skdo223:apsode1@cluster0.udjmfja.mongodb.net/?retryWrites=true&w=majority'
new MongoClient(url).connect().then((client) => {
    console.log('DB연결성공')
    db = client.db('dreamday')
}).catch((err) => {
    console.log(err)
})

// app.get('/', () => {
//     db.collection('post').insertOne({ title: '어쩌구' })
// })

app.get('/', (요청, 응답) => {
    응답.send('반갑다')
})
