import { expect, test } from 'vitest'
import { Appointment } from './appointment'
import { getFutureDate } from '../tests/utils/get-future-date'

test('create an appointment', () => {
  const startsAt = getFutureDate('2024-01-26')
  const endsAt = getFutureDate('2024-01-27')

  const appointment = new Appointment({
    customer: 'John Doe',
    startsAt,
    endsAt,
  })

  expect(appointment).toBeInstanceOf(Appointment)
  expect(appointment.customer).toEqual('John Doe')

})

test('Cannot create an appointment with end date before start date', () => {
  const startsAt = getFutureDate('2024-01-26')
  const endsAt = getFutureDate('2024-01-25')

  expect(() => {
    return new Appointment({
      customer: 'John Doe',
      startsAt,
      endsAt
    })
  }).toThrow()

})


test('Cannot create an appointment with start dte before now', () => {

  const startsAt = new Date()
  const endsAt = new Date()

  startsAt.setDate(startsAt.getDate() - 1)
  endsAt.setDate(endsAt.getDate() + 3)

  expect(() => {
    return new Appointment({
      customer: 'John Doe',
      startsAt,
      endsAt
    })
  }).toThrow()

})