import {getRepository} from 'typeorm'
import {Holiday} from '../entity/holiday'
import {Request, Response} from 'express'

export const getHolidays = async (request: Request, response: Response) => {
  const holidays = await getRepository(Holiday).find()

  return response.json(holidays)
}

export const getHoliday = async (request: Request, response: Response) => {
  const holiday = await getRepository(Holiday).findOne(request.query)

  return response.json(holiday)
}

export const saveHoliday = async (request: Request, response: Response) => {
  const holiday = await getRepository(Holiday).save(request.body)
  
  return response.json(holiday)
}

export const updateHoliday = async (request: Request, response: Response) => {
  const {id} = request.params
  const body = request.body
  const holiday = await getRepository(Holiday).update(id, body)

  if(holiday.affected === 1) {
    const holidayUpdated = await getRepository(Holiday).findOne(id)

    return response.json(holidayUpdated)
  }
  
  return response.status(404).json({message: "Holiday not found!"})
}

export const removeHoliday = async (request: Request, response: Response) => {
  const {id} = request.params
  const holiday = await getRepository(Holiday).delete(id)

  if(holiday.affected === 1) {
    const holidayRemoved = await getRepository(Holiday).findOne(id)

    return response.json({message: 'Holiday removed!'})
  }
  
  return response.status(404).json({message: "Holiday not found!"})
}