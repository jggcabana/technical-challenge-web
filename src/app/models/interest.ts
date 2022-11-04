export interface Interest {
    id: number,
    name: string,
    description: string,
    rate: number,
    durationMin?: number,
    durationMax?: number,
    startFromNMonth?: number
}