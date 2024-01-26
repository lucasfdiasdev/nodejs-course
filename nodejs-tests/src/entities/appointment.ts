export interface AppointmentProps {
  customer: string // clientes
  startsAt: Date // entrada de agendamento
  endsAt: Date // saida de agendamento
}

export class Appointment {
  private props: AppointmentProps

  get customer () {
    return this.props.customer
  }

  get startsAt () {
    return this.props.startsAt
  }
  
  get endsAt () {
    return this.props.endsAt
  }

  constructor(props: AppointmentProps) {
    this.props = props
  }

}