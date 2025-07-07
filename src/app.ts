import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'
import router from './app/routes'
import notFound from './app/middlewares/notFound'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
const app: Application = express()

// parser
app.use(express.json())

app.use(cors())

// app routers
app.use('/api/v1', router)
app.get('/api/v1', (req: Request, res: Response) => {
  res.send('Your server is running well!')
})

app.use(globalErrorHandler)
// not found route
app.use(notFound)

export default app
