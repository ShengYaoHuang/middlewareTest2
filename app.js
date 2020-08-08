const express = require('express')
const app = express()
const port = 3000

// 2019-5-17 18:51:12 | GET from / | total time: 8ms
app.use((req, res, next) => {
  const newDate = new Date().toLocaleString()
  const startTime = new Date().getTime()
  res.on("finish", () => {
    const endTime = new Date().getTime()
    const costTime = endTime - startTime
    console.log(`${newDate} | ${req.method} from ${req.url} | total time: ${costTime}ms`)
  })
  next()
})

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})