import { Interest } from "./interest";

export interface Product {
    id: number,
    name?: string,
    interestId?: number,
    description?: number,
    interest?: Interest
}