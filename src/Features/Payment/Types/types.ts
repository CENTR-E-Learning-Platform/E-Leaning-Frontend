// types/payment.ts
export interface CardFormData {
  cardNumber: string;
  expiryDate: string;
  cvc: string;
  saveCard: boolean;
}
export interface mobileData {
  amount:number,
  mobileNumber:string
}