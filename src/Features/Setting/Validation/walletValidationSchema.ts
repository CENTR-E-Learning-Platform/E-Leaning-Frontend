import * as Yup from 'yup';


const phoneRegExp = /^01[0125][0-9]{8}$/;

export const walletValidationSchema = Yup.object().shape({
    walletNumber: Yup.string()
        .required('Phone number is required')
        .matches(phoneRegExp, 'Invalid phone number (must be 11 digits and start with 010, 011, 012, or 015)'),
});