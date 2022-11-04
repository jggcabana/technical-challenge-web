import { Product } from "./product";

export interface Quote {
    id?: number,
    amountRequired?: number,
    term?: number,
    title?: string,
    firstName?: string,
    lastName?: string,
    dateOfBirth?: Date,
    mobile?: string,
    email?: string,
    isApplied?: boolean,
    product? : Product,
    repayment? : number,
    establishmentFee? : number,
    interestAmount? : number,
    paymentPeriods? : number
  };

export interface CalculateQuoteResponse{
    repayment: number,
    establishmentFee: number,
    paymentPeriods: number,
    totalRepayments: number
}
