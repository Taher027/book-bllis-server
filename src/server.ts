import mongoose from 'mongoose'
import config from './app/config'
import app from './app'
async function main() {
  try {
    mongoose.connect(config.db_url as string)
    console.log('Database connected successfully')
    app.listen(config.port, () => {
      console.log(`Server running on port ${process.env.PORT}`)
    })
  } catch (error) {
    console.log(error)
  }
}
main()
