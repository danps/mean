import './src/config/db'
import { server } from './src/config/server'
import { UserModel } from './src/models/user'

server.get('/users', async (req, res) => {
  try {
    const users = await UserModel.find()
    res.send(users)
  } catch (error) {
    res.send(500, error)
  }
})


server.start(() => console.log('Started server'))