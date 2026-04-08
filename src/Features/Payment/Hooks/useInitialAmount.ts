import { amountServices } from "../Services/amount";
import { paymob } from "../Services/paymob";
import { sendcharge } from "../Services/charge";
import { paymobile } from "../Services/payMobile";
export const useInitialAmount = ()=> {
    const Amount:number = 100; 
    const sendAmount =async () => {
        try{
            const response = await amountServices(Amount);
            console.log(Amount);
            
            localStorage.removeItem("publicKey");
            localStorage.removeItem("clientSecret");
            //console.log("ptimary key", response)
            await localStorage.setItem("publicKey", response.data.data.publicKey);
            await localStorage.setItem("clientSecret", response.data.data.clientSecret);
            
            console.log("data of pyment -----------------?",response.data.data);
        }catch(err){
            console.log("exceptions "+ err);  
            alert(err +" eeeeeee");     
        }        
    }
    
    const sendpaymob =async(userDetails : object)=>{
        try{
            const response = await paymob(userDetails);
            console.log(response.data);
            localStorage.setItem("masked_pan", response.data.masked_pan);
            localStorage.setItem("paymentMethods list", response.data.token);
        } catch(err){
            console.log("try catch", err);
        }
    }

    const sendingcharge = async()=> {
        const chargeData =   
                {
                    paymentKey : localStorage.getItem("paymentKey")?.toString(),
                    token : localStorage.getItem("tokenpayment")?.toString(),
                    masked_pan : localStorage.getItem("masked_pan")?.toString() 
                }
                //const jsonPayload = JSON.parse(JSON.stringify(chargeData));
                console.log(chargeData);
            try{
                const response = await sendcharge(
                    {
                        "paymentKey":chargeData.paymentKey,
                        "token" : chargeData.token,
                        "maskedPan" : chargeData.masked_pan
                    }
                )
               // window.location.href = response.data.redirection_url;
                const url = response.data.details.redirection_url;
                window.open(url, "_blank");
                console.log(response.data);
                
            }catch(err){
                console.log(err);
                
            }
    }

    const sendWallet = async(data:object) => {
        try{
             
        const response =await paymobile(data);
        console.log( response.data);
        
        const url = response.data.redirectUrl;
        window.open(url, "_blank");
        
        }catch(err){
            console.log(err);
            
        }
    }
    return {sendAmount , sendpaymob, sendingcharge , sendWallet}
}
