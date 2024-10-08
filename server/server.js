const express = require('express')
const app = express()
const { MongoClient , ObjectId} = require('mongodb')
const aws = require('aws-sdk');
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(express.json());
app.use(bodyParser.json()); // JSON 형식의 요청 본문을 파싱
app.use(bodyParser.urlencoded({ extended: true })); // URL-encoded 형식의 요청 본문을 파싱


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
    console.log(req.query.file);

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



app.post('/upload', async (req, res) => {
    const data = req.body;
    // console.log('Received data:', data);

    if (!data) {
        return res.status(400).send('No data received');
    }

    try {
        const result = await db.collection('uploads').insertOne(data);
        console.log('저장 성공');
        // console.log('데이터 저장 성공:', result.ops[0]);
        res.status(200).json({ message: '데이터 저장 성공', id: result.insertedId });
    } catch (err) {
        console.error('데이터 저장 실패:', err);
        res.status(500).send('데이터 저장 실패');
    }
});


// id를 기반으로 데이터를 검색하는 API 엔드포인트
app.get('/view/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const data = await db.collection('uploads').findOne({ _id: new ObjectId(id) }); 
        if (data) {
            console.log('데이터 조회 성공');
            
            res.status(200).json(data);
        } else {
            res.status(404).send('데이터를 찾을 수 없습니다.');
        }
    } catch (error) {
        console.error('데이터 조회 실패:', error);
        res.status(500).send('데이터 조회 실패');
    }
});