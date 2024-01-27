import { describe, expect, it } from "vitest";

import { CreateAppointment } from "./create-appointment";
import { Appointment } from "../entities/appointment";
import { getFutureDate } from "../tests/utils/get-future-date";

describe('Create Appointment', ()=> {
  it('Should be able to create an appointment', () => {

    // sut = system under test
    const sut = new CreateAppointment()

    const startsAt = getFutureDate('2024-01-26')
    const endsAt = getFutureDate('2024-01-27')

    endsAt.setDate(endsAt.getDate() + 1)

    expect(sut.execute({
      customer: 'John Doe',
      startsAt,
      endsAt,
    })).resolves.toBeInstanceOf(Appointment)

  })
  
})