export type Characteristics = {
    speed: number
    force: number
    engineAmperage: number
}

export interface ITrains{
    name: string
    description: string
    characteristics: [Characteristics]
}
