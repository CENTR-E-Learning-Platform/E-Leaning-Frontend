import { BASE_URL } from "../../../APIs/APIs";

const INITIAL_AMOUNT_API = `${BASE_URL}/api/StudentPayment/GetClientSecret`;
const PAYMOB_API = "https://accept.paymob.com/api/acceptance/tokenization?payment_token=";
const CHARGE_API = `${BASE_URL}/api/PaymobPayment/charge`;
const MOBILE_API = `${BASE_URL}/api/PaymobPayment/wallet`;
const PAYEMENT_WALLET_API = `${BASE_URL}/api/StudentPayment/PayWithWallet`;
export { INITIAL_AMOUNT_API, PAYMOB_API, CHARGE_API, MOBILE_API, PAYEMENT_WALLET_API };