import {Router, Request, Response} from 'express'
import { getHoliday, getHolidays, saveHoliday, updateHoliday, removeHoliday } from './controller/holidays'

const routes = Router()

routes.get('/', (request: Request, response: Response) => {
  return response.json({message: 'Hello World!!'})
})

routes.get('/holidays', getHolidays)
routes.get('/holiday/?', getHoliday)
routes.post('/holiday', saveHoliday)
routes.put('/holiday/:id', updateHoliday)
routes.delete('/holiday/:id', removeHoliday)

export default routes