require('dotenv').config();
const twilio = require('twilio');

const client = new twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
);

const sendSms = async( phone, message )=>{
    try{
        const response = await client.messages.create({
            body: message,
            from: process.env.TWILIO_PHONE_NUMBER,
            to: phone
        });
        return response;
    }catch(error){
        throw new Error(error.message);
    }
};

module.exports = { sendSms };