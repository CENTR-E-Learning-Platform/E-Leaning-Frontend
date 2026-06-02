const API_BASE_URL = "https://localhost:7251";
const INITIAL_AMOUNT_API = `${API_BASE_URL}/api/StudentPayment/GetClientSecret`;
const PAYMOB_API = "https://accept.paymob.com/api/acceptance/tokenization?payment_token=";
const CHARGE_API = `${API_BASE_URL}/api/PaymobPayment/charge`;
const MOBILE_API = `${API_BASE_URL}/api/PaymobPayment/wallet`;
const PAYEMENT_WALLET_API = `${API_BASE_URL}/api/StudentPayment/PayWithWallet`;
export { INITIAL_AMOUNT_API, PAYMOB_API, CHARGE_API, MOBILE_API, PAYEMENT_WALLET_API };