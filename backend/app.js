import express from 'express'
import path from 'path'
import 'dotenv/config'
import connectDB from './database/connectDB.js'
import bookRoutes from './routes/book.routes.js'

const port = process.env.PORT || 5000
const app = express()
const __dirname = path.resolve()


//middleware
app.use(express.json())
app.use('/api/books', bookRoutes)

if (process.env.NODE_ENV == 'production') {
  console.log('getting static files')
  app.use(express.static(path.join(__dirname, '../frontend/dist')))
  app.get('*', (req, res) => {
    res
      .status(200)
      .sendFile(path.resolve(__dirname, '../frontend', 'dist', 'index.html'))
  })
}

const startServer = async () => {
  try {
    await connectDB()
    app.listen(port, () => {
      console.log(`server is listening to port: ${port}`)
    })
  } catch (error) {
    console.log(`Error in startServer: ${error.message}`)
  }
}

startServer()
