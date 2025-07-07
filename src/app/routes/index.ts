import { Router } from 'express'
import { productRoutes } from '../modules/product/productRoutes'
const router = Router()
const moduleRoutes = [
  {
    path: '/product',
    route: productRoutes,
  },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))
export default router
