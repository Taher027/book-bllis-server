import { NextFunction, Request, Response } from 'express'
import status from 'http-status'

const notFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(status.NOT_FOUND).json({
    success: false,
    message: 'Api not Found!',
    erro: '',
  })
}
export default notFound
