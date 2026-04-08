interface dataWallet {
    walletNumber:string,
    paymentMethod:number,
    walletIssuer:number
}

const initialValues: dataWallet =  {
    walletNumber: "",
    paymentMethod:0,
    walletIssuer: 0
}

export {initialValues}