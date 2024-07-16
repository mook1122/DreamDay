const express = require('express')
const app = express()
const { MongoClient } = require('mongodb')
const aws = require('aws-sdk');
require('dotenv').config();
const cors = require('cors');
app.use(cors());

app.listen(8080, () => {
    console.log('http://localhost:8080 에서 서버 실행중')
})


let db
const url = process.env.DB_KEY

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



app.get('/api/post/image', async (req, res) => {
    try {
        aws.config.update({
            accessKeyId: process.env.ACCESS_KEY,
            secretAccessKey: process.env.SECRET_KEY,
            region: process.env.REGION,
            signatureVersion: 'v4',
        });

        const s3 = new aws.S3();
        const url = await s3.createPresignedPost({
            Bucket: process.env.BUCKET_NAME,
            Fields: { key: req.query.file },
            Expires: 60, // seconds
            Conditions: [
                ['content-length-range', 0, 1048576], // 파일 용량 1MB 까지 제한
            ],
        });

        res.status(200).json(url);
    } catch (error) {
        console.error('Error creating presigned URL:', error);
        res.status(500).json({ error: 'Error creating presigned URL' });
    }
});