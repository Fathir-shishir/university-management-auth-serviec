import express from 'express'
import usersRouter from './users.controller'
const router = express.Router()

router.post('/create-user', usersRouter.createUser)

export default { router }
